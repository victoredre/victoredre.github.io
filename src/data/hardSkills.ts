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
    icon: "astro_watch"
  },
  {
    name: "Palo Alto Network",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_paloalto"
  },
  {
    name: "Juniper",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_juniper"
  },
    {
    name: "Trend Micro",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_trendmicro"
  },
    {
    name: "Kaspersky",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_trendmicro"
  },
  {
    name: "Check Point",
    description: "My favorite database for modern apps",
    icon: "astro_checkpoint"
  }
];

export default hardSkills;
