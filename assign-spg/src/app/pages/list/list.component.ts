import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from '../../services/people.service';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit, OnDestroy {
  people: any[] = [];
  private routerSubscription!: Subscription;

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.loadPeople();

    // Reload people list on navigation to this component
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if current URL is /list
        if (event.urlAfterRedirects === '/list') {
          this.loadPeople();
        }
      }
    });
  }

  loadPeople(): void {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
