/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {}
}

interface ImportMetaEnv {
  readonly PUBLIC_BLOG_ENABLE_COMMENTS?: string;
  readonly PUBLIC_UTTERANCES_REPO?: string;
  readonly PUBLIC_UTTERANCES_LABEL?: string;
  readonly PUBLIC_UTTERANCES_THEME?: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly PUBLIC_PLAUSIBLE_API?: string;
  readonly PUBLIC_PLAUSIBLE_SCRIPT?: string;
  readonly PUBLIC_PLAUSIBLE_DNT?: string;
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_UMAMI_SCRIPT?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
  readonly PUBLIC_UMAMI_DATA_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
