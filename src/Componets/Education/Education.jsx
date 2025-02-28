import { motion } from "motion/react";

function Education() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="text-white flex flex-col items-center justify-center mt-32 mb-28 px-7 sm:px-10 md:px-32 scroll-mt-24 md:scroll-mt-28 "
      id="education"
    >
      <motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-semibold text-white md:text-5xl mb-14"
      >
        Eduaction
      </motion.h2>

      <motion.ol
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="relative border-s border-gray-200 dark:border-gray-700"
      >
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center ml-1 text-lg font-semibold text-gray-200 dark:text-white">
          Bachelor of Computer Science (Software Engineering)
          </h3>
          <time className=" ml-1 text-base lg:text-lg font-semibold lg:font-normal leading-none text-gray-300">
          Herat University | 2023 - present
          </time>
          <p className="mt-2 text-base font-normal text-gray-400">
          I am currently studying Software Engineering at Herat University. As part of my studies, 
          I am learning about databases, various programming languages, data structures,
           and algorithms. I am passionate about technology
           and constantly striving to improve my problem-solving and software development skills.
          </p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center ml-1 text-lg font-semibold text-gray-200 dark:text-white">
            Frontend Development Internship
          </h3>

          <ul className="text-base font-semibold text-gray-300">
            <span className="ml-1">WASSA (6 months) | CSOFCS (8 months)</span>
            <br />
            <ul className=" list-disc text-gray-400 mt-2">
              <li>
              Specialized in frontend development by gaining practical experience with web technologies
               such as HTML, CSS, JavaScript, and modern front-end frameworks.
              </li>
              <li>
              Enhanced problem-solving techniques in frontend
               development, applying them to build scalable and interactive web solutions.
              </li>
            </ul>
          </ul>
        </li>

        <li className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-2 ml-1 text-lg font-semibold text-gray-200 dark:text-white">
            Courses
          </h3>

          <ul className="mb-2 text-base font-normal text-gray-400">
            <ul className="list-disc">
              <li>Complete JavaScript(Udemy)</li>
              <li>Ultimate React Course(Udemy)</li>
              <li>Backend Development(Node.js, Express, MongoDB)(Udemy)</li>
            </ul>
          </ul>
        </li>
      </motion.ol>
    </div>
  );
}

export default Education;
