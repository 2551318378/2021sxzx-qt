import React from 'react'
import Comment from './components/Comment/Comment.js'
// import Rate from './components/Rate/Rate'
import style from './GuideResult.module.scss'
// import axios from '../../api/http'
import Guide from './components/Guide/Guide.js'
import FooterInfo from '../components/FooterInfo/FooterInfo.js'
import SearchBar from '../components/SearchBar/SearchBar.js'
import Orientation from './components/Orientation/Orientation.js'
import SlideCS from '../components/SlideCS/SlideCS.js'



export default function CommentPage() {
  return (
    <div className={style.testContainer}>
      <SearchBar></SearchBar>
      <Orientation></Orientation>
      <Guide></Guide>
      <Comment></Comment>
      {/* <Rate></Rate> */}
      <FooterInfo></FooterInfo>
      <SlideCS></SlideCS>
    </div>
  )
}
