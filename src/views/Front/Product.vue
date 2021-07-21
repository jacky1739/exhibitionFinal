<template>
  <FrontNavBar />
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-12 mt-5">
        <div class="mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                <img class="checkOut-image" :src="product.imageUrl" alt="...">
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <p class="card-text">{{ product.description }}</p>
                  <p class="card-text"><small class="text-muted">$ {{ product.price }}</small></p>
                  <div class="form-group">
                    <label class="col-md-10">數量</label>
                      <div class="col-md-10">
                      <div class="input-group">
                        <span class="input-group-addon"><button class="btn btn-secondary" @click.prevent="minus" type="button"><i class="bi bi-dash"></i></button></span>
                        <input type="number" placeholder="1" @keyup.enter="toPurchase" v-model.number="count" class="form-control">
                        <span><button class="btn btn-secondary mr-1" @click.prevent="add" type="button"><i class="bi bi-plus"></i></button></span>
                        <span><button class="btn btn-secondary add-cart" type="button" @click.prevent="addToCart" :disabled="loadingStatus.loadingItem">加入購物車</button></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row m0-auto d-flex justify-content-center">
      <div class="col-md-8">
        <div class="mb-3">
          <div class="row g-0">
            <div class="col-md-8">
              <img :src="product.imagesUrl[0]" class="card-image">
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <div class="card-body">
                <h5 class="card-title d-flex align-items-center font-size-light card-content">{{ product.content }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <GassYouLike />
  <Footer />
</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue'
import GassYouLike from '@/components/GassYouLike.vue'
import Footer from '@/components/Footer.vue'

import emitter from '../../assets/javascript/emitter'

export default {
  data () {
    return {
      count: 1,
      product: {
        imagesUrl: []
      },
      loadingStatus: {
        loadingItem: false
      }
    }
  },
  components: { GassYouLike, Footer, FrontNavBar },
  methods: {
    add () {
      console.log('add')
      this.count += 1
      console.log(this.count)
    },
    minus () {
      if (this.count > 1) {
        this.count -= 1
        // console.log(this.count)
      } else {
        alert('票數不可低於1')
      }
    },
    toPurchase () {
      console.log('click')
      console.log(this.$router)
      this.$router.push('/checkout/form')
    },
    getSingleProduct () {
      const id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.product = res.data.product
          console.log(this.product)
        }
      }).catch(err => {
        alert(err.message)
      })
    },
    addToCart () {
      console.log('click')
      this.loadingStatus.loadingItem = true
      const cart = {
        product_id: this.product.id,
        qty: this.count
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: cart }).then(res => {
        console.log(res)
        this.loadingStatus.loadingItem = false
        emitter.emit('update-cart')
        this.$swal({
          title: '已加入購物車!!',
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(err => {
        alert(err.message)
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0) // 切換葉面自動滾回頂部
    console.log(this.$route.params.id)
    this.getSingleProduct()
    // emitter.emit('toFrontNavBar')
  }
}
</script>
