import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskRegistrationService } from './task-registration.service';
import { TaskUpdateComponent } from './task-update/task-update.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TaskUpdateComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [TaskRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
