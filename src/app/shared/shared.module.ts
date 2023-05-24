import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../presentation/components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: []
})
export class SharedModule { }
