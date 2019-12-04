import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {fetchdata} from '../../fetchdata.service'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router, } from '@angular/router';
@Component({
    selector: 'addinfo-root',
    templateUrl: './addinfo.component.html',
    // styleUrls: ['./app.component.css']
})
export class AddInfoComponent{
    public myInfo = [];
    public EditId:number;
    public fname = "";
    public email_id = "";
    public DOB = "";
    public city = "";
    constructor (
      private fetcinfodatahdata:fetchdata,
      private postdata:fetchdata,
      private postEditdata:fetchdata,
      private getdataId:fetchdata,
      private toastr:ToastrService,
      private route:ActivatedRoute,
      private router:Router
    ){}
    addinfo = new FormGroup({
        id:new FormControl(''),
        fname: new FormControl(''),
        email_id: new FormControl(''),
        DOB: new FormControl(''),
        city: new FormControl(''),
    });
    ngOnInit(){
      this.route.paramMap.subscribe(params=>{
        this.EditId = +params.get('id');
       
        if(this.EditId){
          window.localStorage.removeItem("editID");
          window.localStorage.setItem('editID',JSON.stringify(this.EditId));
          // console.log(window.localStorage.getItem('editID'))
          this.getdataId.getdatabyID(this.EditId).subscribe((data)=>{
            // console.log(data['result']['name']);
            this.EditId = this.EditId;
            this.fname = data['result']['name'];
            this.email_id = data['result']['email'];
            this.DOB = data['result']['dob'];
            this.city = data['result']['city'];
          })
        }
      });
    }
    // addinfo: FormGroup;
    FormSubmit = () =>{
      if(this.addinfo.value.fname == ""){
        alert("Enter name first");
      }else{
        this.postdata.insertdata(this.addinfo.value).subscribe((data)=>{
          if(data['status'] == true){
            this.toastr.success(data['msg']);
            this.addinfo.reset();
          }
        })
      }
      
    }
    EditSubmit = () =>{
      // var formData: any = new FormData();
      // formData.append('key1', 'value1');
      // var Formdata = new FormData();
      // var EditVal = this.addinfo.value;
      // Formdata.append("id",window.localStorage.getItem('editID'));
      // if(this.addinfo.value)
      this.postEditdata.editdata(this.addinfo.value).subscribe((data)=>{
        if(data['status'] == true){
          this.toastr.success(data['msg']);
          console.log(data);
        }
      })
    }
}