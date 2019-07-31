import axios from 'axios';

const BASE_URL = "http://localhost:8080";

export default {

  methods: {
    register(request) {
      const url = `${BASE_URL}/register`;

      axios
        .post(url, request)
        .then(res => console.log(res))
        .then(res => {
          if (res.status == 200) {
            $cookies.set("session", res.data.token);
            cookies.config("7d");
          }
        });
    },
    sellerRegister(request) {
      const url = `${BASE_URL}/seller/register`;

      axios
        .post(url, request)
        .then(res => console.log(res));
    },
    login(request) {
      const url = `${BASE_URL}/login`;

      axios
        .post(url, request)
        .then(res => console.log(res));
    },
    addSeller(request) {
      const url = `${BASE_URL}/seller`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    getUserCart() {
      const url = `${BASE_URL}/cart`;

      axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    addItemToCart(request) {
      const url = `${BASE_URL}/cart/add`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    incrementItemCountOnCart(request) {
      const url = `${BASE_URL}/cart/inc`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    decrementItemCountOnCart(request) {
      const url = `${BASE_URL}/cart/dec`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    removeFromCart(request) {
      const url = `${BASE_URL}/cart/remove`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    sale() {
      const url = `${BASE_URL}/sale`;

      axios
        .post(url, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    addCampaign(request) {
      const url = `${BASE_URL}/campaign`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    getCampaign(id) {
      const url = `${BASE_URL}/campaign/${id}`;

      axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    getSellerCampaigns(id) {
      const url = `${BASE_URL}/campaign/seller/${id}`;

      axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    addItem(request) {
      const url = `${BASE_URL}/item`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    getItems() {
      const url = `${BASE_URL}/item`;

      axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    getSellerItems(id) {
      const url = `${BASE_URL}/item/seller/${id}`;

      axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    getItemDetail(id) {
      const url = `${BASE_URL}/item/${id}`;

      axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    getItemStock(id) {
      const url = `${BASE_URL}/stock/${id}`;

      axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    addItemStock(request) {
      const url = `${BASE_URL}/stock`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${$cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    }
  }
}