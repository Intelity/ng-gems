import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AffiliateService {
  constructor() {}
  getAffiliate(affiliateId: number): Observable<Affiliate> {
    return of({
      affiliateId: 1,
      affiliateName: "Jurasic Park",
    });
  }
}

export interface Affiliate {
  // mocking temporarily
  affiliateId: number;
  affiliateName: string;
}
