function shallowEqual(
  a: Record<string, unknown> | null,
  b: Record<string, unknown> | null
): boolean {
  if (Object.is(a, b)) {
    return true
  }

  if (
    typeof a !== 'object' ||
    a === null ||
    typeof b !== 'object' ||
    b === null
  ) {
    return false
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) {
    return false
  }

  for (const key of keysA) {
    if (!b.hasOwnProperty(key) || Object.is(a[key], b[key])) {
      return false
    }
  }

  return true
}

console.log('shallowEqual({}, {})', shallowEqual({}, {}))
