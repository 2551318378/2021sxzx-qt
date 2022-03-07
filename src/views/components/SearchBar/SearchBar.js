import React, { useState } from 'react'
import style from './SearchBar.module.scss'
import Logo from '../../../assets/logo.png'
import SearchBtn from '../../../assets/icon_searchbtn.png'
import { Link, useHistory } from 'react-router-dom'
import { message } from 'antd'

export default function SearchBar() {
    const history = useHistory();
    const [searchWord, setSearchWord] = useState('');

    const handleChangeWord = (e) => {
        setSearchWord(e.target.value);
    }
    const handleClickSearchBtn = () => {
        getSearchInfo();
    }
    const handleEnterSearch = (e) => {
        if (e.keyCode == 13) {
            getSearchInfo();
        }
    }
    const getSearchInfo = () => {
        if (searchWord) {
            console.log(searchWord);
            // 只传关键词？还是带数据
            history.push({
                pathname: '/searchPage',
                state: { inputValue: searchWord }
            })
        } else {
            message.error('请输入咨询关键词');
        }
    }
    return (
        <div className={style.outer_shadow}>
            
        <div className={style.container}>
            <img src={Logo} className={style.logo}></img>
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
            <div className={style.provservice}>省政务服务</div>
            <div className={style.searchbox}>
                <input 
                    type='text'
                    maxLength='15' 
                    placeholder='事项咨询' 
                    className={style.searchinput} 
                    onChange={e => handleChangeWord(e)}
                    onKeyDown={e => handleEnterSearch(e)}/>
                <img 
                    src={SearchBtn} 
                    className={style.searchbtn}
                    onClick={handleClickSearchBtn}/>
            </div>
        </div>


        </div>
    )}  