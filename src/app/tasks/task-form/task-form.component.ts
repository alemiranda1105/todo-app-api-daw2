import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserTask } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task?: UserTask;
  newTask: boolean = true;

  taskForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {
    this.taskForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      completed: new FormControl(false, [Validators.required]),
      date: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    if(this.router.url.includes('edit')) {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.taskService.getTaskById(id) )
      )
      .subscribe(task => {
        if(!task) {
          this.router.navigate(['/']);
        }
        this.task = task;
        this.newTask = false;
        this.taskForm.controls['name'].setValue(task.name);
        this.taskForm.controls['description'].setValue(task.description);
        this.taskForm.controls['date'].setValue(new Date(task.date).toISOString().slice(0, -1));
      });
    } else {
      this.newTask = true;
    }  
  }

  onSubmit(): void {
    this.task = {
      user_id: '1',
      ...this.task,
      ...this.taskForm.value
    };
    var invalid = [];
    const controls = this.taskForm.controls;
    for(const name in controls) {
      if(controls[name].invalid) {
        invalid.push(name);
      }
    }
    if(invalid.length === 0){
      if(!this.newTask) {
        this.taskService.updateTask(this.task!)
        .subscribe(res => {
          if(res) {
            this.router.navigate(['/']);
          }
        });
      } else {
        this.taskService.createTask(this.task!)
        .subscribe(res => {
          if(res.id) {
            this.router.navigate(['/edit', {id: res.id}])
          }
        })
      }
    }
  }

}
