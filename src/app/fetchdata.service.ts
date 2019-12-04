import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable()
export class fetchdata{
    constructor(private http:HttpClient){}
    getdata(){
        return this.http.get('http://capthrone.in/client/bankwizz/react_app/get_my_info.php');
    }
    getdatabyID(id){
        var paramater = {id:id}
        var httpOptions = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return this.http.post('http://capthrone.in/client/bankwizz/react_app/get_my_info_by_id.php',paramater,{headers:httpOptions});
    }
    
    // const httpOptions = {
    //     headers: new HttpHeaders({)
    // };
    insertdata(addinfo):Observable<any>{
        var httpOptions = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return this.http.post('http://capthrone.in/client/bankwizz/react_app/add_info.php',addinfo,{headers:httpOptions});
    }
    editdata(editinfo):Observable<any>{
        var httpOptions = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return this.http.post('http://capthrone.in/client/bankwizz/react_app/add_info.php',editinfo,{headers:httpOptions});
    }
    DeleteItem(id):Observable<any>{
        var parameter = {id:id}
        var httpOptions = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return this.http.post('http://capthrone.in/client/bankwizz/react_app/delete_my_info.php',parameter,{headers:httpOptions});
    }
}
