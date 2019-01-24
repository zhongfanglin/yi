import scroller from "@/common/scroller/scroller";
import { Icon } from 'vant'
import { FetchGet, FetchPost } from '@/common/fetch'
export default {
    install(Vue) {
        Vue.component(scroller.name, scroller);
        Vue.use(Icon);
        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}
