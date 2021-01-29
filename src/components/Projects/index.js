import React from 'react';
import Gallery from 'react-photo-gallery';
import { TallyMax, wishList, weatherView, onBase, readTheory, eCommBackEnd } from '../../assets/images';

const Projects = () => {
    const IMAGES = [{
        src: {TallyMax},
        thumbnail: '../../assets/images/TallyMax.png',
        thumbnailWidth: 180,
        thumbnailHeight: 180,
        alt: 'TallyMax application screenshot',
        tags: [{ value: "Javascript", title: "Javascript" }],
        caption: 'Group Project: "Tally Max" word generator (https://github.com/jgrossh2/word-generator)',
    },
    {
        src: 'https://twelve-wishes.herokuapp.com/',
        thumbnail: { wishList },
        thumbnailWidth: 180,
        thumbnailHeight: 180,
        alt: '12Wishes application screenshot',
        tags: [{ value: "Javascript", title: "Javascript" },
        { value: 'Handlebars', title: 'Handlebars' },
        { value: 'SCSS', title: 'SCSS' }],
        caption: 'Group Project: "12Wishes" holiday wish lists (https://github.com/chriswein12/wish-list)',
    },
    {
        src: 'https://smkrizan.github.io/WeatherView/',
        thumbnail: { weatherView },
        thumbnailWidth: 361,
        thumbnailHeight: 180,
        alt: 'weatherView application screenshot',
        tags: [{ value: "Javascript", title: "Javascript" },
        { value: 'HTML', title: 'HTML' },
        { value: 'CSS', title: 'CSS' }],
        caption: '"WeatherView" access current & forecasted weather using 3rd party API (https://github.com/smkrizan/WeatherView/)',
    },
    {
        src: 'https://github.com/SMKrizan/onBase',
        thumbnail: { onBase },
        thumbnailWidth: 180,
        thumbnailHeight: 180,
        alt: 'onBase application screenshot',
        tags: [{ value: "Javascript", title: "Javascript" }],
        caption: '"onBase" CLI-app/CMS for tracking employee data',
    },
    {
        src: 'https://readtheory.herokuapp.com/',
        thumbnail: { readTheory },
        thumbnailWidth: 180,
        thumbnailHeight: 180,
        alt: 'readTheory application screenshot',
        tags: [{ value: "Javascript", title: "Javascript" },
        { value: 'HTML', title: 'HTML' },
        { value: 'CSS', title: 'CSS | HTML' }],
        caption: '"readTheory" note taking app (https://github.com/SMKrizan/readTheory)',
    },
    {
        src: 'https://github.com/SMKrizan/E-Commerce-Back-End',
        thumbnail: { eCommBackEnd },
        thumbnailWidth: 180,
        thumbnailHeight: 180,
        alt: 'E-Commerce back end application screenshot',
        tags: [{ value: "Javascript", title: "Javascript" }],
        caption: 'E-Commerce Back End',
    }];

    return (
        <Gallery images={IMAGES} enableLightbox={true} backdropClosesModal />
    )
}


export default Projects;