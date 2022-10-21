import { Typography, Grid } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"
const ListadoNoticias = () => {

    const {noticias} = useNoticias()

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
    </>
  )
}

export default ListadoNoticias