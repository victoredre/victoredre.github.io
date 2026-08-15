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
        description: "Principal cliente: Sector gubernamental Instituto Nacional de Migración",
        goals:  [
            "Diseñé e impartí la capacitación para los ingenieros SOC Junior para la interpretación e identificación de vectores de ataque dentro y fuera de la infraestructura de nuestro cliente Instituto Nacional de Migración",
            "Implementé un entorno virtual ESXi para migrar e implementar, ecosistemas Fortinet en multicapa por ejemplo la integración con CrowdStrike y Forescout, Forcepoint, BeyondTrust y Fortinet acelerando un 40% el tiempo de implementación y minimizando errores",
            "Configuré pasarelas web en Forcepoint y Forescout frente a fugas de información e ingresos de dispositivos no autorizados agilizando la detección y contención de anomalías hasta un 20% en las brechas de seguridad",
            "Gestione e Implemente equipos bajo el ecosistema Fortinet desplegando unidades como: (FortiADC, FortiWifi, FortiManager, FortiSwitch, FortiAnalyzer,  FortiNAC).",
            "Aseguré el cumplimiento de los SLAs , logrando un tiempo de contención menor a 15 minutos en alertas críticas en el tablero de Falcon",
                ],
        currentJob: false, 
    }, 
    {
        title: "Analista en Ciberguridad - Senior",
        startDate: "2024-05-10",
        endDate: "2023-03-10",
        company: "Círculo Daat S.A de C.V",
        location: "Integración en Soluciones de Arquitecturas On-premise",
        description: "Principales clientes: Desarrolladora roca Mty, Instituto Real de Slp, Suprema Corte de Justicia de la Nación (SCJN), Mpio de progreso de Obregón Hlg, Mpio de corregidora Qro, Mpio de Juárez Oax. ",
        goals: [
            "Implementé la entrega de soluciones perimetrales a  corto, mediano y largo plazo en la puesta de plataformas Fortinet, Palo Alto Networks y Check Point con 0 impacto operativo",
            "Reduje en un 20% el tiempo de atención y solución de TCK de soporte para usuarios finales gracias a una mejor clasificación de incidentes, logrando atender casos de soprote L1/L2", 
            "Automaticé de forma local Cloud/NAS para gestionar documentos, reportes y/o seguimientos donde se registran manuales de soporte, Mantenimiento la capacitación contante de los ingenieros y mitigando errores humanos",
            "Incrementé en un 35% la detección oportuna de fallas y caídas mediante el monitoreo constante de consolas de seguridad via Hostmonitor, logrando contener comportamientos sospechosos",
               ],
        currentJob: false,
    },
    {
        title: "Analista en Ciberseguridad - Senior.",
        startDate: "2021-10-10",
        endDate: "2023-09-17",
        company:  "Telefonica Tech S.A de C.V",
        location: "Arquitectura Multi-tenant B2B.",
        description: "Principales clientes: Gpo. Ciosa, Gpo. Bradescard, Grupo Atento, CI Banco, Gpo. Atento.",
        goals: [
            "Participé activamente en la atención de auditorías externas al SOC encargándome de presentar controles de cambios y aportando la trazabilidad de la operación.",
            "Migre e Implemente equipos bajo el ecosistema Fortinet desplegando unidades como: (FortiGate, FortiWifi, FortiEMS, FortiManager, FortiSwitch, FortiAP, FortiWeb, FortiAnalyzer, FortiExtender).",
            "Soporte de N1/N2 a ecosistemas híbridos con Palo Alto Networks con gestión a Panorama con PA-VM en la nube.",
            "Optimicé los controles de Monitoreo con Nagios, Host Monitor y Observium para la supervisor de Enlaces, LookBack, Servidores internos interna como externa Reforzando un 40% el manejo de incidentes.",
            "Logre la reducción de un 40% la identificación de anomalías en la red mediante la sintonización de filtros aislando solicitudes sospechosas en Trend Micro con Apex one y Deep Security.",
           ], 
        currentJob: false,
    },
    {
        title: "Ing. Gestión, Seguridad Perimetral Jr.",
        startDate: "2017-12-10",
        endDate: "2021-10-10",
        company: "Scitum S.A de C.V",
        location: "Data Center Triara Queretaro.",
        description: "Principales clientes: Gpo. Bimbo, Milano, Grupo Sears, Banamex, Opticas Lux, Municipio de Ojacuba Hlgo, Walmart de México.",
        goals: [
            "Configuré e implemente equipos como FortiGate, FortiManagerment, FortiAnalyzer, FortiEMS, FortiSwitch, FortiAP, FortiWiFi, FortiExtender, FortiADC, FortiWeb) en entornos de alta disponibilidad asi como WatchGuard Firebox T y M-Series junto con unidades Juniper routers PTX y ACX. en proyectos para sector privado, financiero y gobierno.",          
            "Regule el ciclo completo de los TCK con nuestros fabricantes (Juniper, Fortinet, WatchGuard) en RMA's. Paralelamente, me encargué de la configuración y el envío de equipos de contingencia desde nuestro inventario, con el fin de no afectar la operación de nuestros clientes.",
            "Optimicé las plataformas de monitoreo Nagios, HostMonitor y Observium, logrando una visibilidad del 100% de nuestros enlaces ISP y una segmentación efectiva de los brazos de FW internos, monitoreados a través de loopback's desde nuestro SOC asignando un control de IP's y aumentando la disponibilidad de nuestro servicio.",
            "Coordiné cambios críticos en producción durante ventanas de mantenimiento, abarcando actualizaciones de firmware, reconexión y/o Creación de VPN's SSL/IPsec/VPN-GRE, ajustes de NAT en túneles VPN, configuración de VDOM's, ruteo en cascada, agrupación de políticas de antivirus, filtrado web y application control. SD-WAN con enlaces en DHCP, Estaticas y/o PPPoE modo puente, Aseguré el 100% de la operatividad y ejecuté rigurosamente los planes de rollback para mitigar riesgos ante cualquier contingencia.",
        ],
        currentJob: false,
    },
];
export default workExperience;
