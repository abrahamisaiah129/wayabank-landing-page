import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import Testimonial1 from '../assets/testimony1.png';

function Testimonials() {
    return (
        <div className="pb-36 pt-10">
            <div className="testimonial-container flex flex-col items-center pt-16">
                <h4 className="text-3xl font-semibold">Our Customer’s Feedbacks</h4>
                <p className="w-full md:w-3/5 text-center font-medium mt-4 px-8 md:px-14 text-xl text-gray-500 ...">What our customers love about us.</p>
            </div>
            <Swiper
                navigation
                loop
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="w-full testimonial px-8 md:px-32 grid grid-cols-1 md:grid-cols-3 pt-10">
                        <div className="">
                            <img src={Testimonial1} alt="Testimonials" />
                        </div>
                        <div className="col-span-2 md:pt-32 px-4 md:px-32">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.</p>
                            <h5 className="font-semibold text-xl mt-6">Rahul Salem</h5>
                            <p>Product Manager</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full testimonial px-8 md:px-32 grid grid-cols-1 md:grid-cols-3 pt-10">
                        <div className="">
                            <img src={Testimonial1} alt="Testimonials" />
                        </div>
                        <div className="col-span-2 md:pt-32 px-4 md:px-32">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.</p>
                            <h5 className="font-semibold text-xl mt-6">Rahul Salem</h5>
                            <p>Product Designer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full testimonial px-8 md:px-32 grid grid-cols-1 md:grid-cols-3 pt-10">
                        <div className="">
                            <img src={Testimonial1} alt="Testimonials" />
                        </div>
                        <div className="col-span-2 md:pt-32 px-4 md:px-32">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.</p>
                            <h5 className="font-semibold text-xl mt-6">Rahul Salem</h5>
                            <p>Frontend Developer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full testimonial px-8 md:px-32 grid grid-cols-1 md:grid-cols-3 pt-10">
                        <div className="">
                            <img src={Testimonial1} alt="Testimonials" />
                        </div>
                        <div className="col-span-2 md:pt-32 px-4 md:px-32">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.</p>
                            <h5 className="font-semibold text-xl mt-6">Rahul Salem</h5>
                            <p>Backend Developer</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonials
