import { Component, Input, OnInit } from "@angular/core";
import { first } from "rxjs";
import { Affiliate, AffiliateService } from "../../../services/affiliate.service";

@Component({
  selector: "gems-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  isSideNavOpened = true;
  affiliate!: Affiliate;

  constructor(private _affiliateService: AffiliateService) {}

  ngOnInit() {
    this._affiliateService
      .getAffiliate(1)
      .pipe(first())
      .subscribe((affiliate) => (this.affiliate = affiliate));
  }

  toggle() {
    this.isSideNavOpened = !this.isSideNavOpened;
  }
}
