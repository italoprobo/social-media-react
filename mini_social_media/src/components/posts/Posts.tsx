import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

    const italo: Autor = {
        nome: 'Ítalo Probo',
        cidade: 'Teresina',
        pais: 'Brasil'
    }

    const posts: Topico[] = [
        {
            id: 1,
            descricao: 'League of Legends está tomando muito meu tempo!!',
            autor: italo,
            create_at: new Date(),
            tags: ['games', 'vicio', 'lol'],
            active: true    
        },
        {
            id: 2,
            descricao: 'Até que eu to pegando o jeito nesse react aqui galera!',
            autor: italo,
            create_at: new Date(),
            tags: ['programação', 'react', 'estudos', 'front end'],
            active: true    
        }
    ]
    return(
        <div className="posts">
            {posts.map(post=>(
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts