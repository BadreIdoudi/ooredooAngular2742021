import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/item/item.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './pages/login/login.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { SliderComponent } from './components/slider/slider.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AUTH_INTERCEPTOR_PROVIDER } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    NgstyleComponent,
    MiniwordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    BtcToUsdPipe,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    DetailPersonneComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    AddPersonneComponent,
    TestObservableComponent,
    SliderComponent,
    TestHttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [AUTH_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
