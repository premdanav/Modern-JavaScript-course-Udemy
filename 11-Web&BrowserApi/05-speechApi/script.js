const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const rec = new SpeechRecognition();

rec.lang = 'en-US'
rec.continuous = true;

rec.onresult = function (e) {
    const acceptedColors = [
        'red', 'green', 'yellow', 'pink', 'black'
    ]

    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim();

        if (acceptedColors.includes(script)) {
            document.body.style.backgroundColor = script;
        } else {
            setTimeout(
                function () {
                    alert('Color not recognized')
                }, 1000
            );
        }

    }
}


rec.start();