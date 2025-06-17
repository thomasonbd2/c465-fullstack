import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip';
import { TripListing } from './trip-listing/trip-listing';
import { EditTripComponent } from './edit-trip/edit-trip';
import { Login } from './login/login';

export const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'login', component: Login},
    { path: '', component: TripListing, pathMatch: 'full' }
];
