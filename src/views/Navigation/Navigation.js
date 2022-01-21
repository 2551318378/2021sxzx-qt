import React from 'react'
import SearchBar from '../components/Searchbar/Searchbar'
import FooterInfo from '../components/Footerinfo/Footerinfo'
import Orientation from './components/Orientation/Orientation.js'
import SlideCS from '../components/SlideCS/SlideCS'
import style from './Navigation.module.scss'

export default function Navigation() {
  return (
    <div className={style.container}>
      <SearchBar></SearchBar>
      <Orientation></Orientation>
      <FooterInfo></FooterInfo>
      <SlideCS></SlideCS>
    </div>
  )
}