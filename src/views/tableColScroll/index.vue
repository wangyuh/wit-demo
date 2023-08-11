<template>
  <el-table
    ref="table"
    max-height="700px"
    class="table"
    :data="tableData"
  >
    <el-table-column
      v-for="(item, i) in cols"
      :key="i"
      :prop="item.prop"
      :label="item.label"
    />
  </el-table>
</template>

<script>
export default {
  components: { },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      cols: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }, {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }, {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }, {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }, {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ]
    }
  },
	mounted() {
    this.dom = this.$refs.table.bodyWrapper
    this.dom.addEventListener('scroll', () => {
      // 滚动距离
      const scrollLeft = this.dom.scrollLeft;
      // 变量windowWidth是可视区的宽度
      const windowWidth = this.dom.clientWidth || this.dom.clientWidth
      // 变量scrollWidth是滚动条的总宽度
      const scrollWidth = this.dom.scrollWidth || this.dom.scrollWidth
      if (scrollLeft + windowWidth === scrollWidth) {
        if (this.cols.length <= 300) this.getMoreLog()
      }
    })
	},
  methods: {
    getMoreLog() {
      this.cols.push({
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        })
    }
  }
}
</script>
<style lang="scss">
</style>
