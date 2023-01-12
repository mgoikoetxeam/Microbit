input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Happy)
