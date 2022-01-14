import React from 'react'
import style from './Maincontent.module.scss'
import IntIcon from '../../../../assets/placeholder.png'
import EnvIcon from '../../../../assets/placeholder.png'
import shbx from '../../../../assets/社会保险1.png'
import rcrs from '../../../../assets/人才人事1.png'
import jycy from '../../../../assets/就业创业1.png'
import ldbz from '../../../../assets/劳动保障1.png'


export default function Maincontent() {
    return (
        <div className={style.container}>
            <div className={style.banner_show}>
                <div className={style.slogan1}>广州人设 为您解决事项咨询最后一公里问题</div>
                <div className={style.slogan2}>广州人设为您提供866个事项咨询，打造一站式事项咨询平台</div>
                <div className={style.ind_or_ent}>
                    <div className={style.individual}>
                        <img src={IntIcon}></img>
                        个人业务
                    </div>
                    <div className={style.enterprise}>
                        <img src={EnvIcon}></img>
                        企业业务
                    </div>
                </div>
            </div>
            <div className={style.business_show}>
                <div className={style.classify}>
                    <div>个人业务</div>
                    <label></label>
                    <div>企业业务</div>
                    <label></label>
                    <div>事业单位业务</div>
                </div>
                <div className={style.specific}>
                    <div>
                        <img src={shbx}></img>
                        <p>社会保险</p>
                    </div>
                    <div>
                        <img src={rcrs}></img>
                        <p>人才人事</p>
                    </div>
                    <div>
                        <img src={jycy}></img>
                        <p>就业创业</p>
                    </div>
                    <div>
                        <img src={ldbz}></img>
                        <p>劳动保障</p>
                    </div>
                </div>
            </div>
        </div>
     )}