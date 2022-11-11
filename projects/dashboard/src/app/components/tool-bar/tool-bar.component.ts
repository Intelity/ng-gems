import { Component, OnInit } from "@angular/core";
import { first } from "rxjs";
import { User, UserService } from "../../services/user.service";

@Component({
  selector: "gems-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.scss"],
})
export class ToolBarComponent implements OnInit {
  loggedInUser!: User;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService
      .getUser()
      .pipe(first())
      .subscribe((user) => (this.loggedInUser = user));
  }
}
