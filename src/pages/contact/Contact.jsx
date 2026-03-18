import PageFooter from '../../components/sections/Footer/Footer';
import Navbar from '../../components/sections/Navbar/Navbar';
import { useState } from 'react';
import { sendData } from '../../services/apiCalls';
import { toast } from 'react-toastify';

function Contact() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await sendData({ data, url: 'messages' });
      if (res.status) {
        toast.success(res.message || 'Message sent successfully!');
        setData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        toast.error(res.message || 'Failed to send message.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const contactsBackup = [
    {
      id: 1,
      key: 'Head Office',
      value: '69 Seefeldstrasse, Zurich, Switzerland',
      type: 'ADDRESS',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-7h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m4 0h2" />
        </svg>
      )
    },
    {
      id: 2,
      key: 'African Hub Office',
      value: '5, Ogunsiji Close, Off Allen Avenue, Ikeja, Lagos.',
      type: 'ADDRESS',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 3,
      key: 'Email Us',
      value: 'info@wayabank.com',
      type: 'EMAIL',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <div className='min-h-screen bg-[#FAFBFF]'>
      <Navbar />
      
      <main className='py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-16 lg:gap-24'>
          
          {/* Left Side: Contact Info */}
          <div className='lg:w-5/12'>
              <div className='space-y-8'>
              <div className='text-center mb-20'>
                  <h1 className='section-title'>
                    Let's start a <span className="section-title-accent">conversation</span>
                  </h1>
                  <div className="section-divider" />
                  <p className='section-subtitle'>
                    Have a question or feedback? We're here to help you navigate your financial journey.
                  </p>
              </div>

                <div className='space-y-10 pt-4'>
                  {contactsBackup.map((contact) => (
                    <div className='flex gap-6 group' key={contact.id}>
                      <div className='w-12 h-12 flex-shrink-0 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300'>
                        {contact.icon}
                      </div>
                      <div>
                        <h5 className='font-black text-gray-900 uppercase text-xs tracking-widest mb-1'>{contact.key}</h5>
                        <p className='text-gray-500 font-medium'>{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional decoration */}
                <div className="pt-12 hidden lg:block">
                  <div className="w-32 h-32 border-4 border-black/5 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 bg-black/5 rounded-full"></div>
                  </div>
                </div>
              </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className='lg:w-7/12'>
              <div className='bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-50/50 relative overflow-hidden'>
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -mr-16 -mt-16"></div>
                
                <h4 className='text-2xl font-black text-gray-900 mb-8 relative'>Send us a message</h4>
                
                <form className='space-y-6 relative' onSubmit={handleSubmit}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Your Name</label>
                      <input
                        onChange={handleChange}
                        name='name'
                        value={data.name}
                        type='text'
                        placeholder='John Doe'
                        required
                        className='w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-black/5 transition-all font-medium placeholder:text-gray-300'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Email Address</label>
                      <input
                        onChange={handleChange}
                        name='email'
                        value={data.email}
                        type='email'
                        placeholder='john@example.com'
                        required
                        className='w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-black/5 transition-all font-medium placeholder:text-gray-300'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Phone Number</label>
                      <input
                        onChange={handleChange}
                        name='phone'
                        value={data.phone}
                        type='tel'
                        placeholder='+234...'
                        required
                        className='w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-black/5 transition-all font-medium placeholder:text-gray-300'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Subject</label>
                      <input
                        onChange={handleChange}
                        name='subject'
                        value={data.subject}
                        type='text'
                        placeholder='How can we help?'
                        required
                        className='w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-black/5 transition-all font-medium placeholder:text-gray-300'
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Message</label>
                    <textarea
                      onChange={handleChange}
                      name='message'
                      value={data.message}
                      placeholder='Tell us more about your inquiry...'
                      required
                      className='w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-black/5 transition-all font-medium h-40 resize-none placeholder:text-gray-300'
                    ></textarea>
                  </div>

                  <button 
                    type='submit' 
                    disabled={loading}
                    className='w-full md:w-auto px-12 py-5 bg-black text-white font-black rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:transform-none'
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <svg className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
          </div>

        </div>
      </main>

      <PageFooter />
    </div>
  );
}

export default Contact;
