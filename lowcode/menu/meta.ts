import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { itemsExtraProps } from './utils';

function uuid() {
  return ((Math.random() * 1e6) >> 0).toString(36);
}

const Meta: ComponentMetadata = {
  componentName: "Menu",
  title: '导航菜单',
  docUrl: '',
  screenshot:
    '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: "Menu",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'items',
        title: '菜单项',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'key',
                      title: 'key',
                      setter: 'StringSetter',
                      initialValue: (val) => val || uuid(),
                    },
                    {
                      name: 'title',
                      title: '菜单名称',
                      isRequired:true,
                      setter: 'StringSetter',
                    },
                    {
                      name: 'href',
                      title: '跳转链接',
                      isRequired:true,
                      setter: 'StringSetter',
                    },
                    {
                      name: 'subMenu',
                      title: '包含子项',
                      isRequired:true,
                      setter: {
                        componentName: 'SlotSetter',
                        isRequired: true,
                        title: '组件坑位',
                        initialValue: {
                          type: 'JSSlot',
                          value: [],
                        },
                      }
                    }
                  ],
                },
              },
              initialValue: () => {
                return {
                  key: 'item-' + uuid(),
                  title: '菜单名',
                  href: '',
                  subMenu: false
                };
              },
            },
          },
        },
        extraProps: itemsExtraProps,
      },
    ],
    supports: {
      style: true,
      loop: false,
    },
    component: {
     
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '导航',
  group: '组件',
};
const snippets: Snippet[] = [
  {
    title: '导航菜单',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
    schema: {
      componentName: "Menu",
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
