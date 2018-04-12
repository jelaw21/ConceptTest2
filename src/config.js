import Boot from './scenes/boot'
import Preload from './scenes/preload'
import Game from './scenes/game'

export default {
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 'rgb(0, 0, 0)',
    scene: [ Boot, Preload, Game ]
}

