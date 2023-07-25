import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../data/service/OptionalService/events.service";

@Component({
  selector: 'app-aside-body',
  templateUrl: './aside-body.component.html',
  styleUrls: ['./aside-body.component.css']
})
export class AsideBodyComponent implements OnInit{
  changedColor: boolean = false;
  ngOnInit(): void {
    EventsService.onOpenTestObs.subscribe(result=> {
      this.changedColor = result;
    })
  }
}
