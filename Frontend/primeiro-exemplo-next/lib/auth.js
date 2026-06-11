export function setToken(token) {
  document.cookie = `token=${token}; path=/; max-age=${8 * 60 * 60}; SameSite=Strict`
}

export function removeToken() {
  document.cookie = "token=; path=/; max-age=0"
}

export function getToken() {
  if (typeof document === "undefined") return null

  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))

  return cookie ? cookie.split("=")[1] : null
}

export function isAuthenticated() {
  return !!getToken()
}