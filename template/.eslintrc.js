module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  globals: {
  },
  extends: [
    'standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 必须使用分号
    'semi': ['error', 'always'],
    // 去除===限制
    'eqeqeq': 'off',
    // 去除双引号限制
    'quotes': 'off',
    // 允许new一个对象却没有赋值变量
    'no-new': 'off',
    // 允许文末不留空行
    'eol-last': 'off',
    // 允许使用对象构造函数
    'no-new-object': 'off',
    // 允许拓展原生的构造函数
    'no-extend-native': 'off',
    // 允许使用多行字符串
    'no-multi-str': 'off',
    // 允许使用逗号操作符
    'no-sequences': 'off'
  }
}
