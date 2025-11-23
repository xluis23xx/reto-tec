import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { RestUser } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment';
import { Plan, RestPlans } from '../interfaces/plans.interface';
import { UserForm } from '../interfaces/form-user.interface';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  queryCacheUser = new Map<string, RestUser>();
  queryCacheListPlans = new Map<string, Plan[]>();

  queryCacheFormData = new Map<string, UserForm>();
  queryCachePlanSelected = new Map<string, Plan>();

  userInformation(): Observable<RestUser> {
    return this.http.get<RestUser>(`${this.apiUrl}/user.json`)
      .pipe(
        tap(user => this.queryCacheUser.set('user', user)),
        catchError(error => {
          return throwError(
            () => new Error(`No se pudo obtener el usuario: ${error.message}`)
          );
        })
      );
  }

  listPlans(): Observable<Plan[]> {
    return this.http.get<RestPlans>(`${this.apiUrl}/plans.json`)
      .pipe(
        map(response => response.list),
        tap(plans => this.queryCacheListPlans.set('plans', plans)),
        catchError(error => {
          return throwError(
            () => new Error(`No se pudo obtener la lista de planes: ${error.message}`)
          );
        })
      );
  }
}
