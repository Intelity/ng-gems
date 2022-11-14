import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationModule } from "./components/navigation/navigation.module";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
