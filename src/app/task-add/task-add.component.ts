import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskRegistrationService } from '../task-registration.service';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  taskobj: Task=new Task("","",new Date(),"");
  taskmsg:any;
  alltasks:any;
  enableEdit = false;
  enableEditIndex = null;

  sortedcolumn:string="taskEndDate";

  constructor(private service:TaskRegistrationService) { }

  ngOnInit(): void {
    let resp=this.service.getAllTasks();
    resp.subscribe((data)=>this.alltasks=data);
  }

  enableEditMethod(e:any, i:any) {
    this.enableEdit = true;
    this.enableEditIndex = i;
  }

  public addTask() {
    let resp=this.service.doAddTask(this.taskobj);
    resp.subscribe((data)=>this.taskmsg=data);
    
    window.location.reload();
  }

  public deleteTask(id:number){
    let resp=this.service.deleteTask(id);
    resp.subscribe((data)=>this.alltasks=data);
  }

  public updateTask(id:number, task:Task){
    let resp=this.service.updateTask(id, task);
    resp.subscribe((data)=>this.alltasks=data);
  }
  
}
