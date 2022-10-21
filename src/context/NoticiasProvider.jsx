import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general')
  const [noticias, setNoticias] = useState([])

  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  useEffect(() => {
    const consultarApi = async () => {

      let url 

      if(categoria === 'disney') {
        url = 'https://newsapi.org/v2/everything?q=disney&from=2022-09-21&sortBy=publishedAt&apiKey=0dc89fe39b2f44e89e47fee68094faa5'
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
      }
      const {data} = await axios(url)
      setNoticias(data.articles)
    }

    consultarApi()
  }, [categoria])

  return (
    <NoticiasContext.Provider
        value={{
          handleChangeCategoria,
          categoria,
          noticias
        }}
    >
        {children}
    </NoticiasContext.Provider>
  )
}

export default NoticiasContext
export {NoticiasProvider}