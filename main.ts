input.onButtonPressed(Button.A, function () {
    estat_de_LEDs(1000)
    repeticio_LEDs(5, 200)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
function repeticio_LEDs (repeticions: number, temps: number) {
    for (let index = 0; index < repeticions; index++) {
        estat_de_LEDs(1)
        basic.pause(temps)
    }
}
function estat_de_LEDs (temps: number) {
    for (let index_y = 0; index_y <= 4; index_y++) {
        for (let index_x = 0; index_x <= 4; index_x++) {
            led.toggle(index_x, index_y)
        }
        basic.pause(temps)
    }
}
input.onButtonPressed(Button.B, function () {
    for (let index_y = 0; index_y <= 4; index_y++) {
        for (let index_x = 0; index_x <= 4; index_x++) {
            led.unplot(index_x, Math.map(index_y, 0, 4, 4, 0))
        }
        basic.pause(1000)
    }
    for (let index = 0; index < 5; index++) {
        for (let index_y = 0; index_y <= 4; index_y++) {
            for (let index_x = 0; index_x <= 4; index_x++) {
                led.toggle(index_x, index_y)
            }
        }
        basic.pause(200)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
})
estat_de_LEDs(1)
