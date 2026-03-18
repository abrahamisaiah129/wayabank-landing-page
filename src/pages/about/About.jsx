import PageFooter from '../../components/sections/Footer/Footer'
import GenericJumbotron from '../../components/sections/GenericJumbotron/GenericJumbotron'
import Navbar from '../../components/sections/Navbar/Navbar';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import '../../styles/about.scss'
import { useRecoilValueLoadable } from 'recoil';
import { getAboutContent, getSettings } from '../../states/home';
import { imageUrl } from '../../services/axios';
import { Image } from 'antd';

function About() {
  const data = useRecoilValueLoadable(getAboutContent)
  const dataS = useRecoilValueLoadable(getSettings)
  const settings = dataS.state === "hasValue" ? dataS.contents : {}
  const aboutContent = data.state === "hasValue" ? data.contents : []
  console.log(aboutContent)

  const aboutBackup=[
    {
      id: 1,
      image_url: '/about1.png',
      title: 'PAYMENT SOLUTION',
      content: 'Register, Login and Transact with your Phone number',
    },
    {
      id: 2,
      image_url: '/about2.png',
      title: 'EASY TO USE',
      content: 'Add Bank card / setup Bank account and start transacting',
    },
    {
      id: 3,
      image_url: '/about3.png',
      title: 'EASY TO TRANSACT',
      content: 'Link Your BVN, Top up your Wallet, Request for Payment, Accept payment, Transfer money, Pay for Subscriptions and Services, with just few clicks.',
    },
    {
      id: 4,
      image_url: '/about4.png',
      title: 'PAYMENT OPTIONS',
      content: 'Transact, and Receive payments with or without Internet access with our multiple payment options.',
    },
    {
      id: 5,
      image_url: '/about5.png',
      title: 'QR CODE',
      content: 'Scan and make payments, Send QR code to customers/contact list and get paid in minutes.',
    },
    {
      id: 6,
      image_url: '/about6.png',
      title: 'CHAT, CALL, TRANSACT',
      content: 'Get in touch with your loved ones, send them pictures and videos, make free video and audio calls, and send them money',
    },
    {
      id: 7,
      image_url: '/about7.png',
      title: 'SOCIALIZE',
      content: 'Meet new people, Post pictures and videos, create groups, advertise your products, follow people and synchronize with your other social media accounts',
    },
  ]
  return (
    <div className="bg-[#FAFBFF] min-h-screen relative overflow-hidden">
      <Navbar forceScrolled={true} />
      <div id='aboutsection' className="relative z-10">
        <GenericJumbotron titleText='ABOUT US' desc={settings.about_us} />
        <div id='aboutGrid' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-[1440px] mx-auto py-20'>
          {aboutBackup.map(about =>
            <Fade bottom key={about.id}>
              <div className="waya-premium-card bg-white !border-gray-100 hover:!border-orange-500/30 group">
                <div className="relative h-48 mb-6 overflow-hidden rounded-2xl">
                  <Image 
                    preview={false} 
                    src={about.image_url}
                    alt={about.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    placeholder={
                      <Image
                        src={`${imageUrl}${about.image_url}`} 
                        preview={false}
                      />
                    }
                  />
                </div>
                <div className='text-center'>
                  <h6 className="font-black text-gray-900 uppercase tracking-widest mb-3">{about.title}</h6>
                  <p className='text-gray-500 font-medium leading-relaxed'>{about.content}</p>
                </div>
              </div>
            </Fade>)}
        </div>
        <PageFooter />
      </div>
    </div>
  )
}

export default About