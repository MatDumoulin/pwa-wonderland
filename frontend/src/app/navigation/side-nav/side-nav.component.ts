import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

interface MenuItem {
    text: string;
    icon: string;
    link: string;
}

@Component({
    selector: "app-side-nav",
    templateUrl: "./side-nav.component.html",
    styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {
    menuItems: MenuItem[] = [
        {
            text: "Service Workers",
            icon: "signal_wifi_off",
            link: "/service-worker"
        },
        {
            text: "Camera",
            icon: "camera",
            link: "/camera"
        }
    ];

    constructor(public router: Router) {}

    ngOnInit() {}
}
