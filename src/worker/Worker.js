import axios from 'axios';
var Cookies = require('js-cookie');

const BASE_URL = "http://localhost:8080";

export default {

  methods: {
    async register(request) {
      const url = `${BASE_URL}/register`;

      return await axios
        .post(url, request)
        .then(res => console.log(res))
        .then(res => {
          if (res.status == 200) {
            //Cookies.set("session", res.data.token);
            //Cookies.config("7d");
            return res;
          }
        });
    },
    sellerRegister(request) {
      const url = `${BASE_URL}/seller/register`;

      axios
        .post(url, request)
        .then(res => console.log(res));
    },
    async login(request) {
      const url = `${BASE_URL}/login`;

      return await axios
        .post(url, request)
        .then(res => {
          if (res.status == 200) {
            //var token = res.data.token;
            //Cookies.set("session", token);
            return res;
          }
        });
    },
    addSeller(request) {
      const url = `${BASE_URL}/seller`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    async getUserCart() {
      const url = `${BASE_URL}/cart`;

      return await axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => res);
    },
    addItemToCart(request) {
      const url = `${BASE_URL}/cart/add`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    async incrementItemCountOnCart(request) {
      const url = `${BASE_URL}/cart/inc`;

      return await axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => res.data.itemList);
    },
    async decrementItemCountOnCart(request) {
      const url = `${BASE_URL}/cart/dec`;

      return await axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => res.data.itemList);
    },
    async removeFromCart(request) {
      const url = `${BASE_URL}/cart/remove`;

      return await axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => res.data.itemList);
    },
    sale() {
      const url = `${BASE_URL}/sale`;

      var request = {}

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        });
    },
    addCampaign(request) {
      const url = `${BASE_URL}/campaign`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
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
    async addItem(request) {
      const url = `${BASE_URL}/item`;

      await axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    async getItems() {
      const url = `${BASE_URL}/item`;

      if (Cookies.get("session") != null) {
        return await axios
          .get(url, {
            headers: {
              "Authorization": `Bearer ${Cookies.get("session")}`
            }
          })
          .then(res => res.data);
      } else {
        return await axios
          .get(url)
          .then(res => res.data);
      }
    },
    async getSellerItems(id) {
      const url = `${BASE_URL}/item/seller/${id}`;

      if (Cookies.get("session") != null) {
        return await axios
          .get(url, {
            headers: {
              "Authorization": `Bearer ${Cookies.get("session")}`
            }
          })
          .then(res => res.data);
      } else {
        return await axios
          .get(url)
          .then(res => res.data);
      }
    },
    async getItemDetail(id) {
      const url = `${BASE_URL}/item/${id}`;

      if (Cookies.get("session") != null) {
        return await axios
          .get(url, {
            headers: {
              "Authorization": `Bearer ${Cookies.get("session")}`
            }
          })
          .then(res => res.data);
      } else {
        return await axios
          .get(url)
          .then(res => res.data);
      }
    },
    getItemStock(id) {
      const url = `${BASE_URL}/stock/${id}`;

      axios
        .get(url, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    },
    addItemStock(request) {
      const url = `${BASE_URL}/stock`;

      axios
        .post(url, request, {
          headers: {
            "Authorization": `Bearer ${Cookies.get("session")}`
          }
        })
        .then(res => console.log(res));
    }
  }
}