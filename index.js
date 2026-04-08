require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { getResponse, getTriggeredResponse, getRandomOutburst } = require("./chris");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// --- Config ---
const TRIGGER_PHRASES = [
  "hey chris", "yo chris", "chris", "chrisbot",
  "hey chrisbot", "ok chris", "okay chris",
];
// Random outburst interval: between 30 and 90 minutes (in ms)
const MIN_OUTBURST_INTERVAL = 30 * 60 * 1000;
const MAX_OUTBURST_INTERVAL = 90 * 60 * 1000;
// Chance to randomly jump into a conversation (per message): 2%
const RANDOM_JUMP_IN_CHANCE = 0.02;

// Track channels the bot has seen activity in
const activeChannels = new Set();

// --- Bot Ready ---
client.once("ready", () => {
  console.log(`ChrisBot is online as ${client.user.tag}`);
  console.log(`Watching for triggers: ${TRIGGER_PHRASES.join(", ")}`);
  scheduleRandomOutburst();
});

// --- Message Handler ---
client.on("messageCreate", (message) => {
  // Ignore own messages
  if (message.author.bot) return;

  // Track active channels
  activeChannels.add(message.channelId);

  const content = message.content.toLowerCase().trim();

  // Check if Chris was directly addressed
  const wasAddressed = TRIGGER_PHRASES.some((phrase) => content.includes(phrase))
    || message.mentions.has(client.user);

  if (wasAddressed) {
    // Small delay so it feels more natural
    const delay = 1000 + Math.random() * 2000;
    setTimeout(() => {
      message.reply(getResponse());
    }, delay);
    return;
  }

  // Random chance to jump into any conversation
  if (Math.random() < RANDOM_JUMP_IN_CHANCE) {
    const delay = 2000 + Math.random() * 4000;
    setTimeout(() => {
      message.channel.send(getTriggeredResponse());
    }, delay);
  }
});

// --- Random Outbursts ---
function scheduleRandomOutburst() {
  const interval = MIN_OUTBURST_INTERVAL + Math.random() * (MAX_OUTBURST_INTERVAL - MIN_OUTBURST_INTERVAL);
  const minutes = Math.round(interval / 60000);
  console.log(`Next random outburst in ~${minutes} minutes`);

  setTimeout(async () => {
    // Pick a random active channel to yell into
    if (activeChannels.size > 0) {
      const channelIds = Array.from(activeChannels);
      const randomChannelId = channelIds[Math.floor(Math.random() * channelIds.length)];

      try {
        const channel = await client.channels.fetch(randomChannelId);
        if (channel) {
          await channel.send(getRandomOutburst());
          console.log(`Outburst sent to #${channel.name}`);
        }
      } catch (err) {
        console.error("Failed to send outburst:", err.message);
      }
    }

    // Schedule the next one
    scheduleRandomOutburst();
  }, interval);
}

// --- Login ---
client.login(process.env.DISCORD_TOKEN);
