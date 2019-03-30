import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ServiceWorkerComponent } from "./service-worker";
import { WelcomeComponent } from "./welcome";

const routes: Routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "welcome", component: WelcomeComponent },
    { path: "service-worker", component: ServiceWorkerComponent },
    { path: "**", redirectTo: "" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
