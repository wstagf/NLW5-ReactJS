import React from 'react'
import { Header } from '../components/header'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>  
  )  
}

export default MyApp
