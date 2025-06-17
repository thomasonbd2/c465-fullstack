import { ApplicationConfig, /*, provideBrowserGlobalErrorListeners, provideZoneChangeDetection*/ 
importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClient),
    authInterceptProvider
  ]
};

