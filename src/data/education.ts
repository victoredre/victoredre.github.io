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
        startDate: "2023-09-01",
        endDate: "2028-11-01",
        school: "Ingeniero en Tecnologías de la Información y Comunicaciónes",
        location: "Estado de México",
        description: "Espealidad en diseño, desarrollo, implementación e integración de servicios ciberseguridad",
        currentUni: true,
    },
];

export default education;
