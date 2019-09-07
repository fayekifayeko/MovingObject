const SHAPES = require('./Shapes');

function Shape (type = SHAPES.RECTANGLE) {
    this.type = type;
    this.getBorders = function(gridSize) {
        switch (this.type)
        {
           case SHAPES.RECTANGLE:
               return {
                   minX: 0,
                   minY: 0,
                   maxx: gridSize[0],
                   maxY: gridSize[1]
               };
        
           default: 
               alert('Default case');
        }
    };
}

module.exports = Shape;