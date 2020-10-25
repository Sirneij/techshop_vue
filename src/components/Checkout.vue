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
                    <router-link tag="a" :to="{ name: 'iMain' }"
                      >Home</router-link
                    >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Checkout
                  </li>
                </ol>
              </div>
              <div class="breadcrumb-right">
                <h5 class="heading-5 font-weight-500">Checkout</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====== Breadcrumbs Part Ends ======-->

    <section class="checkout-wrapper pt-50">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="checkout-steps-form-style-1 mt-50">
              <ul id="checkout-steps">
                <li data-vjstepno="1" class="vjopt_activeli">
                  <h6 class="title">Your Personal Details</h6>
                  <section class="checkout-steps-form-content" style="">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="single-form form-default">
                          <label>User Name</label>
                          <div class="row">
                            <div class="col-md-6 form-input form">
                              <input
                                type="text"
                                placeholder="First Name"
                                v-model.trim="order.firstName"
                              />
                            </div>
                            <div class="col-md-6 form-input form">
                              <input
                                type="text"
                                placeholder="Last Name"
                                v-model.trim="order.lastName"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>Email Address</label>
                          <div class="form-input form">
                            <input
                              type="email"
                              placeholder="Email Address"
                              v-model.trim="order.emailAddress"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>Phone Number</label>
                          <div class="form-input form">
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              v-model.number="order.phoneNumber"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single-form form-default">
                          <label>Mailing Address</label>
                          <div class="form-input form">
                            <input
                              type="text"
                              placeholder="Mailing Address"
                              v-model.trim="order.address"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>City</label>
                          <div class="form-input form">
                            <input
                              type="text"
                              placeholder="City"
                              v-model.trim="order.city"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>Post Code</label>
                          <div class="form-input form">
                            <input
                              type="text"
                              placeholder="Post Code"
                              v-model.number="order.zip"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>Country</label>
                          <div class="form-input form">
                            <input
                              type="text"
                              placeholder="Country"
                              v-model.trim="order.country"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="select-elements select-style-2 mt-30">
                          <label>Region/State</label>
                          <div class="country-select">
                            <select v-model="order.state">
                              <option disabled>select</option>
                              <option
                                v-for="(state, key) in states"
                                :value="state"
                                :key="key"
                              >
                                {{ key }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single-checkbox checkbox-style-3">
                          <input
                            type="checkbox"
                            id="checkbox-3"
                            v-model="order.gift"
                            value="true"
                            :true-value="order.sendGift"
                            :false-value="order.dontSendGift"
                          />
                          <label for="checkbox-3"><span></span></label>
                          <p>Ship As Gift?.</p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-checkbox checkbox-style-3">
                          <input
                            type="radio"
                            id="radio-3"
                            :value="order.home"
                            v-model="order.method"
                          />
                          <label for="radio-3"><span></span></label>
                          <p>Home.</p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-checkbox checkbox-style-3">
                          <input
                            type="radio"
                            id="radio-4"
                            :value="order.business"
                            v-model="order.method"
                          />
                          <label for="radio-4"><span></span></label>
                          <p>Business.</p>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single-form">
                          <button
                            class="vjsteps_nxt main-btn primary-btn"
                            @click="submitForm"
                          >
                            next step
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </li>
                <li data-vjstepno="2">
                  <h6 class="title">Shipping Address</h6>
                  <section
                    class="checkout-steps-form-content"
                    style="display: none"
                  >
                    <div class="row">
                      <div class="col-md-12">
                        <div class="single-form form-default">
                          <label>User Name</label>
                          <div class="row">
                            <div class="col-md-6 form-input form">
                              <input type="text" placeholder="First Name" />
                            </div>
                            <div class="col-md-6 form-input form">
                              <input type="text" placeholder="Last Name" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>Email Address</label>
                          <div class="form-input form">
                            <input type="text" placeholder="Email Address" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>Phone Number</label>
                          <div class="form-input form">
                            <input type="text" placeholder="Phone Number" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single-form form-default">
                          <label>Mailing Address</label>
                          <div class="form-input form">
                            <input type="text" placeholder="Mailing Address" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>City</label>
                          <div class="form-input form">
                            <input type="text" placeholder="City" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>Post Code</label>
                          <div class="form-input form">
                            <input type="text" placeholder="Post Code" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single-form form-default">
                          <label>Country</label>
                          <div class="form-input form">
                            <input type="text" placeholder="Country" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="select-elements select-style-2 mt-30">
                          <label>Region/State</label>
                          <div class="select-items select">
                            <select style="display: none">
                              <option value="0">select</option>
                              <option value="1">select option 01</option>
                              <option value="2">select option 02</option>
                              <option value="3">select option 03</option>
                              <option value="4">select option 04</option>
                              <option value="5">select option 05</option>
                            </select>
                            <div class="nice-select" tabindex="0">
                              <span class="current">select</span>
                              <ul class="list">
                                <li data-value="0" class="option selected">
                                  select
                                </li>
                                <li data-value="1" class="option">
                                  select option 01
                                </li>
                                <li data-value="2" class="option">
                                  select option 02
                                </li>
                                <li data-value="3" class="option">
                                  select option 03
                                </li>
                                <li data-value="4" class="option">
                                  select option 04
                                </li>
                                <li data-value="5" class="option">
                                  select option 05
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-payment-option">
                          <h6 class="heading-6 font-weight-400 payment-title">
                            Select Delivery Option
                          </h6>
                          <div class="payment-option-wrapper">
                            <div class="single-payment-option">
                              <input
                                type="radio"
                                name="shipping"
                                checked=""
                                id="shipping-1"
                              />
                              <label for="shipping-1">
                                <img
                                  src="assets/images/shiping/shipping-1.png"
                                  alt="Sipping"
                                />
                                <p>Standard Shipping</p>
                                <span class="price">$10.50</span>
                              </label>
                            </div>
                            <div class="single-payment-option">
                              <input
                                type="radio"
                                name="shipping"
                                id="shipping-2"
                              />
                              <label for="shipping-2">
                                <img
                                  src="assets/images/shiping/shipping-2.png"
                                  alt="Sipping"
                                />
                                <p>Standard Shipping</p>
                                <span class="price">$10.50</span>
                              </label>
                            </div>
                            <div class="single-payment-option">
                              <input
                                type="radio"
                                name="shipping"
                                id="shipping-3"
                              />
                              <label for="shipping-3">
                                <img
                                  src="assets/images/shiping/shipping-3.png"
                                  alt="Sipping"
                                />
                                <p>Standard Shipping</p>
                                <span class="price">$10.50</span>
                              </label>
                            </div>
                            <div class="single-payment-option">
                              <input
                                type="radio"
                                name="shipping"
                                id="shipping-4"
                              />
                              <label for="shipping-4">
                                <img
                                  src="assets/images/shiping/shipping-4.png"
                                  alt="Sipping"
                                />
                                <p>Standard Shipping</p>
                                <span class="price">$10.50</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="steps-form-btn">
                          <button class="vjsteps_prev main-btn primary-btn">
                            previous
                          </button>
                          <a href="#" class="main-btn primary-btn"
                            >Save &amp; Continue</a
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="checkout-sidebar pt-20">
              <div class="checkout-sidebar-coupon mt-30">
                <p>Apply Coupon to get discount!</p>
                <form action="#" class="has-validation-callback">
                  <div class="single-form form-default">
                    <div class="form-input form">
                      <input type="text" placeholder="Coupon Code" />
                    </div>
                    <button class="main-btn primary-btn">apply</button>
                  </div>
                </form>
              </div>
              <div class="checkout-sidebar-price-table mt-30">
                <h5 class="title">Pricing Table</h5>
                <div class="sub-total-price">
                  <div class="total-price">
                    <p class="value">Subtotal Price:</p>
                    <p class="price">$144.00</p>
                  </div>
                  <div class="total-price shipping">
                    <p class="value">Subtotal Price:</p>
                    <p class="price">$10.50</p>
                  </div>
                  <div class="total-price discount">
                    <p class="value">Subtotal Price:</p>
                    <p class="price">$10.00</p>
                  </div>
                </div>
                <div class="total-payable">
                  <div class="payable-price">
                    <p class="value">Subtotal Price:</p>
                    <p class="price">$164.50</p>
                  </div>
                </div>
                <div class="price-table-btn">
                  <a
                    href="javascript:void(0)"
                    class="main-btn primary-btn btn-block"
                    >Checkout</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="checkout-wrapper pt-50">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="checkout-payment-style-1 mt-50">
              <h6 class="title">Payment Info</h6>
              <div class="checkout-payment-form">
                <div class="single-form form-default">
                  <label>Cardholder Name</label>
                  <div class="form-input form">
                    <input type="text" placeholder="Cardholder Name" />
                  </div>
                </div>
                <div class="single-form form-default">
                  <label>Card Number</label>
                  <div class="form-input form">
                    <input
                      id="credit-input"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                    />
                    <img src="assets/images/card.png" alt="card" />
                  </div>
                </div>
                <div class="payment-card-info">
                  <div class="single-form form-default">
                    <label>Expiration</label>
                    <div class="expiration d-flex">
                      <div class="form-input form">
                        <input type="text" placeholder="MM" />
                      </div>
                      <div class="form-input form">
                        <input type="text" placeholder="YYYY" />
                      </div>
                    </div>
                  </div>
                  <div class="single-form form-default">
                    <label
                      >CVC/CVV <span><i class="mdi mdi-alert-circle"></i></span
                    ></label>
                    <div class="form-input form">
                      <input type="text" placeholder="***" />
                    </div>
                  </div>
                </div>
                <div class="single-form form-default">
                  <button class="main-btn primary-btn">pay now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="checkout-sidebar-accordion mt-50">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <a
                      href="javascript:void(0)"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      >Selected Products</a
                    >
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="checkout-table table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td class="checkout-product">
                                <div class="product-cart d-flex">
                                  <div class="product-thumb">
                                    <img
                                      src="assets/images/product-cart/product-1.png"
                                      alt="Product"
                                    />
                                  </div>
                                  <div class="product-content media-body">
                                    <h5 class="title">
                                      <a href="product-details-page.html"
                                        >Hollow Port</a
                                      >
                                    </h5>
                                    <ul>
                                      <li><span>Brown</span></li>
                                      <li><span>XL</span></li>
                                      <li><span>1 X 36.00</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="checkout-price">
                                <p class="price">$36.00</p>
                              </td>
                            </tr>
                            <tr>
                              <td class="checkout-product">
                                <div class="product-cart d-flex">
                                  <div class="product-thumb">
                                    <img
                                      src="assets/images/product-cart/product-2.png"
                                      alt="Product"
                                    />
                                  </div>
                                  <div class="product-content media-body">
                                    <h5 class="title">
                                      <a href="product-details-page.html"
                                        >Mist Black Triblend</a
                                      >
                                    </h5>
                                    <ul>
                                      <li><span>Brown</span></li>
                                      <li><span>XL</span></li>
                                      <li><span>1 X 36.00</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="checkout-price">
                                <p class="price">$36.00</p>
                              </td>
                            </tr>
                            <tr>
                              <td class="checkout-product">
                                <div class="product-cart d-flex">
                                  <div class="product-thumb">
                                    <img
                                      src="assets/images/product-cart/product-3.png"
                                      alt="Product"
                                    />
                                  </div>
                                  <div class="product-content media-body">
                                    <h5 class="title">
                                      <a href="product-details-page.html"
                                        >Realm Bone</a
                                      >
                                    </h5>
                                    <ul>
                                      <li><span>Brown</span></li>
                                      <li><span>XL</span></li>
                                      <li><span>1 X 36.00</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="checkout-price">
                                <p class="price">$36.00</p>
                              </td>
                            </tr>
                            <tr>
                              <td class="checkout-product">
                                <div class="product-cart d-flex">
                                  <div class="product-thumb">
                                    <img
                                      src="assets/images/product-cart/product-4.png"
                                      alt="Product"
                                    />
                                  </div>
                                  <div class="product-content media-body">
                                    <h5 class="title">
                                      <a href="product-details-page.html"
                                        >Circular Sienna</a
                                      >
                                    </h5>
                                    <ul>
                                      <li><span>Brown</span></li>
                                      <li><span>XL</span></li>
                                      <li><span>1 X 36.00</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="checkout-price">
                                <p class="price">$36.00</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="pricing-table">
                        <div class="sub-total-price">
                          <div class="total-price">
                            <p class="value">Subtotal Price:</p>
                            <p class="price">$144.00</p>
                          </div>
                          <div class="total-price shipping">
                            <p class="value">Subtotal Price:</p>
                            <p class="price">$10.50</p>
                          </div>
                          <div class="total-price discount">
                            <p class="value">Subtotal Price:</p>
                            <p class="price">$10.00</p>
                          </div>
                        </div>
                        <div class="total-payable">
                          <div class="payable-price">
                            <p class="value">Subtotal Price:</p>
                            <p class="price">$164.50</p>
                          </div>
                        </div>
                        <div class="price-table-btn">
                          <a
                            href="javascript:void(0)"
                            class="main-btn primary-btn-border"
                            >edit shopping cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <a
                      href="javascript:void(0)"
                      class="collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      >Personal Details</a
                    >
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="checkout-sidebar-details">
                        <div class="single-details">
                          <p class="info">
                            {{ order.firstName }} {{ order.lastName }}
                          </p>
                          <p class="info">{{ order.emailAddress }}</p>
                          <p class="info">{{ order.phoneNumber }}</p>
                        </div>
                        <div class="single-details">
                          <h6 class="title">Mailing Address</h6>
                          <p class="info">
                            {{ order.address }}
                          </p>
                        </div>
                        <div class="details-btn">
                          <a
                            href="javascript:void(0)"
                            class="main-btn primary-btn-border"
                            >edit Information</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <a
                      href="javascript:void(0)"
                      class="collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      >Shipping Address</a
                    >
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="checkout-sidebar-details">
                        <div class="single-details">
                          <p class="info">Jhone Doe</p>
                          <p class="info">doejhon@email.com</p>
                          <p class="info">+123 456 789 0234</p>
                        </div>
                        <div class="single-details">
                          <h6 class="title">Mailing Address</h6>
                          <p class="info">
                            Company Inc., 8901 Marmora Road, <br />
                            Glasgow, D04 89GR.
                          </p>
                        </div>
                        <div class="details-btn">
                          <a
                            href="javascript:void(0)"
                            class="main-btn primary-btn-border"
                            >edit Information</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "checkout",
  props: ["cartItemCount"],
  data() {
    return {
      states: {
        ON: "Ondo",
        LA: "Lagos",
        ABJ: "Abuja",
        KWA: "Kwara"
      },
      order: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        country: "",
        method: "Home Address",
        business: "Business Address",
        home: "Home Address",
        gift: "Send As A Gift",
        sendGift: "Send As A Gift",
        dontSendGift: "Do Not Send As A Gift"
      }
    };
  },
  components: { "header-content": Header },
  methods: {
    submitForm() {
      alert("Submitted");
    }
  },
  created() {
    let mainScript = document.createElement("script");
    mainScript.setAttribute("src", "/static/js/main.js");
    mainScript.setAttribute("type", "text/javascript");
    document.body.appendChild(mainScript);
  }
};
</script>

<style></style>
