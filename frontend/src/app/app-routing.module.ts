//import { VehicleDetailResolverService } from './vehicle-detail/vehicle-detail-resolver.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AboutComponent } from './about/about.component';
import { ContactsViewComponent } from './components/contacts-view/contacts-view.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { AddNewvehicleComponent } from './components/add-newvehicle/add-newvehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ViewFeedbackComponent } from './components/view-feedback/view-feedback.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesDetailsResolverService } from './vehicle-details/vehicles-details-resolver.service';
import { ViewCotactQuarryComponent } from './components/view-cotact-quarry/view-cotact-quarry.component';
import { BarChartsComponent } from './home-admin/bar-charts/bar-charts.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { ViewSubscribeComponent } from './components/view-subscribe/view-subscribe.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AdminComponent } from './home-admin/admin/admin.component';

const routes: Routes = [
 // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'feedback', component: FeedbackComponent },
 
  { path: 'vehicle', component: VehicleComponent },
  { path: 'view-contacts', component: ContactsViewComponent },
  { path: 'view-vehicle', component: ViewVehiclesComponent },
  { path: 'view-booking', component: ViewBookingComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'add-newvehicle', component: AddNewvehicleComponent },
  { path: 'vehicle-list', component: VehicleListComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'view-feedback', component: ViewFeedbackComponent},
  { path: 'vehicle-detail/:id', component: VehicleDetailsComponent,resolve :{ve:VehiclesDetailsResolverService}},
  { path: 'view-contact-quarry', component: ViewCotactQuarryComponent},
  { path: 'bar-chart', component: BarChartsComponent},
  { path: 'view-subscribe', component: ViewSubscribeComponent},
  { path: 'view-user', component: ViewUserComponent},
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
