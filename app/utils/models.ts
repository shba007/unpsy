// "JEPQ" | "DSMD"
export type ScaleName = 'MACI' | 'MCMI-3' | 'TCI' | 'MPQ' | 'EPQ' | 'JTCI' | 'EPQ-R' | 'MMPI-RF' | 'SCL-90R' | 'DSMD-C' | 'DSMD-A'
// | "DSMD-C"

export type ScaleType = 'binary' | 'pentanary'

export enum ScaleNameToDBScaleName {
  'MACI' = 'MACI',
  'MCMI-3' = 'MCMI_3',
  'MMPI-RF' = 'MMPI_RF',
  'TCI' = 'TCI',
  'MPQ' = 'MPQ',
  'EPQ' = 'EPQ',
  'EPQ-R' = 'EPQ_R',
  'JTCI' = 'JTCI',
  // "JEPQ" = "JEPQ",
  'SCL-90R' = 'SCL_90R',
  'DSMD-C' = 'DSMD_C',
  'DSMD-A' = 'DSMD_A',
}

export enum DBScaleNameToScaleName {
  'MACI' = 'MACI',
  'MCMI_3' = 'MCMI-3',
  'MMPI_RF' = 'MMPI-RF',
  'TCI' = 'TCI',
  'MPQ' = 'MPQ',
  'EPQ' = 'EPQ',
  'EPQ_R' = 'EPQ-R',
  'JTCI' = 'JTCI',
  // "JEPQ" = "JEPQ",
  'SCL_90R' = 'SCL-90R',
  'DSMD_C' = 'DSMD-C',
  'DSMD_A' = 'DSMD-A',
}

export interface Scale {
  name: ScaleName
  type: ScaleType
  count: number
  monthlyPrice: number
  subScales: string[]
  expiresAt: string
  updatedAt: string
}

export type PurchaseStatus = 'pending' | 'success' | 'failed'

export interface SubscribedScale {
  name: ScaleName
  type: ScaleType
  count: number
  monthlyPrice: number
  subScales: string[]
  options: { name: string; value: number }[]
  // expiresAt: string | null;
  updatedAt: string
  publishedAt: string
}
/* MISC */
export interface JWTToken {
  id: string
  ita: number
  exp: number
}

export interface AuthResponse {
  isRegistered: boolean
  timeoutAt: string
  retryTimeoutAt: string
  token:
    | {
        auth: string
      }
    | {
        access: string
        refresh: string
      }
  user:
    | {
        name: string
        email: string
      }
    | {
        phone: string
      }
}

export interface User {
  name: string
  email: string | null
  phone: string | null
  subscriptions: Subscription[]
  reports: Report[]
  preference: Preference | null
  // feedbacks: Feedback[];
}

export interface Subscription {
  id: string
  name: 'Free' | 'Basic' | 'Pro'
  expiresAt: Date
}

export interface Report {
  id: string
  scale: ScaleName
  status: 'Draft' | 'Complete'
  data: object
  value: object
  patientId: string | null
  createdAt: Date | null
  modifiedAt: Date | null
}

export interface Preference {
  colorMode: 'light' | 'dark'
  payment: 'upi'
}
