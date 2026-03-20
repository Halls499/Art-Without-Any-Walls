React + TypeScript + Vite
Este modelo (template) fornece uma configuração mínima para fazer o React funcionar no Vite com HMR (Hot Module Replacement) e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

@vitejs/plugin-react utiliza Oxc

@vitejs/plugin-react-swc utiliza SWC

React Compiler
O React Compiler está habilitado neste modelo. Consulte esta documentação para mais informações.

Nota: Isso impactará o desempenho do Vite durante o desenvolvimento (dev) e a compilação (build).

Expandindo a configuração do ESLint
Se você estiver desenvolvendo uma aplicação para produção, recomendamos atualizar a configuração para habilitar regras de lint com reconhecimento de tipos:

JavaScript
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
Você também pode instalar eslint-plugin-react-x e eslint-plugin-react-dom para regras de lint específicas do React:

JavaScript
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
