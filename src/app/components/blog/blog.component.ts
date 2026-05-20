import { Component } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  template: `
    <section id="blog" class="blog">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Latest Articles</h2>
          <p class="section-subtitle">Thoughts, tutorials, and insights on web development</p>
        </div>

        <div class="blog-grid">
          @for (post of posts; track post.id) {
            <article class="blog-card">
              <div class="card-image">
                <img [src]="post.image" [alt]="post.title" loading="lazy">
                <span class="card-category">{{ post.category }}</span>
              </div>
              <div class="card-body">
                <div class="card-meta">
                  <span class="meta-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {{ post.date }}
                  </span>
                  <span class="meta-read">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {{ post.readTime }}
                  </span>
                </div>
                <h3 class="card-title">{{ post.title }}</h3>
                <p class="card-excerpt">{{ post.excerpt }}</p>
                <div class="card-tags">
                  @for (tag of post.tags; track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
                <a href="#" class="card-link">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </article>
          }
        </div>

        <div class="blog-cta">
          <a href="#" class="btn btn-outline">
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable Angular Apps with Signal Architecture',
      excerpt: 'Discover how Angular Signals simplify state management and boost performance in modern web applications.',
      date: 'Apr 15, 2026',
      readTime: '8 min read',
      category: 'Angular',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      tags: ['Angular', 'Signals', 'Performance']
    },
    {
      id: 2,
      title: 'The Complete Guide to RxJS Operators in 2026',
      excerpt: 'Master the most useful RxJS operators with real-world examples and best practices for reactive programming.',
      date: 'Mar 28, 2026',
      readTime: '12 min read',
      category: 'RxJS',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      tags: ['RxJS', 'TypeScript', 'Reactive']
    },
    {
      id: 3,
      title: 'Modern CSS Techniques Every Developer Should Know',
      excerpt: 'From container queries to cascade layers — explore the CSS features reshaping modern web design.',
      date: 'Mar 10, 2026',
      readTime: '6 min read',
      category: 'CSS',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop',
      tags: ['CSS', 'Design', 'Frontend']
    },
    {
      id: 4,
      title: 'How I Built a Real-Time Dashboard with Angular & WebSockets',
      excerpt: 'A step-by-step walkthrough of building a live data dashboard using Angular and WebSocket connections.',
      date: 'Feb 22, 2026',
      readTime: '10 min read',
      category: 'Tutorial',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Angular', 'WebSocket', 'Tutorial']
    },
    {
      id: 5,
      title: 'Optimizing Angular Bundle Size for Production',
      excerpt: 'Practical strategies to reduce your Angular app bundle size and improve loading times dramatically.',
      date: 'Feb 05, 2026',
      readTime: '7 min read',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['Angular', 'Performance', 'Optimization']
    },
    {
      id: 6,
      title: 'Why TypeScript 5.8 Changes Everything for Developers',
      excerpt: 'Explore the groundbreaking features in TypeScript 5.8 and how they improve developer experience.',
      date: 'Jan 18, 2026',
      readTime: '9 min read',
      category: 'TypeScript',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
      tags: ['TypeScript', 'JavaScript', 'Tooling']
    }
  ];
}
