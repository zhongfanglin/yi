/*
接口：请求首页头部导航数据
method：GET
params:无
传参数的要求
 */
const CATELIST_URL = '/api/home/catelist';

/*
接口：请求首页轮播图数据
method：GET
params:无
 */
const FOCUSLIST_URL = '/api/home/focuslist'
/*
接口：请求首页推荐分类板块数据
method：GET
params:无
 */
const TOPDATA_URL = '/api/home/topData'
// 分类列表数
// 参数id
const HOME_CATE_ITEM_LIST_URL = '/api/home/catelist/itemlist'
const CATEGOEY_LIST_URL = '/api/category/listmap'
const CATEGOEY_LIST_GROUP_URL = '/api/category/listmap/group'
const TOPIC_FIND_TABS_URL = '/api/topic/find/getTabs';
const TOPIC_FIND_TAB_DATA_URL = '/api/topic/find/getTabData';
export default {
    CATELIST_URL,
    FOCUSLIST_URL,
    TOPDATA_URL,
    HOME_CATE_ITEM_LIST_URL,
    CATEGOEY_LIST_URL,
    CATEGOEY_LIST_GROUP_URL,
    TOPIC_FIND_TABS_URL,
    TOPIC_FIND_TAB_DATA_URL
}