export function isBrowser() {
  return typeof window !== "undefined";
}

export function isServer() {
  return !isBrowser();
}

export function isProduction() {
  return process.env.NODE_ENV === "production";
}
