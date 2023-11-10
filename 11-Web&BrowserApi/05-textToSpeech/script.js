const synth = window.speechSynthesis;


function onSubmit(e) {
    e.preventDefault();

    const textInput = document.getElementById('text-input');
    const utterThis = new SpeechSynthesisUtterance(textInput.value)

    synth.speak(utterThis);

}

document.querySelector('#form1').addEventListener('submit', onSubmit)
