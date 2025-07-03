import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { TestTimezoneComponent } from './app/components/date-tester/date-tester.component';

bootstrapApplication(TestTimezoneComponent, {
  providers: [
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
