import {Component, OnInit} from '@angular/core';
import * as Popper from "@popperjs/core"
import {EventsService} from "../../../data/service/OptionalService/events.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  currentTestObs: boolean;
  user: any;
  firstName: string = '';
  lastName: string = '';
  errorMessageUserSec: string = '';
  userSec: any;

  constructor(private http: HttpClient) {
  }

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

  takeUSerInfo(){
    this.http.get('http://localhost:5000/api/user').subscribe(result=>{
      this.user = result;
    })
  }

  onSearchSecondUser(){
    const requestBody = {firstName: this.firstName, lastName: this.lastName};
    this.http.post('http://localhost:5000/api/search-user', requestBody).subscribe(result=>{
                    console.log(result)
                  this.userSec = result;
                  this.errorMessageUserSec = '';
                  },
        error=>{
                  this.userSec = '';
                  this.errorMessageUserSec = error.error.message;
                  console.log(error.error.message)
                  }
    )
  }

}

