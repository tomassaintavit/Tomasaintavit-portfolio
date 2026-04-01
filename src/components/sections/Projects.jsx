import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">


                            <h3 className="text-xl font-bold mb-2">
                                E-commerce Data Pipeline
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Data ETL pipeline to collect, process, and analyze e-commerce data.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4"

                            >
                                {["Python", "Pandas", "SQL", "Matplotlib", "Request", "Jupyter Notebook"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">


                            <h3 className="text-xl font-bold mb-2">
                                Home Credit Default Risk
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Detecting credit default risk using machine learning.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4"

                            >
                                {["Python", "Scikit-learn", "XGBoost", "SQL", "Pandas", "Matplotlib", "Seaborn"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>


                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">


                            <h3 className="text-xl font-bold mb-2">
                                Image Classifier
                            </h3>
                            <p className="text-gray-400 mb-4">
                                System for detecting images using pretrained models. Full dockerized.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4"

                            >
                                {["Streamlit", "Python", "FastAPI", "Docker", "Tensorflow", "Redis", "PostgreSQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">


                            <h3 className="text-xl font-bold mb-2">
                                Multimodal E-commerce Product Categorization
                            </h3>
                            <p className="text-gray-400 mb-4">
                                System that categorizes e-commerce products into predefined categories using product descriptions and images.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4"

                            >
                                {["Hugging Face", "Python", "Docker", "Sklearn", "Pandas", "Numpy", "Jupyter Notebook", "LLMS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>


                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">


                            <h3 className="text-xl font-bold mb-2">
                                Retail Shelf Vision
                            </h3>
                            <p className="text-gray-400 mb-4">
                                System that recognize products and empty spaces on a retail shelf in real time.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4"

                            >
                                {["Python", "FastAPI", "Docker", "YOLO", "PostgreSQL", "Redis", "Streamlit", "OpenCV"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">


                            <h3 className="text-xl font-bold mb-2">
                                Uniquemals
                            </h3>
                            <p className="text-gray-400 mb-4">
                                System that shows endemic animals by country.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4"

                            >
                                {["React", "Node.js", "SQL", "Supabase"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>


                            <div className="flex justify-between items-center">
                                <a
                                    href="https://uniquemals.vercel.app/" target="_blank"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    )
}