import {Component, OnInit} from '@angular/core';
import * as Popper from "@popperjs/core"
import {EventsService} from "../../../data/service/OptionalService/events.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  currentTestObs: boolean;

  ngOnInit(): void {
    this._checkTestObs();
  }

  onClickTestObs(){
    EventsService.onOpenTestObs.next(!this.currentTestObs);
  }

  _checkTestObs(): any{
    EventsService.onOpenTestObs.subscribe(result => {
      this.currentTestObs = result;

    })
  }
}
