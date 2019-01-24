const route = {
  path: "/topic",
  component: () => import("@/pages/topic/index"),
  children: [
    {
      path: "topic/:id",
      props: true,
      component: () => import("@/components/topicCom/topicContent")
    },
    {
      path: "show",
      component: () => import("@/components/topicCom/showContent")
    }
  ]
};
export default route;
