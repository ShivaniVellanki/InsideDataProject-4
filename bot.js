document.addEventListener('DOMContentLoaded', function () {
    console.log('Analytics object before getting:', window.analytics);
    let insideData = getAnalytics();
    console.log('Analytics data retrieved:', insideData);

    // Set customData just before showing bot
    document.getElementById('chatBtn').onclick = function () {
        if (window.koreBot && window.koreChatCfg) {
            window.koreChatCfg.botOptions.botInfo.customData = insideData;
            window.koreBot.show(window.koreChatCfg);
        } else {
            console.error("koreBot or koreChatCfg is not defined");
        }
    };
});
