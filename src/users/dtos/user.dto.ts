import { Expose, Exclude } from 'class-transformer'

export class UserDto {
  @Expose()
  id: number

  @Expose()
  email: string

  @Expose()
  firstName: string

  @Expose()
  lastName: string

  @Expose()
  phone: string
}