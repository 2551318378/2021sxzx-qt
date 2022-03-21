import React, { useState } from 'react'
import style from './SearchBar.module.scss'
import { Link, useHistory } from 'react-router-dom'
import { message } from 'antd'
import { Images } from '../../../assets'

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
        if (e.keyCode === 13) {
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
                <a target='_blank' rel='noreferrer'  
                    href='https://www.gdzwfw.gov.cn/?isLogin=false'>
                    <div className={style.provservice}>电子政务检索系统</div>
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