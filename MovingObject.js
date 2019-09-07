const DIRECTIONS = require('./Directions');
const COMMANDS = require('./Commands');
const SHAPE = require('./Shape');

module.exports = function movingObject (location, direction = DIRECTIONS.NORTH, commands, gridSize) {
    this.location = new Object();
    this.location.x = location[0];
    this.location.y = location[1];
    this.direction = direction;

    this.getLocation = function() {
        return new Int16Array([this.location.x, this.location.y]);
    }
    this.move = function() {
        for(let i=0; i< commands.length; i++) {
            const command = commands[i]; 
            if(command == COMMANDS.FORWARD) {
                switch(this.direction) {
                    case DIRECTIONS.NORTH: 
                    this.location.y = this.location.y - 1;
                    break;

                    case DIRECTIONS.EAST: 
                    this.location.x = this.location.x + 1;
                    break;

                    case DIRECTIONS.SOUTH: 
                    this.location.y = this.location.y + 1;
                    break;

                    case DIRECTIONS.WEST: 
                    this.location.x = this.location.x - 1;
                    break;
                }
            }
            
            if(command == COMMANDS.BACKWARD) {
                switch(this.direction) {
                    case DIRECTIONS.NORTH: 
                    this.location.y = this.location.y + 1;
                    break;

                    case DIRECTIONS.EAST: 
                    this.location.x = this.location.x - 1;
                    break;

                    case DIRECTIONS.SOUTH: 
                    this.location.y = this.location.y - 1;
                    break;

                    case DIRECTIONS.WEST: 
                    this.location.x = this.location.x + 1;
                    break;
                }
            }

            if(command == COMMANDS.ROTATE_RIGHT) {
                switch(this.direction) {
                    case DIRECTIONS.NORTH: 
                    this.direction = DIRECTIONS.EAST;
                    break;

                    case DIRECTIONS.EAST: 
                    this.direction = DIRECTIONS.SOUTH;
                    break;

                    case DIRECTIONS.SOUTH: 
                    this.direction = DIRECTIONS.WEST;
                    break;

                    case DIRECTIONS.WEST: 
                    this.direction = DIRECTIONS.NORTH;
                    break;
            }
        }
        
            if(command == COMMANDS.ROTATE_LEFT) {
                switch(this.direction) {
                    case DIRECTIONS.NORTH: 
                    this.direction = DIRECTIONS.WEST;
                    break;

                    case DIRECTIONS.WEST: 
                    this.direction = DIRECTIONS.SOUTH;
                    break;

                    case DIRECTIONS.SOUTH: 
                    this.direction = DIRECTIONS.EAST;
                    break;

                    case DIRECTIONS.EAST: 
                    this.direction = DIRECTIONS.NORTH;
                    break;
            }
        }

            if(command == COMMANDS.RESULT) {
                const shape = new SHAPE();
                const shapeBorder = shape.getBorders(gridSize);
                displayObjectLocation(shapeBorder, this.location);
            }
        };
    }

    const displayObjectLocation = function(gridSize, location) {
        if(location.x < gridSize.minX ||
            location.y < gridSize.minY  || 
            location.x > gridSize.maxX || 
            location.y > gridSize.maxY) {
                process.stdout.write('[-1,-1]');
            }
            else {
                process.stdout.write(`[${location.x}, ${location.y}]`);
            }
    }
}
