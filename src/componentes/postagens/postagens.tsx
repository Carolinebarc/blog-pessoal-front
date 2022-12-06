import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clicksState } from "../../store/clicks/clicksReducer";
import './postagens.css';

function Postagens(){

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
    
}

export { Postagens };