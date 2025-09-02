import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="font-inter bg-white text-gray-900 dark:bg-gray-900 dark:text-white scroll-smooth">
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="./assets/png/passport_photo.jpg"
              alt="Navya Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-bold text-xl">Navya Sai Josyula</span>
          </div>
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-emerald-400 font-semibold">
              About
            </a>
            <a href="#experience" className="hover:text-emerald-400 font-semibold">
              Experience
            </a>
            <a href="#projects" className="hover:text-emerald-400 font-semibold">
              Projects
            </a>
            <a href="#contact" className="hover:text-emerald-400 font-semibold">
              Contact
            </a>
            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="ml-4 px-3 py-1 border border-emerald-400 rounded text-sm hover:bg-emerald-400 hover:text-white"
            >
              🌓
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="about"
          className="py-24 px-6 bg-gradient-to-tr from-fuchsia-500 via-indigo-600 to-blue-500 text-white text-center animate-slideUp"
        >
          <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-10 rounded-xl shadow-lg backdrop-blur-sm">
            <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Navya 👩‍💻</h1>
            <p className="text-xl font-medium text-emerald-200">
              Full-Stack Developer | Java | Spring Boot | React | AWS | Python
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-100 leading-relaxed">
              I specialize in building performant web applications and cloud-native
              solutions that scale. Passionate about clean code, great UX, and
              solving tough backend challenges.
            </p>
          </div>
        </section>

        <section id="experience" className="py-20 px-6 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Experience</h2>
    <div className="space-y-10">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-emerald-400 hover:scale-[1.02] transition-transform">
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-emerald-300">Backend Developer Intern</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Upunikself | Feb 2025 – Mar 2025</p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1">
          <li>Improved code efficiency and reduced bugs with React + Next.js and backend optimization.</li>
          <li>Boosted development by 20% through modern frameworks and API integration.</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-emerald-400 hover:scale-[1.02] transition-transform">
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-emerald-300">Software Engineer</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Persistent Systems | Jun 2021 – Jul 2023</p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1">
          <li>Created full-stack apps using Spring Boot, React, TypeScript and PostgreSQL.</li>
          <li>Implemented JWT, OAuth2, and CI/CD pipelines with Jenkins and GitLab.</li>
          <li>Reduced UI load time by 30%, and improved deployment by 35%.</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-emerald-400 hover:scale-[1.02] transition-transform">
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-emerald-300">Software Engineer</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Harman International | Jan 2020 – Apr 2021</p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1">
          <li>Developed dashboards using React.js and visualized healthcare data.</li>
          <li>Used Flask and MySQL for backend logic and deployed on AWS EC2.</li>
          <li>Cut SQL query time by 40% through optimization.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-6">Skills & Technologies</h2>
    <div className="space-y-10">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Programming Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg">
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">C++</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Java</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Python</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">JavaScript</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">TypeScript</div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Frontend Development</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg">
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">React.js</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Angular</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Vue.js</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">JSP</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Servlets</div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Backend & APIs</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg">
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Spring Boot</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Node.js</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Flask</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">JPA</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Hibernate</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Kafka</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">REST APIs</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">JWT</div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Databases</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg">
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">MySQL</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">PostgreSQL</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">MongoDB</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">NoSQL</div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">DevOps & Cloud</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg">
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Docker</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Kubernetes</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">AWS (Lambda, S3, EC2)</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Azure</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">CI/CD (Jenkins, GitLab)</div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Tools & Others</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg">
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Git & GitHub</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">VSCode</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">IntelliJ</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Postman</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">JSON</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">XML</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Selenium</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">JUnit</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">Agile (Scrum)</div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">TDD</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">Projects</h2>
    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-bold text-indigo-700 dark:text-emerald-300 mb-2">GeminiBot</h3>
        <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
          <strong>Tech Stack:</strong> React, TypeScript, Express.js, Flask, Google Gemini AI
        </p>
        <ul className="list-disc text-sm text-gray-600 dark:text-gray-200 pl-5">
          <li>Built a smart chatbot using Google Gemini AI & Flask backend.</li>
          <li>Created a user-friendly interface using React and Axios.</li>
          <li>Improved performance and user engagement by 30%.</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-bold text-indigo-700 dark:text-emerald-300 mb-2">Bank Marketing Campaign</h3>
        <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
          <strong>Tech Stack:</strong> Python, Scikit-learn, Pandas, NumPy
        </p>
        <ul className="list-disc text-sm text-gray-600 dark:text-gray-200 pl-5">
          <li>Used ML models to predict personal loan acceptance.</li>
          <li>Achieved 98.58% accuracy with Random Forest.</li>
          <li>Boosted campaign targeting and customer retention.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="testimonials" className="py-20 px-6 bg-white dark:bg-gray-800">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Testimonial</h2>
    <p className="text-lg italic text-gray-700 dark:text-gray-300">
      "I’m a passionate and performance-driven full-stack developer who loves solving real-world problems with clean, scalable code. I thrive in team environments and always look for ways to improve user experiences and system performance."
    </p>
    <p className="mt-4 font-semibold text-indigo-700 dark:text-emerald-300">– Navya Sai Josyula</p>
  </div>
</section>

<section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">Contact</h2>
    <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <div>
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input type="text" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white" placeholder="Your name" required />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input type="email" className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white" placeholder="you@example.com" required />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Message</label>
        <textarea className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white" rows="5" placeholder="Write your message..." required></textarea>
      </div>
      <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded">
        Send Message
      </button>
    </form>
  </div>
</section>
</main>

      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        <p>
          © 2024 Navya Sai Josyula. Built with 💻 Tailwind CSS. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
