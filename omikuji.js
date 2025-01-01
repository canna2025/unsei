function drawOmikuji() {
    // おみくじの結果とその確率（重み）
    const results = [
        { text: "大吉: 最高！！とても良いことがあるでしょう！", weight: 1 },   // 1: 1回に1回の確率
        { text: "中吉: 少し良いことがありそう！", weight: 3 },   // 3: 1回に3回の確率
        { text: "小吉: まずまずの良いことがあるかも！", weight: 5 },   // 5: 1回に5回の確率
        { text: "末吉: 気持ちばかりの良いことがあったりなかったり", weight: 10 },   // 10: 1回に10回の確率
        { text: "凶: 少し気をつけて。心を落ち着けて行動しましょう。", weight: 2 },   // 2: 1回に2回の確率
        { text: "大凶: これ以上悪いことはない。前向きに捉えよう。", weight: 1 }    // 1: 1回に1回の確率
    ];

    // 重みをもとに、選択肢を累積リストに格納
    let weightedResults = [];
    results.forEach(result => {
        for (let i = 0; i < result.weight; i++) {
            weightedResults.push(result.text);
        }
    });

    // ランダムに結果を選択
    const randomIndex = Math.floor(Math.random() * weightedResults.length);

    // 結果を表示
    document.getElementById("result").textContent = weightedResults[randomIndex];
}
