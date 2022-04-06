/* 
    Images.js: 图片资源管理
*/

// const imgPath = 'http://8.134.73.52:80/imgs/';
const imgPath = 'http://127.0.0.1:5001/imgs/';

export default {
    // 公共组件
    common: {
        icLogo: require('./imgs/logo.png').default,
        icDelete: require('./imgs/icon_deletebtn.png').default,
        icSearch: require('./imgs/icon_searchbtn.png').default,
        icPlaceholder: require('./imgs/placeholder.png').default,
        icQrcode: require('./imgs/icon_qrcode.png').default,
        icZNKF: require('./imgs/icon_zhinengkefu.png').default,     // 智能客服图标
        icDZJG: require('./imgs/footer_1.png').default,     // 党政机关图标
        icZFWZZC: require('./imgs/footer_2.png').default,       // 政府网站找错图标
        icYGWA: require('./imgs/footer_3.png').default,        // 粤公网安图标
        qrcodeApp: require('./imgs/qrcode_app.jpg').default,       // 穗好办APP二维码
        qrcodeWeb: require('./imgs/qrcode_web.png').default,       // 人社局官网二维码

        /* 
        TODO: 图片资源对接云环境 
        icLogo: imgPath + 'ic_logo.png',
        icDelete: imgPath + 'ic_delete.png',
        icSearch: imgPath + 'ic_search.png',
        icPlaceholder: imgPath + 'ic_placeholder.png',
        icQrcode: imgPath + 'ic_qrcode.png',
        icZNKF: imgPath + 'ic_znkf.png',     // 智能客服图标
        icDZJG: imgPath + 'ic_dzjg.png',     // 党政机关图标
        icZFWZZC: imgPath + 'ic_zfwzzc.png',       // 政府网站找错图标
        icYGWA: imgPath + 'ic_ygwa.png',        // 粤公网安图标
        qrcodeApp: imgPath + 'qrcode_app.jpg',       // 穗好办APP二维码
        qrcodeWeb: imgPath + 'qrcode_web.png',       // 人社局官网二维码
        // qrcodeWechat: imgPath + ''     // 人社局微信公众号二维码
        */
    },

    // 首页
    home: {
        
        icGRYW: require('./imgs/icon_gerenyewu.png').default,       // 个人业务图标
        icFRYW: require('./imgs/icon_qiyeyewu.png').default,        // 法人业务图标
        icLDBZ: require('./imgs/icon_laodongbaozhang.png').default,     // 劳动保障图标
        icRSRC: require('./imgs/icon_rencairenshi.png').default,        // 人事人才图标
        icSHBX: require('./imgs/icon_shehuibaoxian.png').default,       // 社会保险图标
        icJYCY: require('./imgs/icon_jiuyechuangye.png').default,        // 就业创业图标
        bannerPC: require('./imgs/banner_pc_bg.jpg').default,
        bannerMB: require('./imgs/banner_mb_bg.png').default,

        /*  
        TODO: 图片资源对接云环境       
        icGRYW: imgPath + 'ic_gryw.png',       // 个人业务图标
        icFRYW: imgPath + 'ic_fryw.png',        // 法人业务图标
        icLDBZ: imgPath + 'ic_ldbz.png',     // 劳动保障图标
        icRSRC: imgPath + 'ic_rsrc.png',        // 人事人才图标
        icSHBX: imgPath + 'ic_shbx.png',       // 社会保险图标
        icJYCY: imgPath + 'ic_jycy.png',        // 就业创业图标
        bannerPC: imgPath + 'banner_pc.jpg',
        bannerMB: imgPath + 'banner_mb.png'
        */
    }
}