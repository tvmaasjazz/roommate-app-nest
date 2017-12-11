export const loggerMiddleware = (req, res, next) => {
  console.log('Incoming request...');
  next();
};