document.title = title;

var wordText = Object.keys(words);

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
