import 'phaser'
import Preload  from './scenes/preload'

const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [
        Preload
    ]
};

let game = new Phaser.Game(config);
