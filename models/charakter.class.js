/**#
 * @class character
 * @extends MoveableObject
 * @description This class is the base
 * class for all characters in the game.
 * @property {string} name - The name of the character.
 * @example
 * const character = new character();
 * character.name = 'My Character';
 * character.moveRight();
 * character.moveLeft();
 * character.jump();
 * @example
 * const character = new character();
 * character.name = 'My Character';
 * character.x = 10;
 * character.y = 20;
 * character.img = 'image.png';
 * character.moveRight();
 * character.moveLeft();
 * character.jump();
 */

class character extends MoveableObject {
    constructor() {
        super();
        this.name = 'My Character';
    }
}