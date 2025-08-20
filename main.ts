namespace SpriteKind {
    export const Large = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 2 . 
        . 4 . 
        . 4 . 
        4 5 4 
        5 5 5 
        5 5 5 
        5 5 5 
        5 . 5 
        `, mySprite, 0, -200)
})
function create_large_bubble () {
    mySprite2 = sprites.create(img`
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 2 2 2 2 2 2 2 1 1 1 2 2 2 . 
        2 2 2 2 2 2 2 2 2 1 1 1 2 2 2 . 
        2 2 2 2 2 2 2 2 2 1 1 1 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Large)
    mySprite2.setPosition(randint(30, 130), 24)
    mySprite2.setBounceOnWall(true)
    mySprite2.ay = 120
    mySprite2.vx = 50
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Large, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . e e e e e . . . . . 
    . . . . . e e d d d e e . . . . 
    . . . . e e d f d f d e e . . . 
    . . . . e d d f d f d d e . . . 
    . . . . e d d d e d d d e . . . 
    . . . . e e d c c c d e e . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . e e d d d d d e e . . . 
    . . . . e e d d d d d e e . . . 
    . . . . e e d d d d d e e . . . 
    . . . . e e d d d d d e e . . . 
    . . . . f e e e e e e e f . . . 
    . . . f f f f e e e f f f f . . 
    . . . f f b f e e e f b f f . . 
    `, SpriteKind.Player)
mySprite.bottom = 120
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 0)
create_large_bubble()
