import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnDestroy {
    private _mobileQueryListener: () => void;
    mobileQuery: MediaQueryList;
    isUserOnMobile = true;
    // Display options for the sidenav when it is on desktop;
    readonly desktopSidenavOptions: SidenavOptions = {
        fixedInViewport: false,
        disableClose: true,
        mode: "side",
        opened: true,
        fixedTopGap: 0
    };
    // Display options for the sidenav when it is on mobile;
    readonly mobileSidenavOptions: SidenavOptions = {
        fixedInViewport: false,
        disableClose: false,
        mode: "over",
        opened: false,
        fixedTopGap: 0
    };

    sidenavOptions = this.mobileSidenavOptions;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        // Listening to the screen size in order to display either in mobile or desktop mode.
        this.mobileQuery = media.matchMedia("(max-width: 1024px)");
        this._mobileQueryListener = () => {
            this.handleScreenChange();
            changeDetectorRef.detectChanges();
        };
        this.mobileQuery.addEventListener("change", this._mobileQueryListener);

        // Setting up the sidenav for mobile if the user is on mobile,
        // Or for desktop if the user is on desktop.
        this.handleScreenChange();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeEventListener(
            "change",
            this._mobileQueryListener
        );
    }

    private isMobile(): boolean {
        return this.mobileQuery.matches;
    }

    private handleScreenChange() {
        // If the user is not on mobile anymore, change display to desktop
        if (this.isUserOnMobile && !this.isMobile()) {
            this.isUserOnMobile = false;
            this.sidenavOptions = this.desktopSidenavOptions;
        }
        // If user is not on desktop anymore, change display to mobile.
        else if (!this.isUserOnMobile && this.isMobile()) {
            this.isUserOnMobile = true;
            this.sidenavOptions = this.mobileSidenavOptions;
        }
    }
}

interface SidenavOptions {
    fixedInViewport: boolean;
    disableClose: boolean;
    mode: string;
    opened: boolean;
    fixedTopGap: number;
}
