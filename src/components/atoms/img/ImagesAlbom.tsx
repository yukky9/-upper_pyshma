import React from 'react';

const ImagesAlbom = () => {
    return (
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg"
                         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg"
                         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg"
                         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg"
                         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg"
                         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ImagesAlbom;