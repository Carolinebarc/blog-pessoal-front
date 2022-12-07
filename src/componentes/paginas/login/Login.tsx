import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { login } from '../../../services/Service';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import { NoEncryption } from '@material-ui/icons';
import { styles } from './styles';
import GroupIcon from '@mui/icons-material/Group';

function Login() {
    const classes = styles();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== '') {
            dispatch(addToken(token));
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/auth/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box className={classes.box}>
                    <form onSubmit={onSubmit} className={classes.form}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <Grid container alignItems='center' spacing={1}>
                            <Grid item xs={1}>
                                <GroupIcon />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            </Grid>
                        </Grid>
                        <Grid container alignItems='center' spacing={1}>
                            <Grid item xs={1}>
                                <NoEncryption />
                            </Grid>
                            <Grid item xs={11}>
                                <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha ' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                            </Grid>
                        </Grid>
                        <Box marginTop={2} className={classes.boxBotao}>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;