import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PeopleService } from '../../services/people.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-edit',
  templateUrl: './edit.html',
  styleUrls: ['./edit.css'],
  imports: [CommonModule, FormsModule]
})
export class EditComponent {
  // Object to hold the person being edited
  person: any = {};
  id: number = 0;

  // Inject services for route info, navigation, and data fetching/updating
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {}

  // On init, get person ID from URL and fetch their data
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.peopleService.getPeople().subscribe(data => {
      this.person = data.find(p => p.id === this.id);
    });
  }

  // Call API to update person, then navigate back to list
  updatePerson(): void {
    this.peopleService.updatePerson(this.id, this.person).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
