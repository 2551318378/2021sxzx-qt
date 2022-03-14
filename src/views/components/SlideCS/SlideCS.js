import React, {useState} from 'react'
import style from './SlideCS.module.scss'
import { Link } from 'react-router-dom'
import { Images } from '../../../assets'

export default function SlideCS() {
    const [isSiderHide, setIsSiderHide] = useState(false);
    return (
        <div className={isSiderHide ? style.hide : null}>
            <div className={style.container}>
                <img src={Images.common.ic_delete} 
                    alt='关闭按钮'
                    className={style.delete} 
                    onClick={setIsSiderHide.bind(this, true)}/>
                <Link to='/intelligentCS'>
                    <div className={style.clickbox}>
                        <img src={Images.common.ic_znkf} alt='智能客服图标'/>
                    </div>
                </Link>
            </div>
        </div>
    )}