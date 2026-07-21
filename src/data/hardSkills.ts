interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Fortinet",
    description: "FortiAnalyzer, FortiExtender, FortiManager, FortiSwitch,  FortiAP,  FortiWeb,  FortiGate,  FortiWifi",
    icon: "astro_t"
  },
  {
    name: "WatchGuard",
    description: "My favorite React framework for building modern web apps",
    icon: "astro_WatchGuard"
  },
  {
    name: "Palo Alto Network",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_palo"
  },
  {
    name: "Juniper",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "nodejs"
  },
    {
    name: "Trend Micro",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "nodejs"
  },
    {
    name: "Kaspersky",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "nodejs"
  },
  {
    name: "Check Point",
    description: "My favorite database for modern apps",
    icon: "mongodb"
  }
];

export default hardSkills;
