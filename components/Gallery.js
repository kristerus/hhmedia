import React from 'react'
import Image from 'next/image'

const Gallery = () => {
    return (
        <div className="galleryContainer">
            <h1 className='galleryTitle'>Gallery</h1>
            <div className='imageContainer'>
                <div className='galleryImage'><Image src="/1(1).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/1(2).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/1(3).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' /></div>
                <div className='galleryImage'><Image src="/1(4).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/1(5).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/1(6).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/1(7).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage'><Image src="/1(8).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' /></div>

                <div className='galleryImage' id="optional"> <Image src="/1(9).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage' id="optional" /></div>

                <div className='galleryImage' id="optional"> <Image src="/1(10).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>

                <div className='galleryImage' id="optional"><Image src="/1(11).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImag ' id="optional" /></div>

                <div className='galleryImage' id="optional"><Image src="/1(12).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>

                <div className='galleryImage' id="optional"> <Image src="/1(13).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>

                <div className='galleryImage' id="optional"> <Image src="/1(14).jpg" width="350" height="300" alt="Petra Gym Image" className='galleryImage ' id="optional" /></div>





            </div >
        </div>
    )
}

export default Gallery;