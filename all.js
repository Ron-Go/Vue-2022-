import { createApp, ref, toRefs} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';

// 內層
const productDetail = {
  template: 
  `<div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">單一產品細節</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="card mb-3">
                <img :src="product?.imageUrl" class="card-img-top primary-image" alt="主圖">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ product?.title }}
                    <span class="badge bg-primary ms-2">{{ product?.category }}</span>
                  </h5>
                  <p class="card-text">商品描述：{{ product?.description }}</p>
                  <p class="card-text">商品內容：{{ product?.content }}</p>
                  <div class="d-flex">
                    <p class="card-text me-2">{{ product?.price }}</p>
                    <p class="card-text text-secondary"><del>{{ product?.origin_price }}</del></p>
                    元 / {{ product?.unit }}
                  </div>
                </div>
              </div>
              <span v-for="(image,id) in product?.imagesUrl" :key="id">
                <img v-if="image" :src="image" class="images m-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  props: ['item'],
  setup(props) {
    const { item: product } = toRefs(props);
    return {
      product,
    };
  }
};

// 外層
const app = createApp({
  components: {
    productDetail,
  },
  setup() {
    // 所有產品，以ref定義資料
    const products = ref([
      {
        category: "甜甜圈",
        content: "尺寸：14x14cm",
        description:
          "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
        id: "-L9tH8jxVb2Ka_DYPwng",
        is_enabled: 1,
        origin_price: 150,
        price: 99,
        title: "草莓莓果夾心圈",
        unit: "個",
        num: 10,
        imageUrl:
          "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRvbnV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        imagesUrl: [
          "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
          "https://images.unsplash.com/photo-1559656914-a30970c1affd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxkb251dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        ]
      },
      {
        category: "蛋糕",
        content: "尺寸：6寸",
        description:
          "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
        id: "-McJ-VvcwfN1_Ye_NtVA",
        is_enabled: 1,
        origin_price: 1000,
        price: 900,
        title: "蜂蜜檸檬蛋糕",
        unit: "個",
        num: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
        ]
      },
      {
        category: "蛋糕",
        content: "尺寸：6寸",
        description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
        id: "-McJ-VyqaFlLzUMmpPpm",
        is_enabled: 0,
        origin_price: 700,
        price: 600,
        title: "暗黑千層",
        unit: "個",
        num: 15,
        imageUrl:
          "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        imagesUrl: [
          "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        ]
      }
    ]);
    // 產品細節
    const tempProduct = ref();
    // 顯示modal視窗
    const openModal = (data) => {
      tempProduct.value = data; 
      productModal.show();
    };
    // 比對product資料，並更改is_enabled的值
    const changeStatus = (id) => {
      products.value.forEach(item => {
        item.id === id ? item.is_enabled = !item.is_enabled : ``;
      });
    };
    // 產品列表項目排序
    const itemSort = (attr) => {
      products.value.sort((a, b) => {
        return b[attr] - a[attr]; 
      })
    };
    return {
      products,
      tempProduct,
      openModal,
      changeStatus,
      itemSort,
    };
  }
});

app.mount('#app');

const productModal = new bootstrap.Modal(document.getElementById('detailModal'));
