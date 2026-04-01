# Portfolio de Tomás Saint-Avit

Bienvenido al repositorio de mi portfolio personal. Este proyecto está desarrollado utilizando **React**, **Vite** y **Tailwind CSS**. Su objetivo principal es presentar mis proyectos, habilidades y ofrecer un medio de contacto mediante un formulario integrado con **EmailJS**.

## 🚀 Tecnologías utilizadas

- **[React](https://reactjs.org/)** (v19) - Biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)** - Herramienta de compilación rápida para desarrollo frontend.
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) - Framework de CSS utilitario para un diseño rápido y responsivo.
- **[EmailJS](https://www.emailjs.com/)** - Servicio para enviar correos electrónicos directamente desde el código del lado del cliente.

## 🛠️ Cómo levantar el proyecto en local

Sigue estos pasos para obtener una copia local y probar el proyecto en tu entorno de desarrollo:

1. **Clona el repositorio**
   Abre una terminal y ejecuta el siguiente comando:
   ```bash
   git clone https://github.com/tomassaintavit/Tomasaintavit-portfolio.git
   ```

2. **Navega al directorio del proyecto**
   ```bash
   cd Tomasaintavit-portfolio
   ```

3. **Instala las dependencias**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Luego, instala las librerías necesarias ejecutando:
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo**
   Una vez completada la instalación, inicia Vite con:
   ```bash
   npm run dev
   ```
   El servidor se iniciará y podrás visualizar el sitio en tu navegador abriendo la dirección indicada en la terminal (usualmente `http://localhost:5173`).

> *Nota sobre las variables de entorno:* El proyecto cuenta con un archivo `.env` que puede requerir ciertas variables (por ejemplo para EmailJS o tokens) que deben configurarse para que todas las funciones como el formulario actúen correctamente en desarrollo.

## 🌐 Cómo deployar en GitHub Pages

El proyecto ya está configurado para que la publicación en GitHub Pages sea muy rápida a través del script `deploy`.

1. Asegúrate de que todos los cambios que deseas subir se encuentren guardados y confirmados en control de versiones.
2. Comprueba que el archivo `vite.config.js` tenga la propiedad `base` indicando el nombre de este repositorio (`base: "/Tomasaintavit-portfolio"`). Esto ya está configurado por defecto.
3. Para compilar el sitio a producción y publicarlo, ejecuta:

   ```bash
   npm run deploy
   ```

> **¿Qué hace este comando exactamente?**
> Internamente, npm ejecutará `predeploy` primero (haciendo un `vite build` y creando una carpeta `dist` con los recursos minimizados y listos para producción). Inmediatamente después subirá ese directorio `dist` forzandolo hacia la rama `gh-pages` del mismo repositorio en GitHub.

4. Por último, ve a tu cuenta de GitHub, dirígete a la pestaña **Settings** (Configuración) de este repositorio y, desde el menú lateral, selecciona **Pages**. Asegúrate de que en la sección de "Build and deployment", el *Source* esté seleccionado sobre la rama `gh-pages` sirviendo en `/ (root)`. ¡Y listo! Tu portfolio estará disponible y on-line en unos instantes.
