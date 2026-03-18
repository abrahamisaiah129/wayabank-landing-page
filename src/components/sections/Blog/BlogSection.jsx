import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../../../data/blogData';
import './BlogSection.scss';

const BlogSection = () => {
  // Get top 6 blogs
  const topBlogs = blogData.slice(0, 6);

  const dateFormater = (theDate) => {
    const dateobj = new Date(theDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateobj.toLocaleDateString(undefined, options);
  };

  return (
    <section id="blog-preview" className="blog-section py-24 bg-black relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title !text-white uppercase tracking-tighter font-black">
            Insights, Stories and <span className="section-title-accent">Updates</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle !text-white font-black text-xl leading-relaxed">
            Stay informed with the latest trends in fintech, security tips, and company announcements directly from the WayaBank team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topBlogs.map((blog, index) => (
            <Link to={`/blogs/${blog.id}`} className="waya-premium-card blog-card group" key={blog.id}>
              <div className="relative h-60 rounded-[2rem] overflow-hidden mb-6 shadow-xl border border-white/10">
                <img 
                  src={blog.image_url} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-orange-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                  {blog.category}
                </span>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-2 mb-3 text-white text-xs font-bold uppercase tracking-wider">
                  <span>{dateFormater(blog.updated_at)}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span>{blog.views} views</span>
                </div>
                <h3 className="text-xl font-black text-orange-500 mb-3 group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-white text-md line-clamp-2 leading-relaxed font-black mb-4">
                  {blog.short_content}
                </p>
                <span className="inline-flex items-center justify-center px-6 py-2.5 bg-orange-500 text-white text-sm font-black rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 group-hover:scale-105 active:scale-95">
                  Read Story
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
