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

  public matchList = new BehaviorSubject<any>(false);
  setMatchList(data: any) {
    this.matchList.next(data);
  };

  public followerList = new BehaviorSubject<any>(false);
  setFollowersList(data: any) {
    this.followerList.next(data);
  };

  getFollowersList() {
    return this.followerList.value;
  };

  public messageClickId = new BehaviorSubject<any>(false);
  setMessageClickId(data: any) {
    this.messageClickId.next(data);
  };

  public seekerID = new BehaviorSubject<any>(false);
  setSeekerLoggedID(data: any) {
    this.seekerID.next(data);
  };

}
