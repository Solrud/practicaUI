import {Component, OnInit} from '@angular/core';
import {NavBarsLabelsTitles} from "../app.constant";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  navBarTitle = NavBarsLabelsTitles;

  ngOnInit(): void {
    console.log(typeof NavBarsLabelsTitles)
    console.log(NavBarsLabelsTitles)
  }


}
