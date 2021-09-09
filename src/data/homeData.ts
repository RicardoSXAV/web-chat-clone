export const users = [
  {
    name: "Tommy Spence",
    profileImage:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80",
    notifications: 24,
  },
  {
    name: "Mimi Dawson",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    notifications: 16,
  },
];

export const chatMessages = [
  {
    user: {
      name: "Malcolm Wooten",
      profileImage:
        "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=356&q=80",
      online: true,
    },
    messages: [
      {
        type: "text",
        content: "Hello dude!",
      },
      {
        type: "text",
        content: "How are you doing?",
      },
    ],
  },
  {
    user: {
      name: "Caterina",
      profileImage:
        "https://images.unsplash.com/photo-1539698103494-a76dd0436fbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      online: true,
    },
    messages: [
      {
        type: "text",
        content: "I'm going to sleep. Let's talk tomorrow!",
      },
      {
        type: "audio",
        content: "file-link",
      },
    ],
  },
  {
    user: {
      name: "Eduardo",
      profileImage:
        "https://images.unsplash.com/photo-1563584316028-2b70b3a3a8bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      online: false,
    },
    messages: [
      {
        type: "text",
        content: "I'll sell my house.",
      },
      {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    user: {
      name: "Misha Landry",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      online: false,
    },
    messages: [
      {
        type: "text",
        content: "Let me send you some cat pictures.",
      },
      {
        type: "image",
        content: [
          "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ],
      },
    ],
  },
  {
    user: {
      name: "Roger",
      profileImage:
        "https://images.unsplash.com/photo-1512544783971-fb9a0691eda5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      online: false,
    },
    messages: [
      { type: "text", content: "Hello, I don't have a clock." },
      {
        type: "text",
        content: "Can you tell me what time it is?",
      },
    ],
  },
];
