module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false // template 第一行报错
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off', // data格式化有问题配置
    'vue/multi-word-component-names': 'off', // 解决第一行报错
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-mutating-props': 'off',
    'vue/valid-template-root': 'off',
    'no-return-assign': 'off'
  }
}
