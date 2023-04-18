class Comander {
    constructor() {
        this.value = 0;
        this.history = [];
    }

    executeCommand(callback) {
        this.value = callback.execute(this.value);
        this.history.push(callback)
    }

    undo() {
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }
}

class CombinedCommands {
    constructor(firstValue, secondValue) {
        this.firstOperation = new FirstCommand(firstValue);
        this.secondOperation = new SecondCommand(secondValue);
    }

    execute(currentValue) {
        const newValue = this.firstOperation.execute(currentValue);
        return this.secondOperation.execute(newValue);
    }
    undo(currentValue) {
        const newValue = this.secondOperation.undo(currentValue);
        return this.firstOperation.undo(newValue);
    }
}

class FirstCommand {
    // For demonstartion this is a simple add-function
    constructor(firstValue) {
        this.commandValue = firstValue;
    }

    execute(currentValue) {
        return currentValue + this.commandValue;
    }

    undo(currentValue) {
        return currentValue - this.commandValue;
    }
}

class SecondCommand {
    // for demonstartion this is a multiply-function
    constructor(secondValue) {
        this.commandValue = secondValue;
    }

    execute(currentValue) {
        return currentValue * this.commandValue;
    }

    undo(currentValue) {
        return currentValue / this.commandValue;
    }
}

const Major = new Comander();

Major.executeCommand(new CombinedCommands(10, 2));

console.log(Major.value); // > 20
Major.executeCommand(new FirstCommand(15));
console.log(Major.value); // > 35
Major.undo();
console.log(Major.value); // > 20