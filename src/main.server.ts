import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

export const config: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
