import ScrollButton from '../components/ScrollButton';
import HoverHeading from '../components/HoverHeading';
import langLogo from '../assets/langLogo.jpg';
import frontendLogo from '../assets/frontendLogo.png';
import backendLogo from '../assets/backendLogo.png';
import datascience_and_ml_logo from '../assets/datascience_and_ml_logo.jpg';
import toolsLogo from '../assets/toolsLogo.png';


import cLogo from '../assets/skills/c.png';
import pythonLogo from '../assets/skills/python.png';
import jsLogo from '../assets/skills/javascript.png';
import tsLogo from '../assets/skills/typescript.png';
import javaLogo from '../assets/skills/java.png';
import rLogo from '../assets/skills/r.png';

import htmlLogo from '../assets/skills/html.png';
import cssLogo from '../assets/skills/css.png';
import reactLogo from '../assets/skills/react.svg';
import tailwindcssLogo from '../assets/skills/tailwindcss.png';
import nextLogo from '../assets/skills/nextjs.png';
import nodeLogo from '../assets/skills/nodejs.png';
import djangoLogo from '../assets/skills/django.png';
import phpLogo from '../assets/skills/php.png';
import mysqlLogo from '../assets/skills/mysql.png';
import postgresLogo from '../assets/skills/postgresql.png';
import restLogo from '../assets/skills/restapi.png';

import pytorchLogo from '../assets/skills/pytorch.png';
import sklearnLogo from '../assets/skills/sklearn.png';
import pandasLogo from '../assets/skills/pandas.png';
import numpyLogo from '../assets/skills/numpy.png';
import matplotlibLogo from '../assets/skills/matplotlib.png';
//import airflowLogo from '../assets/skills/airflow.png';
//import sparkLogo from '../assets/skills/spark.png';

import gitLogo from '../assets/skills/git.png';
import dockerLogo from '../assets/skills/docker.png';
import linuxLogo from '../assets/skills/linux.png';
import freebsdLogo from '../assets/skills/freebsd.png';
import gdbLogo from '../assets/skills/gdb.png';
import shellLogo from '../assets/skills/shell.png';
import vscodeLogo from '../assets/skills/vscode.png';
//import githubActionsLogo from '../assets/skills/githubactions.png';

const skills = {
  "Programming Languages": {
    icon: langLogo,
    tools: [
      { name: "C", logo: cLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "Python", logo: pythonLogo },
      { name: "TypeScript", logo: tsLogo },
      { name: "Java", logo: javaLogo },
      { name: "R", logo: rLogo },
    ]
  },
  "Frontend Development": {
    icon: frontendLogo,
    tools: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "TailwindCSS", logo: tailwindcssLogo },
      { name: "React", logo: reactLogo },
      { name: "Next.js", logo: nextLogo },
    ]
  },
  "Backend Development": {
    icon: backendLogo, 
    tools: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Django", logo: djangoLogo },
      { name: "PHP", logo: phpLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "REST APIs", logo: restLogo },
    ]
  },
  "Data Science & ML": {
    icon: datascience_and_ml_logo,
    tools: [
      { name: "PyTorch", logo: pytorchLogo },
      { name: "scikit-learn", logo: sklearnLogo },
      { name: "pandas", logo: pandasLogo },
      { name: "numpy", logo: numpyLogo },
      { name: "matplotlib", logo: matplotlibLogo}
      //{ name: "Apache Airflow", logo: airflowLogo },
      //{ name: "Apache Spark", logo: sparkLogo },
    ]
  },
  "Tools & Operating Systems": {
    icon: toolsLogo,
    tools: [
      { name: "Git", logo: gitLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Linux/Unix", logo: linuxLogo },
      { name: "FreeBSD", logo: freebsdLogo },
      { name: "GDB", logo: gdbLogo },
      { name: "Shell", logo: shellLogo },
      //{ name: "GitHub Actions", logo: githubActionsLogo },
      //{ name: "VS Code", logo: vscodeLogo },
    ]
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 lg:py-24 px-6 md:px-24 bg-white dark:bg-[#1a1a1a] text-black dark:text-white font-poppins">
      <div className="absolute top-30 right-6 sm:block hidden">
        <ScrollButton direction="up" targetId="about" />
      </div>
      
      <HoverHeading tag="skills" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        {Object.entries(skills).map(([category, { icon, tools }]) => (
          <div key={category}>
            <div className="hidden lg:flex justify-center mb-2">
              <div className="h-20 w-20 rounded-full overflow-hidden">
                <img src={icon} alt={`${category} logo`} className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="text-lg font-semibold mb-4 dark:hover:text-[#39FF14] dark:hover:drop-shadow-[0_0_6px_#39FF14]">{category}</p>
            <ul className="space-y-3">
              {tools.map(({ name, logo }) => (
                <li key={name} className="flex items-center gap-4">
                  <img src={logo} alt={name} className="w-12 h-12 object-contain" />
                  <span className="text-base font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-0 right-6 sm:block hidden">
        <ScrollButton direction="down" targetId="projects" />
      </div>
    </section>
  );
}
