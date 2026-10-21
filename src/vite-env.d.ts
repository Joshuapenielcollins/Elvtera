/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY?: string;
  readonly VITE_SALES_EMAIL?: string;
  readonly VITE_GENERAL_EMAIL?: string;
  readonly VITE_CALENDLY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
