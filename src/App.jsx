import {Container, Typography, Grid} from '@mui/material'
import Form from './components/Form'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'

function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography
            align='center'
            component='h1'
            variant='h3'
            my={5}
          >Buscador de Noticias</Typography>
        </header>

        <Grid 
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid 
            item
            md={6}
            xs={12}
          >       
            <Form/>
          </Grid>
        </Grid>

        <ListadoNoticias />
        
      </Container>
    </NoticiasProvider>
  )
}

export default App
