import { RevealOnScroll } from  '../RevealOnScroll';

export const Home = () => {
    return (
        <section 
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        > 
        <RevealOnScroll>

            <div className="text-center z-10 px-4">
                <h1 
                    className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 
                    to-green-500 bg-clip-text text-transparent leading-right"
                > 
                Tomás Saint-Avit
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-uto">
                    Soy Ingeniero en Sistemas de Información con 2 años de experiencia como desarrollador de aplicaciones web. <br></br>
                    Poseo conocimientos en programación, testing y análisis de sistemas.<br></br>
                    Cuento con inglés fluido.
                </p>


                <div className="flex justify-center space-x-4">
                    {/* <a
                        href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    >
                        Proyectos
                    </a> */}

                    <a
                        href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                    >
                     Contacto
                    </a>
                </div>
            </div>

            </RevealOnScroll>
            
        </section>
    )
}