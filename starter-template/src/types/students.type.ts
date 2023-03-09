export interface Student {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  country: string
  avatar: string
  btn_address: string
}

export type StudentList = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]
