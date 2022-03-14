import React, { useState, useEffect } from 'react'
import style from './Orientation.module.scss'
import { useLocation, useHistory } from 'react-router-dom'
// import axios from '../../../../api/http';

export default function Orientation() {
    const hint = '您属于情况：';
    const location = useLocation();
    const history = useHistory();
    const [ruleSelected, setRuleSelected] = useState([]);
    const [regionSelected, setRegionSelected] = useState([]);

    useEffect(() => {
        if (location.state) {
            setRuleSelected(location.state.ruleSelected);
            setRegionSelected(location.state.regionSelected);
        } else {
            console.log(location.pathname);
            /* 
                task_code -> item_rule_id (/api/v1/getItemByUniId)
                item_rule_id -> rule_id + region_id (/api/v1/getItemRules)
                region_id[] -> regionList (/api/v1/getRegionPath)
                rule_id[] -> ruleList (/api/v1/getRulePath)
            */
        }
        // eslint-disable-next-line
    }, []) 


    const handleClickStepRule = (item, index) => {
        history.push({
            pathname: '/navigation',
            state: { 
                ruleSelected: ruleSelected.filter((_, i) => i <= index), 
                regionSelected: [],
                type: 1 
            }
        })
        // console.log(ruleSelected.filter((_, i) => i < index));
    }

    const handleClickStepRegion = (item, index) => {
        history.push({
            pathname: '/navigation',
            state: { 
                ruleSelected: ruleSelected, 
                regionSelected: regionSelected.filter((_, i) => i <= index),
                type: 1 
            }
        })
    }

    return (
        <div className={style.container}>
            <div className={style.hint}>{ hint }</div>
            <div className={style.selectedContainer}>
                {
                    ruleSelected.map((item, index) => {
                        return (
                            <div className={style.selectedBox} key={index}>
                                <div className={style.outer} onClick={handleClickStepRule.bind(this, item, index)}>
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
                                <div className={style.outer} onClick={handleClickStepRegion.bind(this, item, index)}>
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