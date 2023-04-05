class BaseEntityA {
    constructor(baseProperty) {
        this.baseProperty = baseProperty;
    }
}

class EntityBuilder {
    constructor(baseProperty) {
        this.entity = new BaseEntityA(baseProperty);
    }

    setPropertyOne(newProperty) {
        this.entity.propertyOne = newProperty;
        return this
    }

    setPropertyTwo(newProperty) {
        this.entity.propertyTwo = newProperty;
        return this
    }

    setPropertyThree(newProperty) {
        this.entity.propertyThree = newProperty;
        return this
    }

    setPropertyFour(newProperty) {
        this.entity.propertyFour = newProperty;
        return this
    }

    build() {
        return this;
    }
}

// usage
// initializetion 
const newEntity = new EntityBuilder('baseProperty').build();
console.log('A: ',newEntity) 

// Building the object
newEntity.setPropertyOne('New property')
newEntity.setPropertyFour('out of order property setting');

console.log('A: ',newEntity) // {baseProperty: 'baseProperty', propertyFour: 'out of order property setting', propertyOne: 'New property' }