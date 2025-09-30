import logoGithub from './assets/github.svg';
import logoDownload from './assets/download.svg';

interface NavItem {
    textoItem: string;
    urlItem: string;
}

export const NavInfo: NavItem[] = [
    { textoItem: 'Inicio', urlItem: '/' },
    { textoItem: 'Proyectos', urlItem: '/projects' },
    { textoItem: 'Acerca de', urlItem: '/about' },
    { textoItem: 'Contacto', urlItem: '/contact' }
];


interface HomeInfo {
    title: string;
    subtitle: string;
    description: string;
    botonCv?: string;
    botonGithub?: string;
    iconoGithub?: string;
    iconoDownload?: string;
}

export const homeData: HomeInfo ={
    title: "Hola, soy Nahuel Monti",
    subtitle: "Full Stack Developer",
    description: "Apasionado por crear experiencias web atractivas y funcionales. Me especializo en transformar ideas en realidad utilizando las últimas tecnologías de desarrollo web.",
    botonCv: "Descargar CV",
    botonGithub: "GitHub",
    iconoGithub: logoGithub,
    iconoDownload: logoDownload
};

interface Project {
    id: number;
    title: string;
    description: string;
    textButton?: string;
    urlProject?: string;
}

export const projectsData: Project[] = [
    { id: 1, title: "To-Do List", description: "To-do list desarrollado en Vue.js para el aprendizaje de la gestión de estados.", textButton: "Ir al Proyecto", urlProject: "/todo" },
    { id: 2, title: "Weather App", description: "Aplicación del clima utilizando la API de OpenWeatherMap.", textButton: "Ir al Proyecto", urlProject: "/weather" }
];