import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import FooterInfo from '../components/FooterInfo/FooterInfo'
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