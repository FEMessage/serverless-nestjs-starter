import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ResponseInterceptor } from "./common/response.interceptor";
import { LoggingInterceptor } from './common/logging.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log']
  })
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalInterceptors(new ResponseInterceptor())

  app.setGlobalPrefix('api/v1')

  return app
}

// 注意: 通过注入 NODE_ENV 为 local，来方便本地启动服务，进行开发调试
const isLocal = process.env.NODE_ENV === 'local'
if (isLocal) {
  bootstrap().then((app) => {
    app.listen(3000, () => {
      console.log(`Server start on http://localhost:3000`)
    })
  })
}

// 导出启动函数，给 sls.js 使用
export { bootstrap }

