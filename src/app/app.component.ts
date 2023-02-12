import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/modals/Task';
import { TaskServiceService } from './task-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toto_app';
  taskCheckBox = false;
  hideCompleted = false;
  showHideToggle:string = 'Hide complete';
  hiddenTask:number = 0;
  todoList:Task[]=[];


constructor(private taskService:TaskServiceService){
   taskService.getAllTodos().subscribe(
    (data)=>{
      console.log(data);
      this.todoList = data.todos;
    }
   );
}

  onTaskCheckBoxClicked(taskId:number){

    const todo:Task = this.todoList.find(todo=>todo.id==taskId) as Task
    //console.log(todo);
    
    todo.completed = !todo.completed;
    console.log("task checkbox clicked",taskId);
    console.log("this.hide",this.hideCompleted);
    console.log("this.show",this.showHideToggle);
    console.log("this.hiddenTask",this.hiddenTask);
    
  }
  onHideClick(){
    //this.onTaskCheckBoxClicked(0);
    this.hiddenTask = 0;
    for(let task of this.todoList){
      if(task.completed)this.hiddenTask+=1;
    }
    this.hideCompleted = !this.hideCompleted;
    this.showHideToggle = this.hideCompleted?'Show completed':'Hide complete';
    
  }
  displayAddTaskForm(){
    console.log("Display Add Task Model");
  }


}
