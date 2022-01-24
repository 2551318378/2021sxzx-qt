import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar.js'
import FooterInfo from '../components/FooterInfo/FooterInfo.js'
import Orientation from './components/Orientation/Orientation.js'
import SlideCS from '../components/SlideCS/SlideCS.js'
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