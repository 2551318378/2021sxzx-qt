import React, {useState} from 'react'
import style from './SlideCS.module.scss'
import { Link } from 'react-router-dom'
import csIcon from '../../../assets/placeholder.png'
import deleteIcon from '../../../assets/placeholder.png'

export default function SlideCS() {
    const [isSiderHide, setIsSiderHide] = useState(false);
    return (
        <div className={isSiderHide ? style.hide : null}>
            <div className={style.container}>
                <img src={deleteIcon} 
                     className={style.delete} 
                     onClick={setIsSiderHide.bind(this, true)}/>
                <Link to='/intelligentCS'>
                    <div className={style.clickbox}>
                        <img src={csIcon}/>
                        <p>智能客服</p>
                    </div>
                </Link>
            </div>
        </div>
    )}