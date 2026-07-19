import { members } from "@/data/members";
import type { Question } from "@/types/diagnosis";

const memberIds = members.map((member) => member.id);

const scores = (primary: string, secondary: string, tertiary: string) => {
  const base = Object.fromEntries(memberIds.map((id) => [id, 0])) as Record<
    string,
    number
  >;
  base[primary] = 3;
  base[secondary] = 2;
  base[tertiary] = 1;
  return base;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "休日の朝、まず何をしたい？",
    intent: "エネルギーの使い方と行動開始の傾向を見ます。",
    choices: [
      { text: "お気に入りの服を選んで外に出る", scores: scores("emiri", "risa", "kiara"), typeHint: "自己表現タイプに近づく" },
      { text: "家でゆっくり動画や音楽を楽しむ", scores: scores("iori", "maika", "sana"), typeHint: "感性集中タイプに近づく" },
      { text: "やることリストを作って順番にこなす", scores: scores("hitomi", "anna", "shoko"), typeHint: "計画実行タイプに近づく" },
      { text: "友達に連絡して予定を合わせる", scores: scores("risa", "kiara", "hana"), typeHint: "共感コミュニケーションタイプに近づく" },
    ],
  },
  {
    id: 2,
    question: "新しい環境に入ったときの動きは？",
    intent: "対人スタイルと適応スピードを確認します。",
    choices: [
      { text: "まず自分から話しかける", scores: scores("kiara", "risa", "hitomi"), typeHint: "オープンリーダータイプに近づく" },
      { text: "全体を観察してから動く", scores: scores("maika", "iori", "sana"), typeHint: "観察分析タイプに近づく" },
      { text: "役割を探してサポートに回る", scores: scores("anna", "hana", "shoko"), typeHint: "安定サポートタイプに近づく" },
      { text: "自分らしさを出せる場を探す", scores: scores("emiri", "iori", "hana"), typeHint: "個性発揮タイプに近づく" },
    ],
  },
  {
    id: 3,
    question: "チームで成果を出すならどの役割が得意？",
    intent: "仕事の進め方と責任の取り方を測ります。",
    choices: [
      { text: "目標を示して先頭で引っ張る", scores: scores("hitomi", "anna", "maika"), typeHint: "牽引型タイプに近づく" },
      { text: "雰囲気を明るくして士気を上げる", scores: scores("kiara", "risa", "shoko"), typeHint: "ムードメーカータイプに近づく" },
      { text: "品質を高める細部チェックをする", scores: scores("maika", "anna", "sana"), typeHint: "品質管理タイプに近づく" },
      { text: "アイデアを出して新しい流れを作る", scores: scores("iori", "hana", "emiri"), typeHint: "クリエイティブタイプに近づく" },
    ],
  },
  {
    id: 4,
    question: "予定が急に変更になったら？",
    intent: "柔軟性とストレス耐性の傾向を把握します。",
    choices: [
      { text: "すぐ代替案を作って切り替える", scores: scores("hitomi", "shoko", "anna"), typeHint: "即応実務タイプに近づく" },
      { text: "気持ちを整えてからゆっくり対応する", scores: scores("maika", "iori", "sana"), typeHint: "内省対応タイプに近づく" },
      { text: "周りと相談して最適解を探す", scores: scores("anna", "risa", "hana"), typeHint: "協調調整タイプに近づく" },
      { text: "せっかくだから楽しめる方向に変える", scores: scores("kiara", "emiri", "risa"), typeHint: "ポジティブ転換タイプに近づく" },
    ],
  },
  {
    id: 5,
    question: "頑張りたい日のモチベーション源は？",
    intent: "行動を後押しする価値観を見ます。",
    choices: [
      { text: "理想の自分に近づけること", scores: scores("emiri", "hitomi", "maika"), typeHint: "自己更新タイプに近づく" },
      { text: "仲間に頼られること", scores: scores("anna", "shoko", "hana"), typeHint: "貢献実感タイプに近づく" },
      { text: "結果で信頼を得ること", scores: scores("maika", "hitomi", "sana"), typeHint: "実績重視タイプに近づく" },
      { text: "楽しさやワクワクがあること", scores: scores("kiara", "iori", "risa"), typeHint: "感情駆動タイプに近づく" },
    ],
  },
  {
    id: 6,
    question: "SNS投稿をするとしたら？",
    intent: "自己開示の仕方と表現スタイルを確認します。",
    choices: [
      { text: "写真や世界観にこだわる", scores: scores("iori", "emiri", "hana"), typeHint: "ビジュアル表現タイプに近づく" },
      { text: "短く本音を言葉で伝える", scores: scores("maika", "sana", "anna"), typeHint: "言語化タイプに近づく" },
      { text: "みんなが参加しやすい内容にする", scores: scores("risa", "kiara", "shoko"), typeHint: "交流促進タイプに近づく" },
      { text: "目標や挑戦の記録を残す", scores: scores("hitomi", "shoko", "emiri"), typeHint: "成長発信タイプに近づく" },
    ],
  },
  {
    id: 7,
    question: "褒められて一番うれしいのは？",
    intent: "自己評価に直結する強みを特定します。",
    choices: [
      { text: "センスがあると言われること", scores: scores("emiri", "iori", "hana"), typeHint: "感性特化タイプに近づく" },
      { text: "頼りになると言われること", scores: scores("anna", "hitomi", "shoko"), typeHint: "信頼獲得タイプに近づく" },
      { text: "努力家だと言われること", scores: scores("hitomi", "shoko", "maika"), typeHint: "積み上げタイプに近づく" },
      { text: "一緒にいると楽しいと言われること", scores: scores("kiara", "risa", "sana"), typeHint: "親和性タイプに近づく" },
    ],
  },
  {
    id: 8,
    question: "何かを決めるとき、重視するのは？",
    intent: "意思決定の軸を見極めます。",
    choices: [
      { text: "直感でピンと来るか", scores: scores("iori", "kiara", "emiri"), typeHint: "直感判断タイプに近づく" },
      { text: "データや根拠があるか", scores: scores("maika", "hitomi", "anna"), typeHint: "論理判断タイプに近づく" },
      { text: "周りにとって良いか", scores: scores("anna", "hana", "risa"), typeHint: "配慮判断タイプに近づく" },
      { text: "自分が成長できるか", scores: scores("hitomi", "emiri", "shoko"), typeHint: "成長判断タイプに近づく" },
    ],
  },
  {
    id: 9,
    question: "旅行プランを立てるなら？",
    intent: "計画性と楽しみ方のスタイルを測定します。",
    choices: [
      { text: "写真映えスポット中心で組む", scores: scores("emiri", "iori", "risa"), typeHint: "体験演出タイプに近づく" },
      { text: "移動効率を重視して計画する", scores: scores("hitomi", "anna", "maika"), typeHint: "最適化タイプに近づく" },
      { text: "現地で自由に決めたい", scores: scores("sana", "kiara", "iori"), typeHint: "自由発見タイプに近づく" },
      { text: "みんなの希望を取り入れて調整する", scores: scores("hana", "anna", "risa"), typeHint: "合意形成タイプに近づく" },
    ],
  },
  {
    id: 10,
    question: "疲れたときのリフレッシュ方法は？",
    intent: "回復方法から内面の傾向を見ます。",
    choices: [
      { text: "ひとり時間で好きなことに没頭する", scores: scores("iori", "maika", "sana"), typeHint: "内向回復タイプに近づく" },
      { text: "友達と話して気分転換する", scores: scores("risa", "kiara", "hana"), typeHint: "対話回復タイプに近づく" },
      { text: "体を動かしてスッキリする", scores: scores("shoko", "hitomi", "anna"), typeHint: "アクティブ回復タイプに近づく" },
      { text: "好きなものを買ってテンションを上げる", scores: scores("emiri", "kiara", "risa"), typeHint: "自己充電タイプに近づく" },
    ],
  },
  {
    id: 11,
    question: "締切が近いタスクへの向き合い方は？",
    intent: "プレッシャー下での実行力を測ります。",
    choices: [
      { text: "最優先で一気に仕上げる", scores: scores("hitomi", "shoko", "maika"), typeHint: "集中突破タイプに近づく" },
      { text: "必要な情報を整理して確実に進める", scores: scores("maika", "anna", "sana"), typeHint: "堅実完遂タイプに近づく" },
      { text: "途中で工夫を入れて楽しく進める", scores: scores("hana", "iori", "kiara"), typeHint: "工夫推進タイプに近づく" },
      { text: "周りと声をかけ合って乗り切る", scores: scores("risa", "anna", "shoko"), typeHint: "連携突破タイプに近づく" },
    ],
  },
  {
    id: 12,
    question: "人から相談されたときの反応は？",
    intent: "共感と問題解決のバランスを確認します。",
    choices: [
      { text: "まず気持ちに寄り添って聞く", scores: scores("hana", "risa", "anna"), typeHint: "共感傾聴タイプに近づく" },
      { text: "状況を整理して解決策を提案する", scores: scores("maika", "hitomi", "sana"), typeHint: "解決支援タイプに近づく" },
      { text: "経験談を交えて背中を押す", scores: scores("sana", "hitomi", "kiara"), typeHint: "鼓舞タイプに近づく" },
      { text: "新しい視点で考え方を広げる", scores: scores("iori", "emiri", "hana"), typeHint: "視点拡張タイプに近づく" },
    ],
  },
  {
    id: 13,
    question: "買い物で迷ったらどうする？",
    intent: "情報収集と決断のクセを見ます。",
    choices: [
      { text: "直感で今ほしい方を選ぶ", scores: scores("emiri", "kiara", "iori"), typeHint: "感覚決断タイプに近づく" },
      { text: "レビューを比較して決める", scores: scores("maika", "anna", "risa"), typeHint: "比較検討タイプに近づく" },
      { text: "長く使えるかで決める", scores: scores("anna", "shoko", "sana"), typeHint: "実用重視タイプに近づく" },
      { text: "友達に相談して決める", scores: scores("risa", "hana", "kiara"), typeHint: "外部参照タイプに近づく" },
    ],
  },
  {
    id: 14,
    question: "理想の働き方・学び方に近いのは？",
    intent: "長期的な価値観とペース配分を見ます。",
    choices: [
      { text: "目標を明確にして突き進む", scores: scores("hitomi", "maika", "shoko"), typeHint: "目標達成タイプに近づく" },
      { text: "好きな分野を深く掘る", scores: scores("iori", "sana", "emiri"), typeHint: "探究タイプに近づく" },
      { text: "バランスよく継続する", scores: scores("anna", "hana", "risa"), typeHint: "安定継続タイプに近づく" },
      { text: "仲間と刺激し合って成長する", scores: scores("kiara", "hitomi", "shoko"), typeHint: "共創成長タイプに近づく" },
    ],
  },
  {
    id: 15,
    question: "初対面の人との会話で意識することは？",
    intent: "コミュニケーションの入口を把握します。",
    choices: [
      { text: "相手が話しやすい雰囲気を作る", scores: scores("risa", "hana", "kiara"), typeHint: "安心提供タイプに近づく" },
      { text: "相手の興味を観察して質問する", scores: scores("maika", "iori", "sana"), typeHint: "洞察会話タイプに近づく" },
      { text: "自分の好きなことも素直に話す", scores: scores("emiri", "kiara", "iori"), typeHint: "自己開示タイプに近づく" },
      { text: "共通の目的を見つけて距離を縮める", scores: scores("hitomi", "anna", "shoko"), typeHint: "目的共有タイプに近づく" },
    ],
  },
  {
    id: 16,
    question: "目標達成のために一番必要だと思うのは？",
    intent: "成果を出すための信念を測定します。",
    choices: [
      { text: "継続する習慣", scores: scores("shoko", "anna", "hitomi"), typeHint: "習慣構築タイプに近づく" },
      { text: "自分を信じる気持ち", scores: scores("emiri", "kiara", "maika"), typeHint: "自己肯定タイプに近づく" },
      { text: "冷静な振り返り", scores: scores("maika", "sana", "iori"), typeHint: "改善循環タイプに近づく" },
      { text: "楽しむ工夫", scores: scores("kiara", "hana", "risa"), typeHint: "楽しさ維持タイプに近づく" },
    ],
  },
  {
    id: 17,
    question: "誰かと意見が割れたときは？",
    intent: "対立時の姿勢と協調性を確認します。",
    choices: [
      { text: "論点を整理して落ち着いて話す", scores: scores("maika", "anna", "hitomi"), typeHint: "冷静調整タイプに近づく" },
      { text: "相手の気持ちを先に理解する", scores: scores("hana", "risa", "sana"), typeHint: "感情調整タイプに近づく" },
      { text: "新しい折衷案を提案する", scores: scores("iori", "emiri", "kiara"), typeHint: "創造調整タイプに近づく" },
      { text: "結論を急がず時間を置く", scores: scores("sana", "anna", "maika"), typeHint: "慎重合意タイプに近づく" },
    ],
  },
  {
    id: 18,
    question: "プレゼント選びで重視するのは？",
    intent: "他者理解の仕方と価値の置き方を見ます。",
    choices: [
      { text: "相手の好みど真ん中", scores: scores("anna", "hana", "risa"), typeHint: "相手目線タイプに近づく" },
      { text: "自分らしいセンスが伝わるもの", scores: scores("emiri", "iori", "kiara"), typeHint: "センス共有タイプに近づく" },
      { text: "実用性が高く使えるもの", scores: scores("shoko", "maika", "hitomi"), typeHint: "実利重視タイプに近づく" },
      { text: "思い出に残る体験型", scores: scores("sana", "hitomi", "shoko"), typeHint: "体験重視タイプに近づく" },
    ],
  },
  {
    id: 19,
    question: "あなたの強みを一言で言うなら？",
    intent: "自己認識の中心を確認します。",
    choices: [
      { text: "行動力", scores: scores("shoko", "hitomi", "kiara"), typeHint: "推進力タイプに近づく" },
      { text: "共感力", scores: scores("hana", "risa", "anna"), typeHint: "共感連携タイプに近づく" },
      { text: "分析力", scores: scores("maika", "sana", "iori"), typeHint: "分析最適化タイプに近づく" },
      { text: "発想力", scores: scores("iori", "emiri", "hana"), typeHint: "発想展開タイプに近づく" },
    ],
  },
  {
    id: 20,
    question: "1日自由時間ができたら？",
    intent: "優先したい体験から欲求を読み解きます。",
    choices: [
      { text: "カフェ巡りやショッピング", scores: scores("emiri", "risa", "shoko"), typeHint: "感覚充実タイプに近づく" },
      { text: "気になっていた課題を片づける", scores: scores("hitomi", "maika", "anna"), typeHint: "達成充実タイプに近づく" },
      { text: "作品を見たり作ったりする", scores: scores("iori", "hana", "sana"), typeHint: "創作充実タイプに近づく" },
      { text: "大切な人とゆっくり過ごす", scores: scores("anna", "hana", "kiara"), typeHint: "関係充実タイプに近づく" },
    ],
  },
  {
    id: 21,
    question: "複数タスクが重なったときの動きは？",
    intent: "優先順位付けと処理スタイルを測ります。",
    choices: [
      { text: "重要度で即座に仕分ける", scores: scores("maika", "hitomi", "anna"), typeHint: "優先整理タイプに近づく" },
      { text: "まず一番重いものから着手する", scores: scores("hitomi", "shoko", "emiri"), typeHint: "先制突破タイプに近づく" },
      { text: "できるところから気持ちよく進める", scores: scores("kiara", "risa", "iori"), typeHint: "勢い活用タイプに近づく" },
      { text: "周囲と役割分担して回す", scores: scores("anna", "hana", "sana"), typeHint: "分担最適タイプに近づく" },
    ],
  },
  {
    id: 22,
    question: "イベント当日の自分はどのタイプ？",
    intent: "本番での立ち回りと適応力を把握します。",
    choices: [
      { text: "全体進行を見て調整する", scores: scores("anna", "hitomi", "maika"), typeHint: "進行管理タイプに近づく" },
      { text: "みんなの緊張をほぐす", scores: scores("kiara", "risa", "shoko"), typeHint: "空気づくりタイプに近づく" },
      { text: "クオリティを最後まで詰める", scores: scores("maika", "sana", "emiri"), typeHint: "仕上げ職人タイプに近づく" },
      { text: "演出や見せ方にこだわる", scores: scores("iori", "hana", "emiri"), typeHint: "演出設計タイプに近づく" },
    ],
  },
  {
    id: 23,
    question: "友達から言われがちな一言は？",
    intent: "他者視点で見たあなたの特徴を抽出します。",
    choices: [
      { text: "「一緒にいると元気になる」", scores: scores("kiara", "shoko", "risa"), typeHint: "元気供給タイプに近づく" },
      { text: "「考え方がしっかりしてる」", scores: scores("maika", "anna", "hitomi"), typeHint: "信頼判断タイプに近づく" },
      { text: "「センスが独特で面白い」", scores: scores("iori", "emiri", "hana"), typeHint: "独自感性タイプに近づく" },
      { text: "「気配りが細やか」", scores: scores("hana", "anna", "sana"), typeHint: "細やか配慮タイプに近づく" },
    ],
  },
  {
    id: 24,
    question: "挑戦するときの不安への向き合い方は？",
    intent: "リスクへの姿勢と回復行動を見ます。",
    choices: [
      { text: "準備量を増やして安心する", scores: scores("maika", "anna", "sana"), typeHint: "準備徹底タイプに近づく" },
      { text: "とにかく一歩目を踏み出す", scores: scores("shoko", "hitomi", "kiara"), typeHint: "先行行動タイプに近づく" },
      { text: "楽しみな面を探して前向きになる", scores: scores("kiara", "emiri", "risa"), typeHint: "前向き変換タイプに近づく" },
      { text: "自分のペースで丁寧に進める", scores: scores("iori", "hana", "sana"), typeHint: "安定前進タイプに近づく" },
    ],
  },
  {
    id: 25,
    question: "理想のリーダー像は？",
    intent: "組織で大切にする価値観を確認します。",
    choices: [
      { text: "ビジョンを示して導く人", scores: scores("hitomi", "emiri", "maika"), typeHint: "ビジョン牽引タイプに近づく" },
      { text: "現場を理解して支える人", scores: scores("anna", "shoko", "hana"), typeHint: "現場支援タイプに近づく" },
      { text: "個性を伸ばしてくれる人", scores: scores("sana", "iori", "kiara"), typeHint: "個性尊重タイプに近づく" },
      { text: "論理的で判断が速い人", scores: scores("maika", "hitomi", "risa"), typeHint: "合理判断タイプに近づく" },
    ],
  },
  {
    id: 26,
    question: "何かを学ぶとき、最初にすることは？",
    intent: "学習スタイルと理解プロセスを測ります。",
    choices: [
      { text: "全体像を把握する", scores: scores("maika", "anna", "sana"), typeHint: "構造理解タイプに近づく" },
      { text: "実際に手を動かしてみる", scores: scores("shoko", "hitomi", "kiara"), typeHint: "実践先行タイプに近づく" },
      { text: "好きになれるポイントを探す", scores: scores("kiara", "risa", "emiri"), typeHint: "興味起点タイプに近づく" },
      { text: "自分なりの表現に落とし込む", scores: scores("iori", "hana", "emiri"), typeHint: "表現転換タイプに近づく" },
    ],
  },
  {
    id: 27,
    question: "理想の休日の終わり方は？",
    intent: "満足感の源泉を見極めます。",
    choices: [
      { text: "充実感のある達成で終える", scores: scores("hitomi", "shoko", "maika"), typeHint: "達成満足タイプに近づく" },
      { text: "大切な人と楽しく過ごして終える", scores: scores("risa", "hana", "anna"), typeHint: "共有満足タイプに近づく" },
      { text: "自分磨きができて終える", scores: scores("emiri", "sana", "kiara"), typeHint: "自己投資タイプに近づく" },
      { text: "静かに余韻を味わって終える", scores: scores("iori", "maika", "sana"), typeHint: "余韻重視タイプに近づく" },
    ],
  },
  {
    id: 28,
    question: "自分の魅力を伸ばすならどこ？",
    intent: "成長意欲の方向性を確認します。",
    choices: [
      { text: "伝え方・話し方", scores: scores("risa", "kiara", "anna"), typeHint: "コミュ力強化タイプに近づく" },
      { text: "計画力・実行力", scores: scores("hitomi", "shoko", "anna"), typeHint: "実行強化タイプに近づく" },
      { text: "感性・クリエイティブ", scores: scores("iori", "hana", "sana"), typeHint: "感性強化タイプに近づく" },
      { text: "美意識・セルフプロデュース", scores: scores("emiri", "maika", "kiara"), typeHint: "自己演出強化タイプに近づく" },
    ],
  },
  {
    id: 29,
    question: "うれしいサプライズを受けたら？",
    intent: "感情表現の出し方と関係性の深め方を見ます。",
    choices: [
      { text: "全力で喜びを言葉と表情で返す", scores: scores("kiara", "risa", "shoko"), typeHint: "感情表現タイプに近づく" },
      { text: "理由を考えて丁寧に感謝する", scores: scores("anna", "maika", "hana"), typeHint: "誠実感謝タイプに近づく" },
      { text: "相手にもサプライズで返したくなる", scores: scores("emiri", "hitomi", "sana"), typeHint: "返報行動タイプに近づく" },
      { text: "静かにかみしめて後で伝える", scores: scores("iori", "maika", "sana"), typeHint: "内省感謝タイプに近づく" },
    ],
  },
  {
    id: 30,
    question: "今のあなたに一番近いのは？",
    intent: "最終的な自己イメージで診断の軸を補正します。",
    choices: [
      { text: "夢に向かって一直線に進みたい", scores: scores("hitomi", "emiri", "shoko"), typeHint: "挑戦推進タイプに近づく" },
      { text: "周りと支え合って成長したい", scores: scores("anna", "hana", "risa"), typeHint: "協力成長タイプに近づく" },
      { text: "自分らしい表現を極めたい", scores: scores("iori", "emiri", "sana"), typeHint: "表現追求タイプに近づく" },
      { text: "毎日を楽しく前向きに過ごしたい", scores: scores("kiara", "risa", "shoko"), typeHint: "前向き共感タイプに近づく" },
    ],
  },
];
