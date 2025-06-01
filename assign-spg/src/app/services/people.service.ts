import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Local copy of people, initially empty
  private localPeople: any[] = [];

  constructor(private http: HttpClient) {}

  // Fetch people and cache locally
  getPeople(): Observable<any[]> {
    if (this.localPeople.length > 0) {
      // Return cached people as Observable
      return of(this.localPeople);
    } else {
      return new Observable(observer => {
        this.http.get<any[]>(this.apiUrl).subscribe(data => {
          this.localPeople = data;
          observer.next(this.localPeople);
          observer.complete();
        });
      });
    }
  }

  // Delete person locally and simulate API call
  deletePerson(id: number): Observable<any> {
    this.localPeople = this.localPeople.filter(p => p.id !== id);
    return of({}); // simulate API response
  }

  // Update person locally and simulate API call
  updatePerson(id: number, data: any): Observable<any> {
    const index = this.localPeople.findIndex(p => p.id === id);
    if (index !== -1) {
      this.localPeople[index] = data;
    }
    return of(data); // simulate API response
  }
}
