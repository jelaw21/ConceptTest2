export default class PreloadScene extends Phaser.Scene{

    constructor(config){
        super({key: 'Preload', files:[{type: 'image', key: 'logo', url: 'assets/images/gwkLogo.png'}, {type:'image', key:'logoBar', url: 'assets/images/gwkPreloadBar.png'}]});

        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    preload(){
        var logo = this.add.image(this.width/2, this.height/2-125, 'logo').setScale(.6);
        var barLogo = this.add.image(this.width/2- logo.displayWidth/2-50, (this.height/2)+75, 'logoBar').setOrigin(0,0);
        var barCover = this.add.graphics();

        this.load.on('progress', function (value){

            barCover.clear();
            barCover.fillStyle(0x00000, 1);
            barCover.fillRect(barLogo.X + (barLogo.displayWidth * value), barLogo.Y, barLogo.displayWidth*(1-value), barLogo.displayHeight);

        });

        let cam = this.cameras.main;

        cam.setViewport(0, 0, window.innerWidth, window.innerHeight);
        cam.zoom = .7;
        cam.setBackgroundColor(0xffffff);
        //cam.centerToBounds();
        //cam.centerToSize();

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
        //this.scene.start('MainMenu');
    };

}

