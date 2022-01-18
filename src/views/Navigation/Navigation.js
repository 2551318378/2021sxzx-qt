import React from 'react'
import Searchbar from '../components/Searchbar/Searchbar'
import Footerinfo from '../components/Footerinfo/Footerinfo'
import Orientation from './components/Orientation/Orientation.js'
import style from './Navigation.module.scss'

export default function Navigation() {
  return (
    <div>
      <Searchbar></Searchbar>
      <Orientation></Orientation>
      <Footerinfo></Footerinfo>
    </div>
  )
}