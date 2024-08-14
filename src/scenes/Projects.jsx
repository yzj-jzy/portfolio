import LineGradient from "../components/LineGradient";
import ecommerce from '../assets/ecommerce.jpg';
import expense from '../assets/expense.png';
import github from '../assets/github.jpg';
import demo from '../assets/demo.jpg';
import juejin from '../assets/juejin.jpg';
import topsms from '../assets/topsms.png';
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, picture, githubLink, demoLink }) => {
  return (
    <motion.div variants={projectVariant} className="flex flex-col md:flex-row w-full mb-10">
      <div className="w-full md:w-2/3 overflow-hidden">
        <img
          src={picture}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
          style={{ aspectRatio: '16/9',background: "cover", objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col justify-center items-start p-8 w-full md:w-1/3 bg-gray-800 text-white rounded-b-lg md:rounded-l-none md:rounded-r-lg">
        <p className="text-2xl font-playfair mb-4">{title}</p>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-4">
          {githubLink && (
            <a
              className="hover:opacity-50 transition duration-500"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="github-link"
                style={{ maxWidth: '30px', maxHeight: '30px' }}
              />
            </a>
          )}
          {demoLink && (
            <a
              className="hover:opacity-50 transition duration-500"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={demo}
                alt="demo-link"
                style={{ maxWidth: '30px', maxHeight: '30px' }}
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ecommerceDescription = "Develop React-based online shopping web that simplifies the user journey from discovery to checkout, and integrate Stripe in the NodeJS backend for secure payment processing.";
  const expenseScreenDescription = "Build simple and powerful tools by ASP.NET MVC with C# to manage expenses, visualize financial trends on a sleek dashboard, and organize details effortlessly with a smooth, dockable sidebar.";

  const ecommerceDemoLink = "https://dreamy-jelly-46ee6f.netlify.app/";
  const ecommerceGitLink = "https://github.com/yzj-jzy/E-commerce";

  const expenseGitLink = "https://github.com/yzj-jzy/Expense-Tracker";

  const juejinDescription = "Juejin is a very popular tech-sharing website in China, where I often search for information to learn programming. Inspired by this, I created a mini version of Juejin.";
  const juejinDemoLink = "https://master--endearing-biscuit-a992ab.netlify.app/";
  const juejinGitLink = "https://github.com/yzj-jzy/juejin/tree/master";

  const TopSMSDemoLink = "https://master--topsms.netlify.app/";
  const TopSMSGitLink = "https://github.com/yzj-jzy/TopSMS---Dashboard";
  const TopSMSDescription = "TopSMS is an SMS marketing platform with a dashboard displaying subscriber metrics, SMS sent, unsubscribers, and clicks. It features campaign management, contacts, reports, and notifications in a user-friendly interface.";
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are some of my projects. More project from github coming soon:)
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="block">
        <motion.div
          className="flex flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Projects */}
          <Project title="Nomad" description={ecommerceDescription} picture={ecommerce} githubLink={ecommerceGitLink} demoLink={ecommerceDemoLink} />
          <Project title="Jue Jin" description={juejinDescription} githubLink={juejinGitLink} demoLink={juejinDemoLink} picture={juejin} />
          <Project title="TopSMS" description={TopSMSDescription} picture={topsms} githubLink={TopSMSGitLink} demoLink={TopSMSDemoLink} />
          <Project title="ExpenseTracker" description={expenseScreenDescription} picture={expense} githubLink={expenseGitLink} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
