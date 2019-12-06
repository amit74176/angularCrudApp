import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {fetchdata} from '../../fetchdata.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    // styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    listdata:MatTableDataSource<any>
    displayedColumns: string[] = ['#','id','name','email','dob','city'];
    public popoverTitle: string = 'Delete Confirmation';
    public popoverMessage: string = 'Are you sure you want to delete this?';
    public confirmClicked: boolean = false;
    public cancelClicked: boolean = false;
    public myInfo = [];
    public searchKey:string;
    public Totallength = "";
    
    constructor(private fetchinfodata:fetchdata, private router:Router,private deleteItem:fetchdata,private toastr:ToastrService){}
    ngOnInit():void{
        this.GetAllData();
    }
    // ngAfterViewInit(): void {
    //     const table: any = $('table');
    //     this.dataTable = table.DataTable();
    // }
    
    GetAllData(){
        this.fetchinfodata.getdata().subscribe((getdata)=>{
            this.myInfo = getdata['result'];
            this.Totallength = getdata['result'].length;
            // console.log(this.myInfo);
            // let datata = [ { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' }];
            this.listdata = new MatTableDataSource(this.myInfo);
            this.listdata.paginator = this.paginator;
            this.listdata.sort = this.sort;
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
    applyfilter(){
        // console.log(this.listdata);
        this.listdata.filter = this.searchKey.trim().toLowerCase();
    }
}