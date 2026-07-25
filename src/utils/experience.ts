export interface ExperienceItem {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: {
        en: string;
        es: string;
    };
    technologies: string[];
    current: boolean;
    logo?: string;
}

export const EXPERIENCE: ExperienceItem[] = [
    {
        company: "Globant",
        role: "Java Developer Ssr Advanced",
        startDate: "2026-03",
        endDate: "Present",
        description: {
            en: "Working at Globant as a Java Developer Ssr Advanced, currently assigned to a Peruvian payment method client. Developing backend solutions using Java Spring Boot, Reactive Programming with Spring Webflux and Project Reactor, and Apache Kafka.",
            es: "Trabajando en Globant como Java Developer Ssr Advanced, actualmente asignado a un cliente peruano del sector de medios de pago. Desarrollando soluciones backend usando Java Spring Boot, Programación Reactiva con Spring Webflux y Project Reactor, y Apache Kafka.",
        },
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Webflux",
            "Project Reactor",
            "Apache Kafka",
        ],
        current: true,
        logo: "/logos/globant.png",
    },
    {
        company: "UTP",
        role: "Backend Developer", // Promoted from Trainee
        startDate: "2023-10",
        endDate: "2026-03",
        description: {
            en: "Led the backend development for the Postgraduate LMS (10k+ users). Optimized enrollment processing from hours to minutes, handling an increase from 20k to 1M requests. Integrated Active Directory for efficient candidate registration and mentored new team members in DevOps culture.",
            es: "Lideré el desarrollo backend del LMS de Postgrado (10k+ usuarios). Optimicé el procesamiento de matrículas de horas a minutos, gestionando un incremento de 20k a 1M de solicitudes. Integré Active Directory para agilizar el proceso de registro de postulantes y mentoreé a nuevos miembros en cultura DevOps.",
        },
        technologies: [
            "Java",
            "Spring Boot",
            "AWS",
            "Microservices",
            "Active Directory",
        ],
        current: false,
        logo: "/logos/utp.png",
    },
    {
        company: "UTP",
        role: "Trainee Full Stack Developer",
        startDate: "2023-05",
        endDate: "2023-10",
        description: {
            en: "Developed modular interfaces with TypeScript and React, adhering to Clean Architecture and SOLID principles. Integrated AWS X-Ray for microservices monitoring and optimized complex PostgreSQL queries using pganalyze for critical production issues.",
            es: "Desarrollé interfaces modulares con TypeScript y React, siguiendo Arquitectura Limpia y principios SOLID. Integré AWS X-Ray para monitoreo de microservicios y optimicé consultas complejas en PostgreSQL usando pganalyze para incidencias críticas en producción.",
        },
        technologies: [
            "TypeScript",
            "React",
            "AWS X-Ray",
            "PostgreSQL",
            "Clean Architecture",
        ],
        current: false,
        logo: "/logos/utp.png",
    },
    {
        company: "UTP",
        role: "Trainee Backend Developer",
        startDate: "2022-05",
        endDate: "2023-05", // Overlaps slightly with start of next role, standard transition period
        description: {
            en: "Implemented RESTful APIs with Spring Boot using Hexagonal Architecture, DDD, and CQRS. Developed serverless solutions on AWS with Node.js and improved database performance with stored procedures. Introduced the Object Mother pattern for standardized unit testing.",
            es: "Implementé APIs RESTful con Spring Boot usando Arquitectura Hexagonal, DDD y CQRS. Desarrollé soluciones serverless en AWS con Node.js y mejoré el rendimiento de base de datos con procedimientos almacenados. Introduje el patrón Object Mother para pruebas unitarias estandarizadas.",
        },
        technologies: [
            "Java",
            "Spring Boot",
            "AWS Lambda",
            "Node.js",
            "Hexagonal Architecture",
        ],
        current: false,
        logo: "/logos/utp.png",
    },
];
