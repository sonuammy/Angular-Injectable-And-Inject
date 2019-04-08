import { Injectable, Inject } from '@angular/core';
import { OtherService } from './other-service';


// @Injectable example
// This works because @Injectable automatically injects every parameter to the constructor as long as that parameter has a type
@Injectable()
export class SimpleService {
  otherService: OtherService;

  constructor(otherService: OtherService) {
    this.otherService = otherService;
  }
}


// This DOESN'T work because the otherService parameter doesn't have a type
// @Injectable()
// export class SimpleService {
//   otherService: OtherService;

//   constructor(otherService: any) {
//     this.otherService = otherService;
//   };
// }


// @Inject example
// This version doesn't work as Angular doesn't know it should be injecting otherService
// export class SimpleService {
//   otherService: OtherService;
//   constructor(otherService: OtherService) {
//     this.otherService = otherService;
//   };
// }

// This version works but we have to decorate every parameter to our constructor with @Inject
// export class SimpleService {
//   otherService: OtherService;

//   constructor(@Inject(OtherService) otherService: OtherService) {
//     this.otherService = otherService;
//   };

// }