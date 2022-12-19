/**#
 * @class MoveableObject
 * @description This class is the base
 * class for all moveable objects in the game.
 * @property {number} x - The x coordinate of the object.
 * @property {number} y - The y coordinate of the object.
 * @property {string} img - The image of the object.
 * @method moveRight - Moves the object to the right.
 * @method moveLeft - Moves the object to the left.
 * @method jump - Makes the object jump.
 * @example
 * const moveableObject = new MoveableObject();
 * moveableObject.moveRight();
 * moveableObject.moveLeft();
 * moveableObject.jump();
 * @example
 * const moveableObject = new MoveableObject();
 * moveableObject.x = 10;
 * moveableObject.y = 20;
 * moveableObject.img = 'image.png';
 * moveableObject.moveRight();
 * moveableObject.moveLeft();
 * moveableObject.jump();
 */

class MoveableObject {
    x;
    y;
    img;


    moveRight() {
        console.log('move right');        
    }

    moveLeft() {
        console.log('move left');
    }

    jump() {
        console.log('jump');
    }
}