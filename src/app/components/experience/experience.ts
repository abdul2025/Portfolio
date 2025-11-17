import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    {
      company: 'Flyadeal',
      position: 'Senior Software Engineer',
      location: 'Jeddah, KSA',
      period: '2024 – PRESENT',
      achievements: [
        'Solely architected and deployed Flyadeal\'s integration with Saudia\'s ALFURSAN loyalty program, automating accrual, redemption, and retro-claim processes. Leveraged AWS serverless stack (Lambda, ECR, API Gateway, SNS, SQS, DynamoDB, CloudFormation), driving 4M+ miles redeemed in first 3 months and boosting customer engagement.',
        'Built a high-performance, event-driven microservices distributor for the OMS, centralizing five critical data streams—Flight Planning, Aircraft Fuel, Catering, Crew & Pilot roster/notifications, and Data Archiving. Leveraged AWS serverless stack enabled real-time data flow, and reduced compliance issues and penalty charges from GACA and SITA.',
        'Collaborated with cross-functional teams to define project requirements and align technical solutions with commercial objectives, while resolving complex issues, improving system performance, and contributing to strategic technology evaluations supporting long-term business planning.'
      ]
    },
    {
      company: 'Flyadeal',
      position: 'Software Engineer',
      location: 'Jeddah, KSA',
      period: '2023 - 2024',
      achievements: [
        'Led end-to-end integration with Riyadh Airport using AWS Serverless, resulting in a 70% improvement in gate accuracy for real-time flight operations.',
        'Engineered a high availability serverless API for Hajj/Umrah operations, handling massive seasonal demand for real-time passenger verification, significantly enhancing operational flow.',
        'Developed a full-stack (Django/Angular) Aircraft Certificate Management system, centralizing documentation and improving data retrieval time by 90% for pilots and dispatchers.',
        'Designed and deployed a customer interaction archiving solution (Sprout Social integration), enhancing data governance and accessibility for strategic business decisions.',
        'Decoupled and Rearchitected the NPS Monolith (MVC) into modern separate applications, reducing time-to-insight by 40% and enabling faster service quality improvements.',
        'Standardized development workflow by implementing GitLab as the core platform for version control and automated CI/CD, resulting in a 50% enhancement in deployment speed and team collaboration.'
      ]
    },
    {
      company: 'Puritec',
      position: 'Software Engineer',
      location: 'Jeddah, KSA',
      period: '2022 – 2022',
      achievements: [
        'Led the backend engineering team for Munjiz (munjiz.sa), delivering scalable and reliable services for the job matching and recruitment platform. Architected and built robust Django/PostgreSQL backend services within a Dockerized environment and implemented reporting tools that enabled data-driven decision-making. This engineering work directly supported the platform\'s largest initiative, the "formula One" event in Jeddah, recruiting +300 organizers, reinforcing Munjiz\'s operational impact and market reputation.'
      ]
    },
    {
      company: 'Flyadeal',
      position: 'Software Developer',
      location: 'Jeddah, KSA',
      period: '2020 – 2021',
      achievements: [
        'Developed a MVC application allowing Ground Operations to autonomously manage Navitaire account changes, reducing procedures by 80% and improving team autonomy.',
        'Implemented Robotic Process Automation (RPA) using Microsoft Power Automate for bank data extraction, reducing manual effort by 80% and improving data accuracy.',
        'Engineered and integrated a serverless solution with Zendesk to automate ticket management, significantly reducing average customer response time.',
        'Contributed to Flyadeal\'s refund and e-invoicing solutions, streamlining financial processes, and enhancing customer satisfaction.'
      ]
    }
  ];
}
