controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . d d 2 2 2 2 2 2 2 d d . . . 
        . . d f 2 2 9 9 9 2 2 f d . . . 
        . . d f f d d d d d f f d . . . 
        . . d d d d d d d d d d d . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . d . 2 2 2 2 . . . . . . 
        . . . . d d 2 . . 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . f f 2 2 2 2 f f . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 . . 2 2 . . 
        . . . . . . 2 2 . 2 2 2 2 2 . . 
        . . . . . . 2 . . . 2 2 2 . d . 
        . . . 2 2 2 2 2 2 2 2 2 2 d d d 
        . . 2 2 2 f f 2 2 2 2 f f d d d 
        . . . . . f f . . . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . 2 2 . 2 2 2 . . 2 . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 f f 2 2 2 2 f f 2 2 2 . . 
        . d d f f . . . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 . . 2 2 . . 
        . . . . . . 2 2 . 2 2 2 2 2 . . 
        . . . . . . 2 . . . 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 f f 2 2 2 2 f f d d . 
        . . . . . f f . . . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        d 2 2 . 2 2 2 . . 2 . . . . . . 
        d 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        d 2 2 f f 2 2 2 2 f f 2 2 2 . . 
        d d d f f . . . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    music.baDing.play()
    info.changeScoreBy(1)
    if (tiempo > 200) {
        tiempo += -200
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . f 2 2 9 9 9 2 2 f . . . . 
        . . . f f d d . . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d 2 2 d d d . . . . 
        . . . . d d 2 2 2 2 d d . . . . 
        . . . . d d 2 . . 2 d d . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . f f 2 2 2 2 f f . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    music.smallCrash.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
let tiempo = 0
let hero: Sprite = null
scene.setBackgroundImage(assets.image`background`)
hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
tiempo = 5000
forever(function () {
    pause(tiempo)
    clover = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 . . . . 7 7 7 . . . . 
        . 7 7 5 7 7 . . 7 5 5 7 7 . . . 
        . 7 5 5 5 5 7 7 5 5 5 5 7 . . . 
        . 7 7 5 5 5 7 7 5 5 5 5 7 . . . 
        . . 7 7 5 5 5 5 5 5 5 5 7 . . . 
        . . . 7 7 5 7 7 5 7 7 7 . . . . 
        . . 7 7 7 5 7 7 5 5 7 . . . . . 
        . 7 7 5 5 5 5 5 5 5 7 7 7 . . . 
        . 7 5 5 5 5 5 5 5 5 5 7 7 7 . . 
        . 7 5 5 5 5 7 7 7 5 5 5 5 7 7 . 
        . 7 5 5 5 7 7 7 7 7 5 5 5 7 7 . 
        . 7 7 7 7 7 . 7 . 7 7 7 7 7 . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        . . . . . . 9 9 9 9 9 5 f . . . 
        . . . 5 f 5 9 9 9 9 9 5 f 5 . . 
        . . 5 9 9 5 9 9 9 9 9 5 f 5 . . 
        . . 5 9 f 5 f 5 f 5 f 5 f 5 . . 
        . . 5 5 f 5 f 5 f 5 f 5 f 5 . . 
        . . 5 5 f 5 f 5 f 5 f 5 f 5 . . 
        . . . 5 f 5 f 5 f 5 f 5 f 5 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
