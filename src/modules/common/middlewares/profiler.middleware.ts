import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

// this could just be a functional middlware bc no injection
@Middleware()
export class ProfilerMiddleware implements NestMiddleware {
  resolve(): ExpressMiddleware {
    return (req, res, next) => {
      const startTime = Date.now();

      res.once('finish', () => {
        const responseTime = Date.now() - startTime;
        console.log(
          `The ${req.method} request to ${req.originalUrl} took ${responseTime}ms to respond`
        );
      });

      next();
    };
  }
}
