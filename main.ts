let d = 0
basic.forever(function () {
    d = input.compassHeading()
    if (Math.abs(d - 45) <= 22) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Math.abs(d - 90) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
    } else if (Math.abs(d - 135) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (Math.abs(d - 180) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Math.abs(d - 225) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    } else if (Math.abs(d - 270) <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
    } else if (Math.abs(d - 315) <= 22) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
