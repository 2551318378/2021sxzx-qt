import React,{useState} from 'react'
import style from './Comment.module.scss'

import {Rate,Input,message} from 'antd'
import axios from '../../../../http/http'
import { useHistory } from 'react-router'
const { TextArea } = Input;

const desc = ['非常不满意', '不满意', '基本满意', '满意', '非常满意'];

export default function Comment() {  
  const history = useHistory()
  const [starValue, setStarValue] = useState(5)
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
    if(display==='none'){
      axios.post('/v1/comment',{
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
      .catch(res=>{
        console.log(res);
      })
    }else{
      if(comment.length>=10){
        axios.post('/v1/comment',{
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
        .catch((res)=>{
          console.log(res);
        })
      }
      else{
        message.error('评论不能少于10个字哦')
      }
    }
  }
  return (
    <div className={style.container}>
      <div className={style.widthController}>
        <div className={style.title}>办事指南评议</div>
        <div className={style.scoreContainer}>
          <div>
            <Rate className={style.rateContainer} onChange={handleChange} value={starValue} tooltips={desc}></Rate>
            {starValue ? <span className={style.antRateText}>{desc[starValue - 1]}</span> : ''}
          </div>
          <div className={style.btn} onClick={handleDisplay}>我要评议</div>
        </div>
        <TextArea className={style.textArea} 
          rows={6} 
          placeholder="请描述问题或建议，帮助我们做得更好（不少于10个字，不多于200个字）" 
          minLength={10} maxLength={200} showCount
          style={{display:`${display}`}} onChange={updateComment}/>
        <div className={style.tips}>温馨提示：该评议只对办事指南内容是否规范、准确、清晰、合理等方面进行评议。</div>
        <div className={`${style.btn} ${style.commit}`} onClick={commit}>提交</div>
      </div>
    </div>
  )
}
