<template>
  <div class="container">
    <div class="row" id="toProducts">
      <h2 class="font-size-bold mb-4 text-center">本期所有展覽...</h2>
      <section class="category">
        <div class="container">
          <div class="row">
            <ul class="d-flex justify-content-center category mb-4 border-bottom border-secondary mb-5 flex-wrap">
              <li>
                <button class="btn btn-secondary category-btn rounded-0" @click.prevent="addWordToData('all')">全部展覽</button>
              </li>
              <li>
                <button class="btn btn-secondary category-btn rounded-0" @click.prevent="addWordToData('special')">特別展覽</button>
              </li>
              <li>
                <button class="btn btn-secondary category-btn rounded-0" @click.prevent="addWordToData('hot')">熱門展覽</button>
              </li>
              <li>
                <button class="btn btn-secondary category-btn rounded-0" @click.prevent="addWordToData('normal')">一般展覽</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="col-md-12" v-for="item in filterData" :key="item">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="item.imageUrl">
            </div>
            <div class="col-md-7 d-flex position-relative">
              <div class="card-body card-body-color">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
                <!-- <p class="card-text"><small class="text-muted">$ {{ $toCurrency(item.origin_price) }}</small></p> -->
                <p class="card-text"><small class="text-muted"><del>NT$ {{ $toCurrency(item.origin_price) }}</del>/ NT$ {{ $toCurrency(item.price) }}</small></p>
                <!-- <p class="card-text">NT$ {{ $toCurrency(item.price) }}</p>、 -->
                <div class="card-button d-flex align-item-end">
                  <router-link :to="`/product/${item.id}`">
                    <button type="button" class="btn btn-secondary mr-0">查看詳情</button>
                  </router-link>
                  <button type="button" class="btn btn-third border-secondary" @click.prevent="addToCart(item.id)" :disabled="loadingStatus.loadingItem === item.id">加入購物車</button>
                </div>
              </div>
            </div>
            <div class="date-mobile col-md-1 d-flex align-items-center justify-content-center card-body-color">
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
      categories: [],
      selectCategory: '',
      loadingStatus: {
        loadingItem: ''
      },
      filterData: []
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
    },
    getCategories () {
      const categories = new Set()
      this.allProducts.forEach(item => {
        categories.add(item.category)
      })
      this.categories = [...categories]
    },
    addWordToData (whatKind) {
      const filterData = new Set()
      console.log(whatKind)
      switch (whatKind) {
        case 'all' :
          this.filterData = this.tospecial
          console.log(this.filterData)
          break
        case 'special' :
          this.allProducts.forEach(item => {
            if (item.category === '特別展覽') {
              filterData.add(item)
              this.filterData = [...filterData]
            }
          })
          break
        case 'hot' :
          this.allProducts.forEach(item => {
            if (item.category === '熱門展覽') {
              filterData.add(item)
              this.filterData = [...filterData]
            }
          })
          break
        case 'normal' :
          this.allProducts.forEach(item => {
            if (item.category === '一般展覽') {
              filterData.add(item)
              this.filterData = [...filterData]
            }
          })
          break
      }
    }
  },
  watch: {
    tospecial () {
      this.allProducts = this.tospecial
      this.filterData = this.tospecial
      console.log(this.allProducts)
      this.getCategories()
    }
  },
  computed: {
    filterProducts () {
      return this.allProducts.filter(item => item.category.match(this.selectCategory))
    }
  }
}
</script>
