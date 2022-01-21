import React, {useState} from 'react'
import style from './Maincontent.module.scss'
import IntIcon from '../../../../assets/placeholder.png'
import EnvIcon from '../../../../assets/placeholder.png'
import shbx from '../../../../assets/社会保险1.png'
import rcrs from '../../../../assets/人才人事1.png'
import jycy from '../../../../assets/就业创业1.png'
import ldbz from '../../../../assets/劳动保障1.png'
import { Link } from 'react-router-dom'
// parent -> classify
// child -> specific

export default function Maincontent() {
    const [parentRuleId, setParentRuleId] = useState(1);
    const [childRuleId, setChildRuleId] = useState(4);
    const [isLdbzHide, setIsLdbzHide] = useState(true);
    const rsrc_ruleId = [4, 8, 11];
    const shbx_ruleId = [5, 9, 12];
    const jycy_ruleId = [6, 10, 13];
    const ldbz_ruleId = [null, 7, 14];
    const handleParentClick = (ruleId) => {
        setParentRuleId(ruleId);
        setIsLdbzHide(ruleId == 1);
    }
    const handleChildClick = (ruleIdList) => {
        setChildRuleId(ruleIdList[parentRuleId-1]);
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
                            企业业务
                        </div>
                    </Link>
                </div>
            </div>
            <div className={style.business_show}>
                <div className={style.classify}>
                    <div onClick={handleParentClick.bind(this, 1)} 
                         className={parentRuleId == 1 ? style.active : null}>
                        个人业务
                    </div>
                    <label></label>
                    <div onClick={handleParentClick.bind(this, 2)}
                         className={parentRuleId == 2 ? style.active : null}>
                        企业业务
                    </div>
                    <label></label>
                    <div onClick={handleParentClick.bind(this, 3)}
                         className={parentRuleId == 3 ? style.active : null}>
                        机关事业单位业务
                    </div>
                </div>
                <div className={style.specific}>
                    <div onClick={handleChildClick.bind(this, ldbz_ruleId)}
                         className={isLdbzHide ? style.hide : null}>
                        <img src={ldbz}></img>
                        <p>劳动保障</p>
                    </div>
                    <div onClick={handleChildClick.bind(this, shbx_ruleId)}>
                        <img src={shbx}></img>
                        <p>社会保险</p>
                    </div>
                    <div onClick={handleChildClick.bind(this, rsrc_ruleId)}>
                        <img src={rcrs}></img>
                        <p>人才人事</p>
                    </div>
                    <div onClick={handleChildClick.bind(this, jycy_ruleId)}>
                        <img src={jycy}></img>
                        <p>就业创业</p>
                    </div>
                </div>
                <p>parentRuleId {parentRuleId} childRuleId {childRuleId}</p>
            </div>
        </div>
     )}