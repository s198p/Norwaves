import { Component } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent {
  industryHighlights = [
    {
      eyebrow: 'Public Safety',
      title: 'Mission-critical communications when every second counts.',
      description:
        'Norwaves delivers secure and resilient Private 5G networks with mission-critical applications that keep first responders connected in demanding conditions, including natural disasters such as earthquakes, floods, or wildfires.',
      outcomes: ['Live field video', 'Real-time location tracking', 'Instant data sharing']
    },
    {
      eyebrow: 'Healthcare',
      title: 'Fast, secure, always-available networks for clinical operations.',
      description:
        'Low-latency Private 5G supports VR and AR applications for surgeries, training, and diagnostics while securely connecting medical devices, imaging systems, remote consultations, patient monitoring, and cloud access to critical data.',
      outcomes: ['Clinical mobility', 'Connected devices', 'Secure cloud access']
    },
    {
      eyebrow: 'Manufacturing',
      title: 'High-performance wireless for robotics, automation, and safety.',
      description:
        'Norwaves connects robots, AGVs, sensors, cameras, and control systems over Private 5G to enable predictive maintenance, automated quality checks, adaptive workflows, and real-time safety monitoring.',
      outcomes: ['Predictive maintenance', 'Adaptive workflows', 'Higher throughput']
    },
    {
      eyebrow: 'Aquaculture',
      title: 'Connected farming for real-time insight and sustainability.',
      description:
        'We link on-site sensors, underwater cameras, and feeding systems into one connected platform while cloud AI helps monitor water quality, stock health, and feeding patterns across inland and offshore operations.',
      outcomes: ['Water-quality insight', 'Stock health monitoring', 'Waste reduction']
    },
    {
      eyebrow: 'Media',
      title: 'Reliable broadcast connectivity for live, immersive production.',
      description:
        'Private 5G delivers high-bandwidth, low-latency coverage for stadiums and event venues, connecting cameras, enabling AR and VR fan experiences, supporting point-of-sale systems, and powering safety surveillance and drone workflows.',
      outcomes: ['Remote production', 'Immersive experiences', 'Faster editorial turnaround']
    }
  ];

  workingProcess = [
    { step: '01', title: 'Project Planning' },
    { step: '02', title: 'Directives & Guidance' },
    { step: '03', title: 'Protecting Infrastructure' },
    { step: '04', title: 'Securing Networks' }
  ];

  integrationCapabilities = [
    'Custom Network Design',
    'Interoperability & Compatibility Testing',
    'Efficient Deployment & Commissioning',
    'Performance Optimization'
  ];

  consultancyPoints = [
    'Customized Workshops & Training',
    'Strategic 5G Guidance',
    'Ecosystem Insights & Cost Optimization',
    'In-Depth Technology Evaluations',
    'Advisory on Deployment Models & Growth'
  ];
}
