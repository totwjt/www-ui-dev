
# ConsultantInformation 就诊人详情

## 基本使用

<preview path="../demos/consultant-information/consultant-information-1.vue" title="基本使用" description=" "></preview>

## 组件 API

### types todo.

```typescript
type Patient = {
  patientName: string;
  patientAge: string;
  patientSex: number;
  disease: string;
  symptom: string;
  patientId: string;
  height: number;
  weight: number;
  job: string;
  provinceCh: string;
  cityCh: string;
  countryCh: string;
  complaint: string;
  medicalHistory: string;
  allergicHistory: string;
  createTime: string;
  orderType: number;
};

type Info = {
  commitTime: string;
  patient: Patient;
  preQuestions: string[];
  photoMaterials: string[];
};
```

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ----  | ----  | ----  | ----  |
|  |  |  |  | |

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
