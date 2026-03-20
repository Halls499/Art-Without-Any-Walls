import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vitePrerenderPlugin } from "vite-prerender-plugin"
import path from "node:path"
import { fileURLToPath } from 'node:url'

// Configuração para suportar __dirname em ambientes ESM (Node.js moderno)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let build: UserConfig['build'] = {}
  let esbuild: UserConfig['esbuild'] = {}
  let define: UserConfig['define'] = {}

  // Configurações específicas para o modo de desenvolvimento
  if (mode === 'development') {
    build = {
      minify: false,
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    }

    esbuild = {
      keepNames: true,
      minifyIdentifiers: false,
    }

    define = {
      'process.env.NODE_ENV': '"development"',
      '__DEV__': 'true',
    }
  }

  return {
    plugins: [
      react(),
      // Garante que o script de pré-renderização seja encontrado corretamente
      vitePrerenderPlugin({
        renderTarget: '#root',
        prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
      }),
    ],
    build,
    esbuild,
    define,
    resolve: {
      alias: {
        // CORREÇÃO: Usa o caminho absoluto para evitar erros de importação com '@'
        '@': path.resolve(__dirname, './src'),
      }
    },
    optimizeDeps: {
      // Inclui lucide-react para garantir que os ícones sejam pré-processados corretamente
      include: ['lucide-react'],
    },
  }
})