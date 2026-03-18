import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { blogData } from '../../data/blogData';
import { FacebookFilled, TwitterOutlined, InstagramFilled } from '@ant-design/icons';
import { Image } from 'antd';
import Navbar from '../../components/sections/Navbar/Navbar';
import PageFooter from '../../components/sections/Footer/Footer';
import '../../styles/single-post.scss';

function SinglePost(props) {
  let { topicId } = useParams();
  const singleData = blogData.find(b => b.id.toString() === topicId) || {};
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  let dateFormater = (theDate) => {
    if (!theDate) return "";
    const dateobj = new Date(theDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateobj.toLocaleDateString(undefined, options);
  };

  return (
    <div id="single-post" className="bg-[#FAFBFF]">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-20 pb-40">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-black font-black mb-12 hover:gap-3 transition-all no-underline">
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              Back to Blog
            </Link>

            <div className="mb-10">
              <span className="bg-black/5 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                {singleData.category || 'Updates'}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                {singleData.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-gray-100 mb-12">
                <div className="flex items-center gap-4">
                  <img 
                    src={singleData.author?.image || 'https://randomuser.me/api/portraits/men/1.jpg'} 
                    alt={singleData.author?.name} 
                    className="w-14 h-14 rounded-full border-2 border-gray-50 shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="font-black text-gray-900">{singleData.author?.name || 'Admin'}</span>
                    <span className="text-sm text-gray-500 font-medium">{dateFormater(singleData.updated_at)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-black uppercase tracking-widest opacity-40">Views</span>
                    <span className="text-lg font-black text-gray-900">{singleData.views || '0'}</span>
                  </div>
                  <div className="h-10 w-px bg-gray-100"></div>
                  <div className="flex items-center gap-4">
                    <FacebookFilled className="text-2xl text-gray-300 hover:text-black cursor-pointer transition-colors" />
                    <TwitterOutlined className="text-2xl text-gray-300 hover:text-black cursor-pointer transition-colors" />
                    <InstagramFilled className="text-2xl text-gray-300 hover:text-black cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden mb-16 shadow-2xl border-8 border-white">
              <Image 
                className="w-full h-auto object-cover max-h-[600px]" 
                src={singleData.image_url} 
                alt={singleData.title}
                placeholder={
                  <div className="w-full h-96 bg-gray-50 animate-pulse"></div>
                }
              />
            </div>

            <div className="blog-content-rich prose prose-xl max-w-none text-gray-700 leading-relaxed font-normal mb-20">
              <div dangerouslySetInnerHTML={{ __html: singleData.content }} />
            </div>

            {/* Image Gallery with Lightbox */}
            {singleData.gallery && singleData.gallery.length > 0 && (
              <div className="border-t border-gray-100 pt-20">
                <h3 className="text-3xl font-black text-gray-900 mb-10 flex items-center gap-3">
                   <div className="w-10 h-1.5 bg-black rounded-full"></div>
                   Image Gallery
                </h3>
                <Image.PreviewGroup>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {singleData.gallery.map((img, idx) => (
                      <div key={idx} className="group relative rounded-[1.5rem] overflow-hidden shadow-md h-40 border-2 border-white hover:border-black/10 transition-all cursor-pointer">
                        <Image 
                          src={img} 
                          alt={`Gallery ${idx + 1}`} 
                          className="w-full h-full object-cover"
                          preview={true}
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                           <svg className="w-6 h-6 text-white scale-0 group-hover:scale-100 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </Image.PreviewGroup>
              </div>
            )}
          </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default SinglePost