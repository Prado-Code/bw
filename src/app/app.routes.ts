import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
    {path : "one" ,component: FirstComponent},
    {path : "two" ,component: SecondComponent}
];
