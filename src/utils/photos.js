import pictures from './index.js';

const { TallyMax, wishList, weatherView, onBase, readTheory, woodlandConsulting, keep, shopShop } = pictures

const photos = [
    {
        src: woodlandConsulting,
        width: 2,
        height: 1,
        alt: 'Woodland Consulting application screenshot',
        title: 'Group Project: MERN wesite for a small lighting design and engineering firm ({languages: Javascript}, {repo: https://github.com/SMKrizan/WoodlandConsultingLLC}, {link: https://woodland-consulting.herokuapp.com/})',
    },
    {
        src: TallyMax,
        width: 1,
        height: 1,
        alt: 'TallyMax application screenshot',
        title: 'Group Project: "Tally Max" word generator ({languages: Javascript}, {repo: https://github.com/jgrossh2/word-generator}, {link: https://jgrossh2.github.io/word-generator/})',
    },
    {
        src: wishList,
        width: 1,
        height: 1,
        alt: '12Wishes application screenshot',
        title: 'Group Project: "12Wishes" holiday wish lists ({languages: Javascript, Handlebars, SCSS}, {repo: https://github.com/chriswein12/wish-list}, {link: https://twelve-wishes.herokuapp.com/})',
    },
    {
        src: keep,
        width: 1,
        height: 1,
        alt: 'keep budget tracker application screenshot',
        title: '"keep" a simple budget tracker and Progressive Web App (PWA) using IndexedDB to facilitated a consistent user experience even with spotty internet reception ({languages: Javascript}, {repo: https://github.com/SMKrizan/keep}, {link: https://keep-budget-app.herokuapp.com/})',
    },
    {
        src: onBase,
        width: 1,
        height: 1,
        alt: 'onBase application screenshot',
        title: '"onBase" CLI-app/CMS for tracking employee data ({languages: Javascript}, {repo: https://github.com/SMKrizan/onBase})'
    },
    {
        src: readTheory,
        width: 1,
        height: 1,
        alt: 'readTheory application screenshot',
        title: '"readTheory" note taking app ({languages: Javascript, HTML, CSS}, {repo: https://github.com/SMKrizan/readTheory}, {link: https://readtheory.herokuapp.com/})',
    },
    {
        src: weatherView,
        width: 2,
        height: 1,
        alt: 'weatherView application screenshot',
        title: '"WeatherView" access current & forecasted weather using 3rd party API ({languages: Javascript, HTML, CSS}, {repo: https://github.com/smkrizan/WeatherView/}, {link: https://smkrizan.github.io/WeatherView/})',
    },
    {
        src: shopShop,
        width: 1,
        height: 1,
        alt: 'E-Commerce application screenshot',
        title: 'E-Commerce website using Redux and Stripe payment platform ({languages: Javascript}, {repo: https://github.com/SMKrizan/shopShop-Redux}, {link:  https://shopshop-redux.herokuapp.com/})',
    }
]

export default {photos};
