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
        school: "Ing. Tecnologíasde la Informacióny Comunicación",
        location: "Estado de México",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        currentUni: true,
    },
];

export default education;
