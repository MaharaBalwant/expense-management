import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'setting-component',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  
  total_budget:any;
  categorie_name:string = "";
  categories_list:any = [];
  categories:any;
  constructor() { }

  ngOnInit() {
    this.total_budget = localStorage.getItem('total_budget');
    this.getCategoriesListLocally();
  }

  /**
   * Function to update total budget value
   */
  updatetotalbudget(){
    localStorage.setItem('total_budget', this.total_budget);
  }

  /**
   * Function to update/add value/Obj in local storage
   */
  updatecategName(){

    this.categories_list = JSON.parse(localStorage.getItem('categories_list'));
    var count = (this.categories_list != null) ? this.categories_list.length : 0;

    var catagoryObj = {
      c_id: count+1,
      value: this.categorie_name,
      deleted: false
    };

    if(count>0){
      this.categories_list.push(catagoryObj);
    }else{
      this.categories_list = [catagoryObj];
    }
    
    localStorage.setItem('categories_list', JSON.stringify(this.categories_list));
    this.getCategoriesListLocally();
  }

  /**
   * Function filtering to get undeleted records 
   */
  getCatagoriesFromLocalhost(){
    this.categories_list = localStorage.getItem('categories_list');
    this.categories = JSON.parse(this.categories_list);
    var dumArr:any = [];
    if(this.categories){
      this.categories.forEach(element => {
        if(element.deleted == false){
          dumArr.push(element);
        }
      });
    }
    return dumArr;
  }

  /**
   * Function to get all undeleted records
   */
  getCategoriesListLocally(){
    this.categories = this.getCatagoriesFromLocalhost();
  }

  /**
   * Function to delete record from local storage to set delete flag false
   * @param cID 
   */
  deleteCatLocal(cID){
    var dumArr:any = [];
    this.categories = JSON.parse(this.categories_list);
    this.categories.forEach(element => {
      if(element.c_id == cID){
        element.deleted = true;
      }
      dumArr.push(element);
    });
    localStorage.setItem('categories_list', JSON.stringify(dumArr));
    this.getCategoriesListLocally();
  }

}
