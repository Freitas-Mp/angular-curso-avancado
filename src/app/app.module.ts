import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './pages/category/category.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { inMemoryService } from './in-memory-service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(inMemoryService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
