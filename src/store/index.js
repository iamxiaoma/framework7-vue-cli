import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import StoreCache from '../utils/storeCache'

Vue.use(Vuex)
let cache = new StoreCache('f7')
export default new Vuex.Store({
  state: {
    plusReady: false,
    weixin: false,
    wxjssdk_inited: false, // 微信 jssdk 是否已初始化，默认为 false
    version: '1.0.0',
    member: cache.get('member') || null, // 用户信息
    lang: cache.get('lang') || 'zh', // 当前的语言版本，默认为简体中文
    token: cache.get('token') || '', // 登录状态调用接口的token
  },
  mutations,
  actions,
  getters
})
