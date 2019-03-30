import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CameraModule } from "./camera";
import { GeolocalisationModule } from "./geolocalisation";
import { MaterialModule } from "./material.module";
import { NavigationModule } from "./navigation";
import { PushNotificationModule } from "./push-notification";
import { ServiceWorkerModule } from "./service-worker";
import { WelcomeComponent } from "./welcome";

@NgModule({
    declarations: [AppComponent, WelcomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CameraModule,
        GeolocalisationModule,
        NavigationModule,
        MaterialModule,
        PushNotificationModule,
        ServiceWorkerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
