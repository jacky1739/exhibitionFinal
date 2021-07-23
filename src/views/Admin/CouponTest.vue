<template>
  <div>
    <div class="sticky-top bg-white ps-2 py-3 mb-1">
      <h2 class="h3">優惠券列表</h2>
      <div class="d-flex">
        <input
          type="button"
          value="新增"
          class="btn btn-secondary me-2"
          @click="openCouponModal"
        />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="text-center border-secondary">優惠券名稱</th>
          <th class="border-secondary">優惠券代碼</th>
          <th class="text-center border-secondary">折扣率</th>
          <th class="border-secondary">期限</th>
          <th class="border-secondary">是否啟用</th>
          <th class="border-secondary">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item">
          <td class="text-center">{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td class="text-center">{{ item.percent }}</td>
          <td>{{ new Date(item.due_date).toLocaleString() }}</td>
          <td width="200">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label">
                <span
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <input
                type="button"
                value="刪除"
                class="btn btn-outline-danger border-secondary"
                @click="deleteCoupon(item.id)"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal ref="couponModal" :update="getCoupons"></CouponModal>
    <DelModal ref="deleteModal">
    </DelModal>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  data () {
    return {
      coupons: [],
      coupon: {
        title: '',
        percent: 0,
        code: ''
      },
      tempCoupon: {},
      couponId: ''
    }
  },
  methods: {
    getCoupons () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.axios.get(url).then((res) => {
        console.log(res)
        if (res.data.success) {
          this.coupons = res.data.coupons
        }
      }).catch(() => {
        this.swal('無法取得優惠券資料喔～快去看什麼問題吧！', 'error')
      })
    },
    deleteCoupon (id) {
      console.log(id)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      this.axios.delete(url).then((res) => {
        console.log(res)
        this.getCoupons()
      }).catch(() => {
        this.swal('無法刪除資料喔～快去看什麼問題吧！', 'error')
      })
    },
    openCouponModal () {
      console.log(this.$refs)
      this.$refs.couponModal.openModal()
    },
    openDeleteModal () {
      console.log(this.$refs)
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.getCoupons()
  },
  components: { CouponModal, DelModal },
  computed: {
    filterData () {
      return this.coupons.filter((item) => item.code.match(this.searchData))
    }
  }
}
</script>
