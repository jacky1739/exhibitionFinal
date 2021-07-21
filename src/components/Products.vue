<template>
  <div class="container">
    <div class="row" id="toProducts">
      <h2 class="font-size-bold mb-md-4">本期展覽...</h2>
      <div class="col-md-12" v-for="item in allProducts" :key="item">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="item.imageUrl">
            </div>
            <div class="col-md-7 d-flex position-relative">
              <div class="card-body card-body-color">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
                <p class="card-text"><small class="text-muted">$ {{ $toCurrency(item.origin_price) }}</small></p>
                <div class="card-button d-flex align-item-end">
                  <router-link :to="`/product/${item.id}`">
                    <button type="button" class="btn btn-secondary mr-0">查看詳情</button>
                  </router-link>
                  <button type="button" class="btn btn-third border-secondary" @click.prevent="addToCart(item.id)" :disabled="loadingStatus.loadingItem === item.id">加入購物車</button>
                </div>
              </div>
            </div>
            <div class="col-md-1 d-flex align-items-center justify-content-center card-body-color">
              <p class="date">1/1 ~ 9/2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter'

export default {
  data () {
    return {
      allProducts: [],
      loadingStatus: {
        loadingItem: ''
      }
    }
  },
  props: ['tospecial'],
  methods: {
    addToCart (id) {
      this.loadingStatus.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: cart }).then(res => {
        if (res.data.success) {
          this.loadingStatus.loadingItem = ''
          emitter.emit('update-cart')
          this.$swal({
            title: '已加入購物車!!',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }).catch(err => {
        alert(err.message)
      })
    }
  },
  watch: {
    tospecial () {
      this.allProducts = this.tospecial
      // console.log(this.allProducts)
    }
  }
}
</script>
