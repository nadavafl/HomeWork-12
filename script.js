async function jsonPosts(){
    let data = await fetch ('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json());
        return data[0];
}
async function jsonComments(){
    let data = await fetch ('https://jsonplaceholder.typicode.com/comments').then((response)=>response.json());
        return data[0];
}
async function jsonAlbums(){
    let data = await fetch ('https://jsonplaceholder.typicode.com/albums').then((response)=>response.json());
        return data[2];  
}

async function allJsons(){
    let posts = await jsonPosts();
    let comments = await jsonComments();
    let albums = await jsonAlbums(); 
    console.log(posts);
    console.log(comments);
    console.log(albums);
}
allJsons();

