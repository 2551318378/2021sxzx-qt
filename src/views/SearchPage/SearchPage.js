    import './Search.scss' 
    import React, {useEffect, useRef, useState} from "react";
    // import axios from "../../http/http";
    import style from "../SearchPage/SearchPage.module.scss";
    import SearchItem from "./components/SearchItem";
    import HotList from "./components/HotList";
    import {Input, Radio, AutoComplete, Button, message, Pagination, Modal} from 'antd';
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
        const [areaModalVisible, setAreaModalVisible] = useState(false)
        const [areaModalData, setAreaModalData] = useState({area:[]})
        const location=useLocation()
        const [searchList, setSearchList] = useState([
            {
                title: "请输入咨询关键词",
                link: "",
                content: "",
                date: "",
                area: "",
            },
        ]);
        const [showSearchList, setShowSearchList] = useState([
            {
                title: "请输入咨询关键词",
                link: "",
                content: "",
                date: "",
                area: [],
            },
        ]);
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
                if(keywordRes != null && keywordRes.length>0) {
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

                searchMode:"score",
                contentMode:contentValue,
                timeFilter:timeValue
            }

            GetSearchRes(data).then((res)=>{
                let searchRes=res.data.data
                //console.log(searchRes)
                //searchRes=washSearchData(searchRes)
                console.log("search:",searchRes)
                setSearchList(searchRes)
                setShowSearchList(searchRes.slice(0,10))
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

        const changePageNumber=(pageNumber)=>{
            let show=searchList.slice(10*(pageNumber-1),10*pageNumber)
            setShowSearchList(show)
        }

        const getAreaData=(data)=>{
            setAreaModalData(data)
            setAreaModalVisible(true)
        }

        const handleAreaModalOk=()=>{
            setAreaModalVisible(false)
        }

        const handleAreaModalCancel=()=>{
            setAreaModalVisible(false)
        }

        const handleClickItem=(item,title)=>{
            if (item.children.area.length==0){
                addOneClick(title)
                window.open(item.link, '_self');
            }else{
                setAreaModalData(item.children)
            }

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
            <>
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
                                {/* <div className='subContainer'><Radio.Group options={sortOptions} onChange={sortOnChange} value={sortValue} optionType="button"
                                                                           buttonStyle="solid" className='searchOption'/></div> */}
                                <div className='subContainer'><Radio.Group options={contentOptions} onChange={contentOnChange} value={contentValue} optionType="button"
                                                                           buttonStyle="solid" className='searchOption'/></div>
                                <div className='subContainer'><Radio.Group options={timeOptions} onChange={timeOnChange} value={timeValue} optionType="button"
                                                                           buttonStyle="solid" className='searchOption'/></div>
                            </div>
                            <div className={style.mainContainer}>
                                <div className={style.searchListContainer}>
                                    {showSearchList.map((item)=>{
                                        return(
                                            <SearchItem data={item} handler={addOneClick} setAreaData={getAreaData}></SearchItem>
                                        )
                                    })}
                                </div>
                                <div className={style.hotListContainer}>
                                    <HotList wordList={hotList} handler={handleHotList}></HotList>
                                </div>
                            </div>
                            <div>
                                <Pagination showQuickJumper showSizeChanger={false} defaultCurrent={1} total={searchList.length} onChange={changePageNumber}/>
                            </div>
                        </div>
                    </div>
                    <FooterInfo></FooterInfo>
                </div>
                <Modal title="请选择办事情景" visible={areaModalVisible} onOk={handleAreaModalOk} onCancel={handleAreaModalCancel}>
                    {areaModalData.area.map(item=>{
                        return(
                            <>
                                <Button onClick={()=>{handleClickItem(item,areaModalData.title)}}>{item.name}</Button>
                            </>
                        )
                    })}
                </Modal>
            </>


        )
    }
