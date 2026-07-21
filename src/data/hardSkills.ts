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
    icon: "astro_W"
  },
  {
    name: "Palo Alto Network",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_p"
  },
  {
    name: "Juniper",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_j"
  },
    {
    name: "Trend Micro",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_m"
  },
    {
    name: "Kaspersky",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro"
  },
  {
    name: "Check Point",
    description: "My favorite database for modern apps",
    icon: "astro_c"
  }
];

export default hardSkills;
