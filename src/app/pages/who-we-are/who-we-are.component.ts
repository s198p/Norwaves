import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent {
  teamMembers = [
    {
      name: 'Aarav Sharma',
      designation: 'Founder & Chief Executive Officer',
      description: 'Drives Norwaves vision across Private 5G, enterprise innovation, and long-term strategic partnerships.',
      linkedin: 'https://www.linkedin.com/company/norwaves/',
      initials: 'AS'
    },
    {
      name: 'Ingrid Larsen',
      designation: 'Director of Connectivity Solutions',
      description: 'Leads secure, high-performance network architectures tailored for modern enterprise and industrial environments.',
      linkedin: 'https://www.linkedin.com/company/norwaves/',
      initials: 'IL'
    },
    {
      name: 'Rohan Mehta',
      designation: 'Head of Edge Cloud & AI Integration',
      description: 'Builds intelligent edge platforms that connect data, automation, and operations into one scalable ecosystem.',
      linkedin: 'https://www.linkedin.com/company/norwaves/',
      initials: 'RM'
    },
    {
      name: 'Sofia Nilsen',
      designation: 'Program Lead, Systems Integration',
      description: 'Coordinates turnkey delivery from design through deployment to ensure seamless execution across every project.',
      linkedin: 'https://www.linkedin.com/company/norwaves/',
      initials: 'SN'
    }
  ];
}
