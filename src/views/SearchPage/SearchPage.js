    import './Search.scss' 
    import React, {useEffect, useRef, useState} from "react";
    // import axios from "../../http/http";
    import style from "../SearchPage/SearchPage.module.scss";
    import SearchItem from "./components/SearchItem";
    import HotList from "./components/HotList";
    import {Input, Radio, AutoComplete, Button, message} from 'antd';
    // import { Select } from 'antd';
    import SearchBar from '../components/SearchBar/SearchBar'
    import FooterInfo from '../components/FooterInfo/FooterInfo'

    import {GetHotList, GetSearchRes, GetSearchWord, AddOneClick} from "../../api/searchApi";
    import {useLocation} from "react-router-dom";
    // const { Option } = Select;
    const sortOptions = [
        { label: '智能排序', value: 'score' },
        { label: '时间降序', value: 'ascendingTime' },
        { label: '时间升序', value: 'descendingTime' },

    ];
    const contentOptions = [
        { label: '标题或正文', value: 'all' },
        { label: '标题', value: 'title' },
        { label: '正文', value: 'content' },

    ];
    const timeOptions = [
        { label: '全部时间', value: 'all' },
        { label: '一天以内', value: 'day' },
        { label: '一周以内', value: 'week' },
        { label: '一月以内', value: 'month' },
        { label: '一年以内', value: 'year' },
    ];


    const washSearchData=(dataList)=>{
        dataList.map((item)=>{
            // item.title=item.title.substr(0,item.title.length-5)
            let materialTxt=''
            item.material.map((text)=>{materialTxt+=text})
            item.material=materialTxt
        })
        return dataList
    }

    export default function SearchPage() {
        const [sortValue, setSortValue] = useState('score')
        const [contentValue, setContentValue] = useState('all')
        const [timeValue, setTimeValue] = useState('all')
        const location=useLocation()
        const [searchList,setSearchList]=useState([
            {
                title:'岭南英杰工程”后备人才变动登记',
                link:'#/v1/taskResult/11440100696927671X344211190900001',
                material:"1.劳动能力鉴定（确认）申请表收取原件（正本）1份1、A4规格；2.申请人签名或单位盖章……",
                date: '2021-11-22 16:56:22',
                area: '广州市'
            },
            {
                title:'出版专业技术人员职业资格（初级、中级）考试报名',
                link:'#/v1/taskResult/11440100696927671X344211173600001',
                material:"1.劳动能力鉴定（确认）申请表收取原件（正本）1份1、A4规格；2.申请人签名或单位盖章……",
                date: '2021-10-15 18:54:21',
                area: '广州市'
            }
        ])
        const [hotList,setHotList]=useState([
        ])
        const [inputValue,setInputValue]=useState('')
        const [keywordList,setKeywordList]=useState([])
        const sortOnChange= e => {
            console.log('sortValue checked', e.target.value);
            setSortValue(e.target.value)
        };
        const timeOnChange= e => {
            console.log('timeValue checked', e.target.value);
            setTimeValue(e.target.value)
        };
        const contentOnChange= e => {
            console.log('contentValue checked', e.target.value);
            setContentValue(e.target.value)
        };

        const inputOnChange=e=>{
            setInputValue(e);
            getKeywordList(e)
        }
        const getKeywordList=(content)=>{  //获取搜索推荐词
            let data={
                keyword:content,

            }
            GetSearchWord(data).then(res=>{
                let keywordRes=res.data.data
                let final=[]
                if(keywordRes != null) {
                    keywordRes.map(item=>{final.push({value:item})})
                    console.log(final)
                    setKeywordList(final)
                }
            })



        }
        const handleSearch=(value)=>{
            if (!value) {
                message.error('请输入咨询关键词');
                return
            }
            let data={
                keyword:value,

                contentMode:contentValue,
                searchMode:sortValue,
                timeFilter:timeValue
            }

            GetSearchRes(data).then((res)=>{
                let searchRes=res.data.data

                searchRes=washSearchData(searchRes)
                console.log(searchRes)
                setSearchList(searchRes)
            })

        }

        const handleHotList=(keyword)=>{
            setInputValue(keyword)
            handleSearch(keyword)
        }

        const addOneClick=(keyword)=>{
            if (!keyword) {
                message.error('空事项指南');
                return
            }
            // console.log(keyword)
            // print(keyword)
            let data={
                event:keyword
            }
            console.log("早上好 ")
            console.log(data)
            AddOneClick(data).then((res)=>{
                // let searchRes=res.data.data
                console.log("Hello World")
                console.log(res)
            })

        }

        function useDidUpdateEffect(fn, inputs) {  //初次渲染不执行的useEffect
            const didMountRef = useRef(false);
            useEffect(() => {
                if (didMountRef.current) fn();
                else didMountRef.current = true;
            }, inputs);
        }

        useDidUpdateEffect(()=>{
            handleSearch(inputValue)
        },[timeValue,contentValue,sortValue])
        useEffect(()=>{

            if (location.state&&location.state.inputValue){
                setInputValue(location.state.inputValue)
                handleSearch(location.state.inputValue)
            }
            GetHotList().then(res=>{
                console.log(res)
                let final=[]
                res.data.data.map(item=>{
                    final.push({word:item[1],freq:item[0]})
                })
                console.log("res", res)
                console.log(final)
                setHotList(final)
            })
        },[])
        return (
            <div className={style.container}>
            <SearchBar></SearchBar>
            <div className={style.SearchPageContainer}>
                <div className={style.content}>
                    <Input.Group compact className='inputGroup'>
                        <span className='inputTitle'>全站搜索:</span>
                        <AutoComplete
                            className='autoComplete'
                            placeholder="请输入搜索关键词"
                            options={keywordList}
                            size="large"
                            onChange={inputOnChange}
                            value={inputValue}/>
                        <Button className='inputButton' size="large" type="primary" onClick={e=>{handleSearch(inputValue)}}>搜索</Button>

                    </Input.Group>
                    <div className='searchOptionContainer'>
                        <div className='subContainer'><Radio.Group options={sortOptions} onChange={sortOnChange} value={sortValue} optionType="button"
                                buttonStyle="solid" className='searchOption'/></div>
                        <div className='subContainer'><Radio.Group options={contentOptions} onChange={contentOnChange} value={contentValue} optionType="button"
                                buttonStyle="solid" className='searchOption'/></div>
                        <div className='subContainer'><Radio.Group options={timeOptions} onChange={timeOnChange} value={timeValue} optionType="button"
                                buttonStyle="solid" className='searchOption'/></div>
                    </div>
                    <div className={style.mainContainer}>
                        <div className={style.searchListContainer}>
                            {searchList.map((item)=>{
                                return(
                                    <SearchItem content={item.content} link={item.link} title={item.title} date={item.area + " " + item.date} handler={addOneClick}></SearchItem>
                                )
                            })}
                        </div>
                        <div className={style.hotListContainer}>
                            <HotList wordList={hotList} handler={handleHotList}></HotList>
                        </div>
                    </div>
                </div>
            </div>
            <FooterInfo></FooterInfo>
            </div>
        )
    }
