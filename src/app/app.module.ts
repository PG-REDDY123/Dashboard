import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ButtonComponent } from './component/button/button.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { InputComponent } from './component/input/input.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { LabelComponent } from './component/label/label.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetoneComponent } from './dashboard/widgetone/widgetone.component';
import { WidgettwoComponent } from './dashboard/widgettwo/widgettwo.component';
import { WidgetthreeComponent } from './dashboard/widgetthree/widgetthree.component';
import { WidgetfourComponent } from './dashboard/widgetfour/widgetfour.component';
import { WidgetfiveComponent } from './dashboard/widgetfive/widgetfive.component';
import { MaincomponentComponent } from './dashboard/maincomponent/maincomponent.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { WidgetsixComponent } from './dashboard/widgetsix/widgetsix.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { CalenderComponent } from './component/calender/calender.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonComponent,
    DropdownComponent,
    InputComponent,
    CheckboxComponent,
    LabelComponent,
    WidgetoneComponent,
    WidgettwoComponent,
    WidgetthreeComponent,
    WidgetfourComponent,
    WidgetfiveComponent,
    MaincomponentComponent,
    WidgetsixComponent,
    FooterComponent,
    CalenderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
