import { Rate } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import style from './CommentReport.module.css'
import * as echarts from 'echarts'
import axios from 'axios'


export default function CommentReport() {
  const chartRef = useRef()
  const [chartData, setChartData] = useState({})
  useEffect(() => {
    async function getData(){
      let {data:{data}} = await axios.get('/api/commentparam')
      let scoreInfo = [0,0,0,0,0]
      data.scoreInfo.forEach((item)=>{
        scoreInfo[parseInt(item.score)-1]=item.count
      })
      let scoreInfoRemain = scoreInfo.map((item)=>{
        return data.totalNum-item
      })
      data.scoreInfo = scoreInfo
      data.scoreInfoRemain = scoreInfoRemain
      console.log(data);
      setChartData(data)
      let option = {
        tooltip: {
          trigger:'axis',
          axisPointer: {
            type: 'none' 
          },
          formatter: (params)=>{
            // console.log(params[0].data);
            return `${params[0].axisValue}<br />
            共计：${params[0].data}<br />
            占比：${Math.floor(params[0].data/(params[1].data+params[0].data)*100*100)/100}%`
          }
        },
        // color:['#536DAD','#BBD4EF'],
        grid:{
          show:false,
          containLabel:true,
          x:0,x2:15,
          y:0,y2:0
        },
        yAxis: {
          // show:false,
          axisTick:{show:false},
          axisLine:{show:false},
          type: 'category',
          data: ['5星 | 非常满意\u3000  ', '4星 | 满意\u3000\u3000\u3000  ', '3星 | 基本满意\u3000  ', '2星 | 不满意\u3000\u3000  ', '1星 | 非常不满意  ']
        },
        xAxis: {
          show:false,
          type: 'value',
          max: data.totalNum
        },
        series: [
          {
            data: data.scoreInfo,
            stack:'asdf',
            type: 'bar',
            barMaxWidth:15
          },
          {
            data: data.scoreInfoRemain,
            stack:'asdf',
            type:'bar',
            itemStyle: {
              color: '#BBD4EF'
            }
          },
        ]
      }

      let myChart = echarts.init(chartRef.current)
      option&&myChart.setOption(option)
    }
    getData()
    async function getComment(){
      let {data} = await axios.get('/api/allcomment?pageNum=1')
      console.log(data);
    }
    getComment()
  }, [])

  return (
    <div className={style.container}>
      <div className={style.leftColumns}>
        <div className={style.title}>办事指南评分</div>
        <div className={style.rateContainer}>
          <div className={style.score}>{Math.round(chartData.avgScore*10)/10}</div>
          <div className={style.stars}><Rate disabled value={Math.round(chartData.avgScore*10)/10}></Rate></div>
        </div>
      </div>
      <div className={style.rightColumns}>
        <div className={style.title}>{chartData.totalNum}个评论</div>
        <div className={style.statistics} ref={chartRef}>
        </div>
      </div>
    </div>
  )
}