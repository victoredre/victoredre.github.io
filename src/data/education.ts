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
        endDate: "2017-08-01",
        school: "Carrera: Tecnologías de la Información y Comunicaciónes",
        location: "Direccion: Colonia Benito Juárez, C.P. 57000, Ciudad Nezahualcóyotl, Estado de México.",
        description: "Espealidad: Desarrollo, Implementación e Integración de Servicios Ciberseguridad.",
        currentUni: false,
    },
];

export default education;
