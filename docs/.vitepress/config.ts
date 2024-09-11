import { DefaultTheme, defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { components } from '../components'

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/foo' }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
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
    siteTitle: '组件库标题',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    nav,
    sidebar,
    footer: {
      message: 'ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备19041599号-2</a>',
      copyright: '版权所有 © 2024 www.521nb.cn'
    }
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
