import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Component({
    selector: "app-top-nav",
    templateUrl: "./top-nav.component.html",
    styleUrls: ["./top-nav.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent implements OnInit {
    @Input() sideNavRef: MatSidenav;
    @Input() isDisplayingSidenav: boolean;

    constructor() {}

    ngOnInit() {}
}
