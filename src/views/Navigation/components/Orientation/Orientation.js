import React from 'react'
import style from './Orientation.module.scss'
import { Link } from 'react-router-dom'

export default function Orientation() {
    return (
        <div className={style.container}>
            <p className={style.p_situation}>您属于情况：</p>
            <div className={style.situation}>
                <div className={style.outer_div}>
                    <div className={style.desc}>业务类型</div>
                    <div className={style.inner_div}>个人业务</div>
                </div>
                <label></label>
                <div className={style.outer_div}>
                    <div className={style.desc}>事项类型</div>
                    <div className={style.inner_div}>社会保险</div>
                </div>
                <label></label>
                <div className={style.outer_div}>
                    <div className={style.desc}>事项属于</div>
                    <div className={style.inner_div}>社会保障卡业务</div>
                </div>
                <label></label>
                <div className={style.outer_div}>
                    <div className={style.desc}>事项为</div>
                    <div className={style.inner_div}>社保卡遗失补办</div>
                </div>
                <label></label>
                <div className={style.outer_div}>
                    <div className={style.desc}>事项划分</div>
                    <div className={style.inner_div}>区级</div>
                </div>
            </div>
            <div className={style.select_box}>
                <div className={style.select_item}>养老保险</div>
                <div className={style.select_item}></div>
                <div className={style.select_item}></div>
                <div className={style.select_item}></div>
            </div>
            <Link to='/home'>
                <div className={style.homeBtn}>
                    回到首页
                </div>
            </Link>
        </div>
    )}