const studentsList = [
  {
    rollNo: 1111,
    name: "name1",
  },
  {
    rollNo: 2222,
    name: "name2",
  },
];
const [student, setStudent] = useState(studentsList);

setStudent((student[1].name = "name3"));

/* 

\documentclass[letterpaper,10pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

% Font options
\usepackage[sfdefault]{roboto}  % Sans-serif font

\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Section formatting
\titleformat{\section}{\Large\bfseries\scshape\raggedright}{}{0em}{}[\titlerule]

% Ensure PDF is machine readable
\pdfgentounicode=1

% Custom commands
\newcommand{\resumeItem}[1]{\item\small{#1}}
\newcommand{\resumeSubheading}[4]{
\vspace{-1pt}\item
  \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
    \textbf{#1} & #2 \\
    \textit{#3} & \textit{#4} \\
  \end{tabular*}\vspace{-7pt}
}
\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}
\newcommand{\resumeSubHeadingList}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}

\begin{document}

\begin{center}
  \textbf{\Huge Mehfooz khan} \\
  \small 9923279804 $|$ \href{mailto:khanmehfooz78603@gmail.com}{khanmehfooz78603@gmail.com } $|$ 
  \href{https://github.com/mehfoozkhangithub}{mehfoozkhangithub}
\end{center}

\section*{Summary}
MERN Stack Developer with 2.9 years of experience in building scalable web applications using Mongodb, Express.js, React.js, and Node.js. Skilled in developing REST APIs, creating responsive UIs, and working with Git and Agile methodologies. Focused on writing clean, maintainable code and delivering efficient, user-friendly solutions.

\section{Technical Skills}
\resumeSubHeadingList
  \resumeItem{\textbf{Frontend Languages}: React, Redux, JS, HTML, CSS }
  \resumeItem{\textbf{Backend Languages}: Node, Mongodb, Mongoose, Express }
  \resumeItem{\textbf{Deployment / Tools}:  Netlify, Vercel,  Postman, Thunder-Clinte, JEST}
\resumeSubHeadingListEnd

\section{Projects}
\resumeSubHeadingList
  \resumeSubheading
      {Image Captioning System}{Jan 2023 -- Present}
      {Deep Learning Project}{Python, TensorFlow, OpenCV}
      \resumeSubHeadingList
          \resumeItem{\textbullet\ Developed an end-to-end system for generating descriptive captions for images}
          \resumeItem{\textbullet\ Utilized CNN and LSTM models for image feature extraction and caption generation}
          \resumeItem{\textbullet\ Achieved state-of-the-art performance on the COCO dataset}
      \resumeSubHeadingListEnd
  \resumeSubheading
      {Sentiment Analysis API}{Aug 2022 -- Dec 2022} 
      {Natural Language Processing}{Python, Flask, NLTK, Hugging Face}
      \resumeSubHeadingList
          \resumeItem{\textbullet\ Built a RESTful API for sentiment analysis of text data}
          \resumeItem{\textbullet\ Implemented pre-trained transformer models using Hugging Face}
          \resumeItem{\textbullet\ Deployed the API on a cloud platform for easy integration}
      \resumeSubHeadingListEnd
\resumeSubHeadingListEnd

\section{Experience}
\resumeSubHeadingList
  \resumeSubheading
      {MERN Stack Developer}{March 2023 -- Present}
      {Aironotic Technology}{Bangaluru, India}
      \resumeSubHeadingList
          \resumeItem{\textbullet\ Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack). }
          \resumeItem{\textbullet\ Built and consumed RESTful APIs for seamless communication between front-end and back-end systems. }
          \resumeItem{\textbullet\ Designed and implemented responsive UI components using React.js, Redux, and modern CSS frameworks (e.g., Tailwind, Bootstrap). }
          \resumeItem{\textbullet\ Integrated third-party APIs and services for features like payments, authentication, and real-time updates. }
          \resumeItem{\textbullet\ Wrote clean, reusable, and efficient code following best practices and industry standards. }
          \resumeItem{\textbullet\ Collaborated with UI/UX designers, QA testers, and other developers in Agile/Scrum environments. }
          \resumeItem{\textbullet\ Used Git and GitHub for version control. }
          \resumeItem{\textbullet\ Ensured cross-browser compatibility and mobile responsiveness across all web platforms. }
          \resumeItem{\textbullet\ 
Debugged and resolved technical issues quickly to minimize downtime and improve user experience.
}
  \resumeItem{\textbullet\ Optimized model performance and ensured data quality}
          \resumeItem{\textbullet\ Deployed applications to cloud platforms such as Heroku, Vercel, or Netlify. }
          \resumeItem{\textbullet\ Researched and adopted new technologies, frameworks, and tools to improve application performance and team productivity.  }
          \resumeItem{\textbullet\ Used tools like Postman for API testing and debugging. }
          \resumeItem{\textbullet\ Integrated JWT, OAuth, and other authentication mechanisms for secure user login and access control.  }
          \resumeItem{\textbullet\ Managed NoSQL database schemas, queries, and indexing strategies in MongoDB for optimal performance. }
                  \resumeItem{\textbullet\ Mentored junior developers through code reviews, pair programming, and documentation of technical standards and best practices. }
                  
      \resumeSubHeadingListEnd
  \resumeSubheading
      {Frontend Developer}{Aug 2022 -- March 2023}
      {Louts Intelligence}{ Mumbai, India}
      \resumeSubHeadingList
          \resumeItem{\textbullet\ Assisted in developing responsive and user-friendly web interfaces using HTML5, CSS3, JavaScript, and React.js. }
          \resumeItem{\textbullet\ Collaborated with designers to implement UI/UX mockups and ensure pixel-perfect layouts. }
          \resumeItem{\textbullet\ Built reusable components and integrated them into existing codebases to maintain consistency and scalability. }
          \resumeItem{\textbullet\ Participated in consuming RESTful APIs and displaying dynamic content using React hooks and Axios.  }
          
          \resumeItem{\textbullet\ Debugged UI issues across browsers and devices to ensure cross-browser compatibility.   }
          \resumeItem{\textbullet\ Used tools like Postman for API testing and debugging. }
          \resumeItem{\textbullet\ Worked with version control tools like Git and participated in collaborative development workflows via GitHub. }
          \resumeItem{\textbullet\ Participated in daily stand-ups, sprint planning, and reviews as part of an Agile development team.  }
          \resumeItem{\textbullet\ Contributed to documentation of frontend components and user interaction logic for future maintainability.   }
          \resumeItem{\textbullet\ Gained hands-on experience in frontend testing tools such as Chrome DevTools and basic unit testing.    }
          \resumeItem{\textbullet\ Ensured cross-browser compatibility and responsive design using media queries and flexible layouts (Flexbox, Grid).    }
          \resumeItem{\textbullet\ Consumed and displayed data from REST APIs, handling asynchronous operations and error states gracefully. }
          \resumeItem{\textbullet\ Integrated third-party libraries (e.g., Axios, React Router, Bootstrap, Tailwind) to add functionality and improve user experience.  }
      \resumeSubHeadingListEnd
\resumeSubHeadingListEnd

\section{Education}
\resumeSubHeadingList
  \resumeSubheading
      {Abhinav Junior College}{ Mumbai, India}
      {Bachelor's Degree in Information}{2017 -- 2020}
  \resumeSubheading
      {Lokmanya College}{Mumbai, India}
      {Higher Secondary Certificate }{ 2015 -- 2017}
\resumeSubHeadingListEnd

\section{Certifications}
\resumeSubHeadingList
  \resumeItem{\textbullet\ Full Stack Development / MERN Stack -  Speciality}
  
\resumeSubHeadingListEnd

\end{document}

*/
