serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("2000", input.soundLevel())
})
