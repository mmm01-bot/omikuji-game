const fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];

const luckyItems = [
    "ピンクのハンカチ",
    "お気に入りのペン",
    "小さなお守り",
    "時計",
    "白い靴下",
    "青いノート"
];

const luckyColors = [
    "ピンク",
    "黄色",
    "水色",
    "緑",
    "紫",
    "オレンジ"
];

const luckyLevels = [
    "★★★★★",
    "★★★★☆",
    "★★★☆☆",
    "★★★☆☆",
    "★★☆☆☆",
    "★☆☆☆☆"
];

const advices = [
    "今日は自信を持って行動するといいかも！",
    "周りの人に優しくすると、いいことがありそう！",
    "小さなことにも感謝してみよう！",
    "無理をせず、いつも通り過ごそう！",
    "焦らず、ゆっくり行動しよう！",
    "今日は慎重に行動するのがおすすめ！"
];


function drawOmikuji() {

    document.getElementById("result").textContent = "🔮 占っています……";
    document.getElementById("luckyItem").textContent = "";
    document.getElementById("luckyColor").textContent = "";
    document.getElementById("luckyLevel").textContent = "";
    document.getElementById("advice").textContent = "";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);

        document.getElementById("result").textContent =
            fortunes[randomIndex] + "☺";

        document.getElementById("luckyItem").textContent =
            "🍀 ラッキーアイテム：" + luckyItems[randomIndex];

        document.getElementById("luckyColor").textContent =
            "🌈 ラッキーカラー：" + luckyColors[randomIndex];

        document.getElementById("luckyLevel").textContent =
            "⭐ ラッキー度：" + luckyLevels[randomIndex];

        document.getElementById("advice").textContent =
            "💡 今日のアドバイス：" + advices[randomIndex];

        const result = document.getElementById("result");

        result.classList.remove("sparkle");

        if (fortunes[randomIndex] === "大吉") {
            result.classList.add("sparkle");
        }
    }, 1500);
}