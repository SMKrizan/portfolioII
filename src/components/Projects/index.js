import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import screenshots from '../../utils/photos.js'

const { photos } = screenshots

const Projects = () => {

    // the following 4 constants enable the 'lightbox' feature of npm package 'react-photo-gallery'
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true)}, []);
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false)};

    // 'Gallery', 'ModalGateway' and 'Carousel' are built-in components of 'react-photo-gallery'
    return (
        <div>
            <h3><span id='text'>featured</span> Projects</h3>
            {console.log(photos)}
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => {
                                return ({
                                src: x.src,
                                alt: x.alt,
                                caption: x.title
                            })
                        
                        })}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default Projects;


