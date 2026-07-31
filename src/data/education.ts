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
        startDate: "2013-01-10",
        endDate: "2017-12-01",
        school: "Tecnologías de la Información y Comunicación",
        location: "Ciudad Nezahualcóyotl, Estado de Méx.",
        description: "Desarrollo, Implementación e Integración de Servicios Ciberseguridad.",
        currentUni: false,
    },
];

export default education;
