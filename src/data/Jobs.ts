/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Ing. Implementación en Soluciones de Ciberseguridad - Sentínel",
        startDate: "2025-03-10",
        endDate:   "2024-06-10",
        company: "IQsec S.A de C.V",
        location: " Gestión e Implementacion y Servicios de Ciberseguridad Multicapa ",
        description: "Sector gubernamental Instituto Nacional de Migración",
        goals:  [
            "Coordiné migraciones de Palo Alto, CheckPoint y Juniper al ecosistema Fortinet, 
            "Desarrollé entornos virtuales ESXi para mover grandes cantidades de datos un 35% ",  
            "Logre una reducción del 30% en falsos positivos y optimizando la eficiencia de equipos: Ivanti Neurons, CrowdStrike Falcon EDR, Forescout Continuum, Forcepoint DLP. 
                ],
        currentJob: false, 
    },
    {
        title: "Analista en Servicios de Seguridad Perimetral Senior",
        startDate: "2018-03-10",
        endDate: "2020-03-10",
        company: "Círculo Daat S.A de C.V",
        location: "Integración de Soluciones en WatchGuard, Palo Alto, Fortinet, CheckPoint en arquitecturas on-premise",
        description: "Principales clientes Desarrolladora roca Mty, Instituto Real de Slp, Suprema Corte de Justicia de la Nación (SCJN), Mpio de progreso de Obregón Hlg, Mpio de corregidora Qro, Mpio de Juárez Oax",
        goals: [
            "Developed and maintne5 ained web applications using React, NodeJs, and MongoDB.",
            "Worked with the team to develop and maintain web applications using React, NodeJs, and MongoDB.",
            "Created and maintained web applications using React, NodeJs, and MongoDB.",
               ],
        currentJob: false,
    },
    {
        title: "Analista ",
        startDate: "2018-03-10",
        endDate: "2020-03-10",
        company:  "Telefónica",
        location: "United States",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "Developed and maintained web applications using React, NodeJs, and MongoDB.",
            "Implementación de equipos.",
            "Capacitación de personal.",
           ], 
        currentJob: false,
    },
    {
        title: "Software Engineer",
        startDate: "2021-09-10",
        endDate: "2017-03-10",
        company: "Scitum S.A de C.V",
        location: "United States",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "Developed and maintained web applications using React, NodeJs, and MongoDB.",
            "Worked with the team to develop and maintain web applications using React, NodeJs, and MongoDB.",
            "Created and maintained web applications using React, NodeJs, and MongoDB.",
        ],
        currentJob: false,
    },
];
export default workExperience;
