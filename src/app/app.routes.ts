import { Routes } from '@angular/router';
import { TestTimezoneComponent } from './components/date-tester/date-tester.component';


const routes: Routes = [
    { path: 'test-timezone', component: TestTimezoneComponent },
    { path: '', redirectTo: 'test-timezone', pathMatch: 'full' },
];