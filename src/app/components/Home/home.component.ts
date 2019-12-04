import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {fetchdata} from '../../fetchdata.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    // styleUrls: ['./app.component.css']
})
export class HomeComponent{
    public popoverTitle: string = 'Delete Confirmation';
    public popoverMessage: string = 'Are you sure you want to delete this?';
    public confirmClicked: boolean = false;
    public cancelClicked: boolean = false;
    public myInfo = [];
    public Totallength = "";
    constructor(private fetchinfodata:fetchdata, private router:Router,private deleteItem:fetchdata,private toastr:ToastrService){}
    ngOnInit(){
        this.GetAllData();
    }
    GetAllData(){
        this.fetchinfodata.getdata().subscribe((getdata)=>{
            this.myInfo = getdata['result'];
            this.Totallength = getdata['result'].length;
            // console.log(getdata['result']);
        });
    }
    //Edit
    EditData = (id) =>{
        this.router.navigate(['add-info', id]);
    }
    DeleteData = (id) =>{
        this.deleteItem.DeleteItem(id).subscribe(data=>{
            if(data['status'] == true){
            this.toastr.success(data['msg']);
                console.log(data);
                this.GetAllData();
            }
        })
    }
}