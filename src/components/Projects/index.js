import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import projectPhotos from '../../utils/photos.js'

const { photos } = projectPhotos
const Projects = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            {console.log(photos)}
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => {
                                console.log("X",x)
                                return ({
                             src: x.src,
                                srcset: x.srcSet,
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
