import LineGradient from "../components/LineGradient";
import ecommerce from '../assets/ecommerce.jpg';
import expense from '../assets/expense.png';
import github from '../assets/github.jpg';
import demo from '../assets/demo.jpg';
import uow from '../assets/uow.jpg';
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
    <motion.div variants={projectVariant} className="flex w-full mb-10">
      <img src={picture} alt={title} className="w-2/3 h-full object-over rounded-l-lg" />
      <div className="flex flex-col justify-center items-start p-8 w-1/2 bg-gray-800 text-white">
        <p className="text-2xl font-playfair mb-4">{title}</p>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-4">

          {
            githubLink && (
              <a
              className="hover:opacity-50 transition duration-500"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <img alt="github-link" src={github} />
            </a>

            )
          }
          {demoLink && (
            <a
              className="hover:opacity-50 transition duration-500"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <img alt="demo-link" src={demo} />
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

  const uowDescription = "Wollongong University LifeHub is a comprehensive web platform designed to enhance the student experience. It offers features such as accommodation listings, dining options, and a marketplace for second-hand goods, providing a one-stop solution for students' everyday needs.";

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
          Here are some of my projects. More project from github coming soon...
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
          <Project title="UOW LifeHub" description={uowDescription} picture={uow}/>
          <Project title="Nomad" description={ecommerceDescription} picture={ecommerce} githubLink={ecommerceGitLink} demoLink={ecommerceDemoLink}/>
          <Project title="ExpenseTracker" description={expenseScreenDescription} picture={expense} githubLink={expenseGitLink}/>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
