import { Component } from "@angular/core";

@Component({
  selector: "app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  model: any = {};

  onSubmit() {
    console.log(this.model);
  }
}
