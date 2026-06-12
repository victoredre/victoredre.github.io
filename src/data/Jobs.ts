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
            "Diseñé e impartí la capacitación para los ingenieros SOC,en la interpretación e identificación de vectores de ataque dentro de nuestra y fuera de la infraestructura",
            "Implementé un entorno virtual ESXi para migrar e implementar, ecosistemas Fortinet en multicapa por ejemplo la integración con CrowdStrike y Forescout, Forcepoint BeyondTrust acelerando un 40% el tiempo de implementación y minimizando errores",
            "Configuré pasarelas web en Forcepoint y Forescout frente a fugas de información e ingresos de dispositivos no autorizados agilizando la detección y contención de anomalías hasta un 20% en las brechas de seguridad",
                ],
        currentJob: false, 
    }, 
    {
        title: "Analista en Ciberguridad - Senior",
        startDate: "2018-03-10",
        endDate: "2020-03-10",
        company: "Círculo Daat S.A de C.V",
        location: "Integración de Soluciones en WatchGuard, Palo Alto, Fortinet, CheckPoint en arquitecturas on-premise",
        description: "Principales clientes Desarrolladora roca Mty, Instituto Real de Slp, Suprema Corte de Justicia de la Nación (SCJN), Mpio de progreso de Obregón Hlg, Mpio de corregidora Qro, Mpio de Juárez Oax",
        goals: [
            "Coordiné la entrega de soluciones perimetrales a  corto, mediano y largo plazo en la puesta de plataformas Palo Alto Networks y Check Point con 0 impacto operativo",
            "Reduje en un 20% el tiempo de atención y solución de TCK de soporte para usuarios finales gracias a una mejor clasificación de incidentes, logrando atender casos de soprote L1/L2", 
            "Automaticé de forma local Cloud/NAS para gestionar documentos, reportes y/o seguimientos donde se registran manuales de soporte, Mantenimiento la capacitación contante de los ingenieros y mitigando errores humanos",
            "Incrementé en un 35% la detección oportuna de fallas y caídas mediante el monitoreo constante de consolas de seguridad via Hostmonitor, logrando contener comportamientos sospechosos",
               ],
        currentJob: false,
    },
    {
        title: "Ing. Gestión, Administración e implementación de ciberseguridad- Senior ",
        startDate: "2018-03-10",
        endDate: "2020-03-10",
        company:  "Telefónica Tech S.A de C.V",
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
        title: "Ing. Gestión de Servicios en Seguridad Perimetral Jr.",
        startDate: "2021-09-10",
        endDate: "2017-03-10",
        company: "Scitum S.A de C.V",
        location: "Data Center Triara Qro.",
        description: "Administración de equipos ",
        goals: [
            "Developed and maintained web applications using React, NodeJs, and MongoDB.",
            "Worked with the team to develop and maintain web applications using React, NodeJs, and MongoDB.",
            "Created and maintained web applications using React, NodeJs, and MongoDB.",
        ],
        currentJob: false,
    },
];
export default workExperience;
