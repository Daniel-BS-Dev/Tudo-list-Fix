import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, take, BehaviorSubject } from 'rxjs';
import { MyTask, MyTasks } from './models/task';
import { environment } from './../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private readonly baseUrl = environment.backendUrl;

  private _refresh$ = new BehaviorSubject<boolean>(true);

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  get refresh$() {
    return this._refresh$;
  }

  findAll(): Observable<MyTasks> {
    return this.http.get<MyTasks>(this.baseUrl).pipe(
      map((actions) => actions.sort((x, y) => this.orderById(x, y))),
      take(1)
    );
  }

  readById(id: string): Observable<MyTask> {
    return this.http.get<MyTask>(`${this.baseUrl}/${id}`).pipe(take(1));
  }

  newTask(newTask: MyTask): Observable<MyTask> {
    return this.http.post<MyTask>(this.baseUrl, newTask).pipe(take(1));
  }

  updateTask(task: MyTask): Observable<MyTask> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<MyTask>(url, task).pipe(take(1));
  }

  delete(id: number): Observable<MyTask> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<MyTask>(url).pipe(take(1));
  }

  onIsMark(task: MyTask) {
    task.isMark = !task.isMark;
    this.updateTask(task)
      .pipe(take(1))
      .subscribe(() => {
        task.isMark == false
          ? this.showMessage('TAREFA DESMARCADA')
          : this.showMessage('TAREFA MARCADA');
      });
  }

  private orderById(x: MyTask, y: MyTask) {
    if (x.id! < y.id!) return 1;
    if (x.id! > y.id!) return -1;
    return 0;
  }
}
