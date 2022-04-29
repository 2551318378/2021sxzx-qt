import React, { useEffect, useState } from 'react'
import style from './SearchBar.module.scss'
import { Link, useHistory } from 'react-router-dom'
import { message } from 'antd'
import { Images } from '../../../assets'
import { GetImages } from '../../../api/imageApi'

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
            history.push({
                pathname: '/searchPage',
                state: { inputValue: searchWord }
            })
        } else {
            message.error('请输入咨询关键词');
        }
    }

    const loadImg = (imgName) => {
        let req = {
            name: imgName
        }
        GetImages(req).then(res => {
            console.log(res);
            // var buf = res.data.data;
            // var reader = new FileReader();
            // buffer-> arraybuffer -> blob
            // var b = new Blob([buf.buffer], {type:"img/png"});
            // reader.readAsDataURL(res.data.data);
        })
    }

    useEffect(() => {
        loadImg('ic_logo.png');
    }, [])

    return (
        <div className={style.outerShadow}>     
            <div className={style.container}>
                <Link to='/home'>
                    <img src={Images.common.icPlaceholder} className={style.logo}></img>
                </Link>
                <Link to='/home'>
                    <div className={style.homepage}>首页</div>
                </Link>
                <div className={style.dropdown}>
                    <div className={style.consultMenu}>事项咨询</div>
                    <div className={style.menu}>
                        <p>个人业务</p>
                        <p>法人业务</p>
                        <p>事业单位业务</p>
                    </div>
                </div>
                <a target='_blank' rel='noreferrer'  
                    href='https://www.gdzwfw.gov.cn/?isLogin=false'>
                    <div className={style.provService}>省政务服务</div>
                </a> 
                <div className={style.searchBox}>
                    <input 
                        type='text'
                        maxLength='15' 
                        placeholder='事项咨询' 
                        className={style.searchInput} 
                        onChange={e => handleChangeWord(e)}
                        onKeyDown={e => handleEnterSearch(e)}/>
                    <img 
                        src={Images.common.icSearch} 
                        className={style.searchBtn}
                        onClick={handleClickSearchBtn}/>
                </div>
            </div>
        </div>
    )}  