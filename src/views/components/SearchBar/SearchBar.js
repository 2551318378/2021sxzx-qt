import React, { useState } from 'react'
import style from './SearchBar.module.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { message } from 'antd'
import { Images } from '../../../assets'

export default function SearchBar() {
    const history = useHistory();
    const location = useLocation();
    const [searchWord, setSearchWord] = useState('');

    const handleChangeWord = (e) => {
        setSearchWord(e.target.value);
    }
    const handleClickSearchBtn = () => {
        getSearchInfo();
    }
    const handleEnterSearch = (e) => {
        if (e.keyCode === 13) {
            getSearchInfo();
        }
    }
    const getSearchInfo = () => {
        if (searchWord) {
            console.log(searchWord);
            history.push({
                pathname: '/searchPage',
                state: { inputValue: searchWord }
            })
            console.log(location.pathname);
        } else {
            message.error('请输入咨询关键词');
        }
    }
    return (
        <div className={style.outer_shadow}>     
            <div className={style.container}>
                <Link to='/home'>
                    <img src={Images.common.ic_placeholder} alt='logo' className={style.logo}></img>
                </Link>
                <Link to='/home'>
                    <div className={style.homepage}>首页</div>
                </Link>
                <div className={style.dropdown}>
                    <div className={style.consultmenu}>事项咨询</div>
                    <div className={style.menu}>
                        <p>个人业务</p>
                        <p>法人业务</p>
                        <p>事业单位业务</p>
                    </div>
                </div>
                <a target='_blank' rel='noreferrer'  
                    href='https://www.gdzwfw.gov.cn/?isLogin=false'>
                    <div className={style.provservice}>省政务服务</div>
                </a> 
                <div className={style.searchbox}>
                    <input 
                        type='text'
                        maxLength='15' 
                        placeholder='事项咨询' 
                        className={style.searchinput} 
                        onChange={e => handleChangeWord(e)}
                        onKeyDown={e => handleEnterSearch(e)}/>
                    <img 
                        alt='搜索按钮'
                        src={Images.common.ic_search} 
                        className={style.searchbtn}
                        onClick={handleClickSearchBtn}/>
                </div>
            </div>
        </div>
    )}  