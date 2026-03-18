import React from 'react';
import './Testimonials.scss';

const reviews = [
  {
    name: "mackd45",
    text: "Amazing social community with a well structured interface for efficient transactions. The best banking app in Nigeria!",
    rating: 5,
    source: "App Store",
  },
  {
    name: "Oyeniyi Muideen",
    text: "Stress free and easy to use. WayaBank is sleek and the transactions are fast. Highly recommended!",
    rating: 5,
    source: "Play Store",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjW7pD0OU_DnTgN5fqrV1LpOh3qPUc9V2Jc437qw8i1NJAFnqojkpw=s128-rw"
  },
  {
    name: "Freeman0856",
    text: "I really enjoy this app, very nice and fast transactions. Seamless experience so far.",
    rating: 5,
    source: "App Store",
  },
  {
    name: "nisnud",
    text: "Nice app for daily transactions. The customer service response is truly quite fast.",
    rating: 4,
    source: "App Store",
  },
  {
    name: "Tobi Olatunji",
    text: "Seamless. The new way to banking! Amazing social community and very efficient for my needs.",
    rating: 5,
    source: "Play Store",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjU136EkHMoG8YuBY1QHQXiz1rqtur41j3wlncN-XfHhHt32BD-b=s128-rw"
  },
  {
    name: "ivy bima",
    text: "This app is always your sure plug for any of your transactions. Secure and reliable.",
    rating: 5,
    source: "App Store",
  },
  {
    name: "Gift Okocha",
    text: "Waya is the best online banking app, very seamless and convenient to use for everyone.",
    rating: 5,
    source: "Play Store",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjWl0sbgzTF5ijBxK0xC8IUBVBqYGWQTk4bXthULcHyA_-Ff7Q5J=s128-rw"
  },
  {
    name: "Stanley Sylvester",
    text: "The security feature of this app is top. Fast transfers and zero fees. Five stars! 👍",
    rating: 5,
    source: "Play Store",
    image: "https://play-lh.googleusercontent.com/a/ACg8ocLqcBVGTAr0W5OFw7kyTyd_wMJDkq685Ctoe5DzFwMEp305-A=s128-rw"
  }
];

// Helper function to get initials from name
const getInitials = (name) => {
  if (!name) return "";
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  }
  return name.charAt(0).toUpperCase();
};

export default function Testimonials({ id }) {
  return (
    <section id={id} className="testimonials-section py-20 pb-0 bg-[#FAFBFF] relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="grid-testimonials" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ff6700" strokeWidth="0.1"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid-testimonials)" />
        </svg>
      </div>
      <div className="testimonials-inner">
        <div className="section-header text-center mb-16">
            <h2 className="section-title section-title-long text-[#0a0b10] uppercase tracking-tighter font-black">
              Don’t just take our <span className="section-title-accent">word</span> for it
            </h2>
            <div className="section-divider" />
          </div>

        <div className="testimonials-marquee-container">
          <div className="testimonials-marquee">
            {/* Double the reviews to ensure seamless loop */}
            {[...reviews, ...reviews].map((review, i) => (
              <div className="testimonial-card" key={i}>
                <div className="card-top">
                  <div className="stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className={`w-4 h-4 ${j < review.rating ? 'text-[#FF6B00]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="source-tag-new">
                    {review.source === 'App Store' ? (
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.36 2.35-1.04 3.19-.69.8-1.73 1.49-2.78 1.4-.11-1.12.33-2.28.88-3.09z"/></svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,18L9,13.5L17.5,9V18M8,18V6H9.5V18H8Z"/></svg>
                    )}
                    <span>{review.source}</span>
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="reviewer-info">
                  <div className="reviewer-avatar overflow-hidden">
                    {review.image ? (
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-white font-bold">{getInitials(review.name)}</span>
                    )}
                  </div>
                  <div className="reviewer-meta pl-2">
                    <span className="reviewer-name">{review.name}</span>
                    <div className="verified-badge">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                      <span>Verified User</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
