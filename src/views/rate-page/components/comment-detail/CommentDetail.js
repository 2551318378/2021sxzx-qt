import React, { useEffect, useState } from 'react'
import style from './CommentDetail.module.css'
import {  Comment, Tooltip, Rate  } from 'antd';
import moment from 'moment';
import axios from '../../../../utils/http'


export default function CommentDetail(props) {
  let [allComment,setAllComment] = useState([])
  let [renderedComments,setRenderedComment] = useState([])
  let [chosenRadio,setChosenRadio] = useState(0)

  useEffect(()=>{
    async function getAllComment(){
      let {data:{data:allComment}} = await axios.get('/api/allcomment')
      console.log(allComment);
      setAllComment(allComment)
    }
    getAllComment()
  },[])

  useEffect(()=>{
    if(chosenRadio===0){
      setRenderedComment(allComment)
    }
    else{
      setRenderedComment(allComment.filter((item)=>{
        console.log(parseInt(item.score)+chosenRadio);
        return (parseInt(item.score)+chosenRadio)===6
      }))
    }
  },[chosenRadio,allComment])

  const radiosNames = ['全部','非常满意','满意','基本满意','不满意','非常不满意']
  const changeChosen = function(index){
    setChosenRadio(index)
  }

  function renderComments(items){
    return items.map((item)=>{return <Comment
      key={item._id}
      author={<div>Han Solo</div>}
      content={
        (<div>
          <Rate value={item.score}></Rate>
          <p>{item.content}</p>
        </div>)
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
    })
  }

  return (
    <div  className={style.container}>
      <div className={style.title}>
        评价列表
      </div>
      <div className={style.radioWrapper}>
        {
          radiosNames.map((item,index)=>{
            if(index===0){
              return <div 
                key={index} 
                className={`${style.radioItem} ${chosenRadio===index?style.radioItemChosen:''}`}
                onClick={changeChosen.bind(null,index)}>
                {item}{props.commentInfo.totalNum}
              </div>
            }
            else{return <div 
              key={index} 
              className={`${style.radioItem} ${chosenRadio===index?style.radioItemChosen:''}`}
              onClick={changeChosen.bind(null,index)}>
              {item}({props.commentInfo.scoreInfo?props.commentInfo.scoreInfo[5-index]:''})
            </div>
            }
          })
        }
      </div>
      <div>
        {
          renderComments(renderedComments)
        }
      </div>
    </div>
  )
}
