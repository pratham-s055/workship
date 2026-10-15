import type { LandingContent } from "@/types/landing"

const frame = (
  caption: string,
  tone: LandingContent["gallery"][number]["tone"],
): LandingContent["gallery"][number] => ({
  alt: `Placeholder for ${caption.toLowerCase()} photography`,
  caption,
  src: null,
  tone,
})

export const landingContent = {
  hero: {
    headline: ["WORK SOMEWHERE", "WORTH SHOWING UP FOR."],
    primaryCta: "Explore the studio",
    secondaryCta: "Become a Workshipper",
    image: frame("The studio", "paper"),
  },
  chapters: [
    {
      id: "work",
      word: "WORK",
      kicker: "Focus",
      summary: "Desks and private offices for a day that needs your attention.",
      points: [
        "A desk you can settle into",
        "A private office when the work needs a door",
        "Room to stay with one thing",
      ],
      image: frame("A desk in the studio", "navy"),
    },
    {
      id: "create",
      word: "CREATE",
      kicker: "Make",
      summary: "Rooms for collaboration, workshops, and work that happens out loud.",
      points: [
        "A meeting room for a real conversation",
        "Space to build an idea with other people",
        "An open room for a session or a gathering",
      ],
      image: frame("A room arranged for collaboration", "warm"),
    },
    {
      id: "connect",
      word: "CONNECT",
      kicker: "People",
      summary: "A studio is a shared place. The work matters, and so does who is around it.",
      points: [
        "Other people, in the same place",
        "Shared tables and shared time",
        "Conversation as part of the day",
      ],
      image: frame("A shared table in the studio", "paper"),
    },
  ],
  workspaceTypes: [
    {
      name: "Private Office",
      summary: "A room of your own for work that needs quiet and a door.",
      image: frame("Private office", "navy"),
    },
    {
      name: "Dedicated Desk",
      summary: "The same desk, ready when you return.",
      image: frame("Dedicated desk", "warm"),
    },
    {
      name: "Hot Desk",
      summary: "A desk for the day you are in.",
      image: frame("Hot desk", "paper"),
    },
    {
      name: "Meeting Room",
      summary: "A room for a conversation that should not happen at the desk.",
      image: frame("Meeting room", "navy"),
    },
    {
      name: "Conference Room",
      summary: "A larger room when more people need to gather.",
      image: frame("Conference room", "warm"),
    },
    {
      name: "Event / Collaboration Space",
      summary: "An open room for a workshop, a showcase, or a long session together.",
      image: frame("Event and collaboration space", "paper"),
    },
  ],
  plans: {
    pendingLabel: "Plans coming soon",
    note: "Rates will be published here, without a change to this layout.",
    slots: [
      {
        name: "A day in the studio",
        summary: "For a visit, a meeting, or a stretch of focused work.",
        price: null,
      },
      {
        name: "A desk to return to",
        summary: "For someone who wants the same place, more than once.",
        price: null,
      },
      {
        name: "A room of your own",
        summary: "For work that needs a private office.",
        price: null,
      },
    ],
  },
  amenities: {
    heading: "A day, considered",
    summary: "The studio is organized around focus, making, and time with other people.",
    groups: [
      {
        index: "01",
        title: "The work day",
        items: ["Desks", "Private rooms", "Space to concentrate"],
      },
      {
        index: "02",
        title: "The making",
        items: ["Meeting rooms", "Open tables", "Room to collaborate"],
      },
      {
        index: "03",
        title: "The stay",
        items: ["Daylight", "A place to pause", "Comfort between sessions"],
      },
    ],
    image: frame("The studio in daylight", "warm"),
  },
  gallery: [
    frame("The studio", "navy"),
    frame("A quiet desk", "warm"),
    frame("A meeting room", "paper"),
    frame("Shared space", "navy"),
    frame("An open room", "warm"),
  ],
  location: {
    heading: "The studio",
    address: null,
    access: null,
    pendingLabel: "Location details coming soon",
  },
  closing: {
    headline: "READY TO BECOME A WORKSHIPPER?",
    cta: "Explore the studio",
  },
} satisfies LandingContent
