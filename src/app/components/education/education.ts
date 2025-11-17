import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education = [
    {
      institution: 'Centennial College',
      degree: 'BSc IT',
      location: 'Toronto, Canada',
      graduation: 'Apr 2020',
      gpa: '3.21/4.5'
    },
    {
      institution: 'College of Technology',
      degree: 'Associate Degree in Networking',
      location: 'Taif, Saudi Arabia',
      graduation: 'Sep 2012',
      gpa: '4.46/5.5'
    }
  ];

  freelanceProjects = [
    {
      client: 'Hayak',
      role: 'Software Engineer (Backend)',
      website: 'hayakevents.com',
      year: '2022',
      type: 'Remote'
    },
    {
      client: 'Backyard',
      role: 'Software Engineer (Backend)',
      project: 'Cultural Skills Competition',
      year: '2022',
      type: 'Remote'
    },
    {
      client: 'Backyard',
      role: 'Software Engineer (Backend)',
      project: 'MOC Learning Platform',
      website: 'engage.moc.gov.sa/cst',
      year: '2023',
      type: 'Remote'
    }
  ];
}
