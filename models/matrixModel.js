function MatrixModel() {
    BaseModel.call(this);

    var generalSize = 4;

    this.attributes = {
        grid: Array(generalSize).fill([]).map(function () {
            return Array(generalSize).fill('');
        })
    }

    this.getSize = function () {
        return generalSize;
    }

    var instance = this;
    MatrixModel = function () {
        return instance;
    }
    this.getFirstNumbers();
    this.getFirstNumbers();
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.randomPlace = function () {
    return Math.floor(Math.random() * this.getSize());
}

MatrixModel.prototype.randomNumber = function () {
    return Math.random() < 0.8 ? '2' : '4';
}

MatrixModel.prototype.getFirstNumbers = function () {
    do {
        var x = Math.floor(Math.random() * this.getSize())
        var y = Math.floor(Math.random() * this.getSize())

    } while (this.attributes.grid[x][y] !== "")
    
    this.attributes.grid[x][y] = this.randomNumber()

   this.publish('changeData');

}

MatrixModel.prototype.displayDigitByKeyPress = function (code) {
    console.log(code)
    switch(code) {
        case "ArrowUp": 
        this.arrowUp()
        // this.getFirstNumbers()
        break
        case "ArrowDown": 
        this.arrowDown()
        // this.getFirstNumbers()
        break
        case "ArrowLeft": 
        this.arrowLeft()
        // this.getFirstNumbers()
        break
        case "ArrowRight": 
        this.arrowRight()
        // this.getFirstNumbers()
        break
    }
 
    this.getFirstNumbers()

    this.publish('changeData');
}


MatrixModel.prototype.arrowUp = function () {
    let generalLength = this.attributes.grid
    for (h = 0; h < generalLength.length; h++) {
        for (i = 1; i < generalLength.length; i++) {
            for (j = 0; j < generalLength.length; j++) {
                if (generalLength[i][j] !== '') {
                    if (generalLength[i - 1][j] === '') {
                        generalLength[i - 1][j] = generalLength[i][j];
                        generalLength[i][j] = '';
                    }
                }
            }
        }
    }

}


MatrixModel.prototype.arrowDown = function () {
    let generalLength = this.attributes.grid
    for (h = 0; h < generalLength.length; h++) {
        for (i = 2; i > -1; i--) {
            for (j = 0; j < generalLength.length; j++) {
                if (generalLength[i][j] !== '') {
                    if (generalLength[i + 1][j] === '') {
                        generalLength[i + 1][j] = generalLength[i][j];
                        generalLength[i][j] = '';
                    }

                }
            }
        }
    }
}

MatrixModel.prototype.arrowLeft = function () {
let generalLength = this.attributes.grid
    
    for (let h = 0; h < generalLength.length; h++) {
        for (let i = 0; i < generalLength.length; i++) {
            for (let j = 1; j < generalLength.length; j++) {
                if (generalLength[i][j] !== '') {
                    if (generalLength[i][j - 1] === '') {
                        generalLength[i][j - 1] = generalLength[i][j];
                        generalLength[i][j] = '';
                    }  
                }
            }
        }
    }
}

MatrixModel.prototype.arrowRight = function () {
    let generalLength = this.attributes.grid

    for (h = 0; h < generalLength.length; h++) {
        for (i = 0; i < generalLength.length; i++) {
            for (j = 2; j > -1; j--) {
                if (generalLength[i][j] !== '') {
                    if (generalLength[i][j + 1] === '') {
                    generalLength[i][j + 1] = generalLength[i][j];
                        generalLength[i][j] = '';
                    }
                }
            }
        }
    }
}


MatrixModel.prototype.startNewGame = function () {
    
    console.log('startNewGame');
}

