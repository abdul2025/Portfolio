import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name = 'ABDULWAHAB ALSHEHRI';
  title = 'Senior Software Engineer';
  phone = '+966568615094';
  location = 'Jeddah, Saudi Arabia';
  summary = 'Passionate and results-driven Engineer with +5 years of experience aligning technology with business strategy. Proven expertise in architecting scalable, high-performance backend systems and delivering innovative, cloud-driven solutions that accelerate product growth and operational excellence.';
  
  socialLinks = {
    github: 'https://github.com/abdul2025',
    linkedin: 'https://www.linkedin.com/in/abdulwahab-alshehri',
    email: 'mailto:abdul.2020alsh@gmail.com'
  };
}
