import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap';
import { AddexpenseComponent } from './addexpense/addexpense.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalBudget:any;
  totalExpense:any;
  explist:any = [];
  private bsModelRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService,
  ) { }

  ngOnInit() {
    this.totalBudget = localStorage.getItem('total_budget');
    this.explist = JSON.parse(localStorage.getItem('expenses'));
    console.log(this.explist);
    if(this.explist){
      this.totalExpense = this.getTotalExpense(this.explist);
    }
  }

  getTotalExpense(expenseArr){
    var sum = 0;
    expenseArr.forEach(element => {
      sum += element.amount;
    });
    return sum;
  }

  addNewExpense(){
    this.bsModelRef = this.bsModalService.show(AddexpenseComponent);
  }

}
  
