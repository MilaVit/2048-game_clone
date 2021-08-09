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

    this.displayDigitByKeyPress();
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.randomPlace = function () {
    return Math.floor(Math.random() * this.getSize());
}

MatrixModel.prototype.randomNumber = function () {
    return Math.random() < 0.8 ? '2' : '4';
}

MatrixModel.prototype.displayDigitByKeyPress = function (code) {
    this.attributes.grid[this.randomPlace()][this.randomPlace()] = this.randomNumber();
    this.publish('changeData');
}

MatrixModel.prototype.startNewGame = function () {
    console.log('startNewGame');
}

// ['2', '', '4', ''] => ['', '', '2', '4']