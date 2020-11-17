import { Component } from "@angular/core";
import { Input } from "@angular/core"; // to receive a product as input
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent {
  @Input() product; /* input decorator for property,  The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.*/
  @Output() notify = new EventEmitter(); /* In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter(). This allows the product alert component to emit an event when the value of the notify property changes. */ 
  
  constructor() {}

 
}
