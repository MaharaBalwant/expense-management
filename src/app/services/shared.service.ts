import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private observableService = new BehaviorSubject<any>(false);
  
  searchAllList = this.observableService.asObservable();

  matchPopupFlag = this.observableService.asObservable();

  registrationComplete = this.observableService.asObservable();

  public searchListService = new BehaviorSubject<boolean>(false);
  setWorkerInfo(data: any) {
    this.searchListService.next(data);
  };

  public change_in_data = new BehaviorSubject<any>(false);
  setChangeInData(data: any) {
    this.change_in_data.next(data);
  };


}
