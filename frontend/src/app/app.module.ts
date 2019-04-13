import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CameraModule } from "./camera";
import { GeolocalisationModule } from "./geolocalisation";
import { MaterialModule } from "./material.module";
import { NavigationModule } from "./navigation";
import { PushNotificationModule } from "./push-notification";
import { ServiceWorkerPageModule } from "./service-worker";
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
        ServiceWorkerPageModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
