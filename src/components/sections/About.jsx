import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "Vue.js",
        "Javascript",
        "HTML",
        "CSS"
    ];

    const backendSkills = [
        "Node.js",
        "Java",
        "MongoDB",
        "SQL"
    ];

    return (
        <section 
                id="about"
                className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-center">
                    Acerca de mí
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Soy Ingeniero en Sistemas de Información y tengo experiencia de 2 años como 
                       desarrollador de aplicaciones web utilizando tecnologías como Node.js, Vue.js, Express, MongoDB, SQL
                       y gestionando proyectos con herramientas como GitLab. <br></br>
                       Me adapto con facilidad a nuevos entornos, soy una persona confiable y responsable, disfruto trabajar en equipo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) =>(
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
                                {backendSkills.map((tech, key) =>(
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
                        <h3 className="text-xl font-bold mb-4">Educación</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Ingeniería en Sistemas de Información</strong> - Universidad Tecnológica Nacional Córdoba (2014-2022)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Experiencia</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Desarrollador Fullstack en Prosecretaria de Informatica de la Universidad Nacional de Córdoba (2021-2023)
                                </h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        Creación de interfaces de usuario interactivas con Vue.js y consumo de APIs externas
                                    </li>
                                    <li>
                                        Mantenimiento de control de versiones con Git y gestión de issues en GitLab
                                    </li>
                                    <li>
                                        Documentación técnica de endpoints, estructuras de datos y procesos de desarrollo
                                    </li>
                                    <li>
                                        Testing unitario
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
