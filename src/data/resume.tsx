import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Andres Arriaga",
  url: "https://arriagadev.vercel.app/",
  initials: "AR",
  location: "Medellin, Colombia",
  locationLink: "https://maps.app.goo.gl/5EXtTcG8nvdbUp8D7",
  description:
    "Software Developer | Full Stack | React, Node Js. I am an expert in creating and developing new things and I would like to help you.",
  summary:
    "I have worked on various freelance and collaborative projects, developing complete solutions from user interface design to API implementation and database management. My main stack includes React for building interactive interfaces and Node.js for the robust and scalable backend.\n \nMy goal is to be able to help a team create efficient and scalable web applications that improve the user experience and optimize internal processes. I love the fact that I can contribute to the technological growth of a company. ",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Angular",
    "TailwindCSS",
    "SQL",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Java",
    "Spring Boot",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arriaga.dev00@gmail.com",
    tel: "+57 300721339",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Arriaga00",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andres-arriaga-597166208/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Elyssa App",
      href: "https://www.linkedin.com/company/elyssa-app/posts/?feedView=all",
      badges: ["Angular", "Node.js", "PostgreSQL", "Docker"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQFSySxRgFnmeg/company-logo_200_200/company-logo_200_200/0/1661286254625/elyssa_app_logo?e=1735776000&v=beta&t=xlCWpjyCeRhdBQ-OZ0vALwvOvqDjSAHK9jcQsx1R8TM",
      start: "Jul 2021",
      end: "Present",
      description:
        "Design and develop web applications using Angular 17 on the frontend and Node.js on the backend, ensuring a smooth user experience and robust server logic.",
    },
  ],
  education: [
    {
      school: "Sena",
      href: "https://www.linkedin.com/school/servicio-nacional-de-aprendizaje-sena-/posts/?feedView=all",
      degree: " Technology software analysis and development",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4E0BAQFGKskTA-XUJA/company-logo_200_200/company-logo_200_200/0/1721685266737/servicio_nacional_de_aprendizaje_sena__logo?e=1735776000&v=beta&t=Yg3BjwUqj1EOl95BMScxXtW-qKlfRYtS833N3jvRR-w",
      start: "2022",
      end: "2025",
    },
    {
      school: "Enyoi",
      href: "https://www.linkedin.com/company/enyoi/",
      degree: "Course Full Stack Development React + Node.js",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQEZU6FTkWVmng/company-logo_100_100/company-logo_100_100/0/1670627346382/enyoi_logo?e=1735776000&v=beta&t=AubyZoiiy3rUOP13YXw0k5kplA0o6u0WEqlk7CK-g-E",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Task Master - Task Manager",
      href: "https://frontend-taskmaster.vercel.app/",
      dates: "Jun 2024",
      active: true,
      description:
        "Web application for task management. It was created with the aim of reinforcing the knowledge acquired in the Enyoi bootcamp as a fullstack developer",
      technologies: ["React", "TailwindCSS", "SQL", "Express"],
      links: [
        {
          type: "Website",
          href: "https://frontend-taskmaster.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Front end",
          href: "https://github.com/Arriaga00/frontend-Taskmaster",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Back end",
          href: "https://github.com/Arriaga00/api-TaskMaster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/task.jpeg",
      video: "",
    },
    {
      title: "ZTechnology - A CRM for managing a company's inventory",
      href: "https://ztecnholopgy.vercel.app/auth",
      dates: "May 2024",
      active: true,
      description:
        "CRM for managing a company's inventory. It was created with the aim of reinforcing the knowledge acquired in the Enyoi bootcamp as a fullstack developer",
      technologies: ["React", "TailwindCSS", "SQL", "Express", "And Design"],
      links: [
        {
          type: "Website",
          href: "https://ztecnholopgy.vercel.app/auth",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Front end",
          href: "https://github.com/Arriaga00/Dashboard-ZTecnholopgy",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Back end",
          href: "https://github.com/Arriaga00/api-ZTechnology",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dashboard.jpeg",
      video: "",
    },
    {
      title: "Custom Gaming - Customizable PC Store",
      href: "https://custom-gaming.vercel.app/",
      dates: "Feb 2024",
      active: true,
      description:
        "Customized PC store. It was created with the aim of reinforcing knowledge in React",
      technologies: ["React", "TailwindCSS", "Node.js", "Express", "SQL"],
      links: [
        {
          type: "Website",
          href: "https://custom-gaming.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Arriaga00/Tienda-Online",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gaming.jpeg",
      video: "",
    },
  ],
} as const;
