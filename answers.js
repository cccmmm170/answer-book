const answersDB = {
  "温柔肯定": [
    { zh: "是的，去做吧", en: "Yes, go for it", msg: "你已经在心里反复确认过很多次了。此刻需要的不是更多证明，而是给自己一次开始的机会。" },
    { zh: "答案是肯定的", en: "The answer is yes", msg: "如果这件事让你眼里有光，就不要轻易把它放回黑暗里。" },
    { zh: "大胆一点", en: "Be a little braver", msg: "你不需要等到完全准备好。很多路，都是走上去之后才慢慢变清楚的。" },
    { zh: "现在就可以开始", en: "You can start now", msg: "从一个很小的动作开始，也是在向命运表明：我准备好了。" },
    { zh: "这会是一个好选择", en: "This will be a good choice", msg: "不是所有正确的选择一开始都轻松，但它会慢慢把你带向更大的自己。" },
    { zh: "你的直觉没有错", en: "Your intuition is right", msg: "那个很轻很轻的声音，其实已经陪你走过了很多关键时刻。" },
    { zh: "机会正在靠近你", en: "Opportunity is near", msg: "请保持打开的状态。你以为的偶然，也许是生活悄悄安排好的入口。" },
    { zh: "可以相信这一次", en: "Trust this time", msg: "过去的失望不该替未来做决定。这一次，允许事情有一个新的结果。" },
    { zh: "去拥抱变化", en: "Embrace change", msg: "变化不是来拆散你的，它可能是为了把你带回真正适合你的地方。" },
    { zh: "你值得拥有它", en: "You deserve it", msg: "不要因为习惯了将就，就忘了自己也值得被认真对待。" },
    { zh: "光会照进来", en: "Light will come in", msg: "你现在看不清的地方，不代表永远没有答案。再往前一点，天会亮。" },
    { zh: "这条路值得一试", en: "This path is worth trying", msg: "哪怕结果未知，认真走过的路也不会白走，它会把经验和勇气留给你。" }
  ],
  "耐心等待": [
    { zh: "再等一等", en: "Wait a little longer", msg: "不是所有延迟都是拒绝。有些答案，需要时间把它变得更适合你。" },
    { zh: "现在还不是时候", en: "Not yet", msg: "别急着推开那扇门。等风向对了，你会更轻松地走进去。" },
    { zh: "先把心安顿好", en: "Settle your heart first", msg: "当内心太吵时，任何答案都会显得模糊。先照顾好自己，答案会慢慢浮现。" },
    { zh: "事情还在酝酿", en: "It is still forming", msg: "你看见的是停滞，生活看见的是发酵。请给它一点时间。" },
    { zh: "别急着决定", en: "Don't rush the decision", msg: "真正属于你的，不会因为你慢一点就离开。" },
    { zh: "等一个更清晰的信号", en: "Wait for a clearer sign", msg: "如果你现在还很犹豫，那就说明还有信息没有抵达。" },
    { zh: "慢下来，会更快", en: "Slow down to go faster", msg: "把节奏放慢，不是退后，而是为了更稳地抵达。" },
    { zh: "先不要强求", en: "Do not force it", msg: "有些东西越用力越远，松一点，反而会给它靠近你的空间。" },
    { zh: "时机正在路上", en: "The timing is on its way", msg: "请相信，你没有被落下，只是在等一个更适合你的时间点。" },
    { zh: "答案会自己出现", en: "The answer will appear", msg: "当你不再逼问生活，生活反而会在某个普通瞬间给你回应。" }
  ],
  "自我疗愈": [
    { zh: "先抱抱自己", en: "Hold yourself first", msg: "你已经撑了很久。今天不必证明什么，先允许自己柔软一点。" },
    { zh: "你已经很好了", en: "You are already enough", msg: "别总用还没做到的事否定自己。你走到这里，本身就很了不起。" },
    { zh: "不必讨好所有人", en: "You don't need to please everyone", msg: "真正爱你的人，不会要求你一直委屈自己。" },
    { zh: "允许自己慢一点", en: "Allow yourself to be slow", msg: "你的节奏不需要和任何人一样。花会按照自己的季节开放。" },
    { zh: "这不是你的错", en: "This is not your fault", msg: "请不要把所有遗憾都归咎于自己。你只是当时已经尽力了。" },
    { zh: "你值得被温柔对待", en: "You deserve tenderness", msg: "如果世界暂时粗糙，那你更要成为自己身边最柔软的地方。" },
    { zh: "放过自己", en: "Let yourself go", msg: "一直责备自己不会让过去变好，只会让现在更累。可以停下了。" },
    { zh: "你不需要完美", en: "You don't need to be perfect", msg: "被爱不是因为完美，而是因为你真实地存在着。" },
    { zh: "先好好休息", en: "Rest well first", msg: "疲惫的时候，不要做人生重大判决。睡一觉，世界会温柔一点。" },
    { zh: "你正在恢复", en: "You are healing", msg: "即使很慢，也没有关系。伤口会结痂，心也会重新长出力量。" },
    { zh: "别再为难自己", en: "Stop being hard on yourself", msg: "你已经够努力了。今天，可以对自己宽容一点。" },
    { zh: "你的感受很重要", en: "Your feelings matter", msg: "不要总是压下自己的委屈。被看见的情绪，才有机会被安放。" }
  ],
  "爱情关系": [
    { zh: "先爱自己", en: "Love yourself first", msg: "当你开始认真爱自己，才会更清楚谁是真的在爱你。" },
    { zh: "勇敢表达", en: "Express bravely", msg: "有些心意，如果一直藏着，就只能永远停在猜测里。" },
    { zh: "对的人会让你安心", en: "The right person brings peace", msg: "爱不是长期的患得患失，而是让你更愿意成为自己。" },
    { zh: "不要追逐忽冷忽热", en: "Do not chase uncertainty", msg: "真正珍惜你的人，不会让你一直猜自己重不重要。" },
    { zh: "真诚会被看见", en: "Sincerity will be seen", msg: "你认真付出的爱，不会消失。它要么被回应，要么教会你更好地爱自己。" },
    { zh: "缘分正在靠近", en: "Fate is approaching", msg: "请不要因为一次错过，就怀疑所有相遇。属于你的温柔正在路上。" },
    { zh: "珍惜眼前的温柔", en: "Cherish present tenderness", msg: "有些幸福不是轰轰烈烈，而是有人愿意认真听你说话。" },
    { zh: "爱需要双向奔赴", en: "Love needs both sides", msg: "你可以主动，但不必一个人完成两个人的关系。" },
    { zh: "别把自己弄丢", en: "Don't lose yourself", msg: "好的爱会让你更完整，而不是让你一点点忘记自己。" },
    { zh: "心动值得被认真对待", en: "Feelings deserve care", msg: "喜欢不是丢脸的事。承认心动，也是靠近真实自己的方式。" }
  ],
  "事业财富": [
    { zh: "你的努力会有回声", en: "Your effort will echo", msg: "很多结果不是没有发生，只是在你看不见的地方慢慢累积。" },
    { zh: "继续积累", en: "Keep building", msg: "现在的每一次练习，都会在未来某个时刻替你说话。" },
    { zh: "贵人会出现", en: "Help will appear", msg: "当你持续认真做事，合适的人会在合适的时候看见你。" },
    { zh: "换个方法试试", en: "Try another method", msg: "不是你不行，也许只是现在的方法不适合你。" },
    { zh: "专注最重要的事", en: "Focus on what matters", msg: "把能量收回来，放到真正能改变局面的地方。" },
    { zh: "你离突破不远了", en: "Breakthrough is near", msg: "最想放弃的时候，往往也是旧局面快要松动的时候。" },
    { zh: "别低估自己", en: "Don't underestimate yourself", msg: "你拥有的能力，比你愿意承认的更多。" },
    { zh: "稳一点，会更好", en: "Be steady", msg: "快不一定赢，稳住节奏的人，才更容易走到最后。" },
    { zh: "选择长期价值", en: "Choose long-term value", msg: "短期的热闹会过去，真正的积累会留下。" },
    { zh: "钱会流向清晰的人", en: "Money follows clarity", msg: "当你知道自己要什么，资源会更容易找到你。" }
  ],
  "生活指引": [
    { zh: "出去走走", en: "Go for a walk", msg: "很多困住你的念头，会在风里慢慢散开。" },
    { zh: "今天适合重新开始", en: "Today is for restarting", msg: "不需要等新年、生日或某个完美时刻。现在就可以。" },
    { zh: "整理一下生活", en: "Tidy your life", msg: "外在空间变清爽，内在也会跟着轻一点。" },
    { zh: "给重要的人发消息", en: "Text someone important", msg: "有些关系，不需要盛大的理由，只需要一句我想起你了。" },
    { zh: "好好吃饭", en: "Eat well", msg: "照顾身体，也是照顾灵魂。别让自己一直空着。" },
    { zh: "睡一觉再说", en: "Sleep on it", msg: "夜晚会放大情绪，明天醒来，你会更接近真实答案。" },
    { zh: "记录此刻", en: "Write this moment down", msg: "把心里的话写下来，你会发现自己其实比想象中清楚。" },
    { zh: "去做一点开心的事", en: "Do something joyful", msg: "快乐不是奢侈品，它是你继续生活的能量。" },
    { zh: "少一点消耗", en: "Reduce what drains you", msg: "远离让你反复怀疑自己的人和事，也是一种自救。" },
    { zh: "生活正在回应你", en: "Life is responding", msg: "请留意那些小小的好事，它们是生活递来的暗号。" }
  ],
  "深夜回声": [
    { zh: "答案藏在安静里", en: "The answer lives in silence", msg: "当你不再急着寻找，它会在某个很轻的瞬间浮出来。" },
    { zh: "不要急着证明", en: "Do not rush to prove", msg: "真正属于你的东西，不需要你用力向所有人解释。" },
    { zh: "今晚先放下", en: "Let it go tonight", msg: "有些问题白天想不通，夜晚也不用硬撑。交给明天的光。" },
    { zh: "你正在被保护", en: "You are being protected", msg: "有些失去看似遗憾，其实是在替你避开更大的消耗。" },
    { zh: "命运没有忘记你", en: "Fate has not forgotten you", msg: "只是它递来的礼物，有时候会晚一点抵达。" },
    { zh: "先别下结论", en: "Do not conclude yet", msg: "故事还没有走到最后一页，现在看到的并不是全部。" },
    { zh: "你会重新发光", en: "You will shine again", msg: "不是回到过去的样子，而是长成更安静、更坚定的光。" },
    { zh: "风会改变方向", en: "The wind will change", msg: "此刻逆风，不代表永远逆风。请再给生活一点时间。" },
    { zh: "你需要的是空间", en: "You need space", msg: "离开嘈杂的声音，才能听见真正属于你的答案。" },
    { zh: "不要害怕重来", en: "Do not fear starting over", msg: "重来不是失败，是你终于愿意把自己放回正确的位置。" }
  ],
  "星辰指引": [
    { zh: "向前一步", en: "One step forward", msg: "你不需要看清整条路，只需要先让脚离开原地。" },
    { zh: "选择会带来答案", en: "Choice brings answers", msg: "一直站在原地，问题只会循环。做出选择，路才会回应你。" },
    { zh: "不要压低自己的光", en: "Do not dim your light", msg: "为了让别人舒服而缩小自己，最后会让你忘记本来的样子。" },
    { zh: "好运正在靠近", en: "Luck is approaching", msg: "它也许不是突然降临，而是通过一个人、一句话、一个机会靠近你。" },
    { zh: "相信那个预感", en: "Trust that feeling", msg: "你身体里的直觉，往往比头脑更早知道真相。" },
    { zh: "这不是终点", en: "This is not the end", msg: "现在的停顿只是命运换气，不是故事结束。" },
    { zh: "答案会在路上出现", en: "Answers appear on the way", msg: "先走起来吧。有些门，只有靠近之后才会显现。" },
    { zh: "别回到旧循环", en: "Do not return to old cycles", msg: "你已经知道那里会让你疼，就不要再把自己交回去。" },
    { zh: "你的愿望被听见了", en: "Your wish has been heard", msg: "请用行动回应它，让愿望有落地的地方。" },
    { zh: "保持神秘感", en: "Keep a little mystery", msg: "不是所有计划都要提前告诉世界。让结果替你说话。" }
  ],
  "选择之门": [
    { zh: "选让你变轻的", en: "Choose what makes you lighter", msg: "真正适合你的路，不一定没有困难，但不会长期让你失去自己。" },
    { zh: "不要选恐惧", en: "Do not choose from fear", msg: "如果一个决定只是为了逃避害怕，请再等等，让心清楚一点。" },
    { zh: "选长期安心", en: "Choose long-term peace", msg: "短暂的刺激会过去，能让你安稳成长的才值得留下。" },
    { zh: "答案偏向改变", en: "The answer leans toward change", msg: "你已经在原地停太久了，新的风需要一个入口。" },
    { zh: "答案偏向保留", en: "The answer leans toward staying", msg: "不是所有时候都要推翻重来。有些东西值得再修补一次。" },
    { zh: "听身体的反应", en: "Listen to your body", msg: "让你紧绷、窒息、反复怀疑的，也许并不是真的适合你。" },
    { zh: "先选自己", en: "Choose yourself first", msg: "你不是自私，你只是终于不再把自己放到最后。" },
    { zh: "别被表象骗了", en: "Do not trust appearances", msg: "再靠近一点看，真相可能和你以为的不一样。" },
    { zh: "保留一点余地", en: "Leave some room", msg: "不要把话说死，也不要把门关尽。命运喜欢留白。" },
    { zh: "这次别逃避", en: "Do not run this time", msg: "有些问题追上你，不是为了惩罚你，而是提醒你该面对了。" }
  ],
  "月光低语": [
    { zh: "温柔一点", en: "Be gentler", msg: "对别人温柔之前，也请先把一部分温柔留给自己。" },
    { zh: "允许答案慢慢来", en: "Let answers come slowly", msg: "不是所有启示都像雷声，有些像月光，安静地照亮你。" },
    { zh: "你可以停一下", en: "You may pause", msg: "暂停不是落后，是给灵魂一点重新对齐的时间。" },
    { zh: "别再消耗自己", en: "Stop draining yourself", msg: "那些反复让你低落的人和事，已经给过答案了。" },
    { zh: "放下过度解释", en: "Stop over-explaining", msg: "懂你的人不需要你讲到筋疲力尽，不懂的人也不会因为更多解释而改变。" },
    { zh: "你会被理解", en: "You will be understood", msg: "不是每个人都能理解你，但一定会有人愿意慢慢靠近你的世界。" },
    { zh: "别怀疑自己的珍贵", en: "Do not doubt your worth", msg: "你不是因为被选择才有价值，你本来就有。" },
    { zh: "让心先回来", en: "Let your heart return", msg: "你已经离自己的感受太远了。先回到自己这里。" },
    { zh: "今天不必逞强", en: "No need to be strong today", msg: "偶尔脆弱也没关系，月亮也有缺的时候。" },
    { zh: "梦会给你线索", en: "Dreams will give clues", msg: "留意最近反复出现的画面，潜意识正在和你说话。" }
  ]
};

(function enrichAnswersToAtLeast300() {
  const generated = [];
  const openings = [
    { zh: '星光正在靠近', en: 'Starlight is drawing near' },
    { zh: '月亮已经给出暗示', en: 'The moon has given a sign' },
    { zh: '命运正在重新排列', en: 'Fate is rearranging itself' },
    { zh: '风会把答案带来', en: 'The wind will bring the answer' },
    { zh: '你心里的光没有熄灭', en: 'The light in you has not gone out' },
    { zh: '沉默正在保护你', en: 'Silence is protecting you' },
    { zh: '这不是偶然', en: 'This is not a coincidence' },
    { zh: '新的门正在打开', en: 'A new door is opening' },
    { zh: '旧的能量正在离开', en: 'Old energy is leaving' },
    { zh: '你的愿望正在成形', en: 'Your wish is taking shape' },
    { zh: '答案会绕过迷雾', en: 'The answer will pass through the mist' },
    { zh: '时间会替你证明', en: 'Time will prove it for you' },
    { zh: '你正在穿过一段试炼', en: 'You are passing through a trial' },
    { zh: '直觉已经先一步抵达', en: 'Your intuition arrived first' },
    { zh: '宇宙听见了你的问题', en: 'The universe heard your question' },
    { zh: '这一次请相信自己', en: 'This time, trust yourself' },
    { zh: '好运藏在转弯处', en: 'Luck hides around the corner' },
    { zh: '你会遇见新的可能', en: 'You will meet new possibilities' },
    { zh: '心里的答案正在苏醒', en: 'The answer within is awakening' },
    { zh: '别急，光会回来', en: 'Do not rush, light will return' }
  ];

  const directions = [
    { zh: '先往前走一步', en: 'take one step forward' },
    { zh: '先把自己放在第一位', en: 'put yourself first' },
    { zh: '先让心安静下来', en: 'let your heart become quiet' },
    { zh: '不要再向旧路回头', en: 'do not return to the old path' },
    { zh: '给这件事一点时间', en: 'give this matter time' },
    { zh: '把答案交给明天', en: 'leave the answer to tomorrow' },
    { zh: '选择让你安心的方向', en: 'choose the direction that brings peace' },
    { zh: '远离让你消耗的声音', en: 'step away from draining voices' },
    { zh: '保留一点神秘和余地', en: 'keep some mystery and space' },
    { zh: '不要害怕重新开始', en: 'do not fear starting again' },
    { zh: '把注意力收回自己身上', en: 'bring attention back to yourself' },
    { zh: '等待更清晰的信号', en: 'wait for a clearer sign' },
    { zh: '相信慢慢发生的改变', en: 'trust slow changes' },
    { zh: '别为了答案弄丢自己', en: 'do not lose yourself for an answer' },
    { zh: '让结果自然浮现', en: 'let the result appear naturally' },
    { zh: '把话说给真正懂你的人', en: 'speak to those who truly understand' },
    { zh: '先暂停争执和拉扯', en: 'pause the struggle for now' },
    { zh: '选择长期温柔的东西', en: 'choose what is gentle in the long run' },
    { zh: '向那个让你发光的方向靠近', en: 'move toward what makes you shine' },
    { zh: '允许自己比计划慢一点', en: 'allow yourself to be slower than planned' }
  ];

  const messages = [
    '你不需要立刻看清全部，只要先确认下一步不会背叛自己。',
    '很多答案并不会大声出现，它会藏在你的轻松、平静和不再拧巴里。',
    '如果一件事反复让你怀疑自己的价值，它就不该继续占据你的全部心力。',
    '此刻的停顿不是失败，而是命运在替你重新校准方向。',
    '你已经撑过很多无人知晓的夜晚，所以这一次也会慢慢走出来。',
    '真正适合你的东西，不会长期让你觉得自己不够好。',
    '请别用过去的结局，惩罚未来还没有发生的可能。',
    '你心里最轻的那个选择，往往就是灵魂真正想去的方向。',
    '别急着把所有事情定性，故事还在继续，答案也还在生长。',
    '有些人和事离开，不是因为你不够好，而是它们已经不适合你的频率。',
    '你需要的不是更用力，而是更清醒地把能量放回自己身上。',
    '当你不再执着于某一种结果，新的可能才会有地方进入。',
    '请相信，此刻出现的提醒，是为了把你带回更完整的自己。',
    '你可以温柔，但不必一直委屈；你可以善良，但不必没有边界。',
    '如果答案暂时没有来，那就先照顾好身体和睡眠，清醒会带来光。',
    '命运喜欢勇敢的人，也喜欢愿意等待时机成熟的人。',
    '不要把一次不顺当成永远，风向本来就会变。',
    '你正在靠近一个更稳定、更明亮、更适合自己的版本。',
    '请留意最近反复出现的念头，它可能就是内心递来的信。',
    '有些门不需要撞开，等你成长到某个时刻，它会自己打开。'
  ];

  const existingCount = () => Object.values(answersDB).reduce((sum, items) => sum + items.length, 0);
  let i = 0;
  while (existingCount() + generated.length < 320) {
    const opening = openings[i % openings.length];
    const direction = directions[Math.floor(i / openings.length) % directions.length];
    const msg = messages[(i * 7) % messages.length];
    generated.push({
      zh: `${opening.zh}，${direction.zh}`,
      en: `${opening.en}; ${direction.en}`,
      msg
    });
    i++;
  }

  answersDB['星海签文'] = generated;
})();
