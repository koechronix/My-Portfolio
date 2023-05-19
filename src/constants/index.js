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
    learnbuild,
    technobrain,
    isandata
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
      title: 'Frontend Developer',
      icon: frontend,
    },
    {
      title: 'Backend Developer',
      icon: backend,
    },
  ];
  
  const technologies = [
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
      date: 'May 2023 - Present',
    },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'ticket',
      description: 'A comic characters list app that displays Marvel characters.',
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
      image: komikult,
      repo: 'https://github.com/koechronix/coderbyte-project',
      demo: 'https://coderbyte-ticket-app.vercel.app/',
    },
    // {
    //   id: 'project-2',
    //   name: 'Leaderboard',
    //   description:
    //     'A leaderboard list app that displays scores submitted by different players.',
    //   tags: [
    //     {
    //       name: 'react',
    //       color: 'blue-text-gradient',
    //     },
    //     {
    //       name: 'restapi',
    //       color: 'green-text-gradient',
    //     },
    //     {
    //       name: 'scss',
    //       color: 'pink-text-gradient',
    //     },
    //   ],
    //   image: leaderboard,
    //   repo: 'https://github.com/shaqdeff/Leaderboard',
    //   demo: 'https://shaqdeff.github.io/Leaderboard/',
    // },
    
  ];
  
  export { services, technologies, experiences, projects };
  