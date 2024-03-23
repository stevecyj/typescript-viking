myLib.version

export function isString(value: any) {
  return typeof value === "string" || value instanceof String
}

export function isNumber(value: any) {
  return typeof value === "number" && isFinite(value)
}

export function isArray(value: any) {
  return value && typeof value === "object" && value.constructor === Array
}

export function copyArray(value: any) {
  return [...value]
}
