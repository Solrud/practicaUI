import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  static onOpenTestObs: BehaviorSubject<boolean> = new BehaviorSubject(false); //обсервбл для изменения aside color
}
