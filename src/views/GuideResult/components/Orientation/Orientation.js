import React, { useState, useEffect } from 'react'
import style from './Orientation.module.scss'
import { useLocation } from 'react-router-dom'
import axios from '../../../../api/http';

export default function Orientation() {
    const hint = '您属于情况：';
    const location = useLocation();
    const [ruleSelected, setRuleSelected] = useState(location.state? location.state.ruleSelected: []);
    const [regionSelected, setRegionSelected] = useState(location.state? location.state.regionSelected: []);
    // const [taskCode, setTaskCode] = useState("");
    // const [itemRuleId, setItemRuleId] = useState("");
    // const [itemRuleInfo, setItemRuleInfo] = useState([]);

    // 根据获取数据的不同，进行初始化
    // 1: ruleSelected + regionSelected -> item_rule_id -> taskCode
    // 2: taskCode -> ruleSelected + regionSelected
    const init = () => {
        // if (ruleSelected) {
        //     var tItemRuleId;
        //     // 目前只有区级事项
        //     axios.post('/v1/getItemRules', {
        //         rule_id: ruleSelected[ruleSelected.length-1].rule_id,
        //         region_id: "1"
        //     }).then(res => {
        //         tItemRuleId = res.data.data[0].item_rule_id;
        //         // setItemRuleId(tItemRuleId);
        //         // axios.post('/v1/getItems', {
        //         //     item_rule_id: tItemRuleId
        //         // }).then(res =>{
        //         //     // console.log(res.data.data[0]);
        //         //     setItemRuleInfo(res.data.data[0]);
        //         // }).catch(res => {
        //         //     console.log(res);
        //         // })
        //     }).catch(res => {
        //         console.log(res);
        //     })
        // } 
    }
    useEffect(() => {
        init();
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
                            <div className={style.selectedBox} key={index}>
                                <div className={style.outer}>
                                    <div className={style.desc}>
                                        { item.region_name }
                                    </div>
                                </div>
                                <div className={style.separator}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )}