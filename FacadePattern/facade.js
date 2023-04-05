function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`;
    }).join('&');

    return fetch(`${url}?${queryString}`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
}

function getUserPosts(userID) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', { userId: userID })
}


function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

/*
        The facade, is similar to a Interface 
*/

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(post => {
            console.log(`${user.name} \n ${post.length} \n ${post[0].title}`)
        })
    });
})