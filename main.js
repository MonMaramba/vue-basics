// creating an instance of vue var x = new Vue({options})
var app = new Vue({
  // to form a relationship with the dom, the property of el is used and passed with the element i.d. as value
  el: "#app",
  // passing data to the html
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    inventory: 5,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmsocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmsocks-blue-onWhite.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    decrementCart() {
      this.cart -= 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
