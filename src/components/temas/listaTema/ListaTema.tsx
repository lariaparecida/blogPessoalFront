import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import { useSelector , useDispatch } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

    function ListaTema() {
    
        const [temas, setTemas] = useState<Tema[]>([])
        let navigate = useNavigate();
        const dispatch = useDispatch();
        const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
        );
    
    useEffect(()=>{
        if(token == ''){
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })                 
            navigate("/login")
        }
    }, [token])

    // async function getTema(){
    //     await busca("/temas", setTemas, {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    // }

    async function getTema(){
        
        try {
            await busca("/temas", setTemas, {
            headers: {
            'Authorization': token
            }
        })
        } catch (error: any) {
            if(error.toString().includes('403')) {
                alert('O seu token expirou, logue novamente!')
                dispatch(addToken(''));
                navigate('/login')
            }
        }
    }

        useEffect(()=>{
            getTema()
        }, [temas.length])

        return (
            <>
            {
            temas.map(tema =>(
            <Box m={2} >
                <Card variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    Tema
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {tema.descricao}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5} >
        
                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                            atualizar
                        </Button>
                        </Box>
                    </Link>
                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                            deletar
                        </Button>
                        </Box>
                    </Link>
                    </Box>
                </CardActions>
                </Card>
            </Box>
            ))
            }
            </>
        );
    }

        
    export default ListaTema;