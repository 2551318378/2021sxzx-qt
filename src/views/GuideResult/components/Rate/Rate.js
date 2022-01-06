import React from 'react'
import { useEffect, useState } from 'react'

import style from './Rate.module.scss'
import RateReport from './RateReport'
import RateDetail from './RateDetail'
import axios from '../../../../http/http'

export default function CommentPage() {
  const [commentInfo, setCommentInfo] = useState({})
  useEffect(()=>{
    async function getCommentInfo(){
      let {data:{data}} = await axios.get('/v1/commentParam')
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
    }

    getCommentInfo()
  },[])
  return (
    <div className={style.rateContainer}>
      <RateReport commentInfo={commentInfo}></RateReport>
      <RateDetail commentInfo={commentInfo}></RateDetail>
    </div>
  )
}
