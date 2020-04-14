var title = 'Word Find';

var words = {
    'pingguo': {
        image: 'assets/pingguo.png',
        sound: 'assets/pingguo.mp3',
    },
    'xiangjiao': {
        image: 'assets/xiangjiao.png',
        sound: 'assets/xiangjiao.mp3',
    },
    'shuiguo': {
        image: 'assets/shuiguo.png',
        sound: 'assets/shuiguo.mp3',
    },
};

// Letters used to fill blank spots in the puzzle
var LETTERS = 'abcdefghijklmnoprstuvwy';

var options = {
    // desired height of the puzzle, default: smallest possible
    height: 10,
    // desired width of the puzzle, default: smallest possible
    width: 10,
    // list of orientations to use, default: all orientations
    orientations: ['horizontal','horizontalBack','vertical','verticalUp', 'diagonal','diagonalUp','diagonalBack','diagonalUpBack'],
    // true to fill in the blanks, default: true
    fillBlanks: true,
    //
    allowExtraBlanks: true,
    // number of tries before increasing puzzle size, default:3
    maxAttempts: 3,
    // number of puzzle grid increases, default:10
    maxGridGrowth: 10,
    // maximize word overlap or not, default: true
    preferOverlap: true,
    //
    allowedMissingWords: 0,
}
