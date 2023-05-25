// import {Action } from './actions';

// export interface TokenState {
//     tokens: string
// }

// const initialState = {
//     tokens: ""
// }

// export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
//     switch (action.type){
//         case "ADD_TOKEN": {
//             return {tokens: action.payload}
//         }

//         default:
//             return state
//     }
// }

import {Action } from './actions';

export interface TokenState {
    tokens: string,
    id: string
}

const initialState = {
    tokens: "",
    id: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, id: state.id}
        };
        case "ADD_ID": {
            return {id: action.payload, tokens: state.tokens}
        }

        default:
            return state
    }
}

/*Com esses dois arquivos modificados, o nosso REDUX já tem a capacidade de armazenar
o ID do usuário no momento do login. Vale lembrar que se fosse preciso adicionar mais
dados, bastaria expandir os métodos, do mesmo jeito que foi feito com o ID.*/