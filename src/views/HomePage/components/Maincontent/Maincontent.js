import React, { useEffect, useState } from 'react'
import style from './Maincontent.module.scss'
import { Images } from '../../../../assets'
import { Link, useHistory } from 'react-router-dom'
import { GetRules } from '../../../../api/navigationApi'

export default function Maincontent() {
    // TODO: 修改标语主体
    const main = '';
    // TODO: 修改事项总数
    const itemNum = '000';
    const history = useHistory();
    const [serviceObjectIndex, setServiceObjectIndex] = useState(0);
    const [serviceObjectList, setServiceObjectList] = useState([
        { rule_name: '个人业务', obj_type: '[1]' },
        { rule_name: '法人业务', obj_type: '[2,3,4]'},
        { rule_name: '事业单位业务', obj_type: '[5,6,9]'}
    ]);
    // const [FirstRuleList, setFirstRuleList] = useState([[]]);
    const [FirstRuleList, setFirstRuleList] = useState([
        {
            creator: {
                id: "62386b2b1e90ec7f7e958138",
                name: "全知全能的开发人员",
                department_name: "办公室"
            },
            _id: "625fbf817dcfbf22f1d11ca3",
            create_time: 1650442112897,
            rule_id: "1",
            rule_name: "人事人才",
            parentId: "0",
            children: [
                "2",
                "5",
                "8",
                "25",
                "26",
                "31"
            ],
            rule_path: "人社局业务/人事人才/"
        },
        {
            creator: {
                id: "62386b2b1e90ec7f7e958138",
                name: "全知全能的开发人员",
                department_name: "办公室"
            },
            _id: "625fbf817dcfbf22f1d11cc6",
            create_time: 1650442112897,
            rule_id: "36",
            rule_name: "就业创业",
            parentId: "0",
            children: [
                "37",
                "40",
                "49",
                "50",
                "51",
                "52",
                "53",
                "57",
                "58"
            ],
            rule_path: "人社局业务/就业创业/"
        },
        {
            creator: {
                id: "62386b2b1e90ec7f7e958138",
                name: "全知全能的开发人员",
                department_name: "办公室"
            },
            _id: "625fbf817dcfbf22f1d11ce1",
            create_time: 1650442112897,
            rule_id: "63",
            rule_name: "社会保险",
            parentId: "0",
            children: [
                "64",
                "70",
                "79",
                "82"
            ],
            rule_path: "人社局业务/社会保险/"
        },
        {
            creator: {
                id: "62386b2b1e90ec7f7e958138",
                name: "全知全能的开发人员",
                department_name: "办公室"
            },
            _id: "625fbf817dcfbf22f1d11cf9",
            create_time: 1650442112897,
            rule_id: "87",
            rule_name: "劳动保障",
            parentId: "0",
            children: [
                "88",
                "89",
                "97",
                "98",
                "99",
                "100"
            ],
            rule_path: "人社局业务/劳动保障/"
        }
    ]);

    const icLDBZ = Images.home.icLDBZ;
    const icRSRC = Images.home.icRSRC;
    const icSHBX = Images.home.icSHBX;
    const icJYCY = Images.home.icJYCY;
    const bannerPC = 'url(' + Images.home.bannerPC + ')';
    const bannerMB = 'url(' + Images.home.bannerMB + ')';
    const [bgSrc, setBgSrc] = useState(bannerPC);

    var w;
    var picSrc;

    /* 
        首页初始化：
    */
    useEffect(() => {
        // let data = [];
        // let req;
        // req = {
        //     parentId : '0'
        // }
        // GetRules(req).then(res => {
        //     data = res.data.data;
        //     setFirstRuleList(data);  
        // })
    }, [])
    
    window.onresize = () => {
        w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w > 400 && bgSrc != bannerPC) {
            setBgSrc(bannerPC);
        }
        if (w <= 400 && bgSrc != bannerMB) {
            setBgSrc(bannerMB);
        }
    }

    const handleServiceObjClick = (index) => {
        setServiceObjectIndex(index);
    }

    const handleFirstRulelick = (item) => {
        history.push({
            pathname: '/navigation',
            state: { 
                ruleSelected: [item], 
                nav_type: 0, 
                obj_type: serviceObjectList[serviceObjectIndex].obj_type 
            }
        })
    }

    return (
        <div className={style.container}>
            {/* 图片横幅部分 */}
            <div className={style.bannerShow} id='banner' style={{backgroundImage: bgSrc}}>
                <div className={style.slogan1}>{main} 为您解决事项咨询最后一公里问题</div>
                <div className={style.slogan2}>{main}为您提供{itemNum}个事项咨询，打造一站式事项咨询平台</div>
                <div className={style.indOrEnt}>
                    <Link to='#'>
                        <div className={style.individual}>
                            <img src={Images.home.icGRYW}></img>
                            个人业务
                        </div>
                    </Link>
                    <Link to='#'>
                        <div className={style.enterprise}>
                            <img src={Images.home.icFRYW}></img>
                            法人业务
                        </div>
                    </Link>
                </div>
            </div>
            {/* 事项选择部分 */}
            <div className={style.businessShow}>
                {/* 第一级事项渲染 */}
                <div className={style.classify}>
                    {
                        serviceObjectList.map((item, index) => {
                            return(
                                <div className={serviceObjectIndex === index ? style.active : null}
                                    onClick={handleServiceObjClick.bind(this, index)}>
                                    { item.rule_name }
                                </div>
                            )
                        })
                    }
                </div>
                {/* 第二级事项渲染 */}
                <div className={style.specific}>
                    {
                        FirstRuleList&&FirstRuleList.map((item, index) => {
                            switch (item.rule_name) {
                                case '劳动保障':
                                    picSrc = icLDBZ; break;
                                case '人事人才':
                                    picSrc = icRSRC; break;
                                case '社会保险':
                                    picSrc = icSHBX; break;
                                case '就业创业':
                                    picSrc = icJYCY; break;
                                default:
                                    break;
                            }   
                            return (
                                <div className={serviceObjectIndex === 0&&item.rule_name === '劳动保障'?style.hide:null} 
                                    onClick={handleFirstRulelick.bind(this, item)}>
                                    <div className={style.outerBorder}>
                                        <div>
                                            <img src={picSrc}></img>
                                        </div>
                                    </div>
                                    <p>{ item.rule_name }</p>
                                </div>
                            )
                            
                        })

                    }
                </div>
            </div>
        </div>
     )}