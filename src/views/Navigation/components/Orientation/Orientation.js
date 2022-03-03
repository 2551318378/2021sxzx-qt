import React, { useEffect, useState } from 'react'
import style from './Orientation.module.scss'
import { Link, useLocation, useHistory } from 'react-router-dom'
import axios from '../../../../api/http'


export default function Orientation() {
    const hint = '您属于情况：';
    const location = useLocation();
    const history = useHistory();
    
    const [stepNum, setStepNum] = useState(0);
    const [isRuleFinish, setIsRuleFinish] = useState(false);
    const [isRegionFinish, setIsRegionFinish] = useState(false);
    const [ruleSelected, setRuleSelected] = useState([]);
    const [regionSelected, setRegionSelected] = useState([]);
    const [optionList, setOptionList] = useState([]);
    
    var lastRegionIndex = 0;
    var nextParentRuleId = '0';
    var data = [];
    var taskCode = '';

    const handleClickStepRule = (item, index) => {
        console.log('click index: ', index);
        console.log('rule click: ', item, index);
        setIsRuleFinish(false);
        // setRuleSelected(data);
        // setStepNum(index);
        // nextParentRuleId = ruleSelected[index-1] ? ruleSelected[index-1].rule_id : '0';
        // // console.log('nextParentRuleId', nextParentRuleId);
    }
    const handleClickStepRegion = (item, index) => {
        console.log('region click: ', item, index);
    }

    const handleClickOption = (item) => {
        setStepNum(stepNum+1);
        if (!isRuleFinish) {
            setRuleSelected([...ruleSelected, item]);
            axios.post('/v1/getRules',{
                parentId: item.rule_id
            }).then(res => {
                data = res.data.data;
                if (!data[0]) {
                    setIsRuleFinish(true);
                    axios.post('/v1/getRegions', {
                        parentId: ""
                    }).then(res => {
                        data = res.data.data;
                        setOptionList(data);
                    })
                } else {
                    setOptionList(data);
                }
            }).catch((res)=>{
                console.log(res);
            })
        } else {
            setRegionSelected([...regionSelected, item]);
            // console.log(item);
            axios.post('/v1/getRegions',{
                parentId: item.region_id
            }).then(res => {
                data = res.data.data;
                setOptionList(data);
                if (!data[0]) {
                    setIsRegionFinish(true);
                    handleForTaskCode(item);
                }
            }).catch((res)=>{
                console.log(res);
            })
        }
    }

    // 处理数据获取taskcode并跳转
    const handleForTaskCode = (item) => {
        var tItemRuleId;
        axios.post('/v1/getItemRules', {
            rule_id: ruleSelected[ruleSelected.length-1].rule_id,
            region_id: '1'
        }).then(res => {
            tItemRuleId = res.data.data[0].item_rule_id;
            axios.post('/v1/getItems', {
                item_rule_id: tItemRuleId
            }).then(res =>{
                taskCode = res.data.data[0].task_code;
                console.log("/v1/taskResult/"+taskCode);
                setTimeout(() => {
                    history.push({
                        pathname: "/v1/taskResult/"+taskCode,
                        state: { 
                            ruleSelected: ruleSelected,
                            regionSelected: [...regionSelected, item]
                            }
                    })
                }, 300);
            }).catch(res => {
                console.log(res);
            })
        }).catch(res => {
            console.log(res);
        })
        


    }


    const init = () => {
        if (location.state) {
            const homeRuleSelected = location.state.homeRuleSelected;
            const homeSecondRuleId = location.state.secondRuleId;
            setRuleSelected(homeRuleSelected);
            setStepNum(homeRuleSelected);
            axios.post('/v1/getRules',{
                parentId: homeSecondRuleId
            }).then(res => {
                data = res.data.data;
                setOptionList(data);
            }).catch((res)=>{
                console.log(res);
            })
        } else {
            axios.post('/v1/getRules',{
                parentId: '0'
            }).then(res => {
                data = res.data.data;
                setOptionList(data);
            }).catch((res)=>{
                console.log(res);
            })
        }
        
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
                            <div className={style.selectedBox} key={index} onClick={handleClickStepRule.bind(this, item, index)}>
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
                        if (isRuleFinish) {
                            return (
                                <div className={style.selectedBox} key={index} onClick={handleClickStepRegion.bind(this, item, index)}>
                                    <div className={style.outer}>
                                        <div className={style.desc}>
                                            { item.region_name }
                                        </div>
                                    </div>
                                    {/* <div className={`${style.separator} ${index == lastRegionIndex? style.hidden:null}`}></div> */}
                                    <div className={style.separator}></div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className={style.optionContainer}>
                {
                    optionList.map((item) => {
                        if (!isRuleFinish) {
                        return (
                            <div className={style.optionBox}
                                onClick={handleClickOption.bind(this, item)}>
                                { item.rule_name }
                            </div>
                        )} else {
                            return (
                                <div className={style.optionBox}
                                onClick={handleClickOption.bind(this, item)}>
                                { item.region_name }
                            </div>
                            )
                        }
                    })
                }
            </div>
            <Link to='/home'>
                 <div className={style.homeBtn}>
                     回到首页
                 </div>
            </Link>
        </div>
    )
}