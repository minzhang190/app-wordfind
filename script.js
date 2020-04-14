document.title = title;

Object.keys(words).forEach(function(word) {
    var wordInfo = words[word];
    var $li = $('<li><img class="word"></li>');
    $li.find('img').attr('src', prefix + wordInfo.image).data('info', wordInfo);
    wordInfo['element'] = $li;
    $('#words').append($li);

    createjs.Sound.registerSound(prefix + wordInfo.sound, word);
});

var game = new WordFindGame('#puzzle', options);

wordfind.print(game);

$('#solve').click(() => game.solve());
