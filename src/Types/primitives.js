// @flow

/*
** Booleans
*/
const acceptsBoolean = (value: boolean) => value

acceptsBoolean(true)
acceptsBoolean(false)
if (24) {} // 24 => true
if("") {} /// "" => false

// Error
// acceptsBoolean("foo")
// Error
// acceptsBoolean(0)
// Error
// acceptsBoolean(Boolean(0))

acceptsBoolean(!!0)

/* ***************************************** */

/*
** Numbers
*/
const acceptsNumber = (value: number) => value
acceptsNumber(43)
acceptsNumber(3.14)
acceptsNumber(NaN)
acceptsNumber(Infinity)

// Error
// acceptsNumber("foo")

/* ***************************************** */

/*
** Strings
*/
const acceptsString  = (value: string) => value

acceptsString("foo")

// Error
// acceptsString(false)

"foo" + 42
"foo" + "foo"
// "foo" + {} // Error
// "foo" + [] // Error

// Convert other types into string
"foo" + String({})
"foo" + [].toString()
"" + JSON.stringify({})

/* ***************************************** */

/*
** Null & Void
*/

const acceptsNull = (value: null) => value

const acceptsUndefined = (value: void) => value

acceptsNull(null)
// acceptsNull(undefined) // Error
// acceptsUndefined(null) // Error
acceptsUndefined(undefined)

/* ***************************************** */

/*
** Maybe types
*/

const acceptsMaybeString = (value: ?string) => value

acceptsMaybeString("bar")
acceptsMaybeString(undefined)
acceptsMaybeString(null)
acceptsMaybeString()

/* ***************************************** */

/*
** Optional object properties
*/

const acceptsObject = (value: { foo?: string }) => value
acceptsObject({ foo: "bar" })
acceptsObject({foo: undefined })
// acceptsObject({ foo: null }) // Error
acceptsObject({})

/* ***************************************** */

/*
** Optional function parameters
*/

const acceptsOptionalString = (value?: string) => value

acceptsOptionalString("bar")
acceptsOptionalString(undefined)
// acceptsOptionalString(null) // Errors
acceptsOptionalString()

/* ***************************************** */

/*
** Function parameters with default
*/

const acceptsOptionalStringByDefault = (value: string = "default") => {
  return value
}

acceptsOptionalStringByDefault("bar")
acceptsOptionalStringByDefault(undefined)
// acceptsOptionalStringByDefault(null) // Error
acceptsOptionalStringByDefault()
