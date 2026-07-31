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
        school: "Ingenieria en Tecnologías de la Información y Comunicación. |",
        location: "Divición Telematica.",
        description: " Dirección: Circuito Universidad Tecnológica s/n, Colonia Benito Juárez, C.P. 57000, Ciudad Nezahualcóyotl, Estado de México | Espealidad: Desarrollo, Implementación e Integración de Servicios Ciberseguridad.",
        currentUni: false,
    },
];

export default education;
