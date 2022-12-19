/**#
 * @fileoverview This file contains the game logic for the game.
 * @module game
 * @requires module:models/world
 * @requires module:models/character
 * @requires module:models/moveable-object
 * @requires module:models/level
 * @requires module:models/level-object
 * @requires module:models/level-object-type
 * @requires module:models/level-object-type-property
 * @requires module:models/level-object-type-property-value
 * 
 * @example
 * import { world } from './models/world.class.js';
 * import { character } from './models/character.class.js';
 * import { MoveableObject } from './models/moveable-object.class.js';
 * import { level } from './models/level.class.js';
 * import { levelObject } from './models/level-object.class.js';
 * import { levelObjectType } from './models/level-object-type.class.js';
 * import { levelObjectTypeProperty } from './models/level-object-type-property.class.js';
 * import { levelObjectTypePropertyValue } from './models/level-object-type-property-value.class.js';
 * 
 * const myWorld = new world();
 * const myCharacter = new character();
 * const myMoveableObject = new MoveableObject();
 * const myLevel = new level();
 * const myLevelObject = new levelObject();
 * const myLevelObjectType = new levelObjectType();
 * const myLevelObjectTypeProperty = new levelObjectTypeProperty();
 * const myLevelObjectTypePropertyValue = new levelObjectTypePropertyValue();
 * 
 * myWorld.name = 'My World';
 * myCharacter.name = 'My Character';
 * myMoveableObject.name = 'My Moveable Object';
 * myLevel.name = 'My Level';
 * myLevelObject.name = 'My Level Object';
 * myLevelObjectType.name = 'My Level Object Type';
 * myLevelObjectTypeProperty.name = 'My Level Object Type Property';
 * myLevelObjectTypePropertyValue.name = 'My Level Object Type Property Value';
 * 
 * console.log('My World is ', myWorld);
 * console.log('My Character is ', myCharacter);
 * console.log('My Moveable Object is ', myMoveableObject);
 * console.log('My Level is ', myLevel);
 * console.log('My Level Object is ', myLevelObject);
 * console.log('My Level Object Type is ', myLevelObjectType);
 * console.log('My Level Object Type Property is ', myLevelObjectTypeProperty);
 * console.log('My Level Object Type Property Value is ', myLevelObjectTypePropertyValue);
 * 
 */

let canvas;
let ctx;
let character = new MoveableObject();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    console.log('My Character is ', character);
}