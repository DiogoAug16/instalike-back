import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    
    return colecao.find().toArray();
}

// export function buscarPostPorId (id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     })
// };