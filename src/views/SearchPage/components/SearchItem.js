import style from './SearchItem.module.scss'
import {Button} from "antd";
export default function SearchItem(props) {

    const handleClickItem=(link,title)=>{
        props.handler(title)
        window.open(link, '_self');
    }
    return (
        <div className={style.container}>
            <div
                className={style.title}
                onClick={() => {
                    props.setAreaData(props.data);
                }}
            >
                {props.data.title}
            </div>
            <div className={style.content}>
                <div>
                    上级目录：
                    {props.data.parent}
                </div>
                <div>
                    可办地区：
                    {props.data.area.map((item) => {
                        return (
                            <Button
                                key={item}
                                onClick={() => {
                                    handleClickItem(
                                        item.link,
                                        props.data.title
                                    );
                                }}
                            >
                                {item.name}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}