export const REGISTER = [
  "Email ID",
  "Name",
  "Create Password",
  "Verify Password",
];

export const LOGIN = [
  "Email ID",
  "Password",
];

export const FIELD_NAMES = {
  hometown: "hometown",
  favoriteFood: "favoriteFood",
  loveToDo: "loveToDo",
  messageIf: "messageIf",
  music: "music",
  bar: "bar",
};

export const COPY = {
  [FIELD_NAMES.hometown]: "Where did you grow up?",
  [FIELD_NAMES.favoriteFood]: "What’s your favorite food?",
  [FIELD_NAMES.loveToDo]: "What do you LOVE to do?",
  [FIELD_NAMES.messageIf]: "People should message you if they...",
  [FIELD_NAMES.music]: "What’s the last musician or band you got into?",
  [FIELD_NAMES.bar]: "What’s your favorite watering hole?",
};

export const FIELDS = {
  [FIELD_NAMES.hometown]: COPY[FIELD_NAMES.hometown],
  [FIELD_NAMES.favoriteFood]: COPY[FIELD_NAMES.favoriteFood],
  [FIELD_NAMES.loveToDo]: COPY[FIELD_NAMES.loveToDo],
  [FIELD_NAMES.messageIf]: COPY[FIELD_NAMES.messageIf],
  [FIELD_NAMES.music]: COPY[FIELD_NAMES.music],
  [FIELD_NAMES.bar]: COPY[FIELD_NAMES.bar],
};

export const STATIC_ESSAY_LINES = {
  [FIELD_NAMES.hometown]: "Originally from ",
  [FIELD_NAMES.favoriteFood]: "Cant get enough ",
  [FIELD_NAMES.loveToDo]: "I love to ",
  [FIELD_NAMES.messageIf]: "Send Me a message if you ",
  [FIELD_NAMES.music]: "I love listening to ",
  [FIELD_NAMES.bar]: "My favourite watering hole is ",
};
