import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Interceptor that logs input/output requests
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly ctxPrefix: string = LoggingInterceptor.name;
  private readonly logger: Logger = new Logger(this.ctxPrefix);
  private userPrefix: string = '';

  /**
   * User prefix setter
   * ex. [MyPrefix - LoggingInterceptor - 200 - GET - /]
   */
  public setUserPrefix(prefix: string): void {
    this.userPrefix = `${prefix} - `;
  }

  /**
   * Intercept method, logs before and after the request being processed
   * @param context details about the current request
   * @param call$ implements the handle method that returns an Observable
   */
  public intercept(context: ExecutionContext, call$: CallHandler): Observable<unknown> {
    const req: Request = context.switchToHttp().getRequest();
    const { method, url, body, headers } = req;
    const ctx: string = `${this.userPrefix}${this.ctxPrefix} - ${method} - ${url}`;
    const request: string = `${method} - ${url}`;

    this.logger.log(
      {
        request,
        headers,
        body,
      },
      ctx,
    );

    return call$.handle().pipe(
      tap({
        next: (val: unknown): void => {
          this.logNext(val, context);
        },
        error: (err: Error): void => {
          this.logError(err, context);
        },
      }),
    );
  }

  /**
   * Logs the request response in success cases
   * @param body body returned
   * @param context details about the current request
   */
  private logNext(body: unknown, context: ExecutionContext): void {
    const { method, url } = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    const ctx: string = `${this.userPrefix}${this.ctxPrefix} - ${statusCode} - ${method} - ${url}`;
    const response: string = `${statusCode} - ${method} - ${url}`;

    this.logger.log(
      {
        response,
        // body,
      },
      ctx,
    );
  }

  /**
   * Logs the request response in success cases
   * @param error Error object
   * @param context details about the current request
   */
  private logError(error: Error, context: ExecutionContext): void {
    const req: Request = context.switchToHttp().getRequest<Request>();
    const { method, url, body } = req;

    if (error instanceof HttpException) {
      const statusCode: number = error.getStatus();
      const ctx: string = `${this.userPrefix}${this.ctxPrefix} - ${statusCode} - ${method} - ${url}`;
      const message: string = `Outgoing response - ${statusCode} - ${method} - ${url}`;

      if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
        this.logger.error(
          {
            method,
            url,
            body,
            message,
            error,
          },
          error.stack,
          ctx,
        );
      } else {
        this.logger.warn(
          {
            method,
            url,
            error,
            body,
            message,
          },
          ctx,
        );
      }
    } else {
      this.logger.error(
        error.stack,
        `${this.userPrefix}${this.ctxPrefix} - ${method} - ${url}`,
      );
    }
  }
}