import API from "@/api";
import { FetchGet, FetchPost } from "@/common/fetch";
//请求首页的分类
export function getHomeCateList() {
  return new Promise((resolve, reject) => {
    FetchGet(API.CATELIST_URL).then(data => {
      let result = data.map(({ name, id }) => ({ name, id }));
      resolve(result);
    });
  });
}
//请求轮播图的数据
export function getHomeFocusList() {
  return new Promise((resolve, reject) => {
    FetchGet(API.FOCUSLIST_URL).then(data => {
      let newData = data.map(({ id, picUrl, targetUrl }) => ({
        id,
        picUrl,
        targetUrl
      }));
      resolve(newData);
    });
  });
}
//请求首页的推荐分类板块的数据
export function getHomeTopData() {
  return new Promise((resolve, reject) => {
    FetchGet(API.TOPDATA_URL).then(data => {
      resolve({
        policyDescList: data.policyDescList,
        kingKongData: {
          background: data.kingKongModule.background,
          list: data.kingKongModule.kingKongList.map(
            ({ sequen, text, picUrl }) => ({
              id: sequen,
              text,
              picUrl
            })
          )
        },
        bigPromotionData: [
          data.bigPromotionModule.bigPromotionList[0].data.contents[0],
          ...data.bigPromotionModule.bigPromotionList[1].data.contents
        ],
        bgUrl: data.bigPromotionModule.backgroundUrl
      });
    });
  });
}
// 分类列表数
// 参数id
export function getHomeCateListItemList(id) {
  return new Promise((resolve, reject) => {
    FetchGet(API.HOME_CATE_ITEM_LIST_URL, {
      id
    }).then(data => {
      console.log(data);
      resolve({
        bannerUrl: data.currentCategory.bannerUrl,
        categoryList: data.categoryItemList.map(item => {
          return {
            id: item.category.id,
            name: item.category.name,
            frontName: item.category.frontName,
            itemlist: item.itemList.map(listItem => {
              return {
                id: listItem.id,
                name: listItem.name,
                simpleDesc: listItem.simpleDesc,
                price: listItem.retailPrice,
                itemTagList: listItem.itemTagList,
                listPicUrl: listItem.listPicUrl
              };
            })
          };
        })
      });
    });
  });
}
export function getCategoryList() {
  return new Promise((resolve, reject) => {
    FetchGet(API.CATEGOEY_LIST_URL).then(data => {
      let newData = data.map(item => {
        return {
          id: item.id,
          name: item.name,
          wapBannerUrl: item.wapBannerUrl,
          subCateList: item.subCateList.map(subItem => {
            return {
              id: subItem.id,
              name: subItem.name,
              bannerUrl: subItem.bannerUrl
            };
          })
        };
      });
      resolve(newData);
    });
  });
}
export function getCategoryGrop(id) {
  return new Promise((resolve, reject) => {
    FetchGet(API.CATEGOEY_LIST_GROUP_URL, {
      categoryId: id
    }).then(data => {
      let newData = data.categoryGroupList.map(list => {
        return {
          id: list.id,
          name: list.name,
          categoryList: list.categoryList.map(item => {
            return {
              name: item.name,
              wapBannerUrl: item.wapBannerUrl,
              superCategoryId: item.superCategoryId
            };
          })
        };
      });
      resolve(newData);
    });
  });
}
export function getTopicTab() {
  return new Promise((resolve, reject) => {
    FetchGet(API.TOPIC_FIND_TABS_URL).then(data => {
      let topicData = data.map(item => {
        return {
          id: item.tabId,
          name: item.tabName
        };
      });
      resolve(topicData);
    });
  });
}
export function getTopicFindData(id) {
  return new Promise((resolve, reject) => {
    FetchGet(API.TOPIC_FIND_TAB_DATA_URL, {
      tabId: id
    }).then(data => {
      let FindData = data.result.map(find => {
        return {
          id: find.topicId,
          title: find.title,
          subtitle: find.subTitle,
          picUrl: find.picUrl,
          nickname: find.nickname,
          avatar:find.avatar,
          readCount:find.readCount,
          style:find.style
        };
      });
      resolve(FindData);
    });
  });
}
