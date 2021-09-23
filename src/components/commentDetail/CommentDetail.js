import React from 'react'
import style from './ComponentDetail.module.css'
import { Button, Radio } from 'antd';


export default function CommentDetail() {
  return (
    <div  className={style.container}>
      <div className={style.title}>
        评价列表
      </div>
      <Radio.Group>
        <Radio.Button type='primary' value='0'>全部</Radio.Button>
        <Radio.Button type='primary' value='5'>非常满意</Radio.Button>
        <Radio.Button type='primary' value='4'>满意</Radio.Button>
        <Radio.Button type='primary' value='3'>基本满意</Radio.Button>
        <Radio.Button type='primary' value='2'>不满意</Radio.Button>
        <Radio.Button type='primary' value='1'>非常不满意</Radio.Button>
      </Radio.Group>
    </div>
  )
}
