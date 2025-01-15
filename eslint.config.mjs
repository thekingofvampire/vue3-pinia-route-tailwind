// 引入全局变量配置
import globals from 'globals';
// 引入ESLint的JavaScript插件
import pluginJs from '@eslint/js';
// 引入TypeScript的ESLint插件
import tseslint from 'typescript-eslint';
// 引入Vue的ESLint插件
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // 适用的文件类型
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      // 使用浏览器环境的全局变量
      globals: globals.browser,
    },
    rules: {
      // 分号规则，强制使用分号
      semi: ['error', 'always'],
      // 变量命名检测，强制驼峰命名法
      camelcase: [
        'error',
        {
          properties: 'always', // 强制对象属性使用驼峰命名
        },
      ],
      // 检测未使用的变量
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all', // 检测所有变量
          args: 'none', // 不检查函数参数
          ignoreRestSiblings: true, // 忽略剩余兄弟属性
          argsIgnorePattern: '^_', // 忽略以 _ 开头的参数
        },
      ],
    },
  },
  // 使用JavaScript推荐配置
  pluginJs.configs.recommended,
  // 使用TypeScript推荐配置
  ...tseslint.configs.recommended,
  // 使用Vue的基本推荐配置
  ...pluginVue.configs['flat/essential'],
  {
    // 针对Vue文件的特定配置
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser, // 使用TypeScript解析器
      },
    },
    rules: {
      // Vue的HTML结束标签的换行规则
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never', // 单行标签禁止换行
          multiline: 'always', // 多行标签必须换行
        },
      ],
    },
  },
  {
    // 针对TypeScript文件的特定配置
    files: ['**/*.{ts,tsx}'],
    rules: {
      // 检测未使用的变量（TypeScript特定规则）
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all', // 检测所有变量
          args: 'none', // 不检查函数参数
          ignoreRestSiblings: true, // 忽略剩余兄弟属性
          argsIgnorePattern: '^_', // 忽略以 _ 开头的参数
        },
      ],
      // 不强制要求函数返回类型
      '@typescript-eslint/explicit-function-return-type': 'off',
      // 警告使用any类型
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
