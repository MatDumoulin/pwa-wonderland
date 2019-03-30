import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatListModule, MatToolbarModule } from "@angular/material";
import { RouterModule } from "@angular/router";

import { SideNavComponent } from "./side-nav";
import { TopNavComponent } from "./top-nav";

@NgModule({
    declarations: [TopNavComponent, SideNavComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        RouterModule
    ],
    exports: [SideNavComponent, TopNavComponent]
})
export class NavigationModule {}
