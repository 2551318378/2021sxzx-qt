import React from 'react'
import Comment from './components/Comment.js'
import style from './CommentPage.module.scss'

export default function CommentPage() {
  return (
    <div className={style.testContainer}>
      <Comment></Comment>
    </div>
  )
}
