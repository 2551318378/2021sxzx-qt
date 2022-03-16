import React from 'react'
import { Link } from 'react-router-dom'
import style from './FooterInfo.module.scss'
import { Images } from '../../../assets'

export default function FooterInfo() {
    return (
        <div className={style.container}>
            <div className={style.contact}>
                <div className={style.ct_container}>
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
                    <div className={style.phone}>020-12345；020-68127853</div>
                    <div className={style.info}>联系信息</div>
                </div>

                <div className={style.relevant_code}>
                    <div className={`${style.dropdown_web} ${style.dropdown}`}>
                        <div className={style.dropdown_desc}>
                            <img src={Images.common.ic_qrcode} alt='二维码图标'></img> 广州市人设局官网 
                        </div>
                        <div className={`${style.web_content} ${style.content}`}>
                            <img src={Images.common.qrcode_web} alt='广州市人设局官网二维码'></img>
                        </div>
                    </div>
                    <div className={`${style.dropdown_wechat} ${style.dropdown}`}>
                        <div className={style.dropdown_desc}>
                            <img src={Images.common.ic_qrcode} alt='二维码图标'></img> 广州市人设局微信公众号
                        </div>
                        <div className={`${style.wechat_content} ${style.content}`}>
                            <img src={Images.common.ic_qrcode} alt='广州市人设局微信公众号二维码'></img>
                        </div>
                    </div>
                    <div className={`${style.dropdown_app} ${style.dropdown}`}>
                        <div className={style.dropdown_desc}>
                            <img src={Images.common.ic_qrcode} alt='二维码图标'></img> 穗好办 APP 
                        </div>
                        <div className={`${style.app_content} ${style.content}`}>
                            <img src={Images.common.qrcode_app} alt='穗好办APP二维码'></img>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div className={style.copyright}>
                <div className={style.cr_container}>
                    <img src={Images.common.ic_zfwzzc} alt='政府网站找错'></img>
                    <img src={Images.common.ic_dzjg} alt='党政机关标志'></img>
                    <div className={style.cr_info}>
                        <div>主办单位：广州市人力资源和社会保障局</div>
                        <div>
                            <img src={Images.common.ic_ygwa} alt='粤公网标志'></img>
                            粤公网安备44010402001594号 粤ICP备11001610号-1 网站标识码：4401000059   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}  