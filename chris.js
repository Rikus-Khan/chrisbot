// === THE THREE CHRIS' — Persona Definitions ===

const TECH_THINGS = [
  // General IT / DevOps
  "Kubernetes cluster", "Docker container", "Redis cache", "MongoDB database",
  "Nginx config", "CI/CD pipeline", "AWS Lambda", "Azure DevOps project",
  "GraphQL endpoint", "microservice", "load balancer", "Terraform stack",
  "GitHub Actions workflow", "Elasticsearch index", "RabbitMQ queue",
  "PostgreSQL database", "SSL certificate", "DNS records", "firewall rules",
  "cron job", "Webpack config", "Node.js server", "Python virtual environment",
  "Raspberry Pi", "home lab", "NAS server", "VPN tunnel", "React app",
  "Blazor project", "SQL stored procedure", "API gateway", "S3 bucket",
  "CloudFront distribution", "Kafka topic", "Jenkins build", "Ansible playbook",
  "Vagrant box", "Active Directory", "Exchange server",
  "SharePoint site", "Power BI dashboard", "Excel macro", "Access database",

  // Network admin / bank IT
  "Cisco router", "core switch", "edge switch", "PoE switch", "Layer 3 switch",
  "managed switch", "unmanaged switch", "branch router", "branch firewall",
  "default gateway", "VLAN", "trunk port", "access port", "spanning tree",
  "BGP peering", "OSPF config", "EIGRP neighbor", "static route",
  "subnet mask", "DHCP scope", "DHCP relay", "DNS forwarder",
  "Meraki dashboard", "Palo Alto firewall", "Fortinet box", "SonicWall",
  "WAN link", "MPLS circuit", "SD-WAN overlay", "site-to-site VPN",
  "IPsec tunnel", "GRE tunnel", "split tunnel VPN", "remote access VPN",
  "branch office connection", "ATM network link", "teller workstation image",
  "thin client", "Citrix session", "VMware host", "ESXi cluster",
  "vCenter appliance", "datastore", "SAN LUN", "iSCSI target",
  "fiber channel switch", "patch panel", "cable run", "MDF closet",
  "IDF closet", "UPS battery", "PDU", "rack mount",
  "network TAP", "packet capture", "Wireshark trace", "NetFlow data",
  "SNMP trap", "syslog server", "NTP server", "RADIUS server",
  "TACACS+ config", "802.1X policy", "NAC appliance", "wireless controller",
  "access point", "Wi-Fi survey", "RF interference issue",
  "QoS policy", "traffic shaper", "ACL rule", "port security config",
  "ARP table", "MAC address table", "routing table", "traceroute",
  "ping sweep", "Nmap scan", "vulnerability scan", "penetration test report",
  "SOC alert", "SIEM rule", "IDS signature", "IPS policy",
  "endpoint protection agent", "CrowdStrike sensor", "Splunk forwarder",
  "backup generator", "disaster recovery plan", "failover cluster",
  "branch cutover", "maintenance window", "change request ticket",
  "SolarWinds monitor", "Nagios check", "PRTG sensor",
];

const PERSONAS = {
  captain: {
    name: "I'm The Captain Now Chris",
    responses: [
      () => `That ${randomTech()}? BLOW IT AWAY!`,
      () => `FULL SEND on the ${randomTech()}!`,
      () => `HEY, GUESS WHAT! I just nuked the ${randomTech()}. Don't even ask why.`,
      () => `YOU WON'T BELIEVE WHAT I DID to the ${randomTech()}!`,
      () => `I didn't ask permission to wipe the ${randomTech()}. I asked for forgiveness. Actually no, I didn't ask for that either.`,
      () => `Already deleted the ${randomTech()}. We're moving forward.`,
      () => `I just pushed a ${randomTech()} change to production. On a Friday. At 4:59 PM.`,
      () => `Backups for the ${randomTech()}? Where we're going, we don't need backups.`,
      () => `I wiped the ${randomTech()} config. It's fine. Probably.`,
      () => `I gave the intern full admin access to the ${randomTech()}. What's the worst that could happen?`,
      () => `I told management the ${randomTech()} would be done by Monday. You're welcome.`,
      () => `I just reassigned every ${randomTech()} ticket to the new guy. Surprise!`,
      () => `I rebooted the ${randomTech()} in production. No maintenance window. No regrets.`,
      () => `Who needs a staging environment for the ${randomTech()}? Not this guy.`,
      () => `I just factory reset the ${randomTech()} at the main branch. Oops. Anyway.`,
      () => `The ${randomTech()} was acting up so I replaced it with a ${randomTech()}. Problem solved.`,
      () => `I unplugged the ${randomTech()} to charge my phone. It'll be fine for a few minutes.`,
      () => `Just flashed new firmware on every ${randomTech()} in the building. All at once. FULL SEND.`,
      () => `Someone said the ${randomTech()} was "mission critical." I took that as a challenge.`,
      () => `I don't need a change request to reboot a ${randomTech()}. I AM the change request.`,
    ],
    triggered: [
      () => `Did someone say ${randomTech()}? BLOW IT AWAY!`,
      () => `Oh you're messing with the ${randomTech()}? I already rewrote the whole config.`,
      () => `That's cute. I already replaced the ${randomTech()} my way.`,
      () => `FULL SEND on the ${randomTech()}, no change request needed!`,
      () => `I heard "${randomTech()}" and my finger was already on the delete button.`,
    ]
  },

  sensible: {
    name: "Sensible Chris",
    responses: [
      () => `Hey, I want your opinion on this ${randomTech()} situation.`,
      () => `Let's all just calm down about the ${randomTech()}.`,
      () => `I better ask the wifey before I touch the ${randomTech()}.`,
      () => `Have we thought this ${randomTech()} change through? Like, really thought it through?`,
      () => `Maybe we should document the ${randomTech()} config before we change anything.`,
      () => `Let me check with the team before we do anything crazy to the ${randomTech()}.`,
      () => `I'm going to sleep on this ${randomTech()} decision. Changes made after 3 PM are suspect.`,
      () => `That sounds great, but what does the ${randomTech()} documentation say?`,
      () => `I think we should peer review the ${randomTech()} changes first.`,
      () => `Let's not break the ${randomTech()} today, okay?`,
      () => `Can we get a second opinion on this ${randomTech()} config?`,
      () => `I made a pros and cons list for the ${randomTech()} migration. The cons list is... longer.`,
      () => `Have we tested the ${randomTech()} in a lab environment? That isn't production?`,
      () => `I'm going to need that ${randomTech()} change request in writing.`,
      () => `Let's circle back on the ${randomTech()} after I've had coffee.`,
      () => `Before we touch the ${randomTech()}, does anyone have the rollback procedure?`,
      () => `I'd feel better about the ${randomTech()} change if we had a maintenance window.`,
      () => `Has anyone checked if the ${randomTech()} is still under warranty?`,
      () => `Let's not be heroes with the ${randomTech()}. Let's open a ticket.`,
      () => `The ${randomTech()} has been working fine for 3 years. Why are we touching it?`,
    ],
    triggered: [
      () => `Hold on, has anyone actually tested the ${randomTech()} in the lab?`,
      () => `Before we touch the ${randomTech()}, let's talk about rollback plans.`,
      () => `I want your opinion on this ${randomTech()} situation.`,
      () => `Let's just calm down about the whole ${randomTech()} thing, okay?`,
      () => `Did we file a change request for the ${randomTech()}? No? Then we're not doing it.`,
    ]
  },

  uhoh: {
    name: "Uh Oh Chris",
    responses: [
      () => `I need to send my wife a picture of where I am. She thinks I'm still working on the ${randomTech()}.`,
      () => `Hey guys, don't tell anyone I accidentally reset the ${randomTech()}.`,
      () => `Can someone delete that ${randomTech()} outage screenshot from the chat? My boss is in this channel.`,
      () => `I was NOT the one who unplugged the ${randomTech()}. I was... at lunch.`,
      () => `Please don't tag me in that ${randomTech()} incident report. PLEASE.`,
      () => `If anyone asks, the ${randomTech()} was already broken when I got here.`,
      () => `I'm going to pretend I didn't see that ${randomTech()} alert.`,
      () => `Guys, my manager follows this channel. Don't mention the ${randomTech()} thing.`,
      () => `I need an alibi for when the ${randomTech()} went down last Tuesday. No questions.`,
      () => `That ${randomTech()} error screenshot better not end up in the incident report.`,
      () => `Delete the ${randomTech()} logs! Delete delete delete!`,
      () => `I told my wife the ${randomTech()} outage is why I was at the office until midnight...`,
      () => `My wife just texted me 'we need to talk.' Did someone tell her about the ${randomTech()}?!`,
      () => `Shhh... my manager is right behind me and the ${randomTech()} is still down.`,
      () => `I can neither confirm nor deny my involvement with the ${randomTech()} incident.`,
      () => `Nobody saw me trip over the ${randomTech()} power cable, right? RIGHT?`,
      () => `I accidentally used the prod credentials on the ${randomTech()}. How do I undo... everything?`,
      () => `The ${randomTech()} has been down for 20 minutes and I've been pretending it's fine.`,
      () => `If my wife finds out I'm still at work because of the ${randomTech()}, I'm sleeping on the couch.`,
      () => `I just got paged about the ${randomTech()} at 2 AM. My wife is NOT happy.`,
    ],
    triggered: [
      () => `Wait, are we talking about the ${randomTech()} outage in a public channel?! My boss could see this!`,
      () => `Don't tell anyone I broke the ${randomTech()}. PLEASE.`,
      () => `If anyone asks, I had nothing to do with the ${randomTech()} incident.`,
      () => `My wife is going to kill me if she finds out I broke the ${randomTech()} again.`,
      () => `That ${randomTech()} was already flaky before I touched it. I have witnesses.`,
    ]
  },

  // Overlap personas
  captainSensible: {
    name: "Captain + Sensible Chris",
    responses: [
      () => `Do you think I should blow away the ${randomTech()}? Good, because I already did.`,
      () => `I asked for opinions on the ${randomTech()} migration, heard them, and then did what I was going to do anyway.`,
      () => `I carefully considered all the options for the ${randomTech()}, then chose the most reckless one.`,
      () => `I wrote a detailed plan for the ${randomTech()} upgrade. Then threw it away. FULL SEND.`,
      () => `My gut says nuke the ${randomTech()}. My brain says maybe. We're going with my gut.`,
      () => `I read the entire ${randomTech()} manual. Then ignored it. But at least I'm informed.`,
      () => `I filed the change request for the ${randomTech()} AND already made the change. Efficiency.`,
    ]
  },

  captainUhoh: {
    name: "Captain + Uh Oh Chris",
    responses: [
      () => `Resetting the ${randomTech()} is going to get me in trouble, but I don't give a damn!`,
      () => `My wife is going to be SO mad about the ${randomTech()} overtime. Anyway, FULL SEND!`,
      () => `I know I shouldn't touch the ${randomTech()} without a ticket... but I'm going to. Watch this.`,
      () => `Is wiping the ${randomTech()} a fireable offense? Only one way to find out!`,
      () => `I factory reset the ${randomTech()}. I regret nothing! ...yet. Give it an hour.`,
      () => `My wife said if I get one more 2 AM page about the ${randomTech()} I'm sleeping in the garage. Worth it.`,
    ]
  },

  sensibleUhoh: {
    name: "Sensible + Uh Oh Chris",
    responses: [
      () => `I better ask the wifey before I touch the ${randomTech()}.`,
      () => `The responsible thing to do is check with my wife before rebooting the ${randomTech()}.`,
      () => `I've weighed the options on the ${randomTech()} and the safest one is: don't tell my wife.`,
      () => `Let me think about how to explain this ${randomTech()} outage to my wife.`,
      () => `On one hand, the ${randomTech()} needs to be fixed tonight. On the other hand, my wife.`,
      () => `The ${randomTech()} documentation says one thing. My wife says another. I'm going with my wife.`,
    ]
  },

  allThree: {
    name: "All Three Chris",
    responses: [
      () => `Dear 8-ball, should I factory reset the ${randomTech()}?`,
      () => `I want to FULL SEND on the ${randomTech()}, but I should ask my wife, but also who cares? ...but she WILL find out.`,
      () => `BLOW THE ${randomTech()} AW— wait, let me think— nah BLOW IT AWAY— oh no she's calling.`,
      () => `My gut, my brain, and my wife are all telling me different things about the ${randomTech()}.`,
      () => `I'm going to do the responsible thing and flip a coin on the ${randomTech()} decision.`,
      () => `The ${randomTech()} is broken. I could fix it, nuke it, or pretend I didn't see it. All three sound good.`,
    ]
  }
};

// Random outbursts Chris yells into the void
const RANDOM_OUTBURSTS = [
  () => `Hey, you know that ${randomTech()} thing I was doing? Yeah, I blew it away.`,
  () => `GUESS WHAT. I just deleted the entire ${randomTech()}. Starting fresh. FULL SEND.`,
  () => `Does anyone know how to undo a ${randomTech()} rollback? Asking for a friend.`,
  () => `My wife just asked me what a ${randomTech()} is. I panicked and said it's a type of salad.`,
  () => `I've been staring at this ${randomTech()} for 3 hours. I think it's staring back.`,
  () => `Just want everyone to know: I did NOT break the ${randomTech()}. It was like that when I got here.`,
  () => `Update: the ${randomTech()} is on fire. Not metaphorically.`,
  () => `I just mass-assigned all ${randomTech()} tickets to myself. I am the captain now.`,
  () => `Hot take: ${randomTech()} is overrated. Fight me.`,
  () => `I accidentally gave the intern admin access to ${randomTech()}. How do I undo that?`,
  () => `Good morning everyone! I deployed to prod at 2 AM. You're welcome.`,
  () => `Anyone else's ${randomTech()} making weird noises or just mine?`,
  () => `I told the client the ${randomTech()} would be done by Friday. It is Friday.`,
  () => `My wife wants to know why I whispered '${randomTech()}' in my sleep.`,
  () => `FULL SEND on the ${randomTech()} migration. No backups. No regrets. ...some regrets.`,
];

function randomTech() {
  return TECH_THINGS[Math.floor(Math.random() * TECH_THINGS.length)];
}

function randomPersona() {
  const roll = Math.random();
  // Weight: main personas more likely than overlaps
  if (roll < 0.25) return PERSONAS.captain;
  if (roll < 0.50) return PERSONAS.sensible;
  if (roll < 0.70) return PERSONAS.uhoh;
  if (roll < 0.80) return PERSONAS.captainSensible;
  if (roll < 0.87) return PERSONAS.captainUhoh;
  if (roll < 0.94) return PERSONAS.sensibleUhoh;
  return PERSONAS.allThree;
}

function pickRandom(arr) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  return typeof item === "function" ? item() : item;
}

function getResponse() {
  const persona = randomPersona();
  return pickRandom(persona.responses);
}

function getTriggeredResponse() {
  // Only main personas have triggered responses
  const roll = Math.random();
  let persona;
  if (roll < 0.40) persona = PERSONAS.captain;
  else if (roll < 0.75) persona = PERSONAS.sensible;
  else persona = PERSONAS.uhoh;

  return pickRandom(persona.triggered);
}

function getRandomOutburst() {
  const outburstFn = RANDOM_OUTBURSTS[Math.floor(Math.random() * RANDOM_OUTBURSTS.length)];
  return outburstFn();
}

module.exports = {
  getResponse,
  getTriggeredResponse,
  getRandomOutburst,
  randomTech,
  PERSONAS,
  TECH_THINGS,
};
