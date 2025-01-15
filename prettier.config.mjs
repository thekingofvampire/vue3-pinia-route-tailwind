// prettier.config.mjs
export default {
  // 强制使用分号，与 ESLint 的 `semi: ['error', 'always']` 保持一致
  semi: true,

  // 强制使用双引号
  singleQuote: false,
  // 每行末尾添加逗号，与 ESLint 的推荐配置一致，确保代码更易于版本控制
  trailingComma: "es5",
  // 对象属性的引号规则，只有在必要时才使用引号
  quoteProps: "as-needed",
  // JSX 中强制使用双引号
  jsxSingleQuote: false,
  // 对象和数组的花括号与内容之间是否有空格，Prettier 默认与社区推荐一致
  bracketSpacing: true,
  // 多行 HTML 标签的结束符是否换行，与 Vue 的 `vue/html-closing-bracket-newline` 规则匹配
  htmlWhitespaceSensitivity: "strict",
  // 换行规则，与 ESLint 的换行相关规则对齐
  endOfLine: "lf",
  // Vue 模板中每个属性的换行规则
  vueIndentScriptAndStyle: true,
  // HTML 文件中，强制属性对齐方式，类似于 Vue 的 `vue/style-html-attribute-indent` 配置
  printWidth: 80, // 每行最大长度，保持清晰性
  // 缩进使用 2 个空格，与 ESLint 的默认风格保持一致
  tabWidth: 2,
  // 不使用 Tab，使用空格
  useTabs: false,
  // 箭头函数参数的括号规则，与 TypeScript 和 JavaScript 的默认推荐对齐
  arrowParens: "always",
};
