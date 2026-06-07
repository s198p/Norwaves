import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewInit {

  clientsServed = 0;
  globalPresence = 0;
  projectsDelivered = 0;
  yearsOfExperience = 0;

  ngOnInit(): void {
    this.animateCounter('clientsServed', 50, 1400);
    this.animateCounter('globalPresence', 5, 1200);
    this.animateCounter('projectsDelivered', 72, 1600);
    this.animateCounter('yearsOfExperience', 3, 1000);
  }

  ngAfterViewInit(): void {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    reveals.forEach(item => observer.observe(item));
  }

  private animateCounter(
    key:
      | 'clientsServed'
      | 'globalPresence'
      | 'projectsDelivered'
      | 'yearsOfExperience',
    target: number,
    duration: number
  ): void {

    const steps = 40;
    const increment = target / steps;
    const interval = Math.max(
      20,
      Math.floor(duration / steps)
    );

    let current = 0;

    const timer = setInterval(() => {

      current += increment;

      if (current >= target) {
        this[key] = target;
        clearInterval(timer);
        return;
      }

      this[key] = Math.floor(current);

    }, interval);
  }
}