class BaseEntityB {
    constructor(baseProperty, { other1, other2, other3} = {}) {
        this.baseProperty = baseProperty;
        this.next = other1;
        this.next = other2;
        this.next = other3;
    }
}

// usage
// initializetion 
const newEntityB = new BaseEntityB('baseProperty');
console.log('B: ',newEntityB) // {baseProperty: 'baseProperty', other1: undefned, other2: undefined, other3: undefined }

// Building the object
newEntityB.other2 = 'value 23'
console.log('B: ',newEntityB) // {baseProperty: 'baseProperty', other1: undefned, other2: 'value 23', other3: undefined }

