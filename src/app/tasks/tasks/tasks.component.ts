import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserTask } from '../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() task: undefined | UserTask;
  @Output() deleteTaskEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(id: string) {
    this.deleteTaskEvent.emit(id);
  }

}
