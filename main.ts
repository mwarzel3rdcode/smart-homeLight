let noise = 0
let light2 = 0
basic.showIcon(IconNames.Yes)
OLED.clear()
OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P4)
    noise = smarthome.ReadNoise(AnalogPin.P2)
    OLED.clear()
    OLED.writeStringNewLine("light")
    OLED.writeNumNewLine(light2)
    OLED.writeStringNewLine("sound")
    OLED.writeNumNewLine(noise)
    basic.pause(1000)
    if (light2 < 45 && noise > 55) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(5000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
