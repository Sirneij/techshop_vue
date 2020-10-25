<template>
  <div class="navigation">
    <header class="navbar-style-7 position-relative">
      <div class="container">
        <div class="navbar-mobile d-lg-none">
          <div class="row align-items-center">
            <div class="col-3">
              <div class="navbar-toggle icon-text-btn">
                <a
                  class="icon-btn primary-icon-text mobile-menu-open-7"
                  href="javascript:void(0)"
                >
                  <i class="mdi mdi-menu"></i>
                </a>
              </div>
            </div>
            <div class="col-6">
              <div class="mobile-logo text-center">
                <router-link :to="{ name: 'iMain' }"
                  ><img src="../assets/images/logo.svg" alt="Logo"
                /></router-link>
              </div>
            </div>
            <div class="col-3">
              <div class="navbar-cart">
                <router-link
                  active-class="active"
                  class="icon-btn primary-icon-text icon-text-btn"
                  href="javascript:void(0)"
                  tag="a"
                  :to="{ name: 'checkout' }"
                >
                  <img src="../assets/images/icon-svg/cart-1.svg" alt="Icon" />
                  <span class="icon-text text-style-1">{{
                    cartItemCount
                  }}</span>
                </router-link>
                <div class="navbar-cart-dropdown">
                  <div class="checkout-style-2">
                    <div class="checkout-header d-flex justify-content-between">
                      <h6 class="title">Shopping Cart</h6>
                    </div>
                    <div class="checkout-table table-responsive">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td class="checkout-product">
                              <div class="product-cart d-flex">
                                <div class="product-thumb">
                                  <img
                                    src="../assets/images/product-cart/product-1.png"
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
                                    <li>
                                      <a
                                        class="delete"
                                        href="javascript:void(0)"
                                      >
                                        <i class="mdi mdi-delete"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td class="checkout-quantity">
                              <div class="product-quantity d-inline-flex">
                                <button type="button" id="sub" class="sub">
                                  <i class="mdi mdi-minus"></i>
                                </button>
                                <input type="text" value="1" />
                                <button type="button" id="add" class="add">
                                  <i class="mdi mdi-plus"></i>
                                </button>
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
                                    src="../assets/images/product-cart/product-2.png"
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
                                    <li>
                                      <a
                                        class="delete"
                                        href="javascript:void(0)"
                                      >
                                        <i class="mdi mdi-delete"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td class="checkout-quantity">
                              <div class="product-quantity d-inline-flex">
                                <button type="button" id="sub" class="sub">
                                  <i class="mdi mdi-minus"></i>
                                </button>
                                <input type="text" value="1" />
                                <button type="button" id="add" class="add">
                                  <i class="mdi mdi-plus"></i>
                                </button>
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
                                    src="../assets/images/product-cart/product-3.png"
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
                                    <li>
                                      <a
                                        class="delete"
                                        href="javascript:void(0)"
                                      >
                                        <i class="mdi mdi-delete"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td class="checkout-quantity">
                              <div class="product-quantity d-inline-flex">
                                <button type="button" id="sub" class="sub">
                                  <i class="mdi mdi-minus"></i>
                                </button>
                                <input type="text" value="1" />
                                <button type="button" id="add" class="add">
                                  <i class="mdi mdi-plus"></i>
                                </button>
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
                                    src="../assets/images/product-cart/product-4.png"
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
                                    <li>
                                      <a
                                        class="delete"
                                        href="javascript:void(0)"
                                      >
                                        <i class="mdi mdi-delete"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td class="checkout-quantity">
                              <div class="product-quantity d-inline-flex">
                                <button type="button" id="sub" class="sub">
                                  <i class="mdi mdi-minus"></i>
                                </button>
                                <input type="text" value="1" />
                                <button type="button" id="add" class="add">
                                  <i class="mdi mdi-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td class="checkout-price">
                              <p class="price">$36.00</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="checkout-footer">
                      <div
                        class="checkout-sub-total d-flex justify-content-between"
                      >
                        <p class="value">Subtotal Price:</p>
                        <p class="price">$144</p>
                      </div>
                      <div class="checkout-btn">
                        <a
                          href="cart-page.html"
                          class="main-btn primary-btn-border"
                          >View Cart</a
                        >
                        <a
                          href="checkout-page.html"
                          class="main-btn primary-btn"
                          >Checkout</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="navbar-search mt-15 search-style-5">
            <div class="search-select">
              <select style="display: none">
                <option value="">All</option>
                <option value="1">option 01</option>
                <option value="2">option 02</option>
                <option value="3">option 03</option>
                <option value="4">option 04</option>
                <option value="5">option 05</option>
              </select>
              <div class="nice-select" tabindex="0">
                <span class="current">All</span>
                <ul class="list">
                  <li data-value="" class="option selected">All</li>
                  <li data-value="1" class="option">option 01</li>
                  <li data-value="2" class="option">option 02</li>
                  <li data-value="3" class="option">option 03</li>
                  <li data-value="4" class="option">option 04</li>
                  <li data-value="5" class="option">option 05</li>
                </ul>
              </div>
            </div>
            <div class="search-input">
              <input type="text" placeholder="Search" />
            </div>
            <div class="search-btn">
              <button><i class="lni lni-search-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-container navbar-sidebar-7">
        <div class="navbar-close d-lg-none">
          <a class="close-mobile-menu-7" href="javascript:void(0)"
            ><i class="mdi mdi-close"></i
          ></a>
        </div>

        <div class="navbar-top-wrapper">
          <div class="container-lg">
            <div class="navbar-top d-lg-flex justify-content-between">
              <div class="navbar-top-left">
                <ul class="navbar-top-link">
                  <li>
                    <a href="about-page.html">About</a>
                  </li>
                  <li>
                    <a href="contact-page.html">Contact</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="mdi mdi-phone-in-talk"></i>
                      +8801234567890
                    </a>
                  </li>
                </ul>
              </div>

              <div class="navbar-top-right">
                <ul class="navbar-top-link">
                  <li>
                    <select style="display: none">
                      <option value="0">$ USD</option>
                      <option value="1">€ EURO</option>
                      <option value="2">$ CAD</option>
                      <option value="3">₹ INR</option>
                      <option value="4">¥ CNY</option>
                      <option value="5">৳ BDT</option>
                    </select>
                    <div class="nice-select" tabindex="0">
                      <span class="current">$ USD</span>
                      <ul class="list">
                        <li data-value="0" class="option selected">$ USD</li>
                        <li data-value="1" class="option">€ EURO</li>
                        <li data-value="2" class="option">$ CAD</li>
                        <li data-value="3" class="option">₹ INR</li>
                        <li data-value="4" class="option">¥ CNY</li>
                        <li data-value="5" class="option">৳ BDT</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <select style="display: none">
                      <option value="0">English</option>
                      <option value="1">Español</option>
                      <option value="2">Filipino</option>
                      <option value="3">Français</option>
                      <option value="4">العربية</option>
                      <option value="5">हिन्दी</option>
                      <option value="6">বাংলা</option>
                    </select>
                    <div class="nice-select" tabindex="0">
                      <span class="current">English</span>
                      <ul class="list">
                        <li data-value="0" class="option selected">
                          English
                        </li>
                        <li data-value="1" class="option">Español</li>
                        <li data-value="2" class="option">Filipino</li>
                        <li data-value="3" class="option">Français</li>
                        <li data-value="4" class="option">العربية</li>
                        <li data-value="5" class="option">हिन्दी</li>
                        <li data-value="6" class="option">বাংলা</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="login-page.html"
                      ><i class="mdi mdi-account"></i>Login</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-wrapper">
          <div class="container-lg">
            <nav
              class="main-navbar d-lg-flex justify-content-between align-items-center"
            >
              <div class="desktop-logo d-none d-lg-block">
                <router-link :to="{ name: 'iMain' }"
                  ><img src="../assets/images/logo.svg" alt="Logo"
                /></router-link>
              </div>

              <div class="navbar-menu">
                <ul class="main-menu">
                  <li class="position-static">
                    <a href="#">Womans</a>
                  </li>
                  <li>
                    <a href="category.html">mens</a>
                  </li>
                  <li>
                    <a href="category.html">Kids</a>
                  </li>
                  <li>
                    <a href="category.html">Accessories</a>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Pages</a>

                    <ul class="sub-menu">
                      <li>
                        <a href="about-page.html">About Page</a>
                      </li>
                      <li>
                        <a href="account-page.html">Account Page</a>
                      </li>
                      <li>
                        <a href="cart-page.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="category.html">Category Page</a>
                      </li>
                      <li>
                        <a href="checkout-page.html">Checkout Page</a>
                      </li>
                      <li>
                        <a href="contact-page.html">Contact Page</a>
                      </li>
                      <li>
                        <a href="login-page.html">Log In Page</a>
                      </li>
                      <li>
                        <a href="product-details-page.html"
                          >Product Details Page</a
                        >
                      </li>
                      <li>
                        <a href="signup-page.html">Sign Up Page</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="navbar-search-cart d-none d-lg-flex">
                <div class="navbar-search search-style-5">
                  <div class="search-select">
                    <select style="display: none">
                      <option value="">All</option>
                      <option value="1">option 01</option>
                      <option value="2">option 02</option>
                      <option value="3">option 03</option>
                      <option value="4">option 04</option>
                      <option value="5">option 05</option>
                    </select>
                    <div class="nice-select" tabindex="0">
                      <span class="current">All</span>
                      <ul class="list">
                        <li data-value="" class="option selected">All</li>
                        <li data-value="1" class="option">option 01</li>
                        <li data-value="2" class="option">option 02</li>
                        <li data-value="3" class="option">option 03</li>
                        <li data-value="4" class="option">option 04</li>
                        <li data-value="5" class="option">option 05</li>
                      </ul>
                    </div>
                  </div>
                  <div class="search-input">
                    <input type="text" placeholder="Search" />
                  </div>
                  <div class="search-btn">
                    <button><i class="lni lni-search-alt"></i></button>
                  </div>
                </div>

                <div class="navbar-cart">
                  <router-link
                    active-class="active"
                    class="icon-btn primary-icon-text icon-text-btn"
                    href="javascript:void(0)"
                    tag="a"
                    :to="{ name: 'checkout' }"
                  >
                    <img
                      src="../assets/images/icon-svg/cart-1.svg"
                      alt="Icon"
                    />
                    <span class="icon-text text-style-1">{{
                      cartItemCount
                    }}</span>
                  </router-link>
                  <div class="navbar-cart-dropdown">
                    <div class="checkout-style-2">
                      <div
                        class="checkout-header d-flex justify-content-between"
                      >
                        <h6 class="title">Shopping Cart</h6>
                      </div>
                      <div class="checkout-table">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td class="checkout-product">
                                <div class="product-cart d-flex">
                                  <div class="product-thumb">
                                    <img
                                      src="../assets/images/product-cart/product-1.png"
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
                                      <li>
                                        <a
                                          class="delete"
                                          href="javascript:void(0)"
                                        >
                                          <i class="mdi mdi-delete"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="checkout-quantity">
                                <div class="product-quantity d-inline-flex">
                                  <button type="button" id="sub" class="sub">
                                    <i class="mdi mdi-minus"></i>
                                  </button>
                                  <input type="text" value="1" />
                                  <button type="button" id="add" class="add">
                                    <i class="mdi mdi-plus"></i>
                                  </button>
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
                                      src="../assets/images/product-cart/product-2.png"
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
                                      <li>
                                        <a
                                          class="delete"
                                          href="javascript:void(0)"
                                        >
                                          <i class="mdi mdi-delete"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="checkout-quantity">
                                <div class="product-quantity d-inline-flex">
                                  <button type="button" id="sub" class="sub">
                                    <i class="mdi mdi-minus"></i>
                                  </button>
                                  <input type="text" value="1" />
                                  <button type="button" id="add" class="add">
                                    <i class="mdi mdi-plus"></i>
                                  </button>
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
                                      src="../assets/images/product-cart/product-3.png"
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
                                      <li>
                                        <a
                                          class="delete"
                                          href="javascript:void(0)"
                                        >
                                          <i class="mdi mdi-delete"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="checkout-quantity">
                                <div class="product-quantity d-inline-flex">
                                  <button type="button" id="sub" class="sub">
                                    <i class="mdi mdi-minus"></i>
                                  </button>
                                  <input type="text" value="1" />
                                  <button type="button" id="add" class="add">
                                    <i class="mdi mdi-plus"></i>
                                  </button>
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
                                      src="../assets/images/product-cart/product-4.png"
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
                                      <li>
                                        <a
                                          class="delete"
                                          href="javascript:void(0)"
                                        >
                                          <i class="mdi mdi-delete"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="checkout-quantity">
                                <div class="product-quantity d-inline-flex">
                                  <button type="button" id="sub" class="sub">
                                    <i class="mdi mdi-minus"></i>
                                  </button>
                                  <input type="text" value="1" />
                                  <button type="button" id="add" class="add">
                                    <i class="mdi mdi-plus"></i>
                                  </button>
                                </div>
                              </td>
                              <td class="checkout-price">
                                <p class="price">$36.00</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="checkout-footer">
                        <div
                          class="checkout-sub-total d-flex justify-content-between"
                        >
                          <p class="value">Subtotal Price:</p>
                          <p class="price">$144</p>
                        </div>
                        <div class="checkout-btn">
                          <a
                            href="cart-page.html"
                            class="main-btn primary-btn-border"
                            >View Cart</a
                          >
                          <a
                            href="checkout-page.html"
                            class="main-btn primary-btn"
                            >Checkout</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="overlay-7"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["cartItemCount"],
  data() {
    return {
      sitename: "Techshop",
      siteLogo: "../assets/images/logo.svg"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
