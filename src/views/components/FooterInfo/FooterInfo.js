import React from 'react'
import { Link } from 'react-router-dom'
import style from './FooterInfo.module.scss'
import { Images } from '../../../assets'

export default function FooterInfo() {
    
    /*
    TODO:  修改底部敏感信息
    const mainName = '广州市人社局';
    const appName = '穗好办';
    const ctPhone1 = '020-12345';
    const ctPhone2 = '020-68127853';
    */
    
    const mainName = '';
    const appName = '';
    const ctPhone1 = 'phoneNum-1';
    const ctPhone2 = 'phoneNum-2';
    const crHint1 = '主办单位：广州市人力资源和社会保障局';
    const crHint2 = '粤公网安备44010402001594号 粤ICP备11001610号-1 网站标识码：4401000059';

    return (
        <div className={style.container}>
            <div className={style.contact}>
                <div className={style.ctContainer}>
                <div className={style.webInfo}>
                    <p>网站信息</p>
                    <div>
                        <Link to='#'>网站介绍</Link>
                        <Link to='#'>网站纠错</Link>
                        <br></br>
                        <Link to='#'>隐私政策</Link>
                        <Link to='#'>服务建议</Link>
                    </div>
                </div>

                <div className={style.contactUs}>
                    <p>联系我们</p>
                    <div className={style.phone}>{ ctPhone1 }；{ ctPhone2 }</div>
                    <div className={style.info}>联系信息</div>
                </div>

                <div className={style.relevantCode}>
                    <div className={`${style.dropdownWeb} ${style.dropdown}`}>
                        <div className={style.dropdownDesc}>
                            <img src={Images.common.icQrcode} alt='二维码图标'></img> {mainName}官网
                        </div>
                        <div className={`${style.webContent} ${style.content}`}>
                            <img src={Images.common.icPlaceholder} alt={{mainName}+'官网二维码'}></img>
                        </div>
                    </div>
                    <div className={`${style.dropdownWechat} ${style.dropdown}`}>
                        <div className={style.dropdownDesc}>
                            <img src={Images.common.icQrcode} alt='二维码图标'></img> {mainName}微信公众号
                        </div>
                        <div className={`${style.wechatContent} ${style.content}`}>
                            <img src={Images.common.icPlaceholder} alt={{mainName}+'微信公众号二维码'}></img>
                        </div>
                    </div>
                    <div className={`${style.dropdownApp} ${style.dropdown}`}>
                        <div className={style.dropdownDesc}>
                            <img src={Images.common.icQrcode} alt='二维码图标'></img> {appName}APP
                        </div>
                        <div className={`${style.appContent} ${style.content}`}>
                            <img src={Images.common.icPlaceholder} alt={{appName}+'APP二维码'}></img>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div className={style.copyright}>
                <div className={style.crContainer}>
                    <img src={Images.common.icZFWZZC} alt='政府网站找错'></img>
                    <img src={Images.common.icDZJG} alt='党政机关标志'></img>
                    <div className={style.crInfo}>
                        <div>{ crHint1 }</div>
                        <div>
                            <img src={Images.common.icYGWA} alt='粤公网标志'></img>
                            { crHint2 }   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}  