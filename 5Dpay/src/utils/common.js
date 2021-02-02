
// import {setCookie, getCookie, delCookie} from './cookie.js';

export let config={//公共参数
    test:'xxx'
}

export function language(data) {//获取语言,默认中文
  // let lang = getCookie('language')
  // if(!!lang){
  //   return lang
  // }else{
  //   return 'zh'
  // }
  config.log(data)
  return 'zh'
  }