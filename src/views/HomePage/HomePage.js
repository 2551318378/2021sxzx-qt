import React from 'react'
import Searchbar from '../components/Searchbar/Searchbar'
import Maincontent from './components/Maincontent/Maincontent'
import Footerinfo from '../components/Footerinfo/Footerinfo'
import style from './HomePage.module.scss'


export default function Home() {
    return (
      <div className={style.container}>
        <Searchbar></Searchbar>
        <Maincontent></Maincontent>
        <Footerinfo></Footerinfo>
      </div>
    )
  }