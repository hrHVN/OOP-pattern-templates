class FancyLogger {
    constructor(){
        if (FancyLogger.instance == null) { // check of there is an instance of the Class, create new, or return old
            this.loggs = [];
            FancyLogger.instance = this;
        }
            return FancyLogger.instance; 
    }

    log (message) {
        this.loggs.push(message);
        console.log('Fancy: ',  message);
    }

    printLoggCounts() {
        console.log('Logs: ', this.loggs.length);
    }

    getLoggs(){
        return this.loggs;
    }
}

const LoggerObject =  new FancyLogger();
Object.freeze(LoggerObject); // freeze this object form modifications

export default LoggerObject;