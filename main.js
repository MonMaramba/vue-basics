// Vue.component regusters the component.  'product' is the component name.
Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
        <div class="product-image">
          <!-- v-bind is a vue directive that binds the data to the attribute -->
          <img v-bind:src="image" />
        </div>
        <div class="product-info">
          <!-- like handlebars, the double expressions {{ }}tells where data needs to go -->
          <h1>{{title}}</h1>

          <!-- conditional rendering   -->
          <p v-if="inStock">In Stock</p>

          <p v-else>
            Out of Stock
          </p>
          <p>Shipping: {{ shipping }}</p>
          <!-- for lists a v-for directive is used  -->
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
          <!-- iterating through an array of objects -->
          <!-- keys are highly recommended so elements can be tracked -->
          <div
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)"
          ></div>
          <!-- v-on:click="cart +=1" v-on is an event listener :click is the event being listened on -->
          <!-- @ is short for v-on -->
          <!-- v-on:functionName triggers on click -->
          <!-- binding class to conditions -->
          <button
            v-on:click="addToCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}"
          >
            Add to cart
          </button>
          <button v-on:click="decrementCart">Lessen cart</button>

          <div class="cart">
            <p>Cart({{ cart }})</p>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      // passing data to the html
      brand: "Vue Mastery",
      product: "Socks",
      // initializing property to display
      selectedVariant: 0,

      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./assets/vmsocks-green-onWhite.jpg",
          variantQuantity: 39
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./assets/vmsocks-blue-onWhite.jpg",
          variantQuantity: 0
        }
      ],
      cart: 0
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    decrementCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },

  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    }
  }
});

// creating an instance of vue var x = new Vue({options})
var app = new Vue({
  // to form a relationship with the dom, the property of el is used and passed with the element i.d. as value
  el: "#app",
  // passing data as a prop
  data: {
    premium: false
  }
});
