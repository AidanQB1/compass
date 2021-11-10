let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    }
    if (degrees < 135) {
        basic.showString("E")
    }
    if (degrees < 225) {
        basic.showString("S")
    }
    if (degrees < 315) {
        basic.showString("W")
    }
    basic.showString("W")
})
