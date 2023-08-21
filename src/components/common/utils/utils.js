export function isNotEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

export function isEmptyObject(value) {
  if (typeof value !== "object" || value === null) {
    return false; // value is not an object
  }

  return Object.keys(value).length === 0;
}
