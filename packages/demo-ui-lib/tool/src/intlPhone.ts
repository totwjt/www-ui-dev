/* ----------------------------------------------------*\
｜                       手机号港澳台
\*---------------------------------------------------- */

export const phoneDict = [
  {
    id: '914265916559069853',
    ofType: 'phoneType',
    name: '中国大陆',
    value: '0',
    code: '0',
    description: '中国大陆',
    createDate: 1704643200000,
    alias: '',
    parentId: null,
    clientShowState: 0,
    // hd: '+86',
    hd: '',
    class: 'cn'
  },
  {
    id: '914265916559069854',
    ofType: 'phoneType',
    name: '中国香港',
    value: '1',
    code: '1',
    description: '中国香港',
    createDate: 1704643200000,
    alias: '',
    parentId: null,
    clientShowState: 0,
    hd: '+852',
    class: 'hk'
  },
  {
    id: '914265916559069855',
    ofType: 'phoneType',
    name: '中国澳门',
    value: '2',
    code: '2',
    description: '中国澳门',
    createDate: 1704643200000,
    alias: '',
    parentId: null,
    clientShowState: 0,
    hd: '+853',
    class: 'mo'
  },
  {
    id: '914265916559069856',
    ofType: 'phoneType',
    name: '中国台湾',
    value: '3',
    code: '3',
    description: '中国台湾',
    createDate: 1704643200000,
    alias: '',
    parentId: null,
    clientShowState: 0,
    hd: '+886',
    class: 'tw'
  }
]

export const showMobilePhoneAreaCodeByType = (type: string | number) => {
  return phoneDict.find((item) => item.value === String(type))?.hd || ''
}
