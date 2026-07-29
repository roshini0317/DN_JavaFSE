import {
  inject
} from '@angular/core';

import {
  finalize
} from 'rxjs/operators';

import {
  LoadingService
} from '../services/loading';


export const loadingInterceptor =
(req: any, next: any) => {
  
  const loadingService =
    inject(
      LoadingService
    );

  loadingService
    .isLoading$
    .next(true);

  return next(req).pipe(

    finalize(() => {

      loadingService
        .isLoading$
        .next(false);

    })

  );

};