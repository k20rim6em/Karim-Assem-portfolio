import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Karim",
  lastName: "Alafifi",
  name: `Karim Alafifi`,
  role: "Communication & Computer Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "s-karim.alafifi@zewailcity.edu.eg",
  location: "Africa/Cairo", // Giza, Egypt
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false, // set to true if you want a newsletter signup on your homepage
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on my projects in embedded systems, signal processing, and ML</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/k20rim6em", // TODO: replace with your actual GitHub profile URL
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE", // TODO: replace with your actual LinkedIn URL
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering signals, systems, and software</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Solar Mist Distillation</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          ISEF National Finalist
        </Text>
      </Row>
    ),
    href: "/work", // point this to a specific project page once you've added one, e.g. /work/solar-mist-distillation
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
      <Text as="span" size="xl" weight="strong">Zewail City</Text>, where I build projects spanning
      signal processing, embedded systems, and machine learning. <br /> ISEF finalist, teaching assistant, and lifelong tinkerer.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Giza, Egypt`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // set to true and add your link below if you use Cal.com or similar
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Giza-based {person.role.toLowerCase()} at Zewail City of Science,
        Technology and Innovation, with a strong foundation in programming, signal processing, and
        problem-solving. His work spans machine learning, embedded systems, and communication
        systems research, and he's driven by turning technical challenges into working, real-world
        projects.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Zewail City of Science, Technology and Innovation — Admission Office",
        timeframe: "07/2026 – Present",
        role: "Admission Office Intern",
        achievements: [
          <>
            Provided guidance to prospective students and parents throughout the admission process.
          </>,
          <>
            Assisted with student registration, document processing, and administrative tasks.
          </>,
          <>
            Worked closely with the admissions team to ensure an efficient application workflow.
          </>,
        ],
        images: [],
      },
      {
        company: "Zewail City of Science, Technology and Innovation",
        timeframe: "01/2026 – 06/2026",
        role: "Junior Teaching Assistant – Linear Algebra",
        achievements: [
          <>
            Assisted in explaining course concepts and supporting students.
          </>,
          <>
            Guided students in solving assignments and understanding key topics.
          </>,
          <>
            Collaborated with instructors to facilitate course delivery.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Zewail City of Science, Technology and Innovation (Egypt)",
        description: <>B.Sc. in Communication and Computer Engineering, 2024–2028 (expected). cGPA: 3.5.</>,
      },
      {
        name: "STEM High School Assiut (Egypt)",
        description: <>2021–2024. GPA: 3.8.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming & Embedded Systems",
        description: (
          <>C++, C#, Assembly, MATLAB, SQL, and HTML, with hands-on embedded work on ESP32 and Arduino, sensor integration, Git, Visual Studio, Proteus, and Logisim.</>
        ),
        tags: [
          { name: "C++", icon: "" },
          { name: "C#", icon: "" },
          { name: "MATLAB", icon: "" },
          { name: "SQL", icon: "" },
          { name: "Git", icon: "" },
        ],
        images: [],
      },
      {
        title: "Signal Processing & Machine Learning",
        description: (
          <>Regression, gradient descent, and FFT analysis applied to real signals — from a polynomial-regression audio distortion meter to BER/SNR analysis of matched filter receivers under AWGN.</>
        ),
        tags: [
          { name: "Machine Learning", icon: "" },
          { name: "Signal Processing", icon: "" },
          { name: "MATLAB/Simulink", icon: "" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about engineering and projects...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering and ML projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // Suggested projects to add, based on your CV:
  // - Audio Distortion Meter (Machine Learning)
  // - Educational Platform (C#, SQL, HTML)
  // - Correlation Receiver & Matched Filter (MATLAB/Simulink)
  // - Solar Mist-Based Distillation System (ISEF Finalist)
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Replace these placeholder images with your own in /public/images/gallery
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
