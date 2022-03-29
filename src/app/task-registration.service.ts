import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskRegistrationService {

  constructor(private http:HttpClient) { }

  public doAddTask(taskobj:any){
    return this.http.post("http://localhost:8080/api/v1/tasks/addtask",taskobj,{responseType:'text' as 'json'});
  }

  public getAllTasks(){
    return this.http.get("http://localhost:8080/api/v1/tasks/all");
  }
  
  public deleteTask(id:any){
    return this.http.delete("http://localhost:8080/api/v1/tasks/"+id);
  }

  public updateTask(id:any,taskobj:any){
    return this.http.put("http://localhost:8080/api/v1/tasks/"+id,taskobj,{responseType:'text' as 'json'});
  }

}
