import { Injectable, signal } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  readonly name = signal('Seyhat Developer');
  readonly title = signal('Angular Web Developer');
  readonly tagline = signal(
    'Building modern, scalable web applications with cutting-edge technologies',
  );
  readonly email = signal('thoeurnseyhat@gmail.com');
  readonly github = signal('https://github.com');
  readonly linkedin = signal('https://linkedin.com');
  readonly telegram = signal('https://t.me');

  readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce solution with cart, checkout, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      techStack: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://school-manangement-crud-5gac6f00z-seytzys-projects.vercel.app',
    },
    {
      id: 2,
      title: 'Crud System',
      description:
        'A comprehensive CRUD application with Create, Read, Update, Delete operations and data management.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      techStack: ['Angular', 'Node.js', 'MongoDB', 'TypeScript'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://school-manangement-crud-5gac6f00z-seytzys-projects.vercel.app',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task manager with Kanban boards, assignments, and due dates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      techStack: ['Angular', 'React', 'Express', 'PostgreSQL'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://task-management-app-demo.vercel.app',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts, maps, and severe weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
      techStack: ['Angular', 'OpenWeather API', 'Chart.js'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://weather-dashboard-demo.vercel.app',
    },
    {
      id: 5,
      title: 'Portfolio v1',
      description: 'My first portfolio website showcasing projects and skills.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://portfolio-v1-demo.vercel.app',
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'Content management system for bloggers with Markdown support and SEO tools.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
      techStack: ['Angular', 'WordPress REST API', 'Firebase'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://blog-cms-demo.vercel.app',
    },
  ]);

  readonly skills = signal<Skill[]>([
    { name: 'Angular', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3/Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'React', level: 75, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 70, category: 'backend' },
    { name: 'C#', level: 65, category: 'backend' },
    { name: 'PHP', level: 60, category: 'backend' },
    { name: 'Python', level: 60, category: 'backend' },
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'VS Code', level: 70, category: 'tools' },
    { name: 'Antigravity', level: 75, category: 'tools' },
    { name: 'WS', level: 60, category: 'tools' },
  ]);

  readonly experiences = signal<Experience[]>([
    {
      id: 1,
      title: 'Senior Angular Developer',
      company: 'SETEC Institute',
      period: '2024 - Present',
      description: 'Leading frontend development, mentoring team, implementing scalable solutions.',
      type: 'work',
    },
    {
      id: 2,
      title: 'Angular Developer',
      company: 'StartupXYZ',
      period: '2025 - 2026',
      description:
        'Built customer-facing apps, improved performance, collaborated with design team.',
      type: 'work',
    },
    {
      id: 3,
      title: 'Frontend Intern',
      company: 'WebAgency',
      period: '2025 - 2026',
      description: 'Developed responsive websites, learned Angular best practices.',
      type: 'work',
    },
    {
      id: 4,
      title: 'Managament Information Systems',
      company: 'SETEC Institute',
      period: '2024 - Present',
      description: 'Graduated with honors, focused on web technologies and software engineering.',
      type: 'education',
    },
  ]);
}
