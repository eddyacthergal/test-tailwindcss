import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent, TopMenuComponent, FooterComponent,
    NotFoundComponent
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    HeaderComponent, FooterComponent, NotFoundComponent
  ]
})
export class SharedModule { }
