// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import { Button } from 'element-ui';


Vue.config.productionTip = false;
// 全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
// 局部
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
// Vue.use(Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
