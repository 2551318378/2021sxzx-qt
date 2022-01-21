import React from 'react'
import style from './FooterInfo.module.scss'
import QRcode from '../../../assets/placeholder.png'
import QRcode_web from '../../../assets/placeholder.png'
import QRcode_wechat from '../../../assets/placeholder.png'
import QRcode_app from '../../../assets/placeholder.png'
import { Link } from 'react-router-dom'

export default function FooterInfo() {
    return (
        <div className={style.container}>
            <div className={style.contact}>
                <div className={style.web_info}>
                    <p>网站信息</p>
                    <div>
                        <Link to='#'>网站介绍</Link>
                        <Link to='#'>网站纠错</Link>
                        <br></br>
                        <Link to='#'>隐私政策</Link>
                        <Link to='#'>服务建议</Link>
                    </div>
                </div>

                <div className={style.contact_us}>
                    <p>联系我们</p>
                </div>

                <div className={style.relevant_code}>
                    <div className={style.dropdown_web, style.dropdown}>
                        <div className={style.dropdown_desc}>
                            <img src={QRcode}></img> 广州市人设局官网 
                        </div>
                        <div className={style.web_content, style.content}>
                            <img src={QRcode_web}></img>
                        </div>
                    </div>
                    <div className={style.dropdown_wechat, style.dropdown}>
                        <div className={style.dropdown_desc}>
                            <img src={QRcode}></img> 广州市人设局微信公众号
                        </div>
                        <div className={style.wechat_content, style.content}>
                            <img src={QRcode_wechat}></img>
                        </div>
                    </div>
                    <div className={style.dropdown_app, style.dropdown}>
                        <div className={style.dropdown_desc}>
                            <img src={QRcode}></img> 穗好办 APP 
                        </div>
                        <div className={style.app_content, style.content}>
                            <img src={QRcode_app}></img>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={style.copyright}></div>
        </div>
    )}  