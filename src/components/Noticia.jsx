import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material"

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia

  return (
    <Grid
      item
      sm={6}
      lg={4}
    >
      <Card>
        {urlToImage && (
          <CardMedia 
          component={'img'}
          src={urlToImage}
          height={200}
          alt={`imagen ${title}`}
        />
        )}
        <CardContent>
          <Typography
            component={'h3'}
            variant={'body1'}
            color='error'
          >
            {source.name}
          </Typography>

          <Typography
            component={'h2'}
            variant={'h5'}
          >
            {title}
          </Typography> 

          <Typography
            variant={'body2'}
            mt={2}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            width={'100%'}
            textAlign='center'
            variant="button"
            target={'_blank'}
            sx={{
              textDecoration: 'none',
              fontSize: '1.5rem'
            }}
            mb={2}
          >Ver Noticia</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia