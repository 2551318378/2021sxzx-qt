import React from 'react'
import style from './Footerinfo.module.scss'
import QRcode from '../../../assets/placeholder.png'

export default function Footerinfo() {
    return (
        <div className={style.container}>
            <div className={style.contact}>
                <div className={style.web_info}>

                </div>
                <div className={style.contact_us}></div>
                <div className={style.relevant_code}>
                    <div>
                        <img src={QRcode}></img> 广州市人设局官网
                    </div>
                    <div>
                        <img src={QRcode}></img> 广州市人社局微信公众号
                    </div>
                    <div>
                        <img src={QRcode}></img> 穗好办 APP
                    </div>
                </div>
            </div>
            <div className={style.copyright}></div>
        </div>
    )}  