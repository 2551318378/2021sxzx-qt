import'./button.scss'
import style from './Guide.module.scss';
import axios from '../../../../api/http';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Table, Divider, Radio, Modal } from 'antd';
import { Map, Marker, NavigationControl } from 'react-bmapgl';

export default function Guide() {

	const { pathname } = useLocation();
	const [data, setData] = useState({});
	const [lobbyInfo, setLobbyInfo] = useState({});
	const [lobbyLocation, setLobbyLocation] = useState({});
	const [materialIndex, setMaterialIndex] = useState(-1);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const audit_material_colunms = [
		{
			title: '序号',
			dataIndex: 'MATERIAL_NAME',
			key: 'MATERIAL_NAME',
			render: (text, record, index) => (
				<div>{index + 1}</div>
			)
		},
		{
			title: '材料名称',
			dataIndex: 'material_name',
			key: 'material_name'
		},
		{
			title: '材料形式',
			dataIndex: 'page_num',
			key: 'page_num',
			render: (text, record, index) => (
				<>
					<div>原件: {record.page_num}</div>
					<div>复印件: {record.page_copynum}</div>
					<div>{record.zzhdzb_text}</div>
				</>
			)
		},
		{
			title: '材料要求',
			dataIndex: 'is_need_text',
			key: 'is_need_text',
			render: (text, record, index) => (
				<>
					<div>{record.is_need_text}</div>
					<div className={style.materialReqest} onClick={() => { showMaterialRequest(index) }}>其他要求</div>
				</>
			)
		}
	];

	useEffect(() => { 
		axios.get(pathname).then(res => {
			console.log(res.data)
			setData(res.data[0]);
            
			setLobbyInfo(res.data[0].audit_catalog_lobby[0]);
		})
	}, []);

	const showMaterialRequest = (index) => {
		setMaterialIndex(index)
		showModal()
	};

	const changeLobby = (lobbyList, lobbyIndex) => {
		setLobbyInfo(lobbyList[lobbyIndex])
	};

	const renderLobby = (lobbyList) => {
		if(lobbyInfo&&lobbyInfo.name){
			return <Radio.Group className='lobbyGroup' name='lobbyGroup' defaultValue={lobbyInfo.name} buttonStyle="solid">{
				lobbyList?.map((item, index) => {
					return <Radio.Button className="lobbyButton" onClick={() => { changeLobby(lobbyList, index) }} value={item?.name} key={item?.name}>{item?.name}</Radio.Button>
				})
			}</Radio.Group>
		}

	};

	const renderMaterialRequest = () => {
		if (data.audit_material !== undefined && materialIndex !== -1) {
			return <>
				<div>材料类型: {data.audit_material[materialIndex].material_type_text}</div>
				<div>材料形式: {data.audit_material[materialIndex].zzhdzb_text}</div>
				<div>纸质材料规格: {data.audit_material[materialIndex].page_format}</div>
				<div>是否免提交:
					{data.audit_material[materialIndex].submissionrequired === "0" ? "否" : "是"}
				</div>
			</>
		}
	};
 
	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleAddress = (address) => {
		var index = address?.indexOf('号');
		var res =  address?.slice(0, index + 1);
        return res
	}
 

	useEffect(() => {
		if(lobbyInfo){
			var myGeo = new window.BMapGL.Geocoder();
			myGeo.getPoint(handleAddress(lobbyInfo?.address),function(point){
				if(point){
					setLobbyLocation(point);
					console.log(lobbyInfo?.address)
					console.log(point)
				}else{
					alert('您选择的地址没有解析到结果！');
				}
			},'广州市')}
	}, [lobbyInfo]);

	const renderMap = () => {
		if(lobbyInfo){
			return <div className={style.mapContainer}>
			<div className={style.lobby}>
				<span className={style.lobbyInfo}>交通指南: </span>
			</div>
			<Map className={style.map} enableScrollWheelZoom center={lobbyLocation} zoom={16}>
				<Marker position={lobbyLocation}></Marker>
				<NavigationControl />
			</Map>
		</div>
		}
	}

	return (
		<div className={style.container}>
			<div className={style.title}>{data.task_name}</div>
			<div className={style.GB_name}>国家标准名: {data.task_name}</div>
			<span className={style.button}>事项办理</span>
			<span className={style.button}>详细指南</span>
			<span className={style.button}>打印咨询结果</span>
			<Divider />
			<div className={style.subtitle}>申请材料</div>
			<Table className='audit_material' columns={audit_material_colunms} dataSource={data.audit_material} pagination={false} size='middle' />
			<div className={style.subtitle}>办理地点</div>
			{renderLobby(data.audit_catalog_lobby)}

			<>
				<div className={style.lobby}>
					<span className={style.lobbyInfo}>办理地点: </span>
					<span>{lobbyInfo === undefined ? "无" : lobbyInfo.address}</span>
				</div>
				<div className={style.lobby}>
					<span className={style.lobbyInfo}>咨询及投诉电话: </span>
					<span>{lobbyInfo === undefined ? "无" : lobbyInfo.tel}</span>
				</div>
				<div className={style.lobby}>
					<span className={style.lobbyInfo}>办公时间: </span>
					<span>{lobbyInfo === undefined ? "无" : lobbyInfo.time}</span>
				</div>
				<div>{ renderMap() }</div>
			</>

			<div className={style.subtitle}>网上办理流程</div>
			<div className={style.wsbllc}>{data.wsbllc ? data.wsbllc : "无"}</div>
			<div className={style.subtitle}>线下办理流程</div>
			<div className={style.ckbllc}>{data.ckbllc ? data.ckbllc : "无"}</div>
			<Modal title="其他要求" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				{renderMaterialRequest()}
			</Modal>

		</div>
	);
}
