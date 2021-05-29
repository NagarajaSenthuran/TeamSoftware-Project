import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthInterceptor } from './shared/auth.interceptor';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//anguar material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { ContactsViewComponent } from './components/contacts-view/contacts-view.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';

//ngx-boostrap
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


import { AddNewvehicleComponent } from './components/add-newvehicle/add-newvehicle.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehiclesService } from './services/vehicles.service';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ViewFeedbackComponent } from './components/view-feedback/view-feedback.component';
import { AlertifyService } from './services/Alertify.service';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesDetailsResolverService } from './vehicle-details/vehicles-details-resolver.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { ViewCotactQuarryComponent } from './components/view-cotact-quarry/view-cotact-quarry.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    ContactComponent,
    BookingComponent,
    HomeComponent,
    FeedbackComponent,
    VehicleComponent,
    TestimonialComponent,
    AboutComponent,
    ContactsViewComponent,
    ViewVehiclesComponent,
    ViewBookingComponent,
    AddVehicleComponent,
    AddNewvehicleComponent,
    VehicleCardComponent,
    VehicleListComponent,
    HomeAdminComponent,
    ViewFeedbackComponent,
    VehicleDetailsComponent,
    FilterPipe,
    SortPipe,
    ViewCotactQuarryComponent
  
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    TabsModule.forRoot(),
    NgxGalleryModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    VehiclesService,
    AlertifyService,
    VehiclesDetailsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
