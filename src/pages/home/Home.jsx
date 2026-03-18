import { useHistory } from 'react-router';
import PageFooter from '../../components/sections/Footer/Footer';
import GenericJumbotron from '../../components/sections/GenericJumbotron/GenericJumbotron';
import DownloadModal from '../../components/parts/Modals/DownloadModal';
import Navbar from '../../components/sections/Navbar/Navbar';
import Banner from '../../components/sections/Banner/Banner';
import QuoteSection from '../../components/sections/Quote/QuoteSection';
import Services from '../../components/sections/Services/Services';
import HowItWorks from '../../components/sections/HowItWorks/HowItWorks';
import EasyBanking from '../../components/sections/EasyBanking/EasyBanking';
import Features from '../../components/sections/Features/Features';
import WayaEcosystem from '../../components/sections/WayaEcosystem/WayaEcosystem';
import DownloadApp from '../../components/sections/DownloadApp/DownloadApp';
import BlogSection from '../../components/sections/Blog/BlogSection';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../../styles/home.scss';
import { useRecoilValueLoadable } from 'recoil';
import { getHome, getSettings, getFeatures } from '../../states/home';
import { imageUrl } from '../../services/axios';
import { Image, Switch } from 'antd';
import { useState } from 'react';
import send from '../../assets/svgs/send.svg';
import perform from '../../assets/svgs/perform.svg';
import recieve from '../../assets/svgs/recieve.svg';
import pay from '../../assets/svgs/pay.svg';
import request from '../../assets/svgs/request.svg';
import explore from '../../assets/svgs/explore.svg';
import chain from '../../assets/svgs/chain.svg';
import arrowRight from '../../assets/svgs/arrow-right.svg';
import qrcode from '../../assets/images/qrcode.png';
import makePayment from '../../assets/images/phoneicon.png';
import bar from '../../assets/images/bar.png';
import safe from '../../assets/images/safensecure.png';
import agent from '../../assets/images/agent.png';
import chat from '../../assets/images/chat.png';
import merchant from '../../assets/images/speaker.png';
import phone from '../../assets/images/phone.png';
import smallBlue from '../../assets/images/smallBlue.png';
import phoneinhand from '../../assets/images/phoneinhand.png';
import appstore from '../../assets/images/appstore.png';
import googleplay from '../../assets/images/googleplay.png';
import webWaya from '../../assets/images/webWaya.png';
import Backg from '../../assets/images/wayaBg.png';
import Backg2 from '../../assets/images/wayaBg2.png';
import list from '../../assets/images/List.png';
import transferLogo from '../../assets/images/transferLogo.png';
import ssimg from '../../assets/svgs/ssimg.svg';
import qr from '../../assets/svgs/qr.svg';
import devices from '../../assets/images/devices.png';
import wallet from '../../assets/images/wallet.png';
import { Modal } from 'reactstrap';
import WayaButton from '../../components/parts/Button';

function Home() {
  console.log('Home Rendering');
  const history = useHistory();
  const [posType, setPosType] = useState('web');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const toggleDownloadModal = () => setIsDownloadModalOpen(!isDownloadModalOpen);
  const data = useRecoilValueLoadable(getHome);
  const dataS = useRecoilValueLoadable(getSettings);
  const dataF = useRecoilValueLoadable(getFeatures);
  const home = data.state === 'hasValue' ? data.contents : {};
  const settings = dataS.state === 'hasValue' ? dataS.contents : {};
  const features =
    dataF.state === 'hasValue' && dataF.contents ? dataF.contents : [];
  console.log(home);

  const defaultFeature = [
    {
      img: '/safensecure.png',
      title: 'Safe And Secure',
      description:
        'Transactions are safe and secure when you send and receive money and our fees are low (10N).',
    },
    {
      img: '/phoneicon.png',
      title: 'USSD Access',
      description:
        'No internet? No problem. Waya has free USSD codes so you can simply dial to make transactions.',
    },
    {
      img: '/qrcode.png',
      title: 'QR Code Scanner',
      description: 'Quick and easy transactions by scanning a QR code.',
    },
    {
      img: '/cryptochat.png',
      title: 'Socialize',
      description:
        'Chat, call and keep up with your favorite vendors and customers on WayaGram.',
    },
    {
      img: '/briefcase.png',
      title: 'Agents and Kiosks',
      description: 'Top up your wallet or get cash out via Waya Agent.',
    },
    {
      img: '/speaker.png',
      title: 'Merchants',
      description:
        'Make extra cash as a Waya Merchant. Earn commissions every time your customer pays you using Waya PayChat.',
    },
  ];

  const switchPos = (type) => {
    setPosType(type);
  };

  const CustomerFeedback = [
    {
      id: 1,
      img: '/feedback.png',
      name: 'Rahul Salem',
      role: 'Product Manager',
      company: '/brands/biggs.png',
      com: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.',
    },
    {
      id: 2,
      img: '/feedback.png',
      name: 'Rahul Salem',
      role: 'Product Manager',
      company: '/brands/biggs.png',
      com: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.',
    },
    {
      id: 3,
      img: '/feedback.png',
      name: 'Rahul Salem',
      role: 'Product Manager',
      company: '/brands/biggs.png',
      com: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.',
    },
  ];

  return (
    <div id='homesection'>
      <Navbar className='mb-4' />
      <Banner id="banner" />
      <QuoteSection />
      <Services id="services" />

      <HowItWorks id="how-it-works" />

      <EasyBanking />

      
      

      <BlogSection />

      <Testimonials id="testimonials" />

      {/* <DownloadApp home={home} /> 
      */}
<Features home={home} features={features} />
<WayaEcosystem home={home} />
      <PageFooter />
    </div>
  );
}

export default Home;
