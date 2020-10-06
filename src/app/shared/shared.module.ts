import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LoadingComponent } from './loading/loading.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    LoaderComponent,

    ToolbarComponent,
    NotfoundComponent,
    ConfirmDialogComponent,
    LoadingComponent,
    PageHeaderComponent
  ],
  declarations: [
    LoaderComponent,
    ToolbarComponent,
    NotfoundComponent,
    ConfirmDialogComponent,
    LoadingComponent,
    PageHeaderComponent,
  ],
  entryComponents: [

  ],
  providers: []
})
export class SharedModule { }
