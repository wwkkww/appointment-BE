import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { plainToClass, plainToInstance } from 'class-transformer'
// import { UserDto } from '../users/dtos/user.dto'

// interface for any class type
interface ClassConstructor { 
  new (...args: any[]): {}
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // run something before a request is handled by request handler
    // console.log('running before handler', context)

    return next.handle().pipe(
      map((data: any) => {
        // run something before response is sent out
        
        // console.log('running before response is sent out', data)
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true
        })
      })
    )
  }
}