import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {fetchdata} from './fetchdata.service';
import {HomeComponent} from './components/Home/home.component';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { NotFound } from './components/PageNotFound/Notfound.component';
import { AddInfoComponent } from './components/AddInfo/addinfo.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddInfoComponent,
    NotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    RouterModule.forRoot([
      { path: '', redirectTo:'/home',pathMatch:'full' },
      { path: 'home', component: HomeComponent},
      { path: 'add-info', component: AddInfoComponent},
      { path: 'add-info/:id', component: AddInfoComponent },
      { path: '**', component: NotFound},
      
    ])
  ],
  providers: [fetchdata],
  bootstrap: [AppComponent]
})
export class AppModule { }
