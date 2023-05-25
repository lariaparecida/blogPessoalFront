// interface User {
//     id: number;
//     nome: string;
//     usuario: string;
//     senha: string;
// }

// export default User;

import Postagem from './Postagem'

interface User {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string
    postagem?: Postagem[] //linha adicionada para que o usuário possa ter um
}

export default User;