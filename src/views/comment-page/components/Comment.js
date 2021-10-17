import React,{useState} from 'react'
import style from './Comment.module.css'
import './Comment.css'

import {Rate,Input} from 'antd'
import axios from '../../utils/http'
import { useHistory } from 'react-router'
const { TextArea } = Input;

const desc = ['非常不满意', '不满意', '基本满意', '满意', '非常满意'];

export default function Comment() {  
  const history = useHistory()
  const [starValue, setStarValue] = useState(3)
  const [comment, setComment] = useState('')
  const [display, setDisplay] = useState('none')

  const handleChange = value =>{
    setStarValue(value)
  }
  const handleDisplay = () =>{
    if(display==='none') setDisplay('block')
    if(display==='block') setDisplay('none')
  }
  const updateComment = (e)=>{
    setComment(e.target.value)
  }
  const commit = ()=>{
    axios.post('/api/comment',{
      idc:'320425200107050375',
      show_status:0,
      check_status:0,
      content:comment,
      idc_type:'居民身份证',
      score:starValue,
      item_id:'430425200107050375X51564654'
    }).then(res=>{
      console.log(res);
      history.push('/ratePage')
    })
  }
  return (
    <div className={style.container}>
      <div className={style.title}>办事指南评议</div>
      <div className={style.scoreContainer}>
        <div className={style.starContainer}><Rate onChange={handleChange} value={starValue} tooltips={desc}></Rate>
        {starValue ? <span className={style.antRateText}>{desc[starValue - 1]}</span> : ''}</div>
        <div className={style.btn} onClick={handleDisplay}>我要评议</div>
      </div>
      <TextArea rows={6} style={{display:`${display}`}} onChange={updateComment}/>
      <div className={style.tips}>温馨提示：该评议只对办事指南内容是否规范、准确、清晰、合理等方面进行评议。</div>
      <div className={`${style.btn} ${style.commit}`} onClick={commit}>提交</div>
    </div>
  )
}
