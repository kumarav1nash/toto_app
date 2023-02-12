import { Injectable } from '@angular/core';
import { Task } from 'src/modals/Task';
import { AppHttpService } from './app-http.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private appHttpService:AppHttpService) { }



  getAllTodos():Observable<any>{
    let url = `https://dummyjson.com/todos`;
    return this.appHttpService.get(url).pipe(map((m: any) => m));
  }
}
