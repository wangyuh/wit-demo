import Vue from "vue";

function formateTime(timestamp, fmt) {
    if (timestamp === null || timestamp === "") {
        return ""
    } else {
        let time = new Date(timestamp);
        let y = time.getFullYear();
        let M = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();
        M = (~~M < 10) ? ('0' + M) : M;
        d = (~~d < 10) ? ('0' + d) : d;
        h = (~~h < 10) ? ('0' + h) : h;
        m = (~~m < 10) ? ('0' + m) : m;
        s = (~~s < 10) ? ('0' + s) : s;
        return fmt ? y + '-' + M + '-' + d : y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
    }    
}

// 水印
const canvas = document.createElement('canvas');
const ctx = canvas.getContext("2d");
function __canvasWM({
	container = document.body,
	width = '300px',
	height = '200px',
	textAlign = 'center',
	textBaseline = 'middle',
	font = "16px Arial",
	fillStyle = 'rgba(184, 184, 184, 0.5)',
	content = '请勿外传',
	rotate = '-20',
	zIndex = 9999
  } = {}) {
	const args = arguments[0];
	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);
	ctx.clearRect(0,0,width,height)
	ctx.textAlign = textAlign;
	ctx.textBaseline = textBaseline;
	ctx.font = font;
	ctx.fillStyle = fillStyle;
	ctx.rotate(Math.PI / 180 * rotate);
	ctx.fillText(content + "    " + formateTime(new Date()), parseFloat(width) / 2, parseFloat(height) / 2);
	const base64Url = canvas.toDataURL();
	const __wm = document.querySelector('.__wm');
	if(__wm) {
		__wm.remove()
	}
	const watermarkDiv = document.createElement("div");
	const styleStr = `
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index:${zIndex};
		pointer-events:none;
		background-repeat:repeat;
		background-image:url('${base64Url}')`;
	watermarkDiv.setAttribute('style', styleStr);
	watermarkDiv.classList.add('__wm');

	// if (!__wm) {
		container.style.position = 'relative';
		container.insertBefore(watermarkDiv, container.firstChild);
	// }
	// f12 delete dom 时触发
	// const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
	// if (MutationObserver) {
	// 	let mo = new MutationObserver(function () {
	// 	const __wm = document.querySelector('.__wm');
	// 	// 只在__wm元素变动才重新调用 __canvasWM
	// 	if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
	// 		// 避免一直触发
	// 		mo.disconnect();
	// 		mo = null;
	// 		__canvasWM(JSON.parse(JSON.stringify(args)));
	// 	}
	// 	});
	
	// 	mo.observe(container, {
	// 		attributes: true,
	// 		subtree: true,
	// 		childList: true
	// 	})
	// }
 }

if (typeof module != 'undefined' && module.exports) {  //CMD
	module.exports = __canvasWM;
} else if (typeof define == 'function' && define.amd) { // AMD
	define(function () {
	  return __canvasWM;
	});
} else {
	window.__canvasWM = __canvasWM;
}

Vue.prototype.formateTime = formateTime;
Vue.prototype.__canvasWM = __canvasWM;