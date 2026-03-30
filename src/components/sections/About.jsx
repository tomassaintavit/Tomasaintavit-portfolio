import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "Vue.js",
        "Javascript",
        "HTML",
        "CSS",
        "Streamlit",
        "Seaborn",
        "Matplotlib"
    ];

    const backendSkills = [
        "Node.js",
        "Java",
        "MongoDB",
        "SQL",
        "Python",
        "FastAPI",
        "Docker",
        "Jupyter Notebook",
        "Pandas",
        "Numpy",
        "Scikit-learn"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-center">
                        About
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Systems Engineer with more than 2 years of experience in full-stack development, complemented by hands-on work in data engineering, ELT workflows,
                            and machine learning experimentation. My technical stack includes JavaScript, Python, Node.js, Express, Vue.js, Pandas, SQL, Jupyter Notebook,
                            Matplotlib, Docker, and FastAPI. I previously worked as a Fullstack Developer at the Universidad Nacional de Córdoba, where I delivered and optimized
                            internal applications across both frontend and backend components. More recently, I contributed to data engineering initiatives by building automated
                            ELT pipelines and analytical workflows to support data processing and visualization, while also gaining experience training machine learning models,
                            applying preprocessing techniques, and evaluating model performance. I have also worked on computer vision projects using YOLO.
                            I contributed to projects using a microservices architecture, combining backend services with a Streamlit frontend and running containerized components on cloud-based instances.
                            I studied at the Universidad Tecnológica Nacional (UTN), which provided a solid foundation in software development and data-driven engineering. I also have experience working in
                            Agile/Scrum environments, participating in sprint ceremonies to support iterative and predictable delivery.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Systems Engineering</strong> - Universidad Tecnológica Nacional Córdoba (2014-2022)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h3 className="font-semibold">
                                        Fullstack Developer at Prosecretaria de Informatica de la Universidad Nacional de Córdoba (2021-2023)
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            Developed internal web applications using Node.js, Express, MongoDB and Vue.js, delivering maintainable and
                                            responsive features that improved internal operational workflows.
                                        </li>
                                        <li>
                                            Used Git for CI/CD pipelines and issue tracking, streamlining deployment processes and improving traceability across development stages.
                                        </li>
                                        <li>
                                            Collaborated within a Scrum environment, participating in sprints, stand-ups, and code reviews to ensure timely delivery and consistent alignment with project requirements.
                                        </li>
                                        <li>
                                            Performed unit testing to validate code functionality and maintain code quality.
                                        </li>

                                    </ul>

                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        Machine Learning Engineer at Anyone AI (2025-2026)
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            Built automated ELT pipelines using Pandas, SQL, Airflow, and Jupyter Notebook, while also developing data visualizations with Matplotlib and Seaborn to support data exploration and insight generation.
                                        </li>
                                        <li>
                                            Trained supervised and unsupervised machine learning models using scikit-learn, applying preprocessing techniques, feature engineering, and hyperparameter optimization to improve predictive performance.
                                        </li>
                                        <li>
                                            Worked on applications built with a microservices architecture, integrating backend services with a Streamlit-based frontend and deploying containerized components on cloud instances.
                                        </li>
                                        <li>
                                            Developed a computer vision system using YOLO, manually labeling image datasets and training a model capable of detecting objects in real time, and evaluated model performance using mAP, GIoU, Precision, and Recall.
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
