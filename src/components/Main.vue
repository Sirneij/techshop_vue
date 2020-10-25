<template>
  <div>
    <header-content :cartItemCount="cartItemCount"></header-content>
    <!--====== Header Style 1 Part Start ======-->
    <section class="header-style-1">
      <div class="header-big">
        <div class="header-items-active">
          <div
            class="single-header-item bg_cover"
            style="
              background-image: url(/static/images/header-1/header-big-1.jpg);
            "
          >
            <div class="header-item-content">
              <h3 class="title">
                Don’t say it with flowers: A NOMOS watch is a gift that lasts
              </h3>
              <a href="javascript:void(0)" class="link"
                >Our Valentine's Day collection</a
              >
            </div>
          </div>
          <div
            class="single-header-item bg_cover"
            style="
              background-image: url(/static/images/header-1/header-big-2.jpg);
            "
          >
            <div class="header-item-content">
              <h3 class="title">
                Don’t say it with flowers: A NOMOS watch is a gift that lasts
              </h3>
              <a href="javascript:void(0)" class="link"
                >Our Valentine's Day collection</a
              >
            </div>
          </div>
          <div
            class="single-header-item bg_cover"
            style="
              background-image: url(/static/images/header-1/header-big-1.jpg);
            "
          >
            <div class="header-item-content">
              <h3 class="title">
                Don’t say it with flowers: A NOMOS watch is a gift that lasts
              </h3>
              <a href="javascript:void(0)" class="link"
                >Our Valentine's Day collection</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="header-min">
        <div
          class="header-min-item product-style-25 bg_cover"
          style="background-image: url(/static/images/header-1/header-min-1.jpg)"
        >
          <div class="product-content">
            <h4 class="title">
              <a href="#">Metro 38 Date</a>
            </h4>
            <p>Reference 1102</p>
            <a href="javascript:void(0)" class="main-btn primary-btn-border">
              <img src="/static/images/icon-svg/cart-5.svg" alt="" />$ 399</a
            >
          </div>
        </div>
        <div
          class="header-min-item product-style-25 bg_cover"
          style="background-image: url(/static/images/header-1/header-min-2.jpg)"
        >
          <div class="product-content">
            <h4 class="title">
              <a href="#">Metro 38 Date</a>
            </h4>
            <p>Reference 1102</p>
            <a href="javascript:void(0)" class="main-btn primary-btn-border">
              <img src="/static/images/icon-svg/cart-5.svg" alt="" />$ 399</a
            >
          </div>
        </div>
      </div>
    </section>
    <!--====== Header Style 1 Part Ends ======-->

    <!--====== Content Card Style 4 Part Start ======-->
    <section class="content-card-style-4 pt-70 pb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-content mt-15 text-center">
              <div class="content-icon">
                <i class="mdi mdi-truck-fast"></i>
              </div>
              <div class="content-content">
                <h4 class="title">
                  <a href="javascript:void(0)">Two-hour delivery</a>
                </h4>
                <p>Available in most metros on selected in-stock products</p>
                <a href="javascript:void(0)" class="more">learn more</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-content mt-15 text-center">
              <div class="content-icon">
                <i class="mdi mdi-message-text"></i>
              </div>
              <div class="content-content">
                <h4 class="title">
                  <a href="javascript:void(0)">Get help buying</a>
                </h4>
                <p>
                  Have a question? Call a Specialist or chat online for help
                </p>
                <a href="#" class="more">Contact us</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-8">
            <div class="single-content mt-15 text-center">
              <div class="content-icon">
                <i class="mdi mdi-ticket-percent"></i>
              </div>
              <div class="content-content">
                <h4 class="title">
                  <a href="javascript:void(0)">Find the card for you</a>
                </h4>
                <p>Get 3% Daily Cash with special financing offers from us</p>
                <a href="javascript:void(0)" class="more">learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====== Content Card Style 4 Part Ends ======-->

    <!--====== Product Style 1 Part Start ======-->
    <section class="product-wrapper pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-50">
              <h1 class="heading-1 font-weight-700">Featured Items</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-sm-6"
            v-for="product in products"
            :key="product.id"
          >
            <div class="product-style-1 mt-30">
              <div class="product-image">
                <span
                  class="icon-text text-style-1"
                  v-if="calculateDiscount(product)"
                  >{{ calculateDiscount(product) }} off!</span
                >
                <span class="icon-text text-style-1" v-else>NEW</span>
                <div class="product-active">
                  <div class="product-item active">
                    <img :src="product.img1" alt="product" />
                  </div>
                  <div class="product-item">
                    <img :src="product.img2" alt="product" />
                  </div>
                </div>
                <a class="add-wishlist" href="javascript:void(0)">
                  <i class="mdi mdi-heart-outline"></i>
                </a>
              </div>
              <div class="product-content text-center">
                <h4 class="title">
                  <router-link
                    tag="a"
                    :to="{
                      name: 'singleProduct',
                      params: { reference: product.reference, id: product.id }
                    }"
                    >{{ product.title }}</router-link
                  >
                </h4>
                <p>Reference {{ product.reference }}</p>
                <transition name="bounce" mode="out-in">
                  <p
                    v-if="
                      product.availableInventory - cartCount(product.id) === 0
                    "
                    key="0"
                  >
                    Out of stock!
                  </p>
                  <p
                    v-else-if="
                      product.availableInventory - cartCount(product.id) < 5
                    "
                    key="1"
                  >
                    {{ product.availableInventory - cartCount(product.id) }}
                    stock left!
                  </p>
                  <p v-else key="">Buy Now!</p>
                </transition>
                <button
                  class="main-btn secondary-1-btn"
                  @click="addToCart(product)"
                  v-if="canAddToCart(product)"
                >
                  <img src="../assets/images/icon-svg/cart-7.svg" alt="" />
                  {{ product.salePrice | formatPrice }}
                </button>
                <button class="main-btn secondary-1-btn" v-else disabled>
                  <img src="../assets/images/icon-svg/cart-7.svg" alt="" />
                  {{ product.salePrice | formatPrice }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====== Product Style 1 Part Ends ======-->
  </div>
</template>

<script>
import Header from "./Header.vue";
import { mapGetters } from "vuex";
export default {
  name: "iMain",
  components: { "header-content": Header },
  data() {
    return { cart: [] };
  },
  computed: {
    sortedProducts() {
      if (this.products.length > 0) {
        let productsArray = this.products.slice(0);
        function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        }
        return productsArray.sort(compare);
      }
    },
    ...mapGetters(["products"]),
    cartItemCount() {
      return this.cart.length || 0;
    }
  },
  methods: {
    checkRating(n, product) {
      return product.rating - n >= 0;
    },
    calculateDiscount(product) {
      if (product.salePrice < product.originalPrice) {
        let diff = product.originalPrice - product.salePrice;
        let discount = Math.round((diff / product.originalPrice) * 100);
        return discount + "%";
      } else {
        return "";
      }
    },
    canAddToCart: function(aProduct) {
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    },
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    showCheckout: function() {
      this.showProduct = this.showProduct ? false : true;
    },
    submitForm() {
      alert("Submitted");
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
    this.$store.dispatch("initStore");
    let mainScript = document.createElement("script");
    mainScript.setAttribute("src", "/static/js/main.js");
    mainScript.setAttribute("type", "text/javascript");
    document.body.appendChild(mainScript);
  }
};
</script>

<style scoped>
.bounce-enter-active {
  animation: shake 0.72s cubic-bezier(0.37, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
@keyframes shake {
  10%,
  90% {
    color: #e14c7b;
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    color: #e14c7b;
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
