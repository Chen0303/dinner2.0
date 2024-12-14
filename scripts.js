const dinnerOptions = [
    "泡菜鍋燒麵",
    "滷味",
    "鍋貼或水餃",
    "火鍋",
    "炒飯或炒麵",
    "便利商店",
    "玉米湯餃",
    "麥當勞",
    "老闆看心情開店的咖哩飯",
    "求快速的鴨香飯",
    "酸辣粉",
    "義大利麵",
    "早到晚到",
    "永和豆漿",
    "你自己想~但不能不吃東西",
    "新開的排骨酥麵",
];

document.getElementById("choose-button").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * dinnerOptions.length);
    const selectedOption = dinnerOptions[randomIndex];
    document.getElementById("dinner-option").textContent = `今晚吃：${selectedOption}`;
    console.log(`${selectedOption}`);
});

document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });
