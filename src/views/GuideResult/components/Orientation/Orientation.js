import React, { useState, useEffect } from 'react'
import style from './Orientation.module.scss'
import { useLocation } from 'react-router-dom'
// import axios from '../../../../api/http';

export default function Orientation() {
    const hint = '您属于情况：';
    const location = useLocation();
    const [ruleSelected, setRuleSelected] = useState(location.state? location.state.ruleSelected: []);
    const [regionSelected, setRegionSelected] = useState(location.state? location.state.regionSelected: []);

    const init = () => {
        console.log(regionSelected.length);
    }
    useEffect(() => {
        init();
        // eslint-disable-next-line
    }, []) 
    return (
        <div className={style.container}>
            <div className={style.hint}>{ hint }</div>
            <div className={style.selectedContainer}>
                {
                    ruleSelected.map((item, index) => {
                        return (
                            <div className={style.selectedBox} key={index}>
                                <div className={style.outer}>
                                    <div className={style.desc}>
                                        { item.rule_name }
                                    </div>
                                </div>
                                <div className={style.separator}></div>
                            </div>
                        )
                    })
                }
                {
                    regionSelected.map((item, index) => {
                        return (
                            <div className={style.selectedBox} 
                                key={index}>
                                <div className={style.outer}>
                                    <div className={style.desc}>
                                        { item.region_name }
                                    </div>
                                </div>
                                <div className={`${style.separator}  ${index === regionSelected.length-1? style.hidden: null}`}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )}