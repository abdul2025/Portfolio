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
        'Solely architected and deployed <strong>Flyadeal\'s integration with Saudia\'s ALFURSAN loyalty program</strong>, automating accrual, redemption, and retro-claim processes. Leveraged AWS serverless stack (Lambda, ECR, API Gateway, SNS, SQS, DynamoDB, CloudFormation), driving <strong>4M+ miles redeemed</strong> in first 3 months and boosting customer engagement.',
        'Built a <strong>high-performance, event-driven microservices distributor</strong> for the OMS, centralizing five critical data streams—Flight Planning, Aircraft Fuel, Catering, Crew & Pilot roster/notifications, and Data Archiving. Leveraged AWS serverless stack enabled real-time data flow, and reduced compliance issues and penalty charges from GACA and SITA.',
        'Architected <strong>distributed event-driven serverless services</strong> using AWS stack to process Flyadeal flight insurance refunds according to policy criteria. Enabled automated claim validation, approval routing, and refund distribution.',
      ]
    },
    {
      company: 'Flyadeal',
      position: 'Software Engineer',
      location: 'Jeddah, KSA',
      period: '2023 - 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      achievements: [
        'Led end-to-end integration with <strong>Riyadh Airport using AWS Serverless</strong>, resulting in a <strong>70% improvement in gate accuracy</strong> for real-time flight operations.',
        'Engineered a <strong>Django-based scheduled data pipeline</strong> that collects pilot journey metrics from APIs and delivers to S3-powered analytics dashboards.',
        'Engineered a <strong>high availability serverless API for Hajj/Umrah operations</strong>, handling massive seasonal demand for real-time passenger verification, significantly enhancing operational flow.',
        'Developed a <strong>full-stack (Django/Angular) Aircraft Certificate Management system</strong>, centralizing documentation and improving data retrieval time by <strong>90%</strong> for pilots and dispatchers.',
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
