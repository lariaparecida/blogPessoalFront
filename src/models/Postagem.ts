// import Tema from './Tema'

// interface Postagem {
//     id: number;
//     titulo: string;
//     texto: string;
//     tema?: Tema| null
// }

// export default Postagem;

import Tema from './Tema'
import User from './User'

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string
    tema?: Tema| null
    usuario?: User | null //linha adicionada para vincular um usuário
}

export default Postagem;