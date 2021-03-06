import images from './index.js';

const { TallyMax, wishList, weatherView, onBase, readTheory, woodlandConsulting, keep, shopShop } = images

const project_info = [
    {
        key: 1,
        src: woodlandConsulting,
        name: 'woodlandConsulting',
        width: 2,
        alt: 'Woodland Consulting application screenshot',
        title: 'Woodland Consulting LLC',
        description: 'GROUP PROJECT: a MERN stack website with secure admin-login for a lighting design and engineering firm',
        repository: 'https://github.com/SMKrizan/WoodlandConsultingLLC',
        deployment: 'https://woodland-consulting.herokuapp.com/',
    },
    {
        key: 2,
        src: TallyMax,
        name: 'TallyMax',
        width: 1,
        alt: 'TallyMax application screenshot',
        title: "TallyMax",
        description: 'GROUP PROJECT: a word-game focused vocabulary application with definitions, audio and images',
        repository: 'https://github.com/jgrossh2/Tally-Max',
        deployment: 'https://jgrossh2.github.io/Tally-Max/',
    },
    {        
        key: 3,
        src: wishList,
        name: 'wishList',
        width: 1,
        alt: '12 Wishes application screenshot',
        title: "12 Wishes",
        description: 'GROUP PROJECT: an interactive full-stack holiday wish list app using RESTful APIs, object-relational mapping and authentication',
        repository: 'https://github.com/chriswein12/wish-list',
        deployment: 'https://twelve-wishes.herokuapp.com/',
    },
    {
        key: 5,
        src: onBase,
        name: 'onBase',
        width: 1,
        alt: 'onBase application screenshot',
        title: "onBase",
        description: 'A Content Management System (CMS) for tracking employee data from the command-line',
        repository: 'https://github.com/SMKrizan/onBase',
    },
    {
        key: 7,
        src: weatherView,
        name: 'weatherView',
        width: 2,
        alt: 'weatherView application screenshot',
        title: "Weather View",
        description: 'an application for accessing current & forecasted weather using a 3rd-party API',
        repository: 'https://github.com/smkrizan/WeatherView/',
        deployment: 'https://smkrizan.github.io/WeatherView/',
    },
    {
        key: 8,
        src: shopShop,
        name: 'shopShop',
        width: 1,
        alt: 'shopShop application screenshot',
        title: "Shop-Shop",
        description: 'an e-commerce website using Redux and "Stripe" payment platform',
        repository: 'https://github.com/SMKrizan/shopShop-Redux',
        deployment: 'https://shopshop-redux.herokuapp.com/',
}
]

export default { project_info };
