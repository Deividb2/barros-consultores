import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { NetworksComponent } from './networks/networks.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormContactComponent,
    NetworksComponent,
    OurServicesComponent,
    FeedbacksComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FeedbacksComponent,
    FooterComponent,
    FormContactComponent,
    OurServicesComponent,
    NetworksComponent
  ]
})
export class ComponentsModule { }
