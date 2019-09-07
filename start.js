const read = require('readline'),
    input = read.createInterface(process.stdin, process.stdout),
    questions = ['Grid Size: ', 'Current Object Location: ', 'Commands ended with 0: '],
    MovingObject = require('./MovingObject'),
    DIRECTIONS = require('./Directions');
    let location= new Int16Array(), commands = new Int8Array(), gridSize = new Int16Array(), questionCounter = 0;
    function readUserInputs(questionIndex) {
        if (questionIndex >= questions.length) {
            const movingObject = new MovingObject(location, DIRECTIONS.NORTH, commands, gridSize);
            movingObject.move();
            // const loc = movingObject.getLocation();
           // console.log(loc);
        } else {
            input.setPrompt(questions[questionIndex]);
            input.prompt();
        }
    }
input.on('line', function (input) {
    if(questionCounter == 0) {
        gridSize = input.split(' ');
        gridSize = gridSize.map(function(item) {
            return Number.parseInt(item);
        });
        questionCounter++;
        readUserInputs(questionCounter);
    }
  
    else if(questionCounter == 1) {
        location = input.split(' ');
        location = location.map(function(item) {
            return Number.parseInt(item);
        });
        questionCounter++;
        readUserInputs(questionCounter);
    }
  
    else if(questionCounter == 2) {
        commands = input.split(' ');
        commands = commands.map(function(item) {
            return Number.parseInt(item);
        });
        questionCounter++;
        readUserInputs(questionCounter);
    }
});


    readUserInputs(questionCounter);