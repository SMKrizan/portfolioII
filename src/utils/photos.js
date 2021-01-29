import pictures from './index.js';

const { TallyMax, wishList, weatherView, onBase, readTheory, eCommBackEnd } = pictures

const photos = [
    {
        src: TallyMax,
        width: 1,
        height: 1,
        alt: 'TallyMax application screenshot',
        // srcSet: [{ value: "Javascript", title: "Javascript" }],
        // caption: 'Group Project: "Tally Max" word generator ({repo: https://github.com/jgrossh2/word-generator}, {link: https://jgrossh2.github.io/word-generator/})',
    },
    {
        src: wishList,
        width: 1,
        height: 1,
        alt: '12Wishes application screenshot',
        // srcSet: ["Javascript",'Handlebars', 'SCSS'],
        // caption: 'Group Project: "12Wishes" holiday wish lists ({repo: https://github.com/chriswein12/wish-list}, {link: https://twelve-wishes.herokuapp.com/})',
    },
    {
        src: weatherView,
        width: 2,
        height: 1,
        alt: 'weatherView application screenshot',
        // srcSet: ["Javascript", 'HTML', 'CSS'],
        // caption: '"WeatherView" access current & forecasted weather using 3rd party API ({repo: https://github.com/smkrizan/WeatherView/}, {link: https://smkrizan.github.io/WeatherView/})',
    },
    {
        src: onBase,
        width: 1,
        height: 1,
        alt: 'onBase application screenshot',
        // srcSet: ["Javascript"],
        // caption: '"onBase" CLI-app/CMS for tracking employee data' ({repo: https://github.com/SMKrizan/onBase})
    },
    {
        src: readTheory,
        width: 1,
        height: 1,
        alt: 'readTheory application screenshot',
        // srcSet: ["Javascript", 'HTML', 'CSS'],
        // caption: '"readTheory" note taking app ({repo: https://github.com/SMKrizan/readTheory}, {link: https://readtheory.herokuapp.com/})',
    },
    {
        src: eCommBackEnd,
        width: 1,
        height: 1,
        alt: 'E-Commerce back end application screenshot',
        // srcSet: ["Javascript"],
        // caption: 'E-Commerce Back End' ({repo: https://github.com/SMKrizan/E-Commerce-Back-End}),
    }
];

export default {photos};
