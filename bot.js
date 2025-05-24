document.addEventListener('DOMContentLoaded', function () {
    console.log('Analytics object before getting:', window.analytics);
    const insideData = getAnalytics();
    console.log('Analytics data retrieved:', insideData);

    // Set customData dynamically if bot config is available
    if (window.KoreSDK?.chatConfig?.botOptions?.botInfo) {
        window.KoreSDK.chatConfig.botOptions.botInfo.customData = insideData;
    } else {
        console.warn("KoreSDK.chatConfig.botOptions.botInfo is not defined.");
    }

    // Show chat window on button click
    const chatBtn = document.getElementById('chatBtn');
    if (chatBtn) {
        chatBtn.onclick = function () {
            if (typeof koreBot !== 'undefined') {
                koreBot.show(KoreSDK.chatConfig);
            } else {
                console.error("koreBot is not defined");
            }
        };
    } else {
        console.warn("Chat button not found in DOM.");
    }
});
