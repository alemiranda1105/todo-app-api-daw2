import { Component, OnInit } from '@angular/core';
import { UserTask } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  taskList?: UserTask[]
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getUserTasks()
    .subscribe(tasks => this.taskList = tasks);
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id)
    .subscribe(res => {
      if(res) {
        this.getTasks();
      }
    });
  }

}
