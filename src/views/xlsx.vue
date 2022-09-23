<template>
	<div>
		<el-row>
			<el-col :span="6">
				<div>导入Excel</div>
				<el-upload action="" :auto-upload="false" :on-change="onChange" :limit="1">
					<el-button size="mini" type="success">导入</el-button>
				</el-upload>
			</el-col>
			<el-col :span="6">
				<div>导出Excel</div>
				<el-button type="primary" @click="exportFile">导出</el-button>
			</el-col>
			<el-col :span="6">
				<div>JS导出Excel</div>
				<el-button type="primary" @click="exportFile1">导出</el-button>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<el-table :data="tableData" border id="table1">
					<el-table-column v-for="(value,key,index) in tableData[0]" :prop="key" :label="key"
						:key="key+index">
						<el-table-column v-for="(value,key,index) in tableData[0]" :prop="key" :label="key"
							:key="key+index">
						</el-table-column>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	// npm install xlsx 
	import xlsx from "xlsx"
	export default {
		data() {
			return {
				tableData: [{
					日期: '2016-05-02',
					姓名: '王小虎',
					地址: '上海市普陀区金沙江路 1518 弄'
				}]
			}
		},
		methods: {
			async onChange(file) {
				let dataBinary = await this.readFile(file.raw)
				let workBook = xlsx.read(dataBinary, {
					type: 'binary',
					cellDates: true
				})
				let workSheet = workBook.Sheets[workBook.SheetNames[0]]
				const data = xlsx.utils.sheet_to_json(workSheet)
				console.log(data)
				this.tableData = data
			},
			exportFile() {
				// 自动获取表格内容导出
				var table1 = document.querySelector("#table1")
				var sheet = xlsx.utils.table_to_sheet(table1) //将一个table对象转换成一个sheet对象
				this.openDownloadDialog(this.sheet2blob(sheet), '下载.xlsx')
			},
			// js设置内容导出
			exportFile1() {
				var data = [{
					"a": 1,
					"x": 2,
					"b": 3,
					"y": 4,
					"success": true
				}, {
					"a": 1,
					"x": 2,
					"b": 3,
					"y": 4,
					"success": false
				}];
				//数据表格
				var table = [];
				table.push({
					1: "列A",
					2: "列B",
					3: "列C",
					4: "列D",
					5: "列E",
					7: "列E"
				})
				data.forEach(function(item) {
					var row = {
						1: item.b,
						2: item.y,
						3: item.a,
						4: item.x,
						5: (item.success ? '成功' : '失败'),
						7: "nn"
					}
					table.push(row)
				});
				//创建book
				var wb = xlsx.utils.book_new()
				//json转sheet
				var ws = xlsx.utils.json_to_sheet(table, {
					header: ["A", "B", "C", "D", "E"],
					skipHeader: true
				})
				//设置列宽
				// ws['!cols']= [
				//     {width: 15},
				//     {width: 15},
				//     {width: 15},
				//     {width: 15},
				//     {width: 10}
				// ];
				var timestamp = (new Date()).getTime()
				//sheet写入book
				xlsx.utils.book_append_sheet(wb, ws, "file")
				//输出
				xlsx.writeFile(wb, "file" + timestamp + ".xlsx")
			},
			/* 读取文件 */
			readFile(file) {
				return new Promise(resolve => {
					let reader = new FileReader()
					reader.readAsBinaryString(file)
					reader.onload = ev => {
						resolve(ev.target.result)
					}
				})
			},
			// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
			sheet2blob(sheet, sheetName) {
				sheetName = sheetName || 'sheet1'
				let workbook = {
					SheetNames: [sheetName],
					Sheets: {}
				};
				workbook.Sheets[sheetName] = sheet // 生成excel的配置项

				let wopts = {
					bookType: 'xlsx', // 要生成的文件类型
					bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
					type: 'binary'
				}
				let wbout = xlsx.write(workbook, wopts);
				let blob = new Blob([s2ab(wbout)], {
					type: "application/octet-stream"
				}) // 字符串转ArrayBuffer
				function s2ab(s) {
					let buf = new ArrayBuffer(s.length);
					let view = new Uint8Array(buf);
					for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
					return buf;
				}
				return blob
			},
			openDownloadDialog(url, saveName) {
				if (typeof url == 'object' && url instanceof Blob) {
					url = URL.createObjectURL(url) // 创建blob地址
				}
				let aLink = document.createElement('a');
				aLink.href = url
				aLink.download = saveName || '' // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
				let event
				if (window.MouseEvent) event = new MouseEvent('click')
				else {
					event = document.createEvent('MouseEvents')
					event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
				}
				aLink.dispatchEvent(event)
			}
		}
	}
</script>
