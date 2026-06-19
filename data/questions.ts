import type { Question } from "@/lib/diagnose";

export const questions = [
  {
    id: 1,
    text: "好きになったら、気持ちを抑えるよりも行動したくなる。",
    axis: "P/C",
    positive: "P"
  },
  {
    id: 2,
    text: "恋愛では、燃え上がる気持ちよりも安心感を大切にしたい。",
    axis: "P/C",
    positive: "C"
  },
  {
    id: 3,
    text: "気になる人のことを考えると、気持ちが一気に高まりやすい。",
    axis: "P/C",
    positive: "P"
  },
  {
    id: 4,
    text: "恋はゆっくり時間をかけて育てる方が自分らしい。",
    axis: "P/C",
    positive: "C"
  },
  {
    id: 5,
    text: "好きな人には、多少大胆でもアプローチしたくなる。",
    axis: "P/C",
    positive: "P"
  },
  {
    id: 6,
    text: "恋愛では刺激よりも、落ち着ける関係に惹かれる。",
    axis: "P/C",
    positive: "C"
  },
  {
    id: 7,
    text: "気になる人には、自分から話しかけることが多い。",
    axis: "L/R",
    positive: "L"
  },
  {
    id: 8,
    text: "恋愛では、相手のペースに合わせる方が自然だと思う。",
    axis: "L/R",
    positive: "R"
  },
  {
    id: 9,
    text: "デートや会話のきっかけは、自分から作りたい方だ。",
    axis: "L/R",
    positive: "L"
  },
  {
    id: 10,
    text: "相手からのアプローチを受けて、少しずつ心が動くことが多い。",
    axis: "L/R",
    positive: "R"
  },
  {
    id: 11,
    text: "恋愛では、自分の気持ちを軸に関係を進めたい。",
    axis: "L/R",
    positive: "L"
  },
  {
    id: 12,
    text: "相手が安心できるように、まずは受け止めることを大切にする。",
    axis: "L/R",
    positive: "R"
  },
  {
    id: 13,
    text: "考えるより先に、まず会ったり連絡したりしたい。",
    axis: "A/I",
    positive: "A"
  },
  {
    id: 14,
    text: "恋愛では、相手の言葉や態度の意味をよく考える。",
    axis: "A/I",
    positive: "I"
  },
  {
    id: 15,
    text: "気になることがあれば、直接聞いたり確かめたりしたい。",
    axis: "A/I",
    positive: "A"
  },
  {
    id: 16,
    text: "恋愛では、空気感や小さな変化を読み取ることが多い。",
    axis: "A/I",
    positive: "I"
  },
  {
    id: 17,
    text: "好きな人との距離は、行動しながら縮めていきたい。",
    axis: "A/I",
    positive: "A"
  },
  {
    id: 18,
    text: "相手との相性や価値観をじっくり見極めたい。",
    axis: "A/I",
    positive: "I"
  },
  {
    id: 19,
    text: "好きな気持ちは、言葉や態度でわかりやすく伝えたい。",
    axis: "E/M",
    positive: "E"
  },
  {
    id: 20,
    text: "本当に大事な気持ちは、簡単には見せない方だ。",
    axis: "E/M",
    positive: "M"
  },
  {
    id: 21,
    text: "恋愛では、愛情表現をしっかりする方だと思う。",
    axis: "E/M",
    positive: "E"
  },
  {
    id: 22,
    text: "好きな人ほど、気持ちを表に出すのに時間がかかる。",
    axis: "E/M",
    positive: "M"
  },
  {
    id: 23,
    text: "嬉しい、楽しい、好きなどの気持ちは素直に出したい。",
    axis: "E/M",
    positive: "E"
  },
  {
    id: 24,
    text: "恋愛では、言葉よりも雰囲気や心のつながりを重視する。",
    axis: "E/M",
    positive: "M"
  }
] satisfies readonly Question[];
