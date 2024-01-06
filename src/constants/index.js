import {
    frontend,
    backend,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    sql,
    rubyrails,
    sqlite,
    ticket,
    ticketmaster,
    youtubeclone,
    learnbuild,
    technobrain,
    isandata,
    elloe,
    devops,
    aws,
    docker,
    kubernetes
  } from '../assets';
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  const services = [
    {
      title: 'Devops Practices',
      icon: frontend,
    },
    {
      title: 'Backend Developer',
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: 'AWS',
      icon: aws,
    },
    {
      name: 'Kubernetes',
      icon: kubernetes,
    },
    {
      name: 'Docker',
      icon: docker,
    },
    {
      name: 'HTML 5',
      icon: html,
    },
    {
      name: 'CSS 3',
      icon: css,
    },
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Node JS',
      icon: nodejs,
    },
    {
      name: 'Rails',
      icon: rubyrails,
    },
    {
      name: 'sqlite',
      icon: sqlite,
    },
    {
      name: 'sql',
      icon: sql,
    },
    {
      name: 'git',
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: 'Web Developer',
      company_name: 'Isan Data Systems',
      icon: isandata,
      iconBg: '#333333',
      date: 'Jan 2023 - Feb 2023',
    },
    {
      title: 'IT Executive',
      company_name: 'TechoBrain',
      icon: technobrain,
      iconBg: '#333333',
      date: 'Feb 2023 - April 2023',
    },
    {
      title: 'Cloud & DevOps',
      company_name: 'Learn & Build',
      icon: learnbuild,
      iconBg: '#333333',
      date: 'May 2023 - July 2023',
    },
    {
      title: 'DevOps Engineer',
      company_name: 'Elloe AI',
      icon: elloe,
      iconBg: '#333333',
      date: 'Aug 2023 - Present',
    },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'Git and jenkins ',
      description: 'DevOps project.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: devops,
      // repo: 'https://github.com/koechronix/coderbyte-project',
      demo: 'https://docs.google.com/presentation/d/1Jjzgkvk76zoXKomGx51EkNWiVDTjCRIz/edit?usp=sharing&ouid=116087740156427724000&rtpof=true&sd=true',
    },
    {
      id: 'project-1',
      name: 'ticket',
      description: 'The Ticket Purchase App is a web application developed using the Vue.js framework with Vite and TypeScript. It allows users to browse and select the quantity they want to purchase tickets for various upcoming shows.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: ticket,
      repo: 'https://github.com/koechronix/coderbyte-project',
      demo: 'https://coderbyte-ticket-app.vercel.app/',
    },
    {
      id: 'project-2',
      name: 'Ticket Master',
      description:
        'The Ticket Purchase App is a web application developed using the React.js framework with Vite. It allows users to browse and select the quantity they want to purchase tickets for various upcoming shows.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'scss',
          color: 'pink-text-gradient',
        },
      ],
      image: ticketmaster,
      repo: 'https://github.com/koechronix/coderbyte-front',
      demo: 'https://coderbyte-project.vercel.app/',
    },
    {
      id: 'project-3',
      name: 'YouTube Clone',
      description:
        'This is a clone like youtube.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'scss',
          color: 'pink-text-gradient',
        },
      ],
      image: youtubeclone,
      repo: 'https://github.com/koechronix/YouTube-Clone',
      demo: 'https://aquamarine-centaur-f0be1a.netlify.app/',
    },
    
  ];
  
  export { services, technologies, experiences, projects };
  