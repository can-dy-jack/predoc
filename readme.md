# predoc
> 目标：可拓展的、灵活的静态文档生成器

> [!NOTE]
> 开发中 ～～～

## todo
- helmet
  react-helmet-async 2.0.5
  └── ✕ unmet peer react@"^16.6.0 || ^17.0.0 || ^18.0.0": found 19.1.1
- [ ]样式统一
  - [x] css变量
  - 主题支持：白色、黑暗（监听系统自动切换 or 手动设置跟随系统 - 都通过 .dark 的 class 实现）
- 打包问题
  - 打包有时候会失败，疑似build顺序问题。暂时在windows下出现该问题
- 组件
  - 基础组件：按钮、图标、下拉菜单、popup、tooltip、tab、table、form相关
  - react motion
  - 首页：仿苹果官网动画效果 - 封装成组件、或者已经有组件
    - https://juejin.cn/post/7078801234097864741
    - https://juejin.cn/post/7521160007854866467
    - https://juejin.cn/post/7178698886721044539
- 代码结构升级
  - create-predoc
  - 说明文档
- monorepo
  - workspace
  - lerna

## run

```zsh
pnpm install
pnpm build

pnpm link

predoc dev docs

predoc build docs
predoc preview docs
```
