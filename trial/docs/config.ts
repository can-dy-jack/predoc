import { defineConfig } from 'predoc';

export default defineConfig({
  title: 'My Site233',
  description: 'This is my site description',
  themeConfig: {
    codeLine: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },
    footer: {
      copyright: `版权所有 © ${new Date().getFullYear()} Predoc, Inc。此网站由 <a href="https://github.com/can-dy-jack/predoc">Predoc</a> 创建`,
      links: [
        {
          label: '快捷访问',
          items: [
            {
              label: '首页',
              href: '/'
            },
            {
              label: '入门介绍',
              href: '/intro'
            },
            {
              label: '开始使用',
              href: '/get-start'
            }
          ]
        },
        {
          label: '推荐阅读',
          items: [
            {
              label: '用户引导',
              href: '/guide'
            }
          ]
        },
        {
          label: '友联推荐',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/zh-CN/'
            },
            {
              label: 'Vite',
              href: 'https://vitejs.cn/'
            },
            {
              label: 'Github',
              href: 'https://github.com/'
            },
            {
              label: 'Predoc',
              href: 'https://github.com/can-dy-jack/predoc'
            }
          ]
        }
      ]
    },
    math: {"\\R": "\\mathbb{R}", "\\f": "#1f(#2)"},
  }
});
