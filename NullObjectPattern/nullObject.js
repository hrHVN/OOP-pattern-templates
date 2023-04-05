class NormalUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    hasAcces() {
        return this.name === 'Bob';
    }
}

class NullUser {
    constructor() {
        this.id = -1;
        this.name = 'Guest';
    }

    hasAcces() {
        return false;
    }
}


/*
    Example Code
*/

const users = [
    new NormalUser(1, 'Bob'),
    new NormalUser(2, 'John'),
]

function getUserId(id) {
    let user = users.find(user => user.id === id);
    if (user === null) return new NullUser();
    else return user;
}

function printUserID(id) {
    const user = getUserId(id);
    // Before null
    /*
    let name = 'Guest';
    if (user != null && user.name != null) name = user.name; 
    console.log('Hello ', name)
    */
    // after null
    console.log('Hello ', user.name)

    // Before null
    /*
    if (user != null && user.hasAcces != null && user.hasAcces()) {
        console.log('You have acces');
    }
    else {
        console.log('You are not allowed here');
    }
    */
    // after null
    if (user.hasAcces()) {
        console.log('You have acces');
    }
    else {
        console.log('You are not allowed here');
    }
}


