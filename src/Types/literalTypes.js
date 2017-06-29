// @flow

const acceptsTwo = (value: 2) => value
acceptsTwo(2)
// acceptsTwo(3) // Error
// acceptsTwo("2") // Error

const getcolor = (name: "success" | "warning" | "danger") => {
  switch (name) {
    case "success": return 'green'
    case "warning": return 'yellow'
    case "danger": return 'red'
  }
}

getcolor("success")
getcolor("warning")
getcolor("danger")
// getcolor("error") // Error
