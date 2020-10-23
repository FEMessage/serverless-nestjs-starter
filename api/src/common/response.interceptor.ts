import {CallHandler, ExecutionContext, HttpStatus, NestInterceptor, RequestMethod} from "@nestjs/common";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Payload<T> {
  success: boolean,
  code: string,
  payload: T;
}
export class ResponseInterceptor<T> implements NestInterceptor<T, Payload<T>>{
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Payload<T>> | Promise<Observable<Payload<T>>> {


    return next.handle().pipe(map(data => {
      const request = context.switchToHttp().getRequest();
      const response = context.switchToHttp().getResponse();
      // https://stackoverflow.com/questions/55406194/nestjs-set-httpstatus-in-interceptor
      if (request.method == 'POST' && response.statusCode == HttpStatus.CREATED) response.status(HttpStatus.OK)

      return {
        code: '0',
        success: true,
        payload: data
      }
    }))
  }
}