/**#
 * @file chickens.class.js
 * @module chickens
 * @requires module:models/model
 * @requires module:models/level-object
 * @requires module:models/level-object-type
 * @requires module:models/level-object-type-property
 * @requires module:models/level-object-type-property-value
 * @description This file contains the chickens class.
 * @example
 * import { chickens } from './models/chickens.class.js';
 * const myChickens = new chickens();
 * console.log('My chickens is ', myChickens);
 * @example
 * import { chickens } from './models/chickens.class.js';
 * const myChickens = new chickens();
 * myChickens.name = 'My chickens';
 * console.log('My chickens is ', myChickens);
 * @example
 * import { chickens } from './models/chickens.class.js';
 * const myChickens = new chickens();
 * myChickens.name = 'My chickens';
 * myChickens.x = 10;
 * myChickens.y = 20;
 * myChickens.img = 'image.png';
 * myChickens.moveRight();
 * myChickens.moveLeft();
 * myChickens.jump();
 * console.log('My chickens is ', myChickens);
 */

class chickens extends Model {
  constructor() {
    super();
    this.table = 'chickens';
  }
}