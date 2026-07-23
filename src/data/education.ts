interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
    logo?: string; // ruta o URL de la imagen/logo
}

const education: Education[] = [
    {
        title: "Universidad Tecnológica de Nezahualcoyotl",
        startDate: "2013-09-01",
        endDate: "2018-08-01",
        school: "Tecnologías de la Información y Comunicaciones",
        location: "Edo. de México",
        description: "Especialidad en diseño, desarrollo, implementación e integración de servicios de ciberseguridad",
        currentUni: true,
        logo: "/images/utn-logo.png", // ajusta la ruta según dónde guardes el archivo
    },
];

export default education;
