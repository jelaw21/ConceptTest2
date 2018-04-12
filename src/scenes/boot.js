import 'phaser'

export default class Boot extends Phaser.Scene {
    constructor() {
        super('boot')
    }

    preload() {}

    create() {
        this.scene.start('Preload')
    }
}

