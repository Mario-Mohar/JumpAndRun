class Character extends MoveableObject {

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');

    }
    
    moveLeft() {
        console.log('move left');
    }

    jump() {
        console.log('jump');
    }
}