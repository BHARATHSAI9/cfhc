// excuse buster config. data only, no logic, so adding more never touches main.js.
// tuned for our actual crowd around hitec city: it folks, business owners and homemakers.
// keep the tone cheeky but kind, and let the reply always nudge them to just show up.
// each entry is [the excuse, our comeback].

const EXCUSES = [
  // the it crowd
  ["My calendar is back-to-back meetings.", "Ours is a 6am meeting with a barbell, and nobody declines that one. Book the early slot."],
  ["I'm on US shift, I'm up half the night.", "The box is open 6am to 9pm. There's a class for whatever your body clock is doing."],
  ["I'm on call this week.", "The whole class is one hour. Even prod gives you that much. Come between deploys."],
  ["Working from home, I never leave my chair.", "Nine hours in that chair is the real injury. Come stand up, we'll teach the rest."],
  ["Deadline this sprint, maybe next one.", "There's always a next sprint, that's the whole point of them. Start today, we'll scale it."],
  ["My standup ran over again.", "Ours starts on time and ends with you on the floor. Try the evening class."],

  // business owners and the self employed
  ["I run my own business, there's no off switch.", "Exactly why you need one hour that's only yours. The business survives without you for that long, promise."],
  ["Let me get through this quarter first.", "The next quarter is busy too. And the one after that. First class is free, come see."],
  ["I travel for work all the time.", "The home WODs on this site need zero equipment. And the box is here the day you land."],

  // homemakers
  ["Between the kids and the house, there's no time for me.", "One hour for you makes the whole day run better. The morning slots are built for exactly this."],
  ["By evening I'm drained from housework.", "That's not fitness, that's just tired. Come build the kind of strong that housework stops draining."],
  ["I'll start once the kids are older.", "They're watching now. Show them what strong looks like. Bring them along, we don't mind."],
  ["Who'll run the house if I'm at the gym?", "The same people who manage while you nap. You're allowed one hour. Take it."],

  // very hyderabad
  ["Have you seen HITEC City traffic?", "You're already inside ITPH for work. Just walk over. Zero traffic, zero excuse."],
  ["I love my biryani too much.", "Good. Train hard enough and biryani turns into fuel instead of guilt. Come earn the double serving."],
  ["It's too hot in Hyderabad.", "The box is air conditioned and the only thing making you sweat is the workout. Come in from the heat."],
  ["It's raining, maybe tomorrow.", "Tomorrow it'll be something else. The box has a roof. See you at the 6pm."],
  ["There's a family function this week.", "There's always a function. Sneak in one class between the sweets. Future you says thanks."],
  ["I'll start after the festival.", "Sankranti, Ugadi, Diwali, there's always a next one. Start now and celebrate stronger."],

  // the timeless classics
  ["I'm too tired after work.", "So are we. We show up anyway. See you at 6am."],
  ["I don't know how to do CrossFit.", "Nobody did on day one. Now they deadlift twice their bodyweight. First class is free."],
  ["I need to get fit before I start.", "That's like tidying up before the cleaner arrives. Just come as you are."],
  ["I'm scared of getting injured.", "Sitting at a desk nine hours a day is also an injury, just slower. We coach every single rep."],
  ["I'm not the gym type.", "Neither was the guy who showed up in office clothes. He coaches here now."],
  ["I'll start on Monday.", "Monday called. It says stop using it as a scapegoat."],
];
