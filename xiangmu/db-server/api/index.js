/*
接口：请求首页头部导航数据
method：GET
params:无
 */
const CATELIST_URL = '/api/home/catelist';
/*
接口：请求首页轮播图数据
method：GET
params:无
 */
const FOCUSLIST_URL = '/api/home/focuslist';
/*
接口：请求首页推荐分类板块数据
method：GET
params:无
 */
const TOPDATA_URL = '/api/home/topData';
module.exports = {
    CATELIST_URL,
    FOCUSLIST_URL,
    TOPDATA_URL
}
/*
接口功能：分类列表
method: GET
*/
module.exports.CATE_LIST_URL = '/api/catelist';


/*
接口功能：首页轮播图数据
method: GET
*/
module.exports.HOME_BANNER_LIST_URL = '/api/home/bannerlist';

// 网易严选协议
module.exports.POLICY_LIST_URL = '/api/policylist';

// 首页分类列表
module.exports.HOME_CATE_LIST_URL = '/api/home/catelist';

// 首页活动
module.exports.HOME_ACTIVITY_URL = '/api/home/activitylist';

//品牌制造商直供
module.exports.HOME_TAG_LIST_URL = '/api/home/tagList';

//类目热销榜
module.exports.HOME_CATE_HOT_SELL_URL = '/api/home/catehotsell';

// 人气推荐
module.exports.HOME_POPULAR_LIST_URL = '/api/home/popularlist';

// 限时购
module.exports.HOME_FLASH_SALE_URL = '/api/home/flashsale';

// 新品首发
module.exports.HOME_NEW_ITEM_URL = '/api/home/newitemlist';

// 购物指南
module.exports.HOME_SHOPPING_GUIDE_URL = '/api/home/shoppingguide';

// 推荐列表
module.exports.HOME_TOP_CATELIST_URL = '/api/home/top/catelist';

// 分类列表数
// 参数id
module.exports.HOME_CATE_ITEM_LIST_URL = '/api/home/catelist/itemlist';

// 商品详情 
// 参数id 
module.exports.ITEM_DETAIL_URL = '/api/item/detail';





//分类
module.exports.CATEGOEY_LIST_URL = '/api/category/listmap';

//分类数据
// 参数categoryId
module.exports.CATEGOEY_LIST_GROUP_URL = '/api/category/listmap/group';

// 分类商品列表
//参数：categoryId subCategoryId
module.exports.CATEGOEY_LIST_GROUP_ITEM_URL = '/api/category/listmap/group/item';

// 识物tab数据
module.exports.TOPIC_FIND_TABS_URL = '/api/topic/find/getTabs';

// 识物tab列表数据
// 参数：tabId (默认值为9  推荐9，达人4，上新5，home6)   size   page
module.exports.TOPIC_FIND_TAB_DATA_URL = '/api/topic/find/getTabData';

// 识物tab晒单banner数据
module.exports.TOPIC_FIND_SHOW_BANNER_URL = '/api/topic/find/getTabShowBanner';
// 识物tab晒单列表数据 
// 参数：page  size  type:1最新，2本月最热，3晒单合辑
module.exports.TOPIC_FIND_SHOW_DATA_URL = '/api/topic/find/getTabShowData';

// 热门搜索词汇
module.exports.HOT_SEARCH_WORDS_URL = '/api/search/hotwords';

