const DEFAULT_SITE_URL = "https://lovequest-shindan.vercel.app";

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? DEFAULT_SITE_URL;

export function getCanonicalCurrentUrl() {
  if (typeof window === "undefined") {
    return SITE_URL;
  }

  const { pathname, search, hash } = window.location;
  return `${SITE_URL}${pathname}${search}${hash}`;
}

export function buildXShareUrl(text: string, url = getCanonicalCurrentUrl()) {
  const params = new URLSearchParams({
    text,
    url
  });

  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function buildThreadsShareUrl(text: string, url = getCanonicalCurrentUrl()) {
  const params = new URLSearchParams({
    text: `${text}\n${url}`
  });

  return `https://www.threads.net/intent/post?${params.toString()}`;
}

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return null;
  }

  const withProtocol = value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;

  try {
    return new URL(withProtocol).origin.replace(/\/$/, "");
  } catch {
    return null;
  }
}
