import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-delete',
  templateUrl: './delete.html',
  styleUrls: ['./delete.css'],
  imports: [CommonModule]
})
export class DeleteComponent {
  id: number = 0;

  // Inject route, router, and service for deletion
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {}

  // On init, get ID from route params and delete that person
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.peopleService.deletePerson(this.id).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
