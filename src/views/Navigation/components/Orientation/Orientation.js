import React, { useEffect, useState } from 'react'
import style from './Orientation.module.scss'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Spin } from 'antd'
import axios from '../../../../api/http'
import { GetRules, GetRegions, GetItemRules, GetItems } from '../../../../api/navigationApi'


export default function Orientation() {
    const hint = '您属于情况：';
    const location = useLocation();
    const history = useHistory();
    
    const [isRuleFinish, setIsRuleFinish] = useState(false);
    const [isRegionFinish, setIsRegionFinish] = useState(false);
    const [ruleSelected, setRuleSelected] = useState([]);
    const [regionSelected, setRegionSelected] = useState([]);
    const [optionList, setOptionList] = useState([]);

    var req = {};
    var data = [];

    const handleClickStepRule = (item, index) => {
        setRegionSelected([]);
        setIsRegionFinish(false);
        if (index === ruleSelected.length-1) {
            // req = {
            //     parentId: ""
            // };
            // GetRegions(req).then(res => {
            //     setOptionList(res.data.data);
            // })
            axios.post('/v1/getRegions', {
                parentId: ""
            }).then(res => {
                data = res.data.data;
                setOptionList(data);
            })
        } else {
            setIsRuleFinish(false);
            // req = {
            //     parentId: item.rule_id
            // };
            // GetRules(req).then(res => {
            //     setOptionList(res.data.data);
            // });
            axios.post('/v1/getRules', {
                parentId: item.rule_id
            }).then(res => {
                data = res.data.data;
                setOptionList(data);
            }).catch(res => {
                console.log(res);
            })
            setRuleSelected(ruleSelected.filter((_, i) => i <= index));
        }  
    }

    const handleClickStepRegion = (item, index) => {
        setIsRegionFinish(false);
        // req = {
        //     parentId: item.region_id
        // };
        // GetRegions(req).then(res => {
        //     setOptionList(res.data.data);
        // })
        axios.post('/v1/getRegions', {
            parentId: item.region_id
        }).then(res => {
            data = res.data.data;
            setOptionList(data);
        }).catch(res => {
            console.log(res);
        })
        setRegionSelected(regionSelected.filter((_, i) => i <= index));
    }

    const handleClickOption = (item) => {
        if (!isRuleFinish) {
            setRuleSelected([...ruleSelected, item]);
            // req = {
            //     parentId: item.rule_id
            // };
            // GetRules(req).then(res => {
            //     data = res.data.data;
            //     if (!data[0]) {
            //         setOptionList([]);
            //         setIsRuleFinish(true);
            //         req = {
            //             parentId: ""
            //         };
            //         GetRegions(req).then(res => {
            //             data = res.data.data;
            //         })
            //     } 
            //     setOptionList(data);
            // })
            axios.post('/v1/getRules',{
                parentId: item.rule_id
            }).then(res => {
                data = res.data.data;
                if (!data[0]) {
                    setOptionList([]);
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
            // req = {
            //     parentId: item.region_id
            // };
            // GetRegions(req).then(res => {
            //     data = res.data.data;
            //     setOptionList(data);
            //     if (!data[0]) {
            //         setIsRegionFinish(true);
            //         handleForTaskCode(item);
            //     }
            // })
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
        let tmpItemRuleId;
        let taskCode;
        // // 获取item_rule_id
        // req = {
        //     rule_id: ruleSelected[ruleSelected.length-1].rule_id,
        //     region_id: '1'
        // };
        // GetItemRules(req).then(res => {
        //     tmpItemRuleId = res.data.data[0].item_rule_id;
        // });
        // // 获取task_code
        // req = {
        //     item_rule_id: tmpItemRuleId
        // };
        // GetItems(req).then(res => {
        //     taskCode = res.data.data[0].task_code;
        // })
        // // 跳转
        // history.push({
        //     pathname: "/v1/taskResult/" + taskCode,
        //     state: { 
        //         ruleSelected: ruleSelected,
        //         regionSelected: [...regionSelected, item]
        //         }
        // })

        axios.post('/v1/getItemRules', {
            rule_id: ruleSelected[ruleSelected.length-1].rule_id,
            region_id: '1'
        }).then(res => {
            tmpItemRuleId = res.data.data[0].item_rule_id;
            axios.post('/v1/getItems', {
                item_rule_id: tmpItemRuleId
            }).then(res =>{
                taskCode = res.data.data[0].task_code;
                history.push({
                    pathname: "/v1/taskResult/" + taskCode,
                    state: { 
                        ruleSelected: ruleSelected,
                        regionSelected: [...regionSelected, item]
                        }
                })
            }).catch(res => {
                console.log(res);
            })
        }).catch(res => {
            console.log(res);
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
                // req = {
                //     parentId: tmpRuleSelected[tmpRuleSelected.length-1].rule_id
                // };
                // GetRules(req).then(res => {
                //     setOptionList(res.data.data);
                // })
                axios.post('/v1/getRules',{
                    parentId: tmpRuleSelected[tmpRuleSelected.length-1].rule_id
                }).then(res => {
                    data = res.data.data;
                    setOptionList(data);
                }).catch((res)=>{
                    console.log(res);
                })
            } else {
                setRuleSelected(location.state.ruleSelected);
                setRegionSelected(location.state.regionSelected);
                let item = location.state.clickItem;
                let index = location.state.clickIndex;
                if (type === 1) {
                    handleClickStepRule(item, index);
                }
                if (type === 2) {
                    handleClickStepRegion(item, index);
                }
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
                                    <div className={`${style.separator} ${isRegionFinish && index === regionSelected.length-1? style.hidden:null}`}></div>
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