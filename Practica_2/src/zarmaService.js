const posts = new Map();
let nextId = 0;

addPost({ name: "Pepe", title: "Vendo moto", text: "Barata, barata" });
addPost({ name: "Juan", title: "Compro coche", text: "Pago bien" });

export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
}

export function deletePost(id){
    posts.delete(id);
}

export function getPosts(){
    return [...posts.values()];
}

export function getPost(id){
    return posts.get(id);
}