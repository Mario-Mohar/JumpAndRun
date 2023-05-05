class World { // The World class
    character = new Character(); // Create a new instance of the Character class
    enemy = [ // Create an array of Chickens
        new Chickens (),
        new Chickens (),
        new Chickens (),
        new Chickens (),
    ];
    clouds = [ // Create an array of clouds
        new Clouds(),

    ];
    boss = new Boss(); // Create a new instance of the Boss class
    background = new Background(); // Create a new instance of the Background class
    canvas; // The canvas element
    ctx; // The context of the canvas

    constructor(canvas) { // The constructor is called when you create a new instance of the class
        this.ctx = canvas.getContext('2d'); // Get the context of the canvas needs to drwaw on it i 2d
        this.canvas = canvas; // Save the canvas in the class
        this.draw(); // Start the draw loop
    }





    //Draw wird immer wieder aufgerufen
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas before drawing
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); // Draw the world
        this.enemy.forEach((enemy) => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height); // Draw the Chickens
        });

        this.clouds.forEach((cloud) => {
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height); // Draw the Clouds
        });

        this.ctx.drawImage(this.boss.img, this.boss.x, this.boss.y, this.boss.width, this.boss.height); // Draw the Boss Chicke

        this.ctx.drawImage(this.background.img, this.background.x, this.background.y, this.background.width, this.background.height); // Draw the Background

        requestAnimationFrame(() => this.draw()); // Call the draw function again
    }
} 