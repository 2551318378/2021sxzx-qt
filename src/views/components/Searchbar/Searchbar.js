import React from 'react'
import style from './SearchBar.module.scss'
import Logo from '../../../assets/logo.png'
import SearchBtn from '../../../assets/placeholder.png'
import { Link } from 'react-router-dom'

export default function SearchBar() {
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
                <input type='text' placeholder='事项咨询' className={style.searchinput} maxLength='15'/>
                <img src={SearchBtn} className={style.searchbtn}></img>
            </div>
        </div>


        </div>
    )}  