import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Checkout from "@/components/Checkout";
import Product from "@/components/Product";
import EditProduct from "@/components/EditProduct";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "iMain",
      component: Main,
      props: true
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
      props: true
    },
    {
      path: "/product/:reference/:id",
      name: "singleProduct",
      component: Product,
      props: true,
      children: [
        {
          path: "edit",
          name: "Edit",
          component: EditProduct,
          props: true
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
