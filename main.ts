namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
b b b b b b b b 
e e e b b b b b 
b b b b b b b b 
b b b b b e e e 
b b b b b b b b 
b b e e e e e b 
b b b b b b b b 
b e e b b b e b 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
b e d 8 8 8 8 8 
b e d 8 8 8 8 8 
b e d 8 8 8 8 8 
b e d 8 8 8 8 8 
b e d 8 8 8 8 8 
b e d 8 8 8 8 8 
b e d 8 8 8 8 8 
b e d 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
8 8 8 8 8 d e b 
8 8 8 8 8 d e b 
8 8 8 8 8 d e b 
8 8 8 8 8 d e b 
8 8 8 8 8 d e b 
8 8 8 8 8 d e b 
8 8 8 8 8 d e b 
8 8 8 8 8 d e b 
`
}
let mySprite = sprites.create(img`
. . . . . . . . 
. . . 1 1 . . . 
. . 1 1 1 1 . . 
3 4 1 1 1 1 4 3 
3 4 4 1 1 4 4 3 
. . 4 1 1 4 . . 
. . 1 1 1 1 . . 
. . . . . . . . 
`, SpriteKind.Player)
let octopus = sprites.create(img`
. d d d d . . . . . . . d d d d d d . . . . . . . . . d d d . . 
d d d . . . . . . . . d d d d d d d d d . . . . . d d d d d d . 
d d . . . . . . . . d d d d . . . . . d d . . . . d d . . . d d 
d d . . . . . . . . d d d . . . . . . . . . . . d d d . . . d d 
d d . d . . . . . . d d d . . . . . . . . . . d d d d . . . . d 
d d d . . . . . . . d d d d . . . . . . . . d d d d d . . . . . 
d d d d . . . . . . d d d 8 8 8 8 8 d d . . d d d d . . . . . . 
. d d d d . . . . . . 8 8 d d d d d d d d d d d d . . . . . . . 
. . d d d d d d d . 8 d d d d d d d d d d d d d d . . . . . . . 
. . . d d d d d d 8 d d d d d d d d d d d d d d . . . . . . . . 
. . . . . d d d d 8 d d d d d d d d d d d d d d . . . . . d d . 
. . . . . . d d 8 d d d d d d d d d d d d d d d d . d d d d d d 
. . . . . . . . 8 d d d d d d d d d d d d d d d d d d d d d d d 
. . . . . . . . d d d d d d d d d d d d d d d d d d d d d . d d 
. . . . . . . . d d d d d d d d d d d d d d d d d d d . . . d d 
. . . . . . . . d d d d d d d d d d d d d d d d d . . . . . . d 
. . . . . . . d d d d d d d d d d d d d d d d d 1 . . . . d d d 
. . . . . . d d d d d d d d d d d d d d d d d d 1 . . . . d d . 
. . . . d d d d d d d d d d d d d d d d d d d 1 d . . . . d . . 
. . d d d d d d d d d d d d d d d d d d d d d 1 d d d . . . . . 
. d d d d d d d d d d d d d d d d d d d d d d d d d d . . . . . 
d d d d d . . . . . d d d d d d d d d d 1 1 . d d d d d . . . . 
d d d d . . . . . d d d d d d d d 1 1 1 d d . . . d d d d . . . 
d d d . . . . . . d d d d d . . . d d d d d . . . d d d d . . . 
d d d . . . . . . d d d . . . . . . d d d d . . . . . d d d . . 
d d d . . . . . . d d d . . . . . . . d d d d . . . . d d d . . 
d d d . . . . . d d d . . . . . . . . . d d d . . . . d d d d . 
d d . . . . . . d d d . . . . . . . . . d d d . . . . . d d d . 
d d . . . . . . d d d . . . . . . . . . . d d d . . . . . d d d 
d d . . . . . . d d d . . . . . . . . d . . d d . . . . . . d d 
d d d . . . . . . d d . . . . . . . . d d d d d . . . . . . d d 
. d d . . . . . . . d d d . . . . . . . d d d . . . . . . d . . 
`, SpriteKind.Enemy)
let shark = sprites.create(img`
. . . . 8 d d . 
. . . 8 d d . . 
. . 8 d 1 . . . 
. 8 d d 1 . . . 
. 8 d d d 1 . . 
. d d d d d 1 . 
7 d d d d d d 7 
. 7 7 7 7 7 7 . 
`, SpriteKind.Enemy)
let coin = sprites.create(img`
. . 4 4 4 4 . . 
. 4 5 5 5 5 4 . 
4 5 5 4 5 5 5 4 
4 5 5 4 5 5 5 4 
4 5 5 4 5 5 5 4 
4 5 5 4 5 5 5 4 
. 4 5 5 5 5 4 . 
. . 4 4 4 4 . . 
`, SpriteKind.Food)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`2000200001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102030303030303030303030303030301010101010101010101010101010101010203030303030303030303030303030101010101010101010101010101010101020303040101010101010101010101010101010101010101010101010101010102030304010101010101010101010101010101010101010101010101010101010203030401010101010101010101010101010101010101010101010101010101020303040101010101010101010101010101010101010101010101010101010102030304010101010101010101010101010101010101010101010101010101010203030401010101010101010101010101010101010101010101010101010101020303040101010101010101010101010101010101010101010101010101010102030304010101010101010101010101010101010101010101010101010101010203030401010101010101010101010101010101010101010101010101010101020303040101010101010101010101010101010101010101010101010101010102030304010101010101010101010101010101010101010101010101010101010203030401010101010101010101010101010101010101010101010101010101020303040101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5],
            TileScale.Eight
        ))
