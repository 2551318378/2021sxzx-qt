import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import Maincontent from './components/Maincontent/Maincontent'
import FooterInfo from '../components/FooterInfo/FooterInfo'
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