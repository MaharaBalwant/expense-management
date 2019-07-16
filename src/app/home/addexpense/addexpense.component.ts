import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  addExpenseForm: FormGroup;
  categoryList:any;
  expen_list:any = [];

  constructor(
    private fb: FormBuilder,
    public bsModalRef: BsModalRef,
  ) 
  {}

  ngOnInit() {
    this.prepareAddExpenseFormGroup();
    this.getCatagoriesFromLocalhost();
  }

  prepareAddExpenseFormGroup(){
    this.addExpenseForm = this.fb.group({
      addExpens: this.fb.group({
        e_id: [''],
        category : ['', Validators.required],
        item : ['', Validators.required],
        amount : ['', Validators.required],
        date : ['', Validators.required],
      })
    });
  }

  getCatagoriesFromLocalhost(){

    this.categoryList = JSON.parse(localStorage.getItem('categories_list'));
    var dumArr:any = [];
    if(this.categoryList){
      this.categoryList.forEach(element => {
        if(element.deleted == false){
          dumArr.push(element);
        }
      });
    }
    this.categoryList =  dumArr;
  }

  addUniquerExpenseID(count){
    this.addExpenseForm.patchValue({
      addExpens:{
        e_id:count
      }
    });
  }

  onSubmitForm(){
    console.log(this.addExpenseForm.value.addExpens);
    if(localStorage.getItem('expenses')){
      this.expen_list = JSON.parse(localStorage.getItem('expenses'));
      var count:any = this.expen_list.length+1;
      this.addUniquerExpenseID(count);
      this.expen_list.push(this.addExpenseForm.value.addExpens);
      localStorage.setItem('expenses',JSON.stringify(this.expen_list));
    }else{
      var count:any = 1;
      this.addUniquerExpenseID(count);
      var dummArr = [] = [this.addExpenseForm.value.addExpens];
      localStorage.setItem('expenses',JSON.stringify(dummArr));
    }
    this.bsModalRef.hide();
  }

}
