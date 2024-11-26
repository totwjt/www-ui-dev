import { DefaultTheme, defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { components } from '../components'

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/foo' },
  { text: 'www-cli', link: 'https://codeup.aliyun.com/64a8f522a708906d745acea8/web/management-system-vue/tree/master/cli' }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      items: [
        { text: 'BugList', link: '/guide/bugList' },
      ]
    },
    {
      text: '指南',
      items: [
        { text: '使用', link: '/guide/quickstart' },
        { text: '组件库介绍', link: '/guide/' },
      ]
    }
  ],
  '/components': [{
    items: [
      ...components
    ]
  }]
}

export default defineConfig({
  title: '浏览器标题',
  description: '浏览器描述',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'www-ui',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://codeup.aliyun.com/64a8f522a708906d745acea8/web/www-ui' }
    ],
    nav,
    sidebar,
    footer: {
      message: 'ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备19041599号-2</a>',
      copyright: '版权所有 © 2024 www.521nb.cn'
    }
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
