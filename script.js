document.title = title;

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var wordText = Object.keys(words);
shuffleArray(wordText);

var soundCount = 0;

function handleLoad() {
    if (++soundCount < wordText.length) {
        return;
    }

    try {
        var game = new WordFindGame('#puzzle', options);

        wordfind.print(game);

        $('#solve').click(() => game.solve());
    } catch (error) {
        location.reload();
    }
}

createjs.Sound.addEventListener("fileload", handleLoad);

wordText.forEach(function(word) {
    var wordInfo = words[word];
    var $li = wordInfo['element'] = $('<li><img class="word"></li>');
    $li.find('img').attr('src', prefix + wordInfo.image).data('info', wordInfo);
    $('#words').append($li);

    createjs.Sound.registerSound(prefix + wordInfo.sound, word);
});
