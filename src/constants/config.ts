type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Paul Jhon Magbanua - Porfolio",
    fullName: "Paul Jhon Magbanua",
    email: "magbanuatx56@mail.com",
  },
  hero: {
    name: "Paul",
    p: ["I develop desktop apps, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Currently working as a Web Developer and CRM Specialist. I possess a diverse range of experience with a focus on Java development, complemented by my capabilities in web development and related services. I am passionate about delivering high-quality solutions tailored to meet your needs.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
      content: `I have worked on diverse projects ranging from web applications to complex backend systems, enhancing my skills in software development and project management.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
      content: `I have received positive feedback on my collaborative approach and ability to deliver high-quality results on time.`,
    },
    works: {
      p: "Technologies I work with",
      h2: "Tech Stack.",
      content: `I am proficient in various technologies including Java, JavaScript, JavaFX, HTML5, React, PHP, SQLite, and MySQL.`,
    },
  },
}  