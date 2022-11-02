import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';

const app = createApp(App);

import 'vant/lib/index.css';
import './styles/van-cover.css';
import { Tabbar, TabbarItem, Button, Popup, Icon, Swipe, SwipeItem, Image as VanImage, Field, Badge, Progress } from 'vant';

[Tabbar, TabbarItem, Button, Popup, Icon, Swipe, SwipeItem, VanImage, Field, Badge, Progress].map((com) => {
	app.use(com);
});
app.use(store).use(router).mount('#app');
