// @flow

function concat (a,b) {
  return a + b
}

concat("A", "B")

concat(1, 2)

function concat2 (a: string, b: string) {
  return a + b
}

concat2("A", "b")
// Error
// concat2(2, 2)
