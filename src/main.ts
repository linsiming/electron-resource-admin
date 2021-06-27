import { createApp } from 'vue'

// 全局样式
import '@/assets/css/global.less'

// 引入 Antd
import Antd from 'ant-design-vue'

import App from '@/App.vue'


const app = createApp(App)
app.use(Antd)
app.mount('#app')
