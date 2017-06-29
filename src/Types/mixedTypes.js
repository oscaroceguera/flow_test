// @flow

// A single type
const square = (n: number) => n * n

const stringify = (value: mixed) => value

stringify("foo")
stringify(3.14)
stringify(null)
stringify({})

const stringify2 = (value: mixed) => {
  if (typeof value === 'string') {
    return "" + value
  } else {
    return ""
  }
}

stringify2("foo")
