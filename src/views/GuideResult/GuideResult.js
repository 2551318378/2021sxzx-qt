import React from 'react'
import Comment from './components/Comment/Comment.js'
import Rate from './components/Rate/Rate'
import style from './GuideResult.module.scss'
import axios from '../../api/http'
import Guide from './components/Guide/Guide.js'
import Footerinfo from '../components/Footerinfo/Footerinfo.js'
import Searchbar from '../components/Searchbar/Searchbar.js'
import Orientation from './components/Orientation/Orientation.js'


export default function CommentPage() {
  return (
    <div className={style.testContainer}>
      <Searchbar></Searchbar>
      <Orientation></Orientation>
      <Guide></Guide>
      <Comment></Comment>
      <Rate></Rate>
      <Footerinfo></Footerinfo>
    </div>
  )
}
