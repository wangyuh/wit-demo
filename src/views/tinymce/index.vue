<template>
	<div>
		<vue-tinymce v-model="content" :setting="setting" />
	</div>
</template>

<script>
	// npm i tinymce @packy-tang/vue-tinymce
	// copy node_modules/tinymce/ -> public/
	// 然后在public/index.html页面全局引入tinymce <script src="./tinymce/tinymce.min.js">
	// 汉化 -> 将zh_CN.js文件直接放到public/tinymce/langs/目录下就可以了，配置时加上{language: 'zh_CN'}的设置就能实现。
	// mian引入
	// import tinymce from 'tinymce'
	// import VueTinymce from '@packy-tang/vue-tinymce'	
	// Vue.prototype.$tinymce = tinymce // 将全局tinymce对象指向给Vue作用域下
	// Vue.use(VueTinymce)              // 安装vue的tinymce组件
	export default {
		data() {
			return {
				content: '',
				setting: {
					menubar: true, // 显示最上方menu
					branding: false, // 去水印
					paste_data_images: true, // 允许粘贴图像
					toolbar: "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough charmap | indent outdent | superscript subscript | removeformat example",
					toolbar_drawer: "sliding",
					quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
					plugins: "link image table lists fullscreen quickbars code charmap preview print example",
					// 图片上传处理
					images_upload_handler: function(blobInfo, success, failure) {
						// success 返回成功的图片url  是否可转换base64图片直接返回有待测试
						// failure 返回错误信息
						
						//处理成base64 方法 base64图片过多会非常卡，推荐使用服务器上传法
						// var reader = new FileReader();
						// reader.readAsDataURL(blobInfo.blob());
						// reader.onload = function() {
						// success(this.result);
						
						// 2.服务器上传方法
						var xhr, formData;
						var file = blobInfo.blob(); //转化为易于理解的file对象
						xhr = new XMLHttpRequest();
						xhr.withCredentials = false;
						xhr.open('POST', '/demo/upimg.php');
						xhr.onload = function() {
							var json;
							if (xhr.status != 200) {
								failure('HTTP Error: ' + xhr.status);
								return;
							}
							json = JSON.parse(xhr.responseText);
							if (!json || typeof json.location != 'string') {
								failure('Invalid JSON: ' + xhr.responseText);
								return;
							}
							success(json.location);
						};
						formData = new FormData();
						formData.append('file', file, file.name); //此处与源文档不一样
						xhr.send(formData);
					},
					// 文件上传处理
					file_picker_callback: function(callback, value, meta) {
						//文件分类
						var filetype =
						'.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4';
						//后端接收上传文件的地址
						var upurl = '/demo/upfile.php';
						//为不同插件指定文件类型及后端地址
						switch (meta.filetype) {
							case 'image':
								filetype = '.jpg, .jpeg, .png, .gif';
								upurl = 'upimg.php';
								break;
							case 'media':
								filetype = '.mp3, .mp4';
								upurl = 'upfile.php';
								break;
							case 'file':
							default:
						}
						//模拟出一个input用于添加本地文件
						var input = document.createElement('input');
						input.setAttribute('type', 'file');
						input.setAttribute('accept', filetype);
						input.click();
						input.onchange = function() {
							var file = this.files[0];

							var xhr, formData;
							console.log(file.name);
							xhr = new XMLHttpRequest();
							xhr.withCredentials = false;
							xhr.open('POST', upurl);
							xhr.onload = function() {
								var json;
								if (xhr.status != 200) {
									console.log('HTTP Error: ' + xhr.status);
									return;
								}
								json = JSON.parse(xhr.responseText);
								if (!json || typeof json.location != 'string') {
									console.log('Invalid JSON: ' + xhr.responseText);
									return;
								}
								callback(json.location);
							};
							formData = new FormData();
							formData.append('file', file, file.name);
							xhr.send(formData);
						};
					},
					language: 'zh_CN', //本地化设置
					height: '350'
				}
			}
		},
		created() {
			// 自定义插件
			tinymce.PluginManager.add('example', function(editor, url) {
				var openDialog = function() {
					return editor.windowManager.open({
						title: 'Example plugin',
						body: {
							type: 'panel',
							items: [{
								type: 'input',
								name: 'title',
								label: 'Title'
							}]
						},
						buttons: [{
								type: 'cancel',
								text: 'Close'
							},
							{
								type: 'submit',
								text: 'Save',
								primary: true
							}
						],
						onSubmit: function(api) {
							var data = api.getData();
							/* Insert content when the window form is submitted */
							editor.insertContent('Title: ' + data.title);
							api.close();
						}
					});
				};
				/* 工具栏中添加自定义插件按钮 */
				editor.ui.registry.addButton('example', {
					icon: 'example', //自定义svg图标 可去iconfont下载svg 放入tinymce内的icons.js 内使用 icons.min.js也要添加
					tooltip: '自定义插件',
					onAction: function() {
						/* tinymce 自带的弹出框功能, 我们可以引用自定义的方法 */
						openDialog();
					}
				});
				/* 插入到菜单栏里 这里不用注释掉 */
				// editor.ui.registry.addMenuItem('example', {
				// 	text: 'Example plugin',
				// 	onAction: function() {
				// 		/* Open window */
				// 		openDialog();
				// 	}
				// });
				/* 帮助里跳转的地址 这里用不到注释掉 */
				// return {
				// 	getMetadata: function() {
				// 		return {
				// 			name: '自定义插件',
				// 			url: 'http://exampleplugindocsurl.com'
				// 		};
				// 	}
				// };
			});
		}
	}
</script>
