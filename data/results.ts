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
  compatibilityReasons: CompatibilityReasonMap;
  stats: ResultStats;
};

export type ResultSupplement = {
  detail: string;
  behaviors: string[];
  advice: string;
};

export type CompatibilityReasonMap = Partial<Record<TypeCode, string>>;

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
    compatibilityReasons: {
      CRIM: "静かで深い共感力が、あなたの勢いをやさしく受け止めてくれます。前に進む力と安心感が合わさり、恋が長く続きやすい組み合わせです。",
      CLIM: "落ち着いた洞察が、あなたの情熱に良いブレーキと方向性をくれます。刺激と安定のバランスが取りやすい相性です。"
    },
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
    compatibilityReasons: {
      CRIE: "相手の理解力が、あなたのロマンや理想を丁寧に受け止めてくれます。言葉で安心を積み重ねられるので、深い想いが伝わりやすくなります。",
      CLIE: "冷静で計画的な視点が、あなたの熱い理想を現実の関係へ整えてくれます。夢と計画性がかみ合う相性です。"
    },
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
    compatibilityReasons: {
      CRAE: "やさしい受容力が、あなたの知的な駆け引きや情熱を柔らかく受け止めます。会話と癒やしが自然に循環する相性です。",
      CLAE: "誠実な安心感が、あなたの観察力と表現力を落ち着いた信頼へつなげてくれます。関係を丁寧に進めやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      CRAE: "やさしい包容力が、あなたの内側にある熱い想いを急かさず受け止めてくれます。深さとやさしさが響き合う相性です。",
      CLAE: "まっすぐな誠実さが、あなたの慎重な心に安心をくれます。信頼を土台に、深い関係へ進みやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      CLIM: "思慮深く落ち着いた相手が、あなたの明るさと自由さを穏やかに支えてくれます。楽しい空気と落ち着きが両立しやすい相性です。",
      CRIM: "やさしい共感力が、あなたの表現豊かな魅力を安心して受け止めます。にぎやかさと静かな愛情が補い合う関係です。"
    },
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
    compatibilityReasons: {
      CLIE: "計画性のある相手が、あなたの感性豊かな恋を安定した形へ導いてくれます。自由さを守りながら信頼を育てやすい相性です。",
      CRIE: "落ち着いた理解力が、あなたの雰囲気や言葉にしにくい気持ちを丁寧に読み取ってくれます。自然体で会話が続きやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      CLAE: "誠実な行動が、あなたの慎重でミステリアスな心に安心をくれます。距離感を大切にしながら信頼を築きやすい相性です。",
      CRAE: "やさしさと包容力が、あなたの観察力や繊細な表現を温かく受け止めます。無理なく本音を出しやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      CLAE: "安定した誠実さが、あなたの繊細な内面を守ってくれます。不安を安心に変えながら、特別な関係を育てやすい相性です。",
      CRAE: "癒やしの空気が、あなたの深い想像力とやさしく響き合います。心の距離をゆっくり縮められる組み合わせです。"
    },
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
    compatibilityReasons: {
      PLIE: "情熱と会話力のある相手が、あなたの誠実な愛情に華やかさを加えてくれます。信頼と刺激をどちらも感じやすい相性です。",
      PLIM: "深い想いを持つ相手が、あなたの守る力とよく合います。落ち着いた信頼の中で、強い絆を育てやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      PLAE: "まっすぐな行動力が、あなたの静かな献身に明るい流れを作ってくれます。支える力と進める力が補い合う相性です。",
      PRAE: "明るく表現豊かな相手が、あなたの穏やかな愛情を楽しい空気に変えてくれます。安心感とときめきが両立しやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      PLAM: "熱いロマンを持つ相手が、あなたの冷静な計画性に彩りをくれます。理想を現実に育てる力が合わさる相性です。",
      PRAM: "自然体で感性豊かな相手が、あなたの慎重さをほどよく緩めてくれます。落ち着きと自由さのバランスが取りやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      PLAE: "行動力のある相手が、あなたの慎重な恋に前へ進むきっかけをくれます。勢いと深い理解が補い合う相性です。",
      PRAE: "明るい表現力が、あなたの静かな魅力を引き出してくれます。楽しい会話と安心感が育ちやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      PLIE: "情熱的な会話力と、あなたの癒やしの空気がよく合います。互いに心を開きやすく、関係が温かく進みます。",
      PLIM: "深い愛情を持つ相手を、あなたは急かさず受け止められます。静かな理解とやさしい表現が響き合う相性です。"
    },
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
    compatibilityReasons: {
      PLAE: "行動力のある相手が、あなたの穏やかな日常に楽しい冒険感を運んでくれます。安心と刺激のバランスが取りやすい相性です。",
      PLAM: "ロマンチックな熱量が、あなたの自然体の優しさに特別感を加えてくれます。無理なく深めやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      PLAM: "熱い想いを持つ相手を、あなたの理解力と言葉が丁寧に支えます。理想を語り合いながら信頼を深めやすい相性です。",
      PRAM: "感性豊かな魅力を、あなたは落ち着いて受け止められます。自然な会話から心の距離が縮まりやすい組み合わせです。"
    },
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
    compatibilityReasons: {
      PLAE: "まっすぐな情熱が、あなたの静かな愛情に光を当ててくれます。安心して想いを育てながら前へ進める相性です。",
      PRAE: "明るく表現豊かな相手が、あなたの内面にあるやさしさを引き出してくれます。楽しい空気と深い共感が補い合う組み合わせです。"
    },
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
      "自由でかわいい魅力はあなたの武器です。曖昧にしたくない場面では、少しだけ本音を言葉にすると安心感も育ちます。"
  },
  PRAM: {
    detail:
      "恋の吟遊詩人は、感性と自然体の魅力で恋を奏でるタイプです。無理に形を決めるより、心地よい空気の中で関係を育てます。",
    behaviors: ["雰囲気の良い場所や音楽を大切にする", "束縛されすぎると距離を置きたくなる", "さりげない優しさで相手を癒やす"],
    advice:
      "自然体でいることは魅力ですが、大切な気持ちは相手に届く形にしてみましょう。小さな約束が信頼を強くします。"
  },
  PRIE: {
    detail:
      "恋の占星術師は、相手の気持ちや空気を読むのが得意なタイプです。近づきすぎず離れすぎない距離感で、独特の魅力を放ちます。",
    behaviors: ["相手の表情や返信の温度をよく見る", "聞き役になりながら距離を縮める", "本音を少しずつ見せる"],
    advice:
      "読む力があるぶん、待ちすぎることもあります。確かめたい気持ちがある時は、やわらかく言葉にすると関係が進みます。"
  },
  PRIM: {
    detail:
      "恋の夢魔導士は、心の奥で大切な人を深く想うタイプです。特別なつながりや安心感を求め、ゆっくりと恋を育てます。",
    behaviors: ["好きな人との小さな思い出を大切にする", "不安をひとりで抱え込みやすい", "心が通う瞬間を強く覚えている"],
    advice:
      "繊細さはあなたの優しさです。不安を全部しまい込まず、小さく共有すると相手も近づきやすくなります。"
  },
  CLAE: {
    detail:
      "恋の王国騎士は、誠実さと行動力で相手を支えるタイプです。約束や信頼を大切にし、安心できる関係を築きます。",
    behaviors: ["約束や時間をきちんと守る", "相手が困っていると行動で助ける", "関係をまじめに育てようとする"],
    advice:
      "誠実さは大きな安心感になります。時には少し遊び心を足すと、堅さがほどけて恋の温度が上がります。"
  },
  CLAM: {
    detail:
      "恋の守護聖騎士は、静かな愛情で大切な人を守るタイプです。派手な言葉より、日々の行動で信頼を積み重ねます。",
    behaviors: ["相手のために自然と動く", "自分の希望を後回しにしがち", "長く安定した関係を大切にする"],
    advice:
      "支える力はあなたの魅力です。同時に、自分の望みも伝えることで、より対等であたたかい関係になります。"
  },
  CLIE: {
    detail:
      "恋の軍師は、冷静に状況を見ながら関係を育てるタイプです。感情に流されすぎず、長く続く信頼を重視します。",
    behaviors: ["相手との将来や価値観を考える", "慎重に距離を縮める", "問題が起きた時に落ち着いて話し合う"],
    advice:
      "計画性は頼もしさにつながります。時には理由より先に気持ちを伝えると、相手はもっと安心できます。"
  },
  CLIM: {
    detail:
      "恋の大賢者は、内面の相性や価値観をじっくり見極めるタイプです。時間をかけて、深く信頼できる恋を求めます。",
    behaviors: ["相手の考え方や生き方に惹かれる", "関係を急がず見守る", "ひとつの恋を長く大切にする"],
    advice:
      "慎重さは関係を守る力です。気持ちが固まる前でも、小さな好意を示すと恋の進展が自然になります。"
  },
  CRAE: {
    detail:
      "恋の白魔道士は、やさしさと愛情表現で相手を癒やすタイプです。相手が安心して本音を出せる空気を作れます。",
    behaviors: ["相手の話を丁寧に聞く", "ありがとうや好きな気持ちをやさしく伝える", "相手の疲れに気づきやすい"],
    advice:
      "寄り添う力は素敵ですが、相手に合わせすぎると疲れてしまいます。自分の気持ちにも同じくらい優しくしてあげましょう。"
  },
  CRAM: {
    detail:
      "恋の薬草師は、穏やかで自然体な愛情を持つタイプです。日常の中のぬくもりや安心を大切にします。",
    behaviors: ["無理のないペースで関係を育てる", "日々の小さな気遣いを大切にする", "穏やかな時間に幸せを感じる"],
    advice:
      "穏やかさは長く愛される魅力です。待つだけでなく、たまには自分から誘うと恋に心地よい動きが生まれます。"
  },
  CRIE: {
    detail:
      "恋の司書は、相手を理解し、言葉でそっと支えるタイプです。安心できる会話を通じて、信頼関係を深めていきます。",
    behaviors: ["相手の話を整理しながら聞く", "言葉の選び方が丁寧", "好意を控えめに示す"],
    advice:
      "理解力はあなたの強みです。遠慮しすぎず、うれしい気持ちや会いたい気持ちを少し出すと、好意が伝わりやすくなります。"
  },
  CRIM: {
    detail:
      "恋の月影巫女は、静かな祈りのように深く想い続けるタイプです。精神的なつながりと安心感を何より大切にします。",
    behaviors: ["本当に大事な気持ちは慎重に見せる", "相手の痛みや不安に共感しやすい", "心が通じた実感を何より大切にする"],
    advice:
      "深い共感力はあなたらしい優しさです。怖さがあっても、小さな一歩を自分から踏み出すと恋の景色が変わります。"
  }
} satisfies Record<TypeCode, ResultSupplement>;


export function getCompatibilityReason(source: TypeCode, target: TypeCode) {
  const sourceResult: DiagnosisResult = results[source];

  return (
    sourceResult.compatibilityReasons[target] ??
    "お互いに違う魅力を持っているため、足りない部分を自然に補い合える組み合わせです。"
  );
}

export const resultList = Object.values(results);
