import axios from 'axios'
import React, { createContext, useEffect, useState} from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general')
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [cantidadNoticias, setCantidadNoticias] = useState(0)

  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  const handleChangePagina = (e, value) => {
    setPagina(value)
  }

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data} = await axios(url)
      setPagina(1)
      setNoticias(data.articles)
      setCantidadNoticias(data.totalResults)

    }
    consultarApi()
  }, [categoria])

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data} = await axios(url)
      setNoticias(data.articles)
      setCantidadNoticias(data.totalResults)
    }
    consultarApi()
  }, [pagina])

  return (
    <NoticiasContext.Provider
        value={{
          handleChangeCategoria,
          categoria,
          noticias,
          cantidadNoticias,
          handleChangePagina,
          pagina
        }}
    >
        {children}
    </NoticiasContext.Provider>
  )
}

export default NoticiasContext
export {NoticiasProvider}