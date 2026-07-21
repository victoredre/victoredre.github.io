interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Fortinet",
    description: "FortiAnalyzer, FortiExtender, FortiManager, FortiSwitch,  FortiAP,  FortiWeb,  FortiGate,  FortiWifi",
    icon: "astro_fortine"
  },
  {
    name: "WatchGuard",
    description: "My favorite React framework for building modern web apps",
    icon: "astro_watch"
  },
  {
    name: "Palo Alto Network",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "paloalto"
  },
  {
    name: "Juniper",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "astro_ juniper"
  },
    {
    name: "Trend Micro",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "youtube-fill"
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
