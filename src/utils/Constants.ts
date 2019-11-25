
import { formatMessage } from 'umi-plugin-react/locale';

const Constants = {
  baseUrl: 'http://localhost:9999',
  siteName: '网站名称',
  description: 'Ant Design 是西湖区最具影响力的 Web 设计规范',
  copyright: ' 2019 蚂蚁金服体验技术部出品',
  loginPage: {
    links: [
      {
        key: 'help',
        title: formatMessage({ id: 'layout.user.link.help' }),
        href: '',
      },
      {
        key: 'privacy',
        title: formatMessage({ id: 'layout.user.link.privacy' }),
        href: '',
      },
      {
        key: 'terms',
        title: formatMessage({ id: 'layout.user.link.terms' }),
        href: '',
      },
    ],
  },
  footer: {

  },
};

export default Constants;
