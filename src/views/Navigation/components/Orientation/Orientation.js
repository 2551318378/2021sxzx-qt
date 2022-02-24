import React, { useEffect, useState } from 'react'
import style from './Orientation.module.scss'
import { Link, useLocation, useHistory } from 'react-router-dom'
import axios from '../../../../api/http'

export default function Orientation() {
    const history = useHistory();

    let tmplist = [];
    
    const location = useLocation();

    const [stepValue, setStepValue] = useState(3); 
    const [optionList, setOptionList] = useState([]);
    const [stepOption1, setStepOption1] = useState({rule_id: location.state? location.state.parentRuleId : '1'});
    const [stepOption2, setStepOption2] = useState({rule_id: location.state? location.state.childRuleId : '4'});
    const [stepOption3, setStepOption3] = useState({});
    const [stepOption4, setStepOption4] = useState({});
    const [stepOption5, setStepOption5] = useState({});
     
    const handleStepChange = (stepValue) => {
        setStepValue(stepValue);
    }

    // 开始只执行一次
    useEffect(() => {   
        var data = [];
        var parentId = '';
        if (stepOption1.rule_name == null && stepOption2.rule_name == null) {
            axios.post('/v1/getRules',{
                rule_id: stepOption1.rule_id
            }).then(res => {
                data = res.data.data[0];
                setStepOption1(data);
                console.log(data);
            }).catch((res)=>{
                // console.log(res);
            })

            axios.post('/v1/getRules',{
                rule_id: stepOption2.rule_id
            }).then(res => {
                data = res.data.data[0];
                setStepOption2(data);
            }).catch((res)=>{
                // console.log(res);
            })
        }
        if (stepValue == 5) {
            tmplist.push({rule_name:'市级'});
            tmplist.push({rule_name:'区级'});
            setOptionList(tmplist);
            // console.log(optionList);
        } else {
            switch (stepValue) {
                case 1:
                    parentId = '0'; break;
                case 2: 
                    parentId = stepOption1.rule_id; break;
                case 3:
                    parentId = stepOption2.rule_id; break;
                case 4:
                    parentId = stepOption3.rule_id; break;
            }
            // console.log(parentId);
            axios.post('/v1/getRules',{
                parentId: parentId
            }).then(res => {
                data = res.data.data;
                // console.log(data);
                data.map((item)=> {
                    tmplist.push(item);
                })
                setOptionList(tmplist);
            }).catch((res)=>{
                // console.log(res);
            })
        }
           
        
    })

    const handleItemClick = (item) => {
        switch(stepValue) {
            case 1: 
                setStepOption1(item); 
                setStepValue(stepValue + 1);
                break;
            case 2: 
                setStepOption2(item); 
                setStepValue(stepValue + 1);
                break;
            case 3: 
                setStepOption3(item); 
                setStepValue(stepValue + 1);
                break;
            case 4: 
                setStepOption4(item); 
                setStepValue(stepValue + 1);
                break;
            case 5: 
                setStepOption5(item); 
                setTimeout(() => {
                    history.push({ 
                        pathname: "/v1/taskResult", 
                        state: {
                            step1: stepOption1,
                            step2: stepOption2,
                            step3: stepOption3,
                            step4: stepOption4,
                            step5: item
                        } 
                    })
                 }, 500);
                // history.push({ 
                //     pathname: "/v1/taskResult", 
                //     state: {
                //         step1: stepOption1,
                //         step2: stepOption2,
                //         step3: stepOption3,
                //         step4: stepOption4,
                //         step5: stepOption5
                //     } 
                // })
        }
        // if (stepValue == 5) {
        //     history.push({ 
        //         pathname: "/v1/taskResult", 
        //         state: {
        //             step1: stepOption1,
        //             step2: stepOption2,
        //             step3: stepOption3,
        //             step4: stepOption4,
        //             step5: stepOption5
        //         } 
        //     })
        // }
    }

    return (
        <div className={style.container}>
            <p className={style.p_situation}>您属于情况：</p>
            <div className={style.situation}>
                <div className={style.outer_div} 
                    onClick={handleStepChange.bind(this,1)}>
                    <div className={style.desc}>业务类型</div>
                    <div className={style.inner_div}>{ stepOption1.rule_name }</div>
                </div>
                <label  className={stepValue<1? style.hidden:null}></label>
                <div className={`${style.outer_div} ${stepValue<2? style.hidden:null}`}
                    onClick={handleStepChange.bind(this,2)}>
                    <div className={style.desc}>事项类型</div>
                    <div className={style.inner_div}>{ stepOption2.rule_name }</div>
                </div>
                <label  className={stepValue<2? style.hidden:null}></label>
                <div className={`${style.outer_div} ${stepValue<3? style.hidden:null}`} 
                    onClick={handleStepChange.bind(this,3)}>
                    <div className={style.desc}>事项属于</div>
                    <div className={style.inner_div}>{ stepOption3.rule_name }</div>
                </div>
                <label className={stepValue<3? style.hidden:null}></label>
                <div className={`${style.outer_div} ${stepValue<4? style.hidden:null}`} 
                    onClick={handleStepChange.bind(this,4)}>
                    <div className={style.desc}>事项为</div>
                    <div className={style.inner_div}>{ stepOption4.rule_name }</div>
                </div>
                <label className={stepValue<4? style.hidden:null}></label>
                <div className={`${style.outer_div} ${stepValue<5? style.hidden:null}`} 
                    onClick={handleStepChange.bind(this,5)}>
                    <div className={style.desc}>事项划分</div>
                    <div className={style.inner_div}>{ stepOption5.rule_name }</div>
                </div>
            </div>
            <div className={style.select_box} >
                {
                    optionList.map((item)=>{
                    return(
                        <div className={style.select_item}
                            onClick={ handleItemClick.bind(this, item) }>
                            {item.rule_name}
                        </div>
                        )
                    })
                }
            </div>
            <Link to='/home'>
                <div className={style.homeBtn}>
                    回到首页
                </div>
            </Link>
        </div>
    )}