import { Component, signal, OnInit, OnDestroy } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  template: `
    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What People Say</h2>
          <p class="section-subtitle">Kind words from amazing people I've worked with</p>
        </div>

        <div class="carousel-wrapper">
          <div class="carousel-track" [style.transform]="'translateX(-' + currentIndex() * 100 + '%)'">
            @for (item of testimonials; track item.id) {
              <div class="testimonial-card">
                <div class="card-bg"></div>
                <div class="card-content">
                  <div class="quote-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <p class="testimonial-text">{{ item.content }}</p>
                  <div class="rating">
                    @for (star of [1,2,3,4,5]; track star) {
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" [attr.fill]="star <= item.rating ? '#F59E0B' : 'none'" [attr.stroke]="star <= item.rating ? '#F59E0B' : '#CBD5E1'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    }
                  </div>
                  <div class="author">
                    <div class="author-avatar">
                      <img [src]="item.avatar" [alt]="item.name">
                    </div>
                    <div class="author-info">
                      <h4>{{ item.name }}</h4>
                      <span>{{ item.role }}, {{ item.company }}</span>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>

          <button class="carousel-btn prev" (click)="prev()" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button class="carousel-btn next" (click)="next()" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div class="dots">
          @for (item of testimonials; track item.id; let i = $index) {
            <button
              class="dot"
              [class.active]="i === currentIndex()"
              (click)="goTo(i)"
              [attr.aria-label]="'Go to testimonial ' + (i + 1)"
            ></button>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Vorng Sovanareach',
      role: 'CEO',
      company: 'TechFlow',
      avatar: 'https://i.pravatar.cc/80?img=1',
      content: 'Seyhat delivered an exceptional e-commerce platform that exceeded our expectations. His Angular expertise and attention to detail made the entire process seamless. The performance improvements alone increased our conversion rate by 35%.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mean Chandara',
      role: 'CTO',
      company: 'DataVista',
      avatar: 'https://i.pravatar.cc/80?img=3',
      content: 'Working with Seyhat was a game-changer for our team. He not only built a robust dashboard but also mentored our junior developers. His deep understanding of RxJS and state management is truly impressive.',
      rating: 5
    },
    {
      id: 3,
      name: 'Somuon Sokphanna',
      role: 'Product Manager',
      company: 'StartupHub',
      avatar: 'https://i.pravatar.cc/80?img=5',
      content: 'Exceptional developer with a keen eye for UX. Seyhat transformed our outdated portal into a modern, responsive application. Our users love the new interface and we\'ve seen a 50% increase in engagement.',
      rating: 5
    },
    {
      id: 4,
      name: 'Ran Visa',
      role: 'Founder',
      company: 'CloudSync',
      avatar: 'https://i.pravatar.cc/80?img=8',
      content: 'Seyhat is the kind of developer every startup needs. He moves fast, writes clean code, and truly cares about the product. He helped us launch two major features ahead of schedule.',
      rating: 5
    }
  ];

  currentIndex = signal(0);
  private autoSlide: any;

  ngOnInit() {
    this.autoSlide = setInterval(() => this.next(), 5000);
  }

  ngOnDestroy() {
    if (this.autoSlide) clearInterval(this.autoSlide);
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.testimonials.length);
    this.resetAutoSlide();
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
    this.resetAutoSlide();
  }

  goTo(index: number) {
    this.currentIndex.set(index);
    this.resetAutoSlide();
  }

  private resetAutoSlide() {
    if (this.autoSlide) clearInterval(this.autoSlide);
    this.autoSlide = setInterval(() => this.next(), 5000);
  }
}
