

export default {
  title: 'My Site233',
  description: 'This is my site description',
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
    ],
    codeLine: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },
    sidebar: {
      '/about/': [
        {
          text: 'About',
          items: [
            {
              text: 'A',
              link: '/about/a'
            },
            {
              text: 'B',
              link: '/about/b'
            }
          ]
        }
      ],
      '/intro': [
        {
          text: '介绍',
          items: []
        }
      ]
    }
  }
}
