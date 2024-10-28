import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', progress: 80 },
    { name: 'CSS', progress: 70 },
    { name: 'JavaScript', progress: 60 },
    { name: 'Angular', progress: 75 },
    { name: 'Java', progress: 90 },
    { name: 'Nodejs', progress: 75 },
    { name: 'Java', progress: 80 },
    { name: 'Typescript', progress: 70 },
    { name: 'Android', progress: 95 },
    { name: 'JSF', progress: 90 },
    { name: 'JSP', progress: 80 },
    { name: 'EJB', progress: 70 },
  ];
}
