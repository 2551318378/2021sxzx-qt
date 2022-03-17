import React, { useEffect, useState } from 'react'
import style from './Maincontent.module.scss'
import { Images } from '../../../../assets'
import { Link, useHistory } from 'react-router-dom'
import { GetRules } from '../../../../api/navigationApi'
import axios from '../../../../api/http'

export default function Maincontent() {
    const history = useHistory();
    const [parentRuleIdIndex, setParentRuleIdIndex] = useState(0);
    const [parentRuleList, setParentRuleList] = useState([]);
    const [childRuleList, setChildRuleList] = useState([[]]);

    var picSrc;

    useEffect(() => {
        let tmpList = [];
        let data = [];
        let req;
        // 获取第一级事项（父事项）
        req = {
            parentId : '0'
        }
        GetRules(req).then(res => {
            data = res.data.data;
            setParentRuleList(data);
            // 获取第二级事项（子事项）
            data.map(item => {
                req = {
                    parentId : item.rule_id
                }
                GetRules(req).then(res => {
                    tmpList.push(res.data.data);
                    setChildRuleList(tmpList);
                })
            });
        });
        // eslint-disable-next-line
    }, [])
    
    const handleParentClick = (index) => {
        setParentRuleIdIndex(index);
    }

    const handleChildClick = (item) => {
        var ruleSelected = [];
        ruleSelected.push(parentRuleList[parentRuleIdIndex], item);
        history.push({
            pathname: '/navigation',
            state: { ruleSelected: ruleSelected, type: 0 }
        })
    }

    return (
        <div className={style.container}>
            <div className={style.banner_show}>
                <div className={style.slogan1}>广州人设 为您解决事项咨询最后一公里问题</div>
                <div className={style.slogan2}>广州人设为您提供866个事项咨询，打造一站式事项咨询平台</div>
                <div className={style.ind_or_ent}>
                    <Link to='#'>
                        <div className={style.individual}>
                            <img src={Images.home.ic_gryw} alt='个人业务'></img>
                            个人业务
                        </div>
                    </Link>
                    <Link to='#'>
                        <div className={style.enterprise}>
                            <img src={Images.home.ic_fryw} alt='法人业务'></img>
                            法人业务
                        </div>
                    </Link>
                </div>
            </div>
            <div className={style.business_show}>
                <div className={style.classify}>
                    {
                        parentRuleList.map((item, index) => {
                            return(
                                <div className={parentRuleIdIndex === index ? style.active : null}
                                    onClick={handleParentClick.bind(this, index)}>
                                    { item.rule_name }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.specific}>
                    {
                        childRuleList[parentRuleIdIndex]&&childRuleList[parentRuleIdIndex].map((item, index) => {
                            switch (item.rule_name) {
                                case '劳动保障':
                                    picSrc = Images.home.ic_ldbz; break;
                                case '人事人才':
                                    picSrc = Images.home.ic_rsrc; break;
                                case '社会保险':
                                    picSrc = Images.home.ic_shbx; break;
                                case '就业创业':
                                    picSrc = Images.home.ic_jycy; break;
                                default:
                                    break;
                            }   
                            return (
                                <div onClick={handleChildClick.bind(this, item)}>
                                    <div className={style.outborder}>
                                        <div>
                                            <img src={picSrc} alt='事项图标'></img>
                                        </div>
                                    </div>
                                    <p>{ item.rule_name }</p>
                                </div>
                            )
                            
                        })

                    }
                </div>
            </div>
        </div>
     )}