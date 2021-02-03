import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoreComponent } from './core.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CoreModule { }
