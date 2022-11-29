import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import './postagens.css';

function Postagens(){
  return (
      <>
          <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
              <Grid alignItems="center" item xs={6}>
                  
              </Grid>
              <Grid item xs={5} >
                  <img src="https://aotecnologia.com.br/images/alpha/noticias/programa%C3%A7%C3%A3o.jpg" alt="" width="200px" height="200px" />

                  <Box display="flex" justifyContent="right">
                      <Box marginRight={10}>
                      </Box>
                     
                  </Box> 
              </Grid>

          </Grid>
      </>
  )
}

export { Postagens };