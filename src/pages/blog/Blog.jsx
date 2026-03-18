import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { fetching } from '../../states/home';
import { blogData } from '../../data/blogData';
import PageFooter from '../../components/sections/Footer/Footer';
import Navbar from '../../components/sections/Navbar/Navbar';

function Blog(props) {
  let { url } = useRouteMatch();
  const [loading, setloading] = useRecoilState(fetching);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const [modal, setModal] = useState(false);
  const toggleDownloadModal = () => setModal(!modal);

  let dateFormater = (theDate) => {
    const dateobj = new Date(theDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateobj.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    setloading(true);
    const timer = setTimeout(() => {
      setloading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [setloading]);

  const filteredBlogs = blogData.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.short_content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="blog-page-v2 bg-white min-h-screen">
      <Navbar onOpenAccountClick={toggleDownloadModal} />
      
      {/* Blog Hero */}
      <section className="blog-hero py-24 md:py-32 bg-gray-50/50 text-center px-6 border-b border-gray-100">
          <span className="text-black font-black tracking-[0.2em] uppercase text-xs mb-4 block opacity-60">Our Blog</span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Insights & <span className="text-black underline decoration-gray-200 decoration-4 underline-offset-8">Updates</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-medium">
            The latest updates, stories, and financial guides from the Waya team.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="mt-14 max-w-lg mx-auto relative group">
            <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-200 p-1.5 focus-within:border-black focus-within:shadow-md transition-all duration-300">
              <div className="pl-4 text-gray-400 group-focus-within:text-black transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search articles, categories..." 
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="flex-1 px-4 py-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-bold text-sm"
              />
              {searchTerm.length > 0 && (
                <button 
                  onClick={() => { setSearchTerm(""); setCurrentPage(1); }}
                  className="mr-2 px-4 py-2 bg-gray-100 text-gray-600 font-black rounded-xl hover:bg-black hover:text-white transition-all uppercase text-[10px] tracking-widest shadow-sm"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
      </section>

      <div className="container px-6 md:px-12 mx-auto pt-20 pb-32">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentPosts.length > 0 ? currentPosts.map(el => (
                  <div key={el.id} className="blog-card-v3 group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={el.image_url} 
                        alt={el.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {el.category && (
                        <span className="absolute top-5 left-5 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider text-black shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-300">
                          {el.category}
                        </span>
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-6">
                        <img src={el.author.image} alt={el.author.name} className="w-8 h-8 rounded-full border-2 border-gray-50 shadow-sm" />
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-gray-900 leading-none mb-1">{el.author.name}</span>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{dateFormater(el.updated_at)}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-black transition-colors">
                        {el.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed font-medium flex-grow">
                        {el.short_content}
                      </p>
                      <Link 
                        to={{ pathname: `${url}/${el.id}`, state: `${el.id}` }}
                        className="inline-flex items-center gap-2 text-black text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all"
                      >
                        Read Story <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </Link>
                    </div>
                  </div>
              )) : (
                <div className="col-span-full py-32 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">No matching articles found</h3>
                  <p className="text-gray-500 font-medium mb-8">Try adjusting your search criteria or explore our featured stories.</p>
                  <button onClick={() => setSearchTerm("")} className="bg-black text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">Reset Filter</button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-24 flex items-center justify-center gap-4">
                <button 
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black hover:text-white hover:shadow-xl hover:-translate-x-1'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-12 h-12 rounded-2xl font-black text-sm transition-all ${currentPage === i + 1 ? 'bg-black text-white shadow-2xl scale-110' : 'border border-gray-100 hover:bg-gray-50'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black hover:text-white hover:shadow-xl hover:translate-x-1'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <PageFooter />
    </div>
  );
}

export default Blog;