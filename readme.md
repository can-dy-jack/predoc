# predoc
> 目标：可拓展的、灵活的静态文档生成器

> [!NOTE]
> 开发中 ～～～

## todo
- helmet
  react-helmet-async 2.0.5
  └── ✕ unmet peer react@"^16.6.0 || ^17.0.0 || ^18.0.0": found 19.1.1
- pageData层级问题
- npm抢注组织predoc
- monorepo
  - workspace
  - lerna
- 提取公共依赖 - pnpm
- predoc 
  - 改成 type: module ? 
  - package.json 的 type 和 module 配置
  - 打包问题
  - 打包后使用报错问题
- 代码结构升级
  - create-predoc
  - 说明文档
- markdown 解析 - 自定义 note 组件
  - 扩展mdx
    - mermaid
    - code live
    - 扩展语法
    - 自定义标签
- 全局搜索
- 文章最近更新时间 / 发布时间
- 打包问题
  - 打包有时候会失败，疑似build顺序问题。暂时在windows下出现该问题
- 组件
  - 基础组件：按钮、图标、下拉菜单、popup、tooltip、tab、table、form相关
  - react motion
  - 首页：仿苹果官网动画效果 - 封装成组件、或者已经有组件
    - https://juejin.cn/post/7078801234097864741
    - https://juejin.cn/post/7521160007854866467
    - https://juejin.cn/post/7178698886721044539

## run

```zsh
pnpm install
pnpm build

pnpm link

predoc dev docs

predoc build docs
predoc preview docs
```
