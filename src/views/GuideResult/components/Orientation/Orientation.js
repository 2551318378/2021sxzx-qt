import React, { useState, useEffect } from 'react'
import style from './Orientation.module.scss'
import { useLocation, useHistory } from 'react-router-dom'
import { GetItems, GetRegionPaths, GetRulePaths } from '../../../../api/navigationApi';

export default function Orientation() {
    const hint = '您属于情况：';
    const subStartIndex = '/v1/taskResult/'.length;
    const location = useLocation();
    const history = useHistory();
    const [ruleSelected, setRuleSelected] = useState([]);
    const [regionSelected, setRegionSelected] = useState([]);

    var req;

    /* 结果页面初始化：
        1. 导航页面进入(有数据列表)
        2. 其他情况(只有task_code)
    */
    useEffect(() => {
        if (location.state) {
            setRuleSelected(location.state.ruleSelected);
            setRegionSelected(location.state.regionSelected);
        } else {
            console.log(location.pathname.substring(subStartIndex));
            let taskCode = location.pathname.substring(subStartIndex);
            // 获取rule_id和region_id
            req = {
                task_code: taskCode
            }
            GetItems(req).then(res => {
                let ruleId = res.data.data[0].rule_id;
                let regionId = res.data.data[0].region_id;
                
                req = {
                    rule_id: [ruleId]
                }
                GetRulePaths(req).then(res => {
                    // 去除第一项“分类规则标准”
                    setRuleSelected(res.data.data[ruleId].filter((_, i) => i > 0));
                })

                req = {
                    region_id: [regionId]
                }
                GetRegionPaths(req).then(res => {
                    setRegionSelected(res.data.data[regionId]);
                })
            })
            
            
        }
        // eslint-disable-next-line
    }, []) 


    const handleClickStepRule = (item, index) => {
        history.push({
            pathname: '/navigation',
            state: { 
                type: 1, 
                ruleSelected: ruleSelected, 
                regionSelected: regionSelected,
                clickItem: item,
                clickIndex: index
            }
        })
    }

    const handleClickStepRegion = (item, index) => {
        if (index !== regionSelected.length-1) {
            history.push({
                pathname: '/navigation',
                state: { 
                    type: 2, 
                    ruleSelected: ruleSelected, 
                    regionSelected: regionSelected,
                    clickItem: item,
                    clickIndex: index
                }
            })
        }  
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