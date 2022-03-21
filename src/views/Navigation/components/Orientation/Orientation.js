import React, { useEffect, useState } from 'react'
import style from './Orientation.module.scss'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Spin, message } from 'antd'
import { GetRules, GetRegions, GetItems, GetChildRegionsByRuleAndRegion } from '../../../../api/navigationApi'


export default function Orientation() {
    const hint = '您属于情况：';
    const location = useLocation();
    const history = useHistory();
    
    // const [clickEnable, setClickEnable] = useState(true);
    const [isRuleFinish, setIsRuleFinish] = useState(false);
    const [isRegionFinish, setIsRegionFinish] = useState(false);
    const [ruleSelected, setRuleSelected] = useState([]);
    const [regionSelected, setRegionSelected] = useState([]);
    const [optionList, setOptionList] = useState([]);

    var req = {};
    var data = [];

    const getFirstRegion = () => {
        req = {
            parentId: ""
        }
        GetRegions(req).then(res => {
            setOptionList(res.data.data);
        })
    }

    const handleClickStepRule = (item, index) => {
        setRegionSelected([]);
        setIsRegionFinish(false);
        if (index === ruleSelected.length-1) {
            getFirstRegion();
        } else {
            setIsRuleFinish(false);
            req = {
                parentId: item.rule_id
            }
            GetRules(req).then(res => {
                setOptionList(res.data.data);
            })
            setRuleSelected(ruleSelected.filter((_, i) => i <= index));
        }  

    }

    const handleClickStepRegion = (item, index) => {
        console.log(item, index);     
        setIsRegionFinish(false);
        req = {
            rule_id: ruleSelected[ruleSelected.length-1].rule_id,
            region_id: item.region_id
        }
        GetChildRegionsByRuleAndRegion(req).then(res => {
            setOptionList(res.data.data);
        })
        setRegionSelected(regionSelected.filter((_, i) => i <= index));
    }

    const handleClickOption = (item) => {
        if (!isRuleFinish) {
            setRuleSelected([...ruleSelected, item]);
            req = {
                parentId: item.rule_id
            }
            GetRules(req).then(res => {
                data = res.data.data;
                if (!data[0]) {
                    setOptionList([]);
                    setIsRuleFinish(true);
                    getFirstRegion();
                } else {
                    setOptionList(data);
                }
            })
        } else {
            setRegionSelected([...regionSelected, item]);
            req = {
                rule_id: ruleSelected[ruleSelected.length-1].rule_id,
                region_id: item.region_id
            }
            GetChildRegionsByRuleAndRegion(req).then(res => {
                data = res.data.data;
                console.log(res.data.data);
                setOptionList(data);
                if (!data[0]) {
                    setIsRegionFinish(true);
                    handleForTaskCode(item);
                }
            })
        }
        
    }

    // 处理数据获取taskcode并跳转
    const handleForTaskCode = (item) => {
        req = {
            rule_id: ruleSelected[ruleSelected.length-1].rule_id,
            // region_id: item.region_id      //  区划id
            region_id: '440115000000'      // 南沙区
        }
        GetItems(req).then(res => {
            console.log(res.data.data);
            // 跳转
            history.push({
                pathname: "/v1/taskResult/" + res.data.data[0].task_code,
                state: { 
                    ruleSelected: ruleSelected,
                    regionSelected: [...regionSelected, item]
                    }
                })
            })      

    }


    /* 导航页面初始化：
        1. 有初始数据 -> 处理渲染
            1.1 首页进入(type=0)
            1.2 结果回退
                1.2.1 事项回退(type=1)
                1.2.2 地区回退(type=2)
        2. 无初始数据 -> 重定向首页
    */    
    useEffect(() => {
        if (location.state) {
            let tmpRuleSelected = [];
            let type = location.state.type;

            if (type === 0) {
                tmpRuleSelected = location.state.ruleSelected;
                setRuleSelected(location.state.ruleSelected);
                req = {
                    parentId: tmpRuleSelected[tmpRuleSelected.length-1].rule_id
                }
                GetRules(req).then(res => {
                    setOptionList(res.data.data);
                })
            } else {
                setRuleSelected(location.state.ruleSelected);
                setRegionSelected(location.state.regionSelected);
                setIsRuleFinish(true);
                let item = location.state.clickItem;
                let index = location.state.clickIndex;
            }  
        } else {
            history.push('/home');
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={style.container}>
            <div className={style.hint}>{ hint }</div>
            <div className={style.selectedContainer}>
                {
                    ruleSelected&&ruleSelected.map((item, index) => {
                        return (
                            <div className={style.selectedBox} key={index} 
                                onClick={handleClickStepRule.bind(this, item, index)}>
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
                    regionSelected&&regionSelected.map((item, index) => {
                        if (isRuleFinish) {
                            return (
                                <div className={style.selectedBox} key={index} 
                                    onClick={handleClickStepRegion.bind(this, item, index)}>
                                    <div className={style.outer}>
                                        <div className={style.desc}>
                                            { item.region_name }
                                        </div>
                                    </div>
                                    <div className={`${style.separator} ${isRegionFinish && index === regionSelected.length-1? style.hidden:null}`}></div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className={style.optionContainer}>
                {
                    optionList&&optionList.map((item, index) => {
                        if (!isRuleFinish) {
                        return (
                            <div className={style.optionBox}
                                onClick={handleClickOption.bind(this, item)}>
                                { item.rule_name }
                            </div>
                        )} else {
                            return (
                                // <div className={`${style.optionBox} ${item.haveItem === 0?style.disable: null}`}
                                <div className={style.optionBox}
                                    onClick={handleClickOption.bind(this, item)}>
                                    { item.region_name }
                                </div>
                            )
                        }
                    })
                }
            </div>
            {
                <div className={style.loadingBox}>
                    <Spin spinning={ optionList.length === 0 }/>
                </div>
            }
            <Link to='/home'>
                 <div className={style.homeBtn}>
                    回到首页
                 </div>
            </Link>
        </div>
    )
}