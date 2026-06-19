import type { TypeCode } from "@/lib/diagnose";

export type ResultStats = {
  passion: 1 | 2 | 3 | 4 | 5;
  lead: 1 | 2 | 3 | 4 | 5;
  action: 1 | 2 | 3 | 4 | 5;
  express: 1 | 2 | 3 | 4 | 5;
};

export type DiagnosisResult = {
  code: TypeCode;
  name: string;
  catch: string;
  image: string;
  ogImage?: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  compatible: TypeCode[];
  stats: ResultStats;
};

export type ResultSupplement = {
  detail: string;
  behaviors: string[];
  advice: string;
};

export const results = {
  PLAE: {
    code: "PLAE",
    name: "情熱の勇者",
    catch: "好きになったら一直線。恋の冒険を自分から切り開く主人公タイプ。",
    image: "/characters/plae.png",
    ogImage: "/ogp/plae-ogp.png",
    description:
      "恋愛では直感と勢いを大切にし、自分の気持ちをまっすぐ伝えるタイプです。好きな人には積極的に関わり、関係を進める力があります。",
    strengths: ["行動力がある", "愛情表現が素直", "相手を楽しませる"],
    weaknesses: ["勢いで空回りしやすい", "相手のペースを見落とすことがある"],
    compatible: ["CRIM", "CLIM"],
    stats: { passion: 5, lead: 5, action: 5, express: 5 }
  },
  PLAM: {
    code: "PLAM",
    name: "恋の竜騎士",
    catch: "熱い想いを胸に秘め、ここぞという時に飛び立つロマンチスト。",
    image: "/characters/plam.png",
    ogImage: "/ogp/plam-ogp.png",
    description:
      "情熱的でありながら、自分の世界観も大切にするタイプです。恋愛では理想を持ち、特別な関係を築こうとします。",
    strengths: ["一途", "ロマンチック", "深い愛情を持つ"],
    weaknesses: ["理想が高くなりやすい", "気持ちを抱え込みやすい"],
    compatible: ["CRIE", "CLIE"],
    stats: { passion: 5, lead: 5, action: 5, express: 2 }
  },
  PLIE: {
    code: "PLIE",
    name: "恋の魔法剣士",
    catch: "言葉と直感で相手の心に斬り込む、情熱的な知略タイプ。",
    image: "/characters/plie.png",
    ogImage: "/ogp/plie-ogp.png",
    description:
      "恋愛では感情だけでなく、相手の心の動きもよく見ています。駆け引きや会話を通じて距離を縮めるのが得意です。",
    strengths: ["会話が上手い", "相手をよく観察できる", "雰囲気作りが得意"],
    weaknesses: ["考えすぎることがある", "試すような行動をしやすい"],
    compatible: ["CRAE", "CLAE"],
    stats: { passion: 5, lead: 5, action: 2, express: 5 }
  },
  PLIM: {
    code: "PLIM",
    name: "心炎の賢者",
    catch: "熱い心と深い洞察をあわせ持つ、恋の思想家。",
    image: "/characters/plim.png",
    ogImage: "/ogp/plim-ogp.png",
    description:
      "表には出しすぎないものの、内側には強い想いを持つタイプです。恋愛では相手との精神的なつながりを重視します。",
    strengths: ["深く愛せる", "相手の本質を見ようとする", "一途"],
    weaknesses: ["気持ちを言葉にするのが遅い", "重く考えすぎることがある"],
    compatible: ["CRAE", "CLAE"],
    stats: { passion: 5, lead: 5, action: 2, express: 2 }
  },
  PRAE: {
    code: "PRAE",
    name: "恋の踊り子",
    catch: "その場の空気を明るくする、自由で魅力的な恋の表現者。",
    image: "/characters/prae.png",
    ogImage: "/ogp/prae-ogp.png",
    description:
      "感情表現が豊かで、恋愛を楽しむ力があるタイプです。相手の反応を見ながら、自然に距離を縮めていきます。",
    strengths: ["明るい", "親しみやすい", "愛嬌がある"],
    weaknesses: ["気分に左右されやすい", "曖昧な関係になりやすい"],
    compatible: ["CLIM", "CRIM"],
    stats: { passion: 5, lead: 2, action: 5, express: 5 }
  },
  PRAM: {
    code: "PRAM",
    name: "恋の吟遊詩人",
    catch: "自由な心で愛を奏でる、感性豊かなロマンチスト。",
    image: "/characters/pram.png",
    ogImage: "/ogp/pram-ogp.png",
    description:
      "恋愛では感性や雰囲気を大切にします。束縛されすぎるより、自然体でいられる関係を好みます。",
    strengths: ["感性が豊か", "相手を癒やせる", "自然体で魅力的"],
    weaknesses: ["気持ちが読みにくい", "現実的な話を避けがち"],
    compatible: ["CLIE", "CRIE"],
    stats: { passion: 5, lead: 2, action: 5, express: 2 }
  },
  PRIE: {
    code: "PRIE",
    name: "恋の占星術師",
    catch: "相手の心を読み、絶妙な距離感で惹きつけるミステリアスタイプ。",
    image: "/characters/prie.png",
    ogImage: "/ogp/prie-ogp.png",
    description:
      "観察力があり、相手の気持ちや空気を読むのが得意です。恋愛では近づきすぎず離れすぎない独特の魅力があります。",
    strengths: ["空気が読める", "ミステリアス", "聞き上手"],
    weaknesses: ["本音が見えにくい", "受け身になりすぎることがある"],
    compatible: ["CLAE", "CRAE"],
    stats: { passion: 5, lead: 2, action: 2, express: 5 }
  },
  PRIM: {
    code: "PRIM",
    name: "恋の夢魔導士",
    catch: "心の奥に幻想の城を持つ、繊細で深い恋愛タイプ。",
    image: "/characters/prim.png",
    ogImage: "/ogp/prim-ogp.png",
    description:
      "恋愛では内面のつながりや特別感を重視します。静かに相手を想い、ゆっくり深い関係を築いていきます。",
    strengths: ["繊細", "想像力がある", "深い愛情を持つ"],
    weaknesses: ["不安を抱え込みやすい", "受け身でチャンスを逃しやすい"],
    compatible: ["CLAE", "CRAE"],
    stats: { passion: 5, lead: 2, action: 2, express: 2 }
  },
  CLAE: {
    code: "CLAE",
    name: "恋の王国騎士",
    catch: "誠実に守り、まっすぐ支える。安心感のある恋の騎士。",
    image: "/characters/clae.png",
    ogImage: "/ogp/clae-ogp.png",
    description:
      "恋愛では誠実さと安定感を大切にします。相手を大切にし、約束や信頼を守ることで関係を育てます。",
    strengths: ["誠実", "責任感がある", "安心感がある"],
    weaknesses: ["少し堅くなりやすい", "恋の変化に慎重すぎる"],
    compatible: ["PLIE", "PLIM"],
    stats: { passion: 2, lead: 5, action: 5, express: 5 }
  },
  CLAM: {
    code: "CLAM",
    name: "恋の守護聖騎士",
    catch: "静かな愛で大切な人を守る、献身的なガーディアン。",
    image: "/characters/clam.png",
    ogImage: "/ogp/clam-ogp.png",
    description:
      "落ち着いた愛情を持ち、相手を支えることに喜びを感じるタイプです。派手ではなくても深く信頼されます。",
    strengths: ["献身的", "安定している", "包容力がある"],
    weaknesses: ["我慢しすぎる", "自分の希望を後回しにしやすい"],
    compatible: ["PLAE", "PRAE"],
    stats: { passion: 2, lead: 5, action: 5, express: 2 }
  },
  CLIE: {
    code: "CLIE",
    name: "恋の軍師",
    catch: "感情に流されず、関係を丁寧に育てる知性派タイプ。",
    image: "/characters/clie.png",
    ogImage: "/ogp/clie-ogp.png",
    description:
      "恋愛でも冷静に状況を見て、相手との関係を大切に進めます。長期的な信頼関係を築くのが得意です。",
    strengths: ["冷静", "計画的", "信頼関係を築ける"],
    weaknesses: ["慎重すぎる", "感情表現が控えめ"],
    compatible: ["PLAM", "PRAM"],
    stats: { passion: 2, lead: 5, action: 2, express: 5 }
  },
  CLIM: {
    code: "CLIM",
    name: "恋の大賢者",
    catch: "静かに深く愛を見つめる、恋愛の哲学者。",
    image: "/characters/clim.png",
    ogImage: "/ogp/clim-ogp.png",
    description:
      "恋愛では内面の相性や価値観を重視します。すぐに燃え上がるより、時間をかけて信頼を育てます。",
    strengths: ["思慮深い", "誠実", "長続きしやすい"],
    weaknesses: ["慎重で進展が遅い", "考えすぎる"],
    compatible: ["PLAE", "PRAE"],
    stats: { passion: 2, lead: 5, action: 2, express: 2 }
  },
  CRAE: {
    code: "CRAE",
    name: "恋の白魔道士",
    catch: "やさしく寄り添い、相手の心を回復させる癒やしタイプ。",
    image: "/characters/crae.png",
    ogImage: "/ogp/crae-ogp.png",
    description:
      "相手の気持ちを大切にしながら、やさしく愛情を表現するタイプです。安心できる空気を作るのが得意です。",
    strengths: ["優しい", "聞き上手", "安心感を与える"],
    weaknesses: ["相手に合わせすぎる", "自分の本音を後回しにしやすい"],
    compatible: ["PLIE", "PLIM"],
    stats: { passion: 2, lead: 2, action: 5, express: 5 }
  },
  CRAM: {
    code: "CRAM",
    name: "恋の薬草師",
    catch: "穏やかな愛で日々を癒やす、自然体のサポーター。",
    image: "/characters/cram.png",
    ogImage: "/ogp/cram-ogp.png",
    description:
      "恋愛では無理のない関係を大切にします。派手な刺激よりも、日常の中にある安心やぬくもりを重視します。",
    strengths: ["穏やか", "癒やし系", "自然体"],
    weaknesses: ["受け身になりやすい", "刺激が少ないと思われることがある"],
    compatible: ["PLAE", "PLAM"],
    stats: { passion: 2, lead: 2, action: 5, express: 2 }
  },
  CRIE: {
    code: "CRIE",
    name: "恋の司書",
    catch: "相手を理解し、言葉でそっと支える静かな知性派。",
    image: "/characters/crie.png",
    ogImage: "/ogp/crie-ogp.png",
    description:
      "観察力と共感力があり、相手の話を丁寧に受け止めるタイプです。恋愛では安心できる会話を大切にします。",
    strengths: ["聞き上手", "理解力がある", "落ち着いている"],
    weaknesses: ["遠慮しすぎる", "好意が伝わりにくい"],
    compatible: ["PLAM", "PRAM"],
    stats: { passion: 2, lead: 2, action: 2, express: 5 }
  },
  CRIM: {
    code: "CRIM",
    name: "恋の月影巫女",
    catch: "静かな祈りのように、深くやさしく想い続けるタイプ。",
    image: "/characters/crim.png",
    ogImage: "/ogp/crim-ogp.png",
    description:
      "恋愛では精神的なつながりや安心感を大切にします。派手なアプローチよりも、深く信頼できる関係を求めます。",
    strengths: ["一途", "やさしい", "深い共感力がある"],
    weaknesses: ["不安を抱え込みやすい", "自分から動くのが苦手"],
    compatible: ["PLAE", "PRAE"],
    stats: { passion: 2, lead: 2, action: 2, express: 2 }
  }
} satisfies Record<TypeCode, DiagnosisResult>;

export const resultSupplements = {
  PLAE: {
    detail:
      "情熱の勇者は、恋の始まりを待つよりも自分から一歩踏み出すタイプです。相手に楽しい時間を届ける力があり、関係が停滞したときにも空気を動かせます。",
    behaviors: ["気になる人には自分から連絡する", "好意を言葉や態度でわかりやすく出す", "デートや会話の流れを自然にリードする"],
    advice:
      "勢いは大きな魅力です。相手の反応を一拍待つ余白を持つと、あなたのまっすぐさがもっと安心して届きます。"
  },
  PLAM: {
    detail:
      "恋の竜騎士は、熱い想いと特別な理想を胸に持つロマンチックなタイプです。普段は落ち着いていても、大切な場面では強く気持ちを示せます。",
    behaviors: ["記念日や特別な演出を大切にする", "好きな人への想いを長く温める", "ここぞという時に大胆な行動をする"],
    advice:
      "理想を持つことは素敵です。相手の現実的なペースも一緒に見られると、憧れが信頼へ育っていきます。"
  },
  PLIE: {
    detail:
      "恋の魔法剣士は、情熱だけでなく相手の心の動きもよく読むタイプです。会話や距離感の作り方が上手く、恋を知的に進めていけます。",
    behaviors: ["相手の言葉の裏にある気持ちを考える", "会話で相手の興味を引き出す", "雰囲気を見ながら好意を表現する"],
    advice:
      "読み取る力が強いぶん、考えすぎることもあります。時には素直な一言を出すだけで、関係がすっと進みます。"
  },
  PLIM: {
    detail:
      "心炎の賢者は、表面は静かでも内側に強い想いを秘めたタイプです。相手との精神的なつながりを重視し、深く長く愛を育てます。",
    behaviors: ["好きな人の価値観や考え方を深く知りたがる", "簡単には気持ちを見せない", "一度好きになると長く想い続ける"],
    advice:
      "深い愛情はあなたの宝物です。小さな好意を少しずつ言葉にすると、相手もあなたの温度に気づきやすくなります。"
  },
  PRAE: {
    detail:
      "恋の踊り子は、明るさと表現力で恋の場を楽しくするタイプです。相手の反応を見ながら軽やかに距離を縮められます。",
    behaviors: ["楽しい空気を作るのが得意", "嬉しい気持ちを素直に出す", "相手のノリに合わせて自然に近づく"],
    advice:
      "自由でかわいい魅力が光ります。曖昧なまま進めすぎず、自分が本当に望む関係を確認すると恋が安定します。"
  },
  PRAM: {
    detail:
      "恋の吟遊詩人は、感性や空気感を大切にする自然体のロマンチストです。押しつけず、心地よい距離感で相手を癒やせます。",
    behaviors: ["雰囲気の良い場所や音楽に弱い", "言葉より空気で好意を伝える", "束縛されすぎない関係を好む"],
    advice:
      "感性の豊かさは強い魅力です。大事な場面では少しだけ具体的な言葉を添えると、相手が安心しやすくなります。"
  },
  PRIE: {
    detail:
      "恋の占星術師は、相手の心や場の流れを読むのが得意なタイプです。近すぎず遠すぎない距離感で、自然に印象を残します。",
    behaviors: ["相手の小さな変化によく気づく", "聞き役になりながら距離を縮める", "本音を少しずつ見せる"],
    advice:
      "ミステリアスさは魅力ですが、伝わらない好意は届きません。信頼できる相手には、少し早めに本音を渡してみましょう。"
  },
  PRIM: {
    detail:
      "恋の夢魔導士は、心の奥に繊細で豊かな恋の世界を持つタイプです。特別なつながりを求め、時間をかけて深い関係を築きます。",
    behaviors: ["好きな人との未来を静かに想像する", "不安をひとりで抱え込みやすい", "心が通った瞬間を大切にする"],
    advice:
      "繊細さは弱さではありません。不安を全部抱え込まず、小さく相談できる関係を選ぶと恋が楽になります。"
  },
  CLAE: {
    detail:
      "恋の王国騎士は、誠実さと行動力で相手を支えるタイプです。約束や信頼を大切にし、安心できる関係を形にしていけます。",
    behaviors: ["約束や時間をきちんと守る", "相手のために具体的に動く", "関係をまじめに育てようとする"],
    advice:
      "誠実さは大きな安心感になります。時には肩の力を抜いて、予定外の楽しさも受け入れると恋に柔らかさが出ます。"
  },
  CLAM: {
    detail:
      "恋の守護聖騎士は、静かで献身的な愛情を持つタイプです。派手な表現よりも、日々の気づかいや安定した優しさで信頼されます。",
    behaviors: ["相手の困りごとにすぐ気づく", "自分より相手を優先しがち", "長く続く安心した関係を求める"],
    advice:
      "支える力は素晴らしいものです。あなた自身の希望も大切に伝えることで、もっと対等で温かい関係になります。"
  },
  CLIE: {
    detail:
      "恋の軍師は、冷静に状況を見ながら関係を丁寧に育てるタイプです。勢いだけに流されず、長期的な相性や信頼を大事にします。",
    behaviors: ["相手との将来性を考える", "焦らず段階を踏んで進める", "会話や予定をきちんと整える"],
    advice:
      "慎重さは強みですが、恋には予定通りにいかない楽しさもあります。完璧なタイミングを待ちすぎないことが鍵です。"
  },
  CLIM: {
    detail:
      "恋の大賢者は、静かに深く愛を見つめるタイプです。外側の刺激よりも、価値観や内面の相性をじっくり確かめます。",
    behaviors: ["相手の考え方や人生観を重視する", "恋の進展に時間をかける", "一度信頼すると長く大切にする"],
    advice:
      "深く考える力はあなたの魅力です。考えがまとまる前でも、小さなリアクションを返すと相手は安心できます。"
  },
  CRAE: {
    detail:
      "恋の白魔道士は、やさしさと表現力で相手の心を癒やすタイプです。安心できる雰囲気を作りながら、愛情を自然に届けます。",
    behaviors: ["相手の話をやさしく受け止める", "感謝や好意を言葉にする", "相手が落ち込んだ時に寄り添う"],
    advice:
      "寄り添う力はとても魅力的です。相手に合わせるだけでなく、自分の本音も同じくらい大切にしてください。"
  },
  CRAM: {
    detail:
      "恋の薬草師は、穏やかで自然体な愛情を持つタイプです。日常の中のぬくもりや、無理をしない心地よさを大切にします。",
    behaviors: ["一緒にいるだけで落ち着く関係を好む", "派手な演出より日常の優しさを大切にする", "相手の疲れに敏感"],
    advice:
      "穏やかさは長く愛される魅力です。待つだけでなく、嬉しい時や会いたい時は自分から合図を出してみましょう。"
  },
  CRIE: {
    detail:
      "恋の司書は、相手を理解し、言葉でそっと支える知性派タイプです。聞き上手で、安心できる会話から信頼を深めます。",
    behaviors: ["相手の話を丁寧に覚えている", "相談に落ち着いて向き合う", "好意を控えめな言葉で伝える"],
    advice:
      "理解力はあなたの大きな魅力です。遠慮しすぎず、あなたから話したいことも少しずつ開いていきましょう。"
  },
  CRIM: {
    detail:
      "恋の月影巫女は、静かな祈りのように深く想い続けるタイプです。安心感と心のつながりを求め、信頼できる相手を大切にします。",
    behaviors: ["好きな人を陰ながら支える", "本当に大事な気持ちは慎重に見せる", "心が通じた実感を何より大切にする"],
    advice:
      "深い共感力はあなたらしい優しさです。怖さがあっても、小さな一歩を自分から踏み出すと恋の景色が変わります。"
  }
} satisfies Record<TypeCode, ResultSupplement>;

export const resultList = Object.values(results);
