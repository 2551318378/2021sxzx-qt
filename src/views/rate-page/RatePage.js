import React from 'react'
import CommentReport from './components/comment-report/CommentReport'
import CommentDetail from './components/comment-detail/CommentDetail'
import './RatePage.css'
import { useEffect, useState } from 'react/cjs/react.development'
import axios from 'axios'

export default function RatePage() {
  const [commentInfo, setCommentInfo] = useState({})
  useEffect(()=>{
    async function getCommentInfo(){
      let {data:{data}} = await axios.get('/api/commentparam')
      let scoreInfo = [0,0,0,0,0]
      data.scoreInfo?.forEach((item)=>{
        scoreInfo[parseInt(item.score)-1]=item.count
      })
      let scoreInfoRemain = scoreInfo.map((item)=>{
        return data.totalNum-item
      })
      data.scoreInfo = scoreInfo
      data.scoreInfoRemain = scoreInfoRemain
      setCommentInfo(data)
      console.log(data);
    }
    getCommentInfo()
  },[])
  return (
    <div className='testRateContainer'>
      <CommentReport commentInfo={commentInfo}/>
      <CommentDetail commentInfo={commentInfo}></CommentDetail>
    </div>
  )
}
