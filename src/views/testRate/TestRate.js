import React from 'react'
import CommentReport from '../../components/commentReport/CommentReport'
import CommentDetail from '../../components/commentDetail/CommentDetail'
import './TestRate.css'

export default function testRate() {
  return (
    <div className='testRateContainer'>
      <CommentReport></CommentReport>
      <CommentDetail></CommentDetail>
    </div>
  )
}
