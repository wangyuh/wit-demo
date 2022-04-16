module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/essential", "@vue/prettier"],
	parserOptions: {
		parser: "babel-eslint",
	},
	// 0 代表关闭  1 代表警告  2 代表开启
	rules: {
		"no-console": 0, //禁止使用console
		"no-debugger":0, //禁止使用debugger
		'no-async-promise-executor': 0, //禁止使用异步函数作为 Promise executor
		'no-await-in-loop': 0, // 禁止使用 await async
		'no-dupe-args': 0, //函数参数不能重复
		'no-regex-spaces': 0, //禁止正则表达式字面量中出现多个空格
		'default-case': 0, //switch语句最后必须有default
		'no-alert': 0, //禁止使用alert confirm prompt
		'no-array-constructor': 0, //禁止使用数组构造器
		'no-bitwise': 0, //禁止使用按位运算符
		'no-caller': 0, //禁止使用arguments.caller或arguments.callee
		'no-catch-shadow': 0, //禁止catch子句参数与外部作用域变量同名
		'no-class-assign': 0, //禁止给类赋值
		'no-cond-assign': 0, //禁止在条件表达式中使用赋值语
		'no-const-assign': 0, //禁止修改const声明的变量
		'no-constant-condition': 0, //禁止在条件中使用常量表达式 if(true) if(1)
		'no-continue': 0, //禁止使用continue
		'no-control-regex': 0, //禁止在正则表达式中使用控制字符
		'no-delete-var': 0, //不能对var声明的变量使用delete操作符
		'no-div-regex': 0, //不能使用看起来像除法的正则表达式/=foo/
		'no-dupe-keys': 0, //在创建对象字面量时不允许键重复 {a:1,a:1}
		'no-duplicate-case': 0, //switch中的case标签不能重复
		'no-else-return': 0, //如果if语句里面有return,后面不能跟else语句
		'no-empty': 0, //块语句中的内容不能为空
		'no-empty-character-class': 0, //正则表达式中的[]内容不能为空
		'no-eq-null': 0, //禁止对null使用==或!=运算符
		'no-eval': 0, //禁止使用eval
		'no-ex-assign': 0, //禁止给catch语句中的异常参数赋值
		'no-extend-native': 0, //禁止扩展native对象
		'no-extra-bind': 0, //禁止不必要的函数绑定
		'no-extra-boolean-cast': 0, //禁止不必要的bool转换
		'no-extra-parens': 0, //禁止非必要的括号
		'no-extra-semi': 0, //禁止多余的冒号
		'no-fallthrough': 0, //禁止switch穿透
		'no-floating-decimal': 0, //禁止省略浮点数中的0 .5 3.
		'no-func-assign': 0, //禁止重复的函数声明
		'no-implicit-coercion': 0, //禁止隐式转换
		'no-implied-eval': 0, //禁止使用隐式eval
		'no-inline-comments': 0, //禁止行内备注
		'no-inner-declarations': [0, 'functions'], //禁止在块语句中使用声明（变量或函数）
		'no-invalid-regexp': 0, //禁止无效的正则表达式
		'no-invalid-this': 0, //禁止无效的this，只能用在构造器，类，对象字面量
		'no-irregular-whitespace': 1, //不能有不规则的空格
		'no-iterator': 0, //禁止使用__iterator__ 属性
		'no-label-var': 0, //label名不能与var声明的变量名相同
		'no-labels': 0, //禁止标签声明
		'no-lone-blocks': 0, //禁止不必要的嵌套块
		'no-lonely-if': 0, //禁止else语句内只有if语句
		'no-loop-func': 0, //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
		'no-mixed-requires': [0, false], //声明时不能混用声明类型
		'no-mixed-spaces-and-tabs': [0, false], //禁止混用tab和空格
		'linebreak-style': [0, 'windows'], //换行风格
		'no-multi-spaces': 0, //不能用多余的空格
		'no-multi-str': 0, //字符串不能用\换行
		'no-multiple-empty-lines': [0, {
			max: 2
		}], //空行最多不能超过2行
		'no-native-reassign': 0, //不能重写native对象
		'no-negated-in-lhs': 0, //in 操作符的左边不能有!
		'no-nested-ternary': 0, //禁止使用嵌套的三目运算
		'no-new': 0, //禁止在使用new构造一个实例后不赋值
		'no-new-func': 0, //禁止使用new Function
		'no-new-object': 0, //禁止使用new Object()
		'no-new-require': 0, //禁止使用new require
		'no-new-wrappers': 0, //禁止使用new创建包装实例，new String new Boolean new Number
		'no-obj-calls': 0, //不能调用内置的全局对象，比如Math() JSON()
		'no-octal': 0, //禁止使用八进制数字
		'no-octal-escape': 0, //禁止使用八进制转义序列
		'no-param-reassign': 0, //禁止给参数重新赋值
		'no-path-concat': 0, //node中不能使用__dirname或__filename做路径拼接
		'no-plusplus': 0, //禁止使用++，--
		'no-process-env': 0, //禁止使用process.env
		'no-process-exit': 0, //禁止使用process.exit()
		'no-proto': 0, //禁止使用__proto__属性
		'no-redeclare': 0, //禁止重复声明变量
		'no-restricted-modules': 0, //如果禁用了指定模块，使用就会报错
		'no-return-assign': 0, //return 语句中不能有赋值表达式
		'no-script-url': 0, //禁止使用javascript:void(0)
		'no-self-compare': 0, //不能比较自身
		'no-sequences': 0, //禁止使用逗号运算符
		'no-shadow': 0, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
		'no-shadow-restricted-names': 0, //严格模式中规定的限制标识符不能作为声明时的变量名使用
		'no-spaced-func': 0, //函数调用时 函数名与()之间不能有空格
		'no-sparse-arrays': 0, //禁止稀疏数组， [1,,2]
		'no-sync': 0, //nodejs 禁止同步方法
		'no-ternary': 0, //禁止使用三目运算符
		'no-trailing-spaces': 0, //一行结束后面不要有空格
		'no-this-before-super': 0, //在调用super()之前不能使用this或super
		'no-throw-literal': 0, //禁止抛出字面量错误 throw "error";
		'no-undef': 0, //不能有未定义的变量
		'no-undef-init': 0, //变量初始化时不能直接给它赋值为undefined
		'no-undefined': 0, //不能使用undefined
		'no-unexpected-multiline': 0, //避免多行表达式
		'no-underscore-dangle': 0, //标识符不能以_开头或结尾
		'no-unneeded-ternary': 0, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
		'no-unreachable': 0, //不能有无法执行的代码
		'no-unused-expressions': 0, //禁止无用的表达式
		'no-unused-vars': [0, {
			vars: 'all',
			args: 'after-used'
		}], //不能有声明后未被使用的变量或参数
		'no-use-before-define': 0, //未定义前不能使用
		'no-useless-call': 0, //禁止不必要的call和apply
		'no-void': 0, //禁用void操作符
		'no-var': 0, //禁用var，用let和const代替
	},
};
