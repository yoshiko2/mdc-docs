import { defaultTheme } from 'vuepress'

export default {
  theme: defaultTheme({
    locales: {
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
          {
            text: 'Offical website',
            link: 'https://www.mvdc.top',
          },
          {
            text: 'User Panel',
            link: 'https://user.mvdc.top',
          },
          {
            text: 'Download',
            link: 'https://github.com/yoshiko2/movie_data_capture/releases',
          },
        ],
      },
      '/chs/': {
        selectLanguageName: '简体中文',
        navbar: [
          {
            text: '官网',
            link: 'https://www.mvdc.top',
          },
          {
            text: '用户面板',
            link: 'https://user.mvdc.top',
          },
          {
            text: '下载',
            link: 'https://github.com/yoshiko2/movie_data_capture/releases',
          },
        ],
        sidebar: [
          {
            text: '首页',
            link: '/chs/readme.md',
          },
          {
            text: '影片命名规则',
            link: '/chs/naming.md',
          },
          {
            text: '命令行参数与配置',
            link: '/chs/cli.md',
          },
          {
            text: 'BUG报告',
            link: '/chs/bug_report.md',
          },
          {
            text: '错误处理',
            link: '/chs/error.md',
          },
          {
            text: '法律文件',
            children: [
              {
                text: '最终用户条款',
                link: '/chs/laws/eula.md'
              },
              {
                text: '隐私政策',
                link: '/chs/laws/privacy.md'
              },
              {
                text: '免责声明',
                link: '/chs/laws/disclaimer.md'
              },
            ],
          },
        ],
      },
      '/cht/': {
        selectLanguageName: '繁體中文',
        navbar: [
          {
            text: '官網',
            link: 'https://www.mvdc.top',
          },
          {
            text: '用戶面板',
            link: 'https://user.mvdc.top',
          },
          {
            text: '下載',
            link: 'https://github.com/yoshiko2/movie_data_capture/releases',
          },
        ],
      },
    },
  }),
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'MDC Documents',
      description: 'MDC Documents'
    },
    '/chs/': {
      lang: 'zh-CN',
      title: 'MDC文档',
      description: 'MDC文档'
    },
    '/cht/': {
      lang: 'zh-TW',
      title: 'MDC文档',
      description: 'MDC文档'
    },
  },
}

