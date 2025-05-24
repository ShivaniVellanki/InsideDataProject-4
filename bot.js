document.addEventListener('DOMContentLoaded', function () {
    console.log('Analytics object before getting:', window.analytics);
    let insideData = getAnalytics();
    console.log('Analytics data retrieved:', insideData);

    // Set customData dynamically
    if (window.KoreSDK && window.KoreSDK.chatConfig) {
        window.KoreSDK.chatConfig.botOptions.botInfo.customData = insideData;
    }

    // Only show bot when button is clicked
    document.getElementById('chatBtn').onclick = function () {
        if (typeof koreBot !== 'undefined') {
            koreBot.show(KoreSDK.chatConfig);
        } else {
            console.error("koreBot is not defined");
        }
    };
});
