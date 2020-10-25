<template>
  <div>
    <header-content :cartItemCount="cartItemCount"></header-content>
    <!--====== Breadcrumbs Part Start ======-->
    <section class="breadcrumbs-wrapper pt-50 pb-50 bg-primary-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center"
            >
              <div class="breadcrumb-left">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link :to="{ name: 'iMain' }">Home</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Product Details
                  </li>
                </ol>
              </div>
              <div class="breadcrumb-right">
                <h5 class="heading-5 font-weight-500">
                  {{ product.title }} Details
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====== Breadcrumbs Part Ends ======-->

    <!--====== Product Details Style 1 Part Start ======-->
    <section class="product-details-wrapper pt-50 pb-100">
      <div class="container">
        <div class="product-details-style-1">
          <div class="row flex-lg-row-reverse align-items-center">
            <div class="col-lg-6">
              <div class="product-details-image mt-50">
                <div class="product-image">
                  <div class="product-image-active-1">
                    <div class="single-image">
                      <img :src="product.img1" alt="" />
                    </div>
                    <div class="single-image">
                      <img :src="product.img2" alt="" />
                    </div>
                  </div>
                </div>
                <div class="product-thumb-image">
                  <div class="product-thumb-image-active-1">
                    <div class="single-thumb">
                      <img :src="product.img1" alt="" />
                    </div>
                    <div class="single-thumb">
                      <img :src="product.img2" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="product-details-content mt-45">
                <p class="sub-title">{{ product.title }}</p>
                <h2 class="title">{{ product.title }}</h2>

                <div class="product-items flex-wrap">
                  <h6 class="item-title">Select Your Oculus:</h6>
                  <div class="items-wrapper">
                    <div class="single-item active">
                      <div class="items-image">
                        <img :src="product.img1" alt="product" />
                      </div>
                      <p class="text">Oculus Go</p>
                    </div>
                    <div class="single-item">
                      <div class="items-image">
                        <img :src="product.img2" alt="product" />
                      </div>
                      <p class="text">Oculus Quest</p>
                    </div>
                    <div class="single-item">
                      <div class="items-image">
                        <img :src="product.img2" alt="product" />
                      </div>
                      <p class="text">Oculus Rift S</p>
                    </div>
                  </div>
                </div>

                <div class="product-select-wrapper flex-wrap">
                  <div class="select-item">
                    <h6 class="select-title">
                      Select Color: <span>Grey</span>
                    </h6>
                    <ul class="color-select">
                      <li class="active" data-color="#EFEFEF"></li>
                      <li data-color="#FAE5EC"></li>
                      <li data-color="#4C4C4C"></li>
                    </ul>
                  </div>
                  <div class="select-item">
                    <h6 class="select-title">Memory (GB):</h6>
                    <div class="size-select">
                      <select>
                        <option value="">32gb</option>
                        <option value="">64gb</option>
                        <option value="">128 gb</option>
                      </select>
                    </div>
                  </div>
                  <div class="select-item">
                    <h6 class="select-title">Select Quantity:</h6>

                    <div class="select-quantity">
                      <button type="button" id="sub" class="sub">
                        <i class="mdi mdi-minus"></i>
                      </button>
                      <input type="text" value="1" />
                      <button type="button" id="add" class="add">
                        <i class="mdi mdi-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="select-item">
                    <h6 class="select-title">Select Shipping Country:</h6>
                    <div class="country-select">
                      <select>
                        <option value="0">-- Select Country --</option>
                        <option value="1">Bangladesh</option>
                        <option value="2">india</option>
                        <option value="3">Pakistan</option>
                        <option value="4">Australia</option>
                        <option value="5">Canada</option>
                        <option value="6">Spain</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="product-price">
                  <h6 class="price-title">Price:</h6>
                  <p class="sale-price">
                    {{ product.salePrice | formatPrice }}
                  </p>
                  <p class="regular-price">
                    {{ product.originalPrice | formatPrice }}
                  </p>
                </div>

                <div class="product-btn">
                  <a href="javascript:void(0)" class="main-btn primary-btn">
                    <img src="../assets/images/icon-svg/cart-4.svg" alt="" />
                    Add to cart
                  </a>
                  <a href="javascript:void(0)" class="main-btn secondary-1-btn">
                    <img src="../assets/images/icon-svg/cart-8.svg" alt="" />
                    Buy Now
                  </a>
                  <button
                    href="javascript:void(0)"
                    class="main-btn primary-btn"
                    @click="edit"
                  >
                    <img src="../assets/images/icon-svg/cart-4.svg" alt="" />
                    Edit Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row flex-lg-row-reverse align-items-center">
            <router-view />
          </div>
        </div>
      </div>
    </section>
    <!--====== Product Details Style 1 Part Ends ======-->
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  props: ["cartItemCount"],
  components: { "header-content": Header },
  data() {
    return {
      product: ""
    };
  },
  methods: {
    edit() {
      this.$router.push({ name: "Edit" });
    }
  },
  filters: {
    formatPrice: price => {
      if (!parseInt(price)) {
        return "";
      }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },

  created: function() {
    axios.get("/static/products.json").then(response => {
      this.product = response.data.products.filter(
        data =>
          data.reference == this.$route.params.reference &&
          data.id == this.$route.params.id
      )[0];
    });
    let mainScript = document.createElement("script");
    mainScript.setAttribute("src", "/static/js/main.js");
    mainScript.setAttribute("type", "text/javascript");
    document.body.appendChild(mainScript);
  }
};
</script>

<style></style>
