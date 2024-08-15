import { ExtractPropTypes } from 'vue'

// export type IPatientInfo = Partial<{
export type IPatientInfo = {
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
  imageUrl: string | null;
  orderType: number;
};
// }>;

type photoMaterials = Partial<{
  problem: string;
  answer: string;
}>;

export type IPatient = {
  commitTime: string;
  patient: IPatientInfo;
  preQuestions: photoMaterials[];
  photoMaterials: string[];
};

export const consultantInformationProps = {
  bodyStyle: {
    type: Object,
    default: () => {}
  },
  visible: {
    type: Boolean,
    default: false
  },
  info: {
    type: Object as () => IPatient,
    default: () => ({})
  },
  title: {
    type: String,
    default: '就诊人信息'
  }
} as const

export type ConsultantInformationProps = ExtractPropTypes<
  typeof consultantInformationProps
>;
