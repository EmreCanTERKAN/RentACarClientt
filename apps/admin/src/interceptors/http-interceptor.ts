import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const url = req.url;
  const endpoint = 'https://localhost:7204/';
  let clone = req.clone({
    url: url.replace('/rent/', endpoint) // '/rent/api/users' => 'https://localhost:7204/api/users'
  });
  return next(clone);
};
