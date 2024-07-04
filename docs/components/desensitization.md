
# Desensitization 脱敏

## 基本使用

<preview path="../demos/desensitization/desensitization-1.vue" title="基本使用" description=" "></preview>

## 带有label字段

<preview path="../demos/desensitization/desensitization-2.vue" title="带有label字段" description=" "></preview>

## 预设类型

| 字段 | 说明 | 类型 | 描述 |
|  ----  | ----  | ----  | ----  |
| idCard | 身份证号 | string | 前四后二脱敏 |
| phone | 手机号 | string | 前三后二脱敏 |
| number | 编号 | string | 前二后二脱敏 |
| password | 密码 | string | 全脱敏 |

<preview path="../demos/desensitization/desensitization-3.vue" title="预设类型" description=" "></preview>

## 自定义显示位数

<preview path="../demos/desensitization/desensitization-4.vue" title="自定义显示位数" description="TODO：未实现"></preview>


## 组件 API

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
|label|label字段|string|string|null|
|type|类型|string|idCard phone number password |password|
|length|长度|number|number|6|
|iconSize|字体|number|number|16(rpx)|
|dot|占位|string|string|'*'|
|value|正文|string|string|空|
|正文|string|string|string|空|
|beforLen|显示字符个数|number|number|0|
|afterLen|显示字符个数|number|number|0|

### Methods 方法

| 方法名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Events 事件

| 事件名 | 说明 | 参数 | 返回值 |
|  ----  | ----  | ----  | ----  |
|  |  |  |  |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
|  ----  | ----  | ----  |
|  |  |  |
