import { existsSync } from "fs";
import path from "path";

export const DEFAULT_OG_IMAGE = "/ogp/default-ogp.png";

export function resolveOgImage(ogImage?: string) {
  if (!ogImage) {
    return DEFAULT_OG_IMAGE;
  }

  return publicFileExists(ogImage) ? ogImage : DEFAULT_OG_IMAGE;
}

function publicFileExists(publicPath: string) {
  const normalizedPath = publicPath.split(/[?#]/)[0];

  if (!normalizedPath.startsWith("/")) {
    return false;
  }

  const filePath = path.join(process.cwd(), "public", normalizedPath.replace(/^\/+/, ""));
  return existsSync(filePath);
}
