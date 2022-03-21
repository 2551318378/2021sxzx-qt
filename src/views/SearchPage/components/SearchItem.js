import style from './SearchItem.module.scss'
export default function SearchItem(props) {

    return (
        <div className={style.container} >
            <div className={style.title} onClick={e=>{props.handler(props.title)}}>
                <a href={props.link}>{props.title}</a>
            </div>
            <div className={style.content}>
                {props.content}
            </div>
            <div className={style.date}>
                {props.date}
            </div>  
        </div>
    )
}