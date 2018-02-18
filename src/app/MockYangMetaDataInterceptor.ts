import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class MockYangMetaDataInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('/restconf/data/meta') && request.method === 'GET') {
      const url = request.url;
      const newUrl = `yangs${url.substring('/restconf/data/meta'.length)}.json`;
      console.log("Url: ", url, newUrl);
      const req = new HttpRequest('GET', newUrl);
      return next.handle(req);
    } else {
      return next.handle(request);
    }
  }
}
