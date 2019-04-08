import { Component } from "@angular/core";
import { SimpleService } from './simple.service';

@Component({
    selector: "simple",
    template: `<p>Simple is as simple does</p>`
  })
  export class SimpleComponent {
    constructor(private simpleService: SimpleService) {}
  }