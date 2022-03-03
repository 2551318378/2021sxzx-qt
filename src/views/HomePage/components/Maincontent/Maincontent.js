import React, {useState} from 'react'
import style from './Maincontent.module.scss'
import IntIcon from '../../../../assets/icon_gerenyewu.png'
import EnvIcon from '../../../../assets/icon_qiyeyewu.png'
import shbx from '../../../../assets/icon_shehuibaoxian.png'
import rcrs from '../../../../assets/icon_rencairenshi.png'
import jycy from '../../../../assets/icon_jiuyechuangye.png'
import ldbz from '../../../../assets/icon_laodongbaozhang.png'
import { Link, useHistory } from 'react-router-dom'
import axios from '../../../../api/http'
// parent -> classify
// child -> specific
// 父事项
// 子事项
const rsrc_ruleId = ['2', '55', '126'];
const shbx_ruleId = ['12', '86', '143'];
const jycy_ruleId = ['25', '105', '161'];
const ldbz_ruleId = [null, '32', '170'];
const ruleId = ['1', '31', '125'];

export default function Maincontent() {
    const history = useHistory();
    const [parentRuleIdIndex, setParentRuleIdIndex] = useState(0);
    const [childRuleId, setChildRuleId] = useState('2');
    const [isLdbzHide, setIsLdbzHide] = useState(true);
    
    
    const handleParentClick = (index) => {
        setParentRuleIdIndex(index);
        setIsLdbzHide(index == 0);
    }
    const handleChildClick = (ruleIdList) => {
        var ruleSelected = [];
        var data = {};
        setChildRuleId(ruleIdList[parentRuleIdIndex]);
        axios.post('/v1/getRules',{
            rule_id: ruleId[parentRuleIdIndex]
        }).then(res => {
            data = res.data.data[0];
            ruleSelected.push(data);
        }).catch(res => {
            console.log(res);
        })
        axios.post('/v1/getRules',{
            rule_id: ruleIdList[parentRuleIdIndex]
        }).then(res => {
            data = res.data.data[0];
            ruleSelected.push(data);
        }).catch(res => {
            console.log(res);
        })
        // 携带数据跳转
        history.push({ 
            pathname: "/navigation", 
            state: { homeRuleSelected: ruleSelected, secondRuleId: ruleIdList[parentRuleIdIndex] } 
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
                            <img src={IntIcon}></img>
                            个人业务
                        </div>
                    </Link>
                    <Link to='#'>
                        <div className={style.enterprise}>
                            <img src={EnvIcon}></img>
                            法人业务
                        </div>
                    </Link>
                </div>
            </div>
            <div className={style.business_show}>
                <div className={style.classify}>
                    <div onClick={handleParentClick.bind(this, 0)} 
                         className={parentRuleIdIndex == 0 ? style.active : null}>
                        个人业务
                    </div>
                    <label></label>
                    <div onClick={handleParentClick.bind(this, 1)}
                         className={parentRuleIdIndex == 1 ? style.active : null}>
                        法人业务
                    </div>
                    <label></label>
                    <div onClick={handleParentClick.bind(this, 2)}
                         className={parentRuleIdIndex == 2 ? style.active : null}>
                        事业单位业务
                    </div>
                </div>
                <div className={style.specific}>
                    <div onClick={handleChildClick.bind(this, ldbz_ruleId)}
                         className={isLdbzHide ? style.hide : null}>
                             <div className={style.outborder}>
                                 <div>
                                    <img src={ldbz}></img>
                                 </div>
                             </div>
                        <p>劳动保障</p>
                    </div>
                    <div onClick={handleChildClick.bind(this, shbx_ruleId)}>
                        <div className={style.outborder}>
                            <div>
                                <img src={shbx}></img>
                            </div>
                        </div>
                        <p>社会保险</p>
                    </div>
                    <div onClick={handleChildClick.bind(this, rsrc_ruleId)}>
                        <div className={style.outborder}>
                            <div>
                                <img src={rcrs}></img>
                            </div>
                        </div>
                        <p>人才人事</p>
                    </div>
                    <div onClick={handleChildClick.bind(this, jycy_ruleId)}>
                        <div className={style.outborder}>
                            <div>
                                <img src={jycy}></img>
                            </div>
                        </div>
                        <p>就业创业</p>
                    </div>
                </div>
                {/* <p>parentRuleId {parentRuleId} childRuleId {childRuleId}</p> */}
            </div>
        </div>
     )}