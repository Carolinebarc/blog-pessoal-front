import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import './Home.css';

function Home(){
  return (
      <>
          <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
              <Grid alignItems="center" item xs={6}>
                  <Box paddingX={20} >
                      <Typography variant="h3" gutterBottom color="primary" component="h3" align="center" className='titulo'>Seja Bem Vinde!</Typography>
                      <Typography variant="h5" gutterBottom color="initial" component="h5" align="center" className='titulo'>Me chamo Caroline Barcelos, sou Desenvolvedora FullStack JS e esse é meu blog pessoal, aqui terão textos que falarão sobre a minha trajetória, acomode-se e vamos juntes?</Typography>
                  </Box>
                  
              </Grid>
              <Grid item xs={5} >
                  <img src="https://img.freepik.com/vetores-gratis/blogar-divertido-criacao-de-conteudo-streaming-online-videoblog-jovem-fazendo-selfie-para-rede-social-compartilhando-feedback-estrategia-de-autopromocao-ilustracao-vetorial-de-metafora-de-conceito_335657-855.jpg?w=740&t=st=1669748941~exp=1669749541~hmac=de9ae5cf3e334bf651a1b7daf6d1d17cb4a8275a46fe14286d9f6093ae5c6f30" alt="" width="500px" height="500px" />

                  <Box display="flex" justifyContent="center">
                      <Box marginRight={1}>
                      </Box>
                     
                  </Box> 
              </Grid>

          </Grid>
      </>
  )
}

export { Home };