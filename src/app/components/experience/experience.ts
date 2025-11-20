import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  achievements: string[];
  image: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected currentSlide = signal(0);
  protected touchStartX = 0;
  protected touchEndX = 0;

  experiences: ExperienceItem[] = [
    {
      company: 'Flyadeal',
      position: 'Senior Software Engineer',
      location: 'Jeddah, KSA',
      period: '2024 – PRESENT',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      achievements: [
        'Solely architected and deployed Flyadeal\'s integration with Saudia\'s <strong>ALFURSAN loyalty program</strong>, automating <strong>accrual</strong>, <strong>redemption</strong>, and <strong>retro-claim</strong> processes. Leveraged <strong>AWS serverless stack</strong> (Lambda, ECR, API Gateway, SNS, SQS, DynamoDB, CloudFormation), driving <strong>4M+ miles redeemed</strong> in first 3 months and boosting customer engagement.',
        'Architected an <strong>AWS serverless solution</strong> to automate <strong>no-show refund distribution</strong> for Ercap passengers with intelligent <strong>trip-level validation</strong>. Implemented <strong>booking segmentation logic</strong> to handle partial journey no-shows and multi-passenger bookings, enabling granular refund processing per passenger per trip segment.',
        'Built a high-performance, <strong>event-driven microservices distributor</strong> for the OMS, centralizing five critical data streams—<strong>Flight Planning</strong>, <strong>Aircraft Fuel</strong>, <strong>Catering</strong>, <strong>Crew & Pilot roster</strong>/notifications, and <strong>Data Archiving</strong>. Leveraged <strong>AWS serverless stack</strong> enabling real-time data flow and reducing compliance issues and penalty charges from GACA and SITA.',
        'Architected <strong>distributed event-driven serverless services</strong> using the <strong>AWS stack</strong> to process Flyadeal\'s <strong>flight insurance refunds</strong> according to policy criteria. Enabled <strong>automated claim validation</strong>, approval routing, and refund distribution.',
        'Collaborated with cross-functional teams to define project requirements and align technical solutions with commercial objectives, while <strong>resolving complex issues</strong>, <strong>improving system performance</strong>, and contributing to strategic technology evaluations supporting long-term business planning.'
      ]
    },
    {
      company: 'Flyadeal',
      position: 'Software Engineer',
      location: 'Jeddah, KSA',
      period: '2023 - 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      achievements: [
        'Led end-to-end integration with Riyadh Airport using <strong>AWS Serverless</strong>, resulting in a <strong>70% improvement in gate accuracy</strong> for real-time flight operations.',
        'Engineered a <strong>high-availability serverless API</strong> for <strong>Hajj/Umrah operations</strong>, handling massive seasonal demand for <strong>real-time passenger verification</strong> and significantly enhancing operational flow.',
        'Developed a <strong>full-stack (Django/Angular)</strong> Aircraft Certificate Management system, centralizing documentation and improving <strong>data retrieval time by 90%</strong> for pilots and dispatchers.',
        'Designed and deployed a <strong>customer interaction archiving solution</strong> (Sprout Social integration), enhancing <strong>data governance</strong> and accessibility for strategic business decisions.',
        'Decoupled and rearchitected the <strong>NPS Monolith (MVC)</strong> into modern standalone applications, reducing <strong>time-to-insight by 40%</strong> and enabling faster service quality improvements.',
        'Engineered a <strong>Django-based scheduled data pipeline</strong> that collects <strong>pilot journey metrics</strong> from APIs and delivers them to <strong>S3-powered analytics dashboards</strong>.',
        'Standardized development workflow by implementing <strong>GitLab</strong> as the core platform for version control and automated <strong>CI/CD</strong>, resulting in a <strong>50% enhancement in deployment speed</strong> and team collaboration.'
      ]
      
    },
    {
      company: 'Puritec',
      position: 'Software Engineer',
      location: 'Jeddah, KSA',
      period: '2022 – 2022',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      achievements: [
        'Led the <strong>backend engineering team for Munjiz (munjiz.sa)</strong>, delivering scalable and reliable services for the job matching and recruitment platform. Architected and built robust <strong>Django/PostgreSQL backend services</strong> within a Dockerized environment and implemented reporting tools that enabled data-driven decision-making. This engineering work directly supported the platform\'s largest initiative, the <strong>"Formula One" event in Jeddah</strong>, recruiting <strong>+300 organizers</strong>, reinforcing Munjiz\'s operational impact and market reputation.'
      ]
    },
    {
      company: 'Flyadeal',
      position: 'Software Developer',
      location: 'Jeddah, KSA',
      period: '2020 – 2021',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      achievements: [
        'Developed a <strong>MVC application</strong> allowing Ground Operations to autonomously manage Navitaire account changes, reducing procedures by <strong>80%</strong> and improving team autonomy.',
        'Implemented <strong>Robotic Process Automation (RPA)</strong> using Microsoft Power Automate for bank data extraction, reducing manual effort by <strong>80%</strong> and improving data accuracy.',
        'Engineered and integrated a <strong>serverless solution with Zendesk</strong> to automate ticket management, significantly reducing average customer response time.',
        'Contributed to Flyadeal\'s refund and e-invoicing solutions, streamlining financial processes, and enhancing customer satisfaction.'
      ]
    }
  ];

  get totalSlides(): number {
    return this.experiences.length;
  }

  protected nextSlide(): void {
    if (this.currentSlide() < this.totalSlides - 1) {
      this.currentSlide.update(val => val + 1);
    } else {
      // Loop back to first slide
      this.currentSlide.set(0);
    }
  }

  protected prevSlide(): void {
    if (this.currentSlide() > 0) {
      this.currentSlide.update(val => val - 1);
    } else {
      // Loop to last slide
      this.currentSlide.set(this.totalSlides - 1);
    }
  }

  protected goToSlide(index: number): void {
    this.currentSlide.set(index);
  }

  protected getProgressSegments(): number[] {
    return Array.from({ length: this.totalSlides }, (_, i) => i);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }

  protected onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  protected onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }
}
