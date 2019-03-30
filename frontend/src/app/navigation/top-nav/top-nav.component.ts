import { Component, Input, OnInit } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Component({
    selector: "app-top-nav",
    templateUrl: "./top-nav.component.html",
    styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent implements OnInit {
    @Input() sideNavRef: MatSidenav;

    constructor() {}

    ngOnInit() {}
}
