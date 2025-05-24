// Wait for analytics to be available
document.addEventListener('DOMContentLoaded', function() {
    console.log('Analytics object before getting:', window.analytics);
    let insideData = getAnalytics();
    console.log('Analytics data retrieved:', insideData);
    
    // Initialize the bot (old WebSDK style)
    var koreBot = koreBotChat();

    // Set up the click handler to show the chat window
    document.getElementById('chatBtn').onclick = function () {
        // Show the bot with the chat configuration
        koreBot.show(KoreSDK.chatConfig);
    };
});
