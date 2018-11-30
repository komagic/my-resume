/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

const base = {
  title: 'Jackie 的简历',
  name: '谭博',
  shortDescription: '前端开发工程师',
  description: '🏀  💻  ⚽️  🏊',
  infomations: [
    {
      icon: '/static/svgs/info/birthday.svg',
      key: '生日',
      value: '1988'
    },
    {
      icon: '/static/svgs/info/education.svg',
      key: '教育经历',
      value: '🇬🇧纽卡斯尔大学'
    },
    {
      icon: '/static/svgs/info/nowCity.svg',
      key: '居住地',
      value: '浙江 · 杭州'
    },
    {
      icon: '/static/svgs/info/email.svg',
      key: '邮箱',
      value: 'soap.tanb@gmail.com'
    },
    {
      icon: '/static/svgs/info/phone.svg',
      key: '手机号',
      value: '+86 13517155696'
    }
  ],
  skills: [
    {
      value: 'HTML',
      logo: '/static/images/logos/html.png'
    },
    {
      value: 'CSS',
      logo: '/static/images/logos/css.png'
    },
    {
      value: 'JavaScript',
      logo: '/static/images/logos/javascript.png',
      style: {
        background: 'linear-gradient(to bottom, #ffeb0e , #efdd1b)',
        'border-color': '#ffeb0e'
      }
    },
    {
      value: 'Node.js',
      logo: '/static/images/logos/nodejs.png',
      style: {
        background: 'linear-gradient(to bottom, #8ccf00 , #80bd01)',
        'border-color': '#8ccf00'
      }
    },
    {
      value: 'Python',
      logo: '/static/images/logos/python.png'
    },
    {
      value: 'Photoshop',
      logo: '/static/images/logos/photoshop.png',
      style: {
        background: '#001d26',
        border: '5px solid #00c8ff'
      }
    },
    {
      value: 'Sketch',
      logo: '/static/images/logos/sketch.png',
      style: {
        background: 'linear-gradient(to bottom, #1d0f4f , #130a33)',
        'border-color': '#1d0f4f'
      }
    }
  ],
  designs: {
    imagecut: {
      background: `#222`,
      mainImage: '/static/images/projects/imageCut.png',
      title: '抠图编辑器',
      subTitle: 'react 项目',
      desc:
        '一款抠图编辑器，利用前后景笔、恢复、擦除等工具对图片进行精确加工，抠出理想主体。',
      link: '',
      linkRefer: '',
      posi: 'left'
    },
    decisionSupport: {
      background: '#859398',
      mainImage: '/static/images/projects/support.jpg',
      title: '辅助决策系统',
      subTitle: 'vue 项目',
      desc:
        '通过可视化表现台风、风流场等大数据全球气象数据和智能预警信息等, 为全国气象预警部门提供一手智能预警、数据辅助决策和综合信息发布服务。',
      link: '',
      linkRefer: '',
      posi: 'left'
    },
    logos: {
      background: '#F8F8F8',
      mainImage: '/static/images/projects/weatherchart.png',
      title: 'WeatherChart',
      subTitle: 'angular 项目',
      desc: '一个智能化图表加工制作系统，已运行在气象局产品室，在各大卫视天气预报栏目播出使用，极大提高了气象相关部门工作效率。',
      link: '',
      linkRefer: '',
      posi: 'left'
    }
  }

}

const en = {
  title: `Jackie's resume`,
  name: 'Jacky Tan',
  shortDescription: 'Front-End Developer',
  description: ``,
  infomations: [
    {
      icon: '/static/svgs/info/birthday.svg',
      key: 'birthday',
      value: '1988'
    },
    {
      icon: '/static/svgs/info/education.svg',
      key: 'Education',
      value: 'Newcastle University'
    },
    {
      icon: '/static/svgs/info/nowCity.svg',
      key: 'Live in',
      value: 'HangZhou, ZheJiang'
    },
    {
      icon: '/static/svgs/info/email.svg',
      key: 'Email',
      value: 'soap.tanb@gmail.com'
    },
    {
      icon: '/static/svgs/info/phone.svg',
      key: 'Phone Number',
      value: '+86 13517155696'
    }
  ],

  designs: {
    imagecut: {
      background: `#859398`,
      mainImage:
        '/static/images/projects/imageCut.png',
      title: 'ImageCutEditor',
      subTitle: 'React',
      desc:
        'This is an editor that automatically produces a precise cutout for you.',
      link: '',
      linkRefer: '',
      posi: 'left'
    },
    decisionSupport: {
      background: '#222',
      mainImage: '/static/images/projects/support.jpg',
      title: 'DecisionSupport',
      subTitle: 'Vue',
      desc:
        'This is an information system that provides meteorological information early waring and supports governmental decision-making activities.',
      link: '',
      linkRefer: '',
      posi: 'left'
    },
    logos: {
      background: '#F8F8F8',
      mainImage: '/static/images/projects/weatherchart.png',
      title: 'WeatherChart',
      subTitle: '',
      desc: 'An Intelligent automatic chart production system. It has been running in the product department of CMA.',
      link: '',
      linkRefer: '',
      posi: 'left'
    }
  }
}

export default {
  cn: {
    website: base,
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: Object.assign({}, base, en),
    route: routeMap.map(v => v.en)
  }
}
