class Chickens extends MoveableObject {

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = Math.floor(Math.random() * 1000); // Random x position
    }

}