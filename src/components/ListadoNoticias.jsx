import { Typography, Grid, Stack, Pagination } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"
const ListadoNoticias = () => {

    const {noticias, cantidadNoticias, handleChangePagina, pagina} = useNoticias()

    const cantidadPaginas = Math.ceil(cantidadNoticias / 20)

  return (
    <>
        <Typography 
            textAlign='center'
            marginY={5}
            component='h2'
            variant='h3'
        >Ultimas noticias</Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia 
                    noticia={noticia}
                    key={noticia.url}
                />
            ))} 
        </Grid>

        <Stack 
            spacing={2}
            alignItems='center'
            justifyContent={'center'}
            mt={7}
            mb={2}
        >
            <Pagination 
                count={cantidadPaginas} 
                color="primary"
                onChange={handleChangePagina} 
                page={pagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias