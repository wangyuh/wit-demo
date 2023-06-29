<template>
  <div>
    <!-- data为全部数据，key-prop绑定列唯一值 -->
    <virtual-scroll
      :data="resultData"
      :item-size="50"
      key-prop="id"
      :virtualized="true"
      style="height: 100%;"
      @change="(virtualList) => tableData = virtualList"
      @selection-change="handleSelectionChange"
    >
      <!-- row-key绑定列唯一值，height一定要设置否则会滚动条滚动位置不对且数据滚动全部加载完后会出现白板-->
      <el-table
        row-key="id"
        :data="tableData"
        height="100%"
      >
        <template slot="empty">
          <el-empty description="暂无数据" />
        </template>
        <!--使用虚拟加载插件多选需要引入VirtualColumn-->
        <virtual-column width="60" type="selection" fixed />
        <el-table-column prop="id" label="同步" width="200" fixed>
          <el-table-column prop="name" label="同步标记" width="100" fixed />
          <el-table-column prop="name" label="主物料" width="100" fixed />
        </el-table-column>
        <el-table-column width="480" class-name="custom-column" fixed>
          <template slot="header">
            <div class="table-header-box">
              <div class="col-code">子项编码</div>
              <div class="col-name">名称</div>
              <div class="col-type">采购类型</div>
              <div class="col-version">版本</div>
              <div class="col-number">数量</div>
            </div>
          </template>
          <template slot-scope="scope">
            <div class="table-tody-title">变更前</div>
            <div class="table-tody-box">
              <div class="col-code">{{ scope.row.name }}</div>
              <div class="col-name">{{ scope.row.name }}</div>
              <div class="col-type">{{ scope.row.name }}</div>
              <div class="col-version">{{ scope.row.name }}</div>
              <div class="col-number">{{ scope.row.name }}</div>
            </div>
            <div class="table-tody-title">变更后</div>
            <div class="table-tody-box">
              <div class="col-code">{{ scope.row.name }}</div>
              <div class="col-name">{{ scope.row.name }}</div>
              <div class="col-type">{{ scope.row.name }}</div>
              <div class="col-version">{{ scope.row.name }}</div>
              <div class="col-number">{{ scope.row.name }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" min-width="100" />
        <el-table-column prop="name" label="名称" min-width="100" />
        <el-table-column label="别名" min-width="100">
          <template slot-scope="scope">
            <!--嵌入输入框填写绑定scope.row.alias-->
            <el-input
              v-model="scope.row.alias"
              size="small"
              label-width="80px"
              placeholder="请输入别名"
              maxlength="32"
            />
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" min-width="100" />
        <el-table-column prop="name" label="名称" min-width="100" />
        <el-table-column label="别名" min-width="100">
          <template slot-scope="scope">
            <!--嵌入输入框填写绑定scope.row.alias-->
            <el-input
              v-model="scope.row.alias"
              size="small"
              label-width="80px"
              placeholder="请输入别名"
              maxlength="32"
            />
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" min-width="100" />
        <el-table-column prop="name" label="名称" min-width="100" />
        <el-table-column label="别名" min-width="100">
          <template slot-scope="scope">
            <!--嵌入输入框填写绑定scope.row.alias-->
            <el-input
              v-model="scope.row.alias"
              size="small"
              label-width="80px"
              placeholder="请输入别名"
              maxlength="32"
            />
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" min-width="100" />
        <el-table-column prop="name" label="名称" min-width="100" />
        <el-table-column label="别名" min-width="100">
          <template slot-scope="scope">
            <!--嵌入输入框填写绑定scope.row.alias-->
            <el-input
              v-model="scope.row.alias"
              size="small"
              label-width="80px"
              placeholder="请输入别名"
              maxlength="32"
            />
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" min-width="100" />
        <el-table-column prop="name" label="名称" min-width="100" />
        <el-table-column label="别名" min-width="100">
          <template slot-scope="scope">
            <!--嵌入输入框填写绑定scope.row.alias-->
            <el-input
              v-model="scope.row.alias"
              size="small"
              label-width="80px"
              placeholder="请输入别名"
              maxlength="32"
            />
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" min-width="100" />
        <el-table-column prop="name" label="名称" min-width="100" />
        <el-table-column label="别名" min-width="100">
          <template slot-scope="scope">
            <!--嵌入输入框填写绑定scope.row.alias-->
            <el-input
              v-model="scope.row.alias"
              size="small"
              label-width="80px"
              placeholder="请输入别名"
              maxlength="32"
            />
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" min-width="100" />
        <el-table-column prop="name" label="名称" min-width="100" />
        <el-table-column label="别名" min-width="100">
          <template slot-scope="scope">
            <!--嵌入输入框填写绑定scope.row.alias-->
            <el-input
              v-model="scope.row.alias"
              size="small"
              label-width="80px"
              placeholder="请输入别名"
              maxlength="32"
            />
          </template>
        </el-table-column>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
// npm i el-table-virtual-scroll -S
import VirtualScroll from 'el-table-virtual-scroll';
import { VirtualColumn } from 'el-table-virtual-scroll';
export default {
  components: { 'virtual-scroll': VirtualScroll, VirtualColumn },
  data() {
    return {
			resultData: [], // 表格所有数据
      tableData: [], // 虚拟滚动加载显示的数据
      multipleSelection: [] // 勾选的数据
    }
  },
	created() {
		for (let i = 0; i < 2000; i++) {
			this.resultData.push({
				id: i,
				name: 'name' + i,
				alias: 'alias' + i
			})
		}
	},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style lang="scss">
.table-header-box {
	display: flex;
	height: 100%;
	div {
		line-height: 79px;
		width:80px;
		text-align: center;
		border-right: 1px solid #EBEEF5;
	}
  .col-code, .col-type {
    width: 120px;
  }
  .col-number {
    border: none;
  }
}
.table-tody-title {
	text-align: center;
}
.table-tody-box {
	display: flex;
	div {
		width: 80px;
		text-align: center;
		border: 1px solid #EBEEF5;
    border-left: none;
	}
  .col-code, .col-type {
    width:120px;
  }
  .col-number {
    border-right: none;
  }
}
</style>
<style>
.custom-column {
	padding: 0 !important;
}
.custom-column .cell {
	padding: 0 !important;
}
</style>
