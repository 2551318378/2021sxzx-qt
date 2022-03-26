/* 
    Images.js: 图片资源管理
*/

// const imgPath = 'http://8.134.73.52:80/imgs/';
const imgPath = 'http://127.0.0.1:5001/imgs/';

export default {
    // 公共组件
    common: {
        ic_logo: require('./imgs/logo.png').default,
        ic_delete: require('./imgs/icon_deletebtn.png').default,
        ic_search: require('./imgs/icon_searchbtn.png').default,
        ic_placeholder: require('./imgs/placeholder.png').default,
        ic_qrcode: require('./imgs/icon_qrcode.png').default,
        ic_znkf: require('./imgs/icon_zhinengkefu.png').default,     // 智能客服图标
        ic_dzjg: require('./imgs/footer_1.png').default,     // 党政机关图标
        ic_zfwzzc: require('./imgs/footer_2.png').default,       // 政府网站找错图标
        ic_ygwa: require('./imgs/footer_3.png').default,        // 粤公网安图标
        qrcode_app: require('./imgs/qrcode_app.jpg').default,       // 穗好办APP二维码
        qrcode_web: require('./imgs/qrcode_web.png').default,       // 人社局官网二维码
        // qrcode_wechat: require('./imgs/').default     // 人社局微信公众号二维码

        /*
        ic_logo: imgPath + 'ic_logo.png',
        ic_delete: imgPath + 'ic_delete.png',
        ic_search: imgPath + 'ic_search.png',
        ic_placeholder: imgPath + 'ic_placeholder.png',
        ic_qrcode: imgPath + 'ic_qrcode.png',
        ic_znkf: imgPath + 'ic_znkf.png',     // 智能客服图标
        ic_dzjg: imgPath + 'ic_dzjg.png',     // 党政机关图标
        ic_zfwzzc: imgPath + 'ic_zfwzzc.png',       // 政府网站找错图标
        ic_ygwa: imgPath + 'ic_ygwa.png',        // 粤公网安图标
        qrcode_app: imgPath + 'qrcode_app.jpg',       // 穗好办APP二维码
        qrcode_web: imgPath + 'qrcode_web.png',       // 人社局官网二维码
        // qrcode_wechat: imgPath + ''     // 人社局微信公众号二维码
        */
    },

    // 首页
    home: {
        
        ic_gryw: require('./imgs/icon_gerenyewu.png').default,       // 个人业务图标
        ic_fryw: require('./imgs/icon_qiyeyewu.png').default,        // 法人业务图标
        ic_ldbz: require('./imgs/icon_laodongbaozhang.png').default,     // 劳动保障图标
        ic_rsrc: require('./imgs/icon_rencairenshi.png').default,        // 人事人才图标
        ic_shbx: require('./imgs/icon_shehuibaoxian.png').default,       // 社会保险图标
        ic_jycy: require('./imgs/icon_jiuyechuangye.png').default,        // 就业创业图标
        banner_pc: require('./imgs/banner_pc_bg.jpg').default,
        banner_mb: require('./imgs/banner_mb_bg.png').default

        /*
        ic_gryw: imgPath + 'ic_gryw.png',       // 个人业务图标
        ic_fryw: imgPath + 'ic_fryw.png',        // 法人业务图标
        ic_ldbz: imgPath + 'ic_ldbz.png',     // 劳动保障图标
        ic_rsrc: imgPath + 'ic_rsrc.png',        // 人事人才图标
        ic_shbx: imgPath + 'ic_shbx.png',       // 社会保险图标
        ic_jycy: imgPath + 'ic_jycy.png',        // 就业创业图标
        banner_pc: imgPath + 'banner_pc.jpg',
        banner_mb: imgPath + 'banner_mb.png'
        */
    }
}