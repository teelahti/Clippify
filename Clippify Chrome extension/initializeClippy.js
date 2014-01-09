(function () {
    console.log('Clippy initializing');
    clippy.load('Clippy', function (agent) {
        agent.show();

        // TODO: Add random texts like "It looks like you’re writing a suicide letter.."
        agent.speak('It seems you are reading about Microsoft. Do you need help?');

        window.setInterval(agent.animate, 5000);
    });;
}());