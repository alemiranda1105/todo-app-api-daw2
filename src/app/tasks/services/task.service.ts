import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserTask } from '../interfaces/task.interface';
import { taskList } from '../mock/UserTasksMock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: UserTask[] = [];
  url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.tasks = taskList();
    this.url = environment.apiUrl
  }

  getUserTasks(): Observable<UserTask[]> {
    return this.http.get<UserTask[]>(this.url + 'tasks/');
  }

  getTaskById(id: string): Observable<UserTask> {
    return this.http.get<UserTask>(this.url + 'tasks/' + id);
  }

  createTask(task: UserTask): Observable<UserTask> {
    return this.http.post<UserTask>(this.url + 'tasks/', task);
  }

  updateTask(task: UserTask): Observable<UserTask> {
    return this.http.put<UserTask>(this.url + 'tasks/' + task.id, task);
  }

  deleteTask(id: string): Observable<string> {
    return this.http.delete<string>(this.url + 'tasks/' + id);
  }
}
