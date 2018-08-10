const path = require('path')
module.exports = {
  title: 'Vue Selectize',
  description: ' Vanila Vue.js component that mimics Selectize behaviour (no need jquery dependency)',
  base: '/vue-selectize/',
  themeConfig: {
    repo: 'isneezy/vue-selectize',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: 'Changelog', link: 'https://github.com/isneezy/vue-selectize/blob/master/CHANGELOG.md'}
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/examples/',
          '/guide/api/',
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@isneezy/vue-selectize': path.resolve(__dirname, '../../src/components/VSelectize')
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
