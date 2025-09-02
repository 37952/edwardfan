namespace SpriteKind {
    export const Large = SpriteKind.create()
    export const medium = SpriteKind.create()
    export const mini = SpriteKind.create()
}
function create_medium (largeball: Sprite, goleft: boolean) {
    mySprite2 = sprites.create(img`
        . . . . . . . . 
        . 2 2 2 2 2 . . 
        2 2 2 2 2 2 2 . 
        2 2 9 9 9 2 2 . 
        2 2 9 9 9 2 2 . 
        2 2 9 9 9 2 2 . 
        2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 . . 
        `, SpriteKind.medium)
    mySprite2.setPosition(largeball.x, largeball.y)
    mySprite2.setBounceOnWall(true)
    mySprite2.ay = 120
    mySprite2.vx = 50
    if (goleft) {
        mySprite2.vx = -49
    } else {
        mySprite2.vx = 50
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.mini, function (sprite, otherSprite) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    list = sprites.allOfKind(SpriteKind.Projectile)
    for (let value of list) {
        sprites.destroy(projectile, effects.spray, 500)
    }
    projectile = sprites.createProjectileFromSprite(img`
        .2.
        .2.
        .2.
        .2.
        .2.
        .2.
        .2.
        .2.
        .2.
        .2.
        .2.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        .1.
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        111
        `, mySprite, 0, -200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.mini, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(3)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.medium, function (sprite, otherSprite) {
    create_mini(otherSprite, true)
    create_mini(otherSprite, false)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(2)
})
function create_mini (mediumball: Sprite, goleft: boolean) {
    mySprite2 = sprites.create(img`
        2 2 2 2 
        2 9 6 2 
        2 6 9 2 
        2 2 2 2 
        `, SpriteKind.mini)
    mySprite2.setPosition(mediumball.x, mediumball.y)
    mySprite2.setBounceOnWall(true)
    mySprite2.ay = 120
    mySprite2.vx = 50
    if (goleft) {
        mySprite2.vx = -49
    } else {
        mySprite2.vx = 50
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Large, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Large, function (sprite, otherSprite) {
    create_medium(otherSprite, true)
    create_medium(otherSprite, false)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.medium, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let list: Sprite[] = []
let mySprite2: Sprite = null
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
create_large_bubble()
game.onUpdate(function () {
    list = sprites.allOfKind(SpriteKind.Projectile)
    for (let value of list) {
        if (value.top <= 0) {
            value.vy = 0
            value.top = 0
        }
    }
})
