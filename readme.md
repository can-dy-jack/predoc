# predoc
> 目标：可拓展的、灵活的静态文档生成器

> [!NOTE]
> 开发中 ～～～

## todo list
- SEO
  - helmet
- pageData层级问题
- npm抢注组织predoc
- github 流水线发布 npm ？
- 根据docs下的文件（排除一些固定的文件夹或文件 - 用户自定义 include 和 exclude ）自动生成nav和sidebar
- monorepo配置
  - workspace
  - lerna
- 提取公共依赖 - pnpm
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
