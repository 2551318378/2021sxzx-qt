import React from 'react'
import Comment from './components/Comment/Comment.js'
import Rate from './components/Rate/Rate'
import style from './GuideResult.module.scss'
import axios from '../../api/http'
import Guide from './components/Guide/Guide.js'
import Footerinfo from '../components/Footerinfo/Footerinfo.js'
import Searchbar from '../components/Searchbar/Searchbar.js'


export default function CommentPage() {
  return (
    <div className={style.testContainer}>
      <Searchbar></Searchbar>
      <Guide></Guide>
      <Comment></Comment>
      <Rate></Rate>
      <Footerinfo></Footerinfo>
    </div>
  )
}
