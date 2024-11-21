import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts (req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

// export async function listarPostsID (req, res) { 
//     const index = buscarPostPorId(req.params.id);
//     res.status(200).json(posts[index]);
// }

// export async function listarPostsRandom (req, res) {
//     const randomIndex = Math.floor(Math.random() * posts.length);
//     res.status(200).json(posts[randomIndex]);
// }