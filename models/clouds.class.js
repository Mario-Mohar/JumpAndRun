class Clouds extends MoveableObject {

    height = 200;
    width = 300;
    x = Math.random() * 500;
    y = 50;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

    }

}