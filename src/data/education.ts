interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Universidad Tecnológica de Nezahualcoyotl",
        startDate: "2013-09-01",
        endDate: "2018-08-01",
        school: "Tecnologías de la Información y Comunicaciónes",
        location: "Edo. de México",
        description: "Espealidad en diseño, desarrollo, implementación e integración de servicios ciberseguridad",
        currentUni: true,
    },
];

export default education;
