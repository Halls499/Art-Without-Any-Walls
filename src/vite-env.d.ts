/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LUMI_PROJECT_ID: string
  readonly VITE_LUMI_API_BASE_URL: string
  readonly VITE_LUMI_AUTH_ORIGIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
