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
      image: 'https://bizmag.co.za/wp-content/uploads/2019/07/Selling-online_Your-Business-Magazine.jpg',
      techStack: ['React', 'JavaScript', 'CSS', 'Spring Boot'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://e-commerce-platform-19iy4vu42-seytzys-projects.vercel.app/',
    },
    {
      id: 2,
      title: 'Crud System',
      description:
        'A comprehensive CRUD application with Create, Read, Update, Delete operations and data management.',
      image: 'https://repository-images.githubusercontent.com/482719022/26e231dd-2855-40cd-8940-a7cf8041c772',
      techStack: ['Angular', 'Node.js', 'MongoDB', 'TypeScript'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://school-manangement-crud-5gac6f00z-seytzys-projects.vercel.app',
    },
    
    {
      id: 3,
      title: 'My Portfolio V1',
      description: 'My first portfolio website showcasing projects and skills.',
      image: 'https://media.licdn.com/dms/image/v2/C4D12AQENw9GUPGXhxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1563704499299?e=2147483647&v=beta&t=3J-GoauNYX82R23Y37PCAncHfxw3E_I4ukHmyIhMXvI',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://portfolio-v1-fetzs97xg-seytzys-projects.vercel.app',
    },

    {
      id: 4,
      title: 'ABA Mobile App UI/UX',
      description: 'Designed a mobile app UI/UX for ABA Bank, focusing on user-friendly interfaces and seamless banking experience.',
      image: 'https://www.payway.com.kh/image/aba-hq.webp',
      techStack: ['Figma', 'Prototyping', 'User Research', 'Design System'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://www.figma.com/proto/jwToLuXKx6LrPpkP6BbiXX/Final-ABA-Project?node-id=0-1&t=d6ngL1j1BopdqOly-1',
    },
    {
      id: 5,
      title: 'Zando Mobile App UI/UX',
      description:
        'Designed a mobile app UI/UX for Zando, an e-commerce platform, focusing on intuitive navigation and engaging user experience.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsbFsE-WEiPph6N2ktdxS55D2VyQpQszn5g&s',
      techStack: ['Figma', 'User Flows', 'Wireframing', 'Visual Design'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://www.figma.com/proto/cpGbCF408gXxQbF0wMUoed/Final_UX-UI?node-id=3343-24&t=jONEaff5W5ku6LxF-1',
    },
    {
      id: 6,
      title: 'Product Crud System',
      description: 'A comprehensive CRUD application for managing product information.',
      image: 'https://laraveldaily.com/uploads/2023/08/filament3-course-table-columns.png',
      techStack: ['Angular', 'TypeScript', 'CSS', 'MongoDB'],
      githubLink: 'https://github.com/SeyTzy',
      demoLink: 'https://sw-24-product-crud-dp7sn1vz2-seytzys-projects.vercel.app',
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
