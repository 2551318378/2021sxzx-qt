import React from 'react'
import style from './Orientation.module.scss'
import { useLocation } from 'react-router-dom'

export default function Orientation() {
    const location = useLocation();
    const step1 = location.state.step1;
    const step2 = location.state.step2;
    const step3 = location.state.step3;
    const step4 = location.state.step4;
    const step5 = location.state.step5;

    return (
        <div className={style.container}>
            <p>您属于情况：</p>
            <div className={style.situation}>
                <div className={style.outer_div}>
                    <div className={style.desc}>业务类型</div>
                    <div className={style.inner_div}>{ step1.rule_name }</div>
                </div>
                <label></label>
                <div className={style.outer_div}>
                    <div className={style.desc}>事项类型</div>
                    <div className={style.inner_div}>{ step2.rule_name }</div>
                </div>
                <label></label>
                <div className={style.outer_div}>
                    <div className={style.desc}>事项属于</div>
                    <div className={style.inner_div}>{ step3.rule_name }</div>
                </div>
                <label></label>
                <div className={style.outer_div}>
                    <div className={style.desc}>事项为</div>
                    <div className={style.inner_div}>{ step4.rule_name }</div>
                </div>
                <label></label>
                <div className={style.outer_div}>
                    <div className={style.desc}>事项划分</div>
                    <div className={style.inner_div}>{ step5.rule_name }</div>
                </div>
            </div>
        </div>
    )}