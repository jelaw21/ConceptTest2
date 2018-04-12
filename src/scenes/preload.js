export default class PreloadScene extends Phaser.Scene{

    constructor(config){
        super({key: 'Preload', files:[{type: 'image', key: 'logo', url: 'assets/images/gwkLogo.png'}, {type:'image', key:'logoBar', url: 'assets/images/gwkPreloadBar.png'}]});

    }

    preload(){


        let logo = this.add.image(game.config.width/2, (game.config.height/2)-125, 'logo').setScale(.6);
        let barLogo = this.add.image(game.config.width/2-logo.displayWidth/2, (game.config.height/2)+75, 'logoBar').setOrigin(0,0);
        let barCover = this.add.graphics();

        this.load.on('progress', function (value){

            barCover.clear();
            barCover.fillStyle(0x000000, 1);
            barCover.fillRect(barLogo.x + (barLogo.displayWidth * value), barLogo.y, barLogo.displayWidth*(1-value), barLogo.displayHeight);

        });

        this.load.on('complete', function(){
            //progress.destroy();
        });

        this.load.spritesheet('playerE', 'assets/images/BODY_EAST.png', {frameWidth: 64, frameHeight:64});
        this.load.spritesheet('playerW', 'assets/images/BODY_WEST.png', {frameWidth: 64, frameHeight:64});
        this.load.spritesheet('playerN', 'assets/images/BODY_NORTH.png', {frameWidth: 64, frameHeight:64});
        this.load.spritesheet('playerS', 'assets/images/BODY_SOUTH.png', {frameWidth: 64, frameHeight:64});
        this.load.image('gui', 'assets/images/panel_brown.png');
        this.load.image('ProjectUtumno_full', 'assets/images/ProjectUtumno_full.png');
        this.load.image('townTiles1', 'assets/images/town.png');
        this.load.image('backgroundTiles2', 'assets/images/trees_plants.png');
        this.load.image('backgroundTiles1', 'assets/images/trees_plants_rocks.png');
        this.load.image('title', 'assets/images/title.png');
        this.load.tilemapTiledJSON('forest', 'assets/tilemaps/forest.json');
        this.load.tilemapTiledJSON('town', 'assets/tilemaps/town.json');
        this.load.image('button', 'assets/images/buttonLong_blue.png');
        this.load.image('buttonPressed', 'assets/images/buttonLong_blue_pressed.png');
    }

    create(){
        this.time.delayedCall(3000, this.callMenu, [], this);

    }

    callMenu(){
        this.scene.start('MainMenu');
    };

}

