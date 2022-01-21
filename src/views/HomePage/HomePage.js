import React from 'react'
import SearchBar from '../components/Searchbar/Searchbar'
import Maincontent from './components/Maincontent/Maincontent'
import FooterInfo from '../components/Footerinfo/Footerinfo'
import SlideCS from '../components/SlideCS/SlideCS'
import style from './HomePage.module.scss'



export default function Home() {
    return (
      <div className={style.container}>
        <SearchBar isShadow="true"></SearchBar>
        <Maincontent></Maincontent>
        <FooterInfo></FooterInfo>
        <SlideCS></SlideCS>
      </div>
    )
  }