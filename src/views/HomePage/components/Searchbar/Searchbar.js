import React from 'react'
import style from './Searchbar.module.scss'
import Logo from '../../../../assets/logo.png'
import SearchBtn from '../../../../assets/placeholder.png'

export default function Searchbar() {
    return (
        <div className={style.container}>
            <img src={Logo} className={style.logo}></img>
            <div className={style.homepage}>首页</div>
            <div className={style.consultmenu}>事项咨询</div>
            <div className={style.provservice}>省政务服务</div>
            <div className={style.searchbox}>
                <input type='text' placeholder='事项咨询' className={style.searchinput} maxLength='15'/>
                <img src={SearchBtn} className={style.searchbtn}></img>
            </div>
        </div>
    )}  