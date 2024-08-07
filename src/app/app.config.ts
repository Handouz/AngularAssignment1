import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
     withHashLocation(),//add hash to the url
      withInMemoryScrolling({scrollPositionRestoration:'top'})//while going back to the page it scrolls to the top of the component
    )]
};
