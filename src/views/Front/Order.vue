<template>
  <FrontNavBar />
  <div class="wrap container">
      <div class="row shadow p-4 mb-5">
          <div class="col-md-7">
            <div class="mb-3">
              <span class="input-group-addon"><button class="btn btn-secondary btn-sm" type="button" @click.prevent="backToShopCart"><i class="bi bi-arrow-left"></i></button></span>
              <span class="ml-1 font-size-light">返回購物車</span>
              <div class="col-md-12">
                <Form v-slot="{ errors }" class="pt-4">
                  <div class="from-group mb-4">
                    <label for="email"><span class="text-danger">*</span> Email</label>
                    <Field id="email" name="email" type="text" class="form-control" :class="{ 'is-invalid': errors['email'] }"
                      placeholder="請輸入Email" rules="required" v-model="forms.user.email">
                    </Field>
                    <Error-message name="email" class="invalid-feedback"></Error-message>
                  </div>
                  <div class="from-group mb-4">
                    <label for="name"><span class="text-danger">*</span> 收件人姓名</label>
                    <Field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                      placeholder="請輸入姓名" rules="required" v-model="forms.user.name">
                    </Field>
                    <Error-message name="姓名" class="invalid-feedback"></Error-message>
                  </div>
                  <div class="from-group mb-4">
                    <label for="tel"><span class="text-danger">*</span> 收件人電話</label>
                    <Field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                      placeholder="請輸入電話" rules="required" v-model="forms.user.tel">
                    </Field>
                    <Error-message name="電話" class="invalid-feedback"></Error-message>
                  </div>
                  <div class="from-group mb-4">
                    <label for="address"><span class="text-danger">*</span> 收件人地址</label>
                    <Field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                      placeholder="請輸入地址" rules="required" v-model="forms.user.address">
                    </Field>
                    <Error-message name="地址" class="invalid-feedback"></Error-message>
                  </div>
                  <div class="from-group mb-4">
                    <label for="message" class="form-label">留言</label>
                    <textarea id="message" class="form-control" cols="30" rows="10" v-model="forms.message"></textarea>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="boder-primary p-3 mb-4">
              <h3 class="mb-4"><i class="bi bi-cart"></i> 訂單明細</h3>
              <div class="d-flex mb-4" v-for="item in cart.carts" :key="item">
                <img :src="item.product.imageUrl" class="orderImg mr-0">
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                    <p class="font-size-light">{{ item.product.title }}</p>
                    <p class="font-size-light">X{{ item.qty }}</p>
                  </div>
                  <div class="d-flex justify-content-between w-100">
                    <p class="font-size-light">$ {{ item.product.price }}/ 張</p>
                    <p class="font-size-light">{{ item.total }}</p>
                  </div>
                </div>
              </div>
              <div class="w-100">
                <div class="d-flex justify-content-between border-top pt-4">
                  <p class="font-size-Regular">總計</p>
                  <p class="font-size-Regular" :class="{ 'text-success': couponSuccess }">$ {{ final_total }}</p>
                </div>
              </div>
              <div class="w-100">
                <label for="couponInput" class="font-size-light">請輸入morefun取得折扣</label>
                <div class="d-flex border-top pt-4 d-flex justify-content-center">
                  <div class="input-group my-3 bg-light rounded w-100">
                    <input id="couponInput" class="form-control border-dark" type="text" placeholder="請輸入優惠碼" v-model="couponCode">
                    <button type="button" class="btn btn-secondary" @click="addCouponCode">套用優惠碼</button>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="w-100">
              <div class="d-grid gap-2">
                <button class="btn btn-secondary py-3 px-7" type="submit" @click.prevent="checkOut">確認結帳</button>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue'

export default {
  data () {
    return {
      cart: {},
      final_total: {},
      user: {},
      forms: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        messages: ''
      },
      orderId: '',
      couponCode: '',
      couponSuccess: false
    }
  },
  watch: {
    forms (n, o) {
      console.log(n, o)
    }
  },
  components: { FrontNavBar },
  methods: {
    backToShopCart () {
      this.$router.push('/shopcart')
    },
    checkOut () {
      // console.log(this.forms)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      // console.log(url)
      this.$http.post(url, { data: this.forms }).then(res => {
        if (res.data.success) {
          this.orderId = res.data.orderId
          console.log(this.orderId)
          this.$router.push(`/checkout/${this.orderId}`)
        } else {
          this.$swal({
            title: '* 為必填資料',
            icon: 'error'
          })
        }
      }).catch(err => {
        alert(err)
      })
    },
    getCartList () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          console.log(res.data.data)
          this.cart = res.data.data
          this.final_total = res.data.data.final_total
        }
      }).catch(err => {
        alert(err.message)
      })
    },
    addCouponCode () {
      console.log(this.couponCode)
      const coupon = {
        code: this.couponCode
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      this.$http.post(url, { data: coupon }).then(res => {
        console.log(res.data.success)
        this.couponSuccess = true
        this.getCartList()
        this.$swal({
          title: '價格以打折'
        })
      })
    }
  },
  mounted () {
    this.getCartList()
  }
}
</script>
