import PageFooter from '../componentParts/footer'
import GenericJumbotron from '../componentParts/genericJumbotron'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../styles/home.scss'
import { useRecoilValueLoadable } from 'recoil';
import { getHome, getSettings, getFeatures } from '../states/home';
import { imageUrl } from '../services/axios';
import { Button, Image, Switch } from 'antd';
import {useState} from 'react'

function Home() {
  const [posType, setPosType] = useState('web')
  const data = useRecoilValueLoadable(getHome)
  const dataS = useRecoilValueLoadable(getSettings)
  const dataF = useRecoilValueLoadable(getFeatures)
  const home = data.state === "hasValue" ? data.contents : {}
  const settings = dataS.state === "hasValue" ? dataS.contents : {}
  const features = dataF.state === "hasValue" && dataF.contents ? dataF.contents : []
  console.log(home)


  const defaultFeature = [
    {
      img: '/safensecure.png',
      title: 'Safe And Secure',
      description: 'Transactions are safe and secure when you send and receive money and our fees are low (10N).'
    },
    {
      img: '/phoneicon.png',
      title: 'USSD Access',
      description: 'No internet? No problem. Waya has free USSD codes so you can simply dial to make transactions.'
    },
    {
      img: '/qrcode.png',
      title: 'QR Code Scanner',
      description: 'Quick and easy transactions by scanning a QR code.'
    },
    {
      img: '/cryptochat.png',
      title: 'Socialize',
      description: 'Chat, call and keep up with your favorite vendors and customers on WayaGram.'
    },
    {
      img: '/briefcase.png',
      title: 'Agents and Kiosks',
      description: 'Top up your wallet or get cash out via Waya Agent.'
    },
    {
      img: '/speaker.png',
      title: 'Merchants',
      description: 'Make extra cash as a Waya Merchant. Earn commissions every time your customer pays you using Waya PayChat.'
    },
  ]

  const switchPos=(type)=>{
    setPosType(type)
  } 

  const CustomerFeedback=[
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
  ]
  console.log(posType)
  return (
    <div id='homesection'>
      <TopNav className='mb-4' />
      <div className="home-jumbotron pt-4 " style={{ backgroundImage: 'url(/grain.png)' }}>
        <div className='container'>
          <div className="py-4 row">
            <Fade left className='w-100'>
              <div className='col-md-12 text-center px-lg-5'>
                <h1 className="w-75 mx-auto">{home.hero_title}</h1>
                <p className='w-75 mx-auto px-lg-5'>{home.hero_description}</p>
              </div>
            </Fade>
            <Fade right>
              <div className='col-md-12 text-center md-m'>
                {/* initial image url  */}
                {/* `${imageUrl}${home.hero_image_url}` */}
                <img src={`/images/tabphone.png`} className="m-0 p-0" alt='jumbotron' />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <Fade bottom>
        <div className='genericJumbo py-4' style={{ backgroundImage: 'url(/grain.png)' }}>
          <GenericJumbotron titleText='About Waya PayChat' desc={settings.about_us} />
          <div className='container ps-lg-5 gjButton'>
            <div className='row ml-lg-4 pl-lg-4'>
              <div className='ms-lg-5 ml-lg-4 pl-lg-4'>
                <a className='btn btn-orange'>Get started for free <img alt='...' src='/rightArr.png' /></a>
                <a className='btn btn-link'>LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <section className='categories'>
        <div className='container'>
          <div className='row ml-lg-4 pl-lg-4'>
            <h1 className='col-md-10 ps-lg-6'>Explore our <br/> soutions</h1>
          </div>
        </div>
        <div className='row text-center mt-5'>
          <Fade bottom>
            <div className='bg-light col-sm-12 col-md-3 mx-md-2 px-4 py-4 rounded-5'>
              <Image 
                preview={false} 
                src='/bills.png'
                alt='paybill' 
                placeholder={
                  <Image
                    src={`${imageUrl}${home.feature1_image_url}`} 
                    preview={false}
                    width={200}
                  />
                }
              />
              <h6 className='py-4'>{home.feature1_title}</h6>
              <p>{home.feature1_description}</p>
            </div>
            <div className='bg-light col-sm-12 col-md-3 mx-md-2 px-4 py-4 rounded-5'>
              <Image 
                preview={false} 
                src='/qr.png'
                alt='paybill' 
                placeholder={
                  <Image
                    src={`${imageUrl}${home.feature2_image_url}`} 
                    preview={false}
                    width={200}
                  />
                }
              />
              <h6 className='py-4'>{home.feature2_title}</h6>
              <p>{home.feature2_description}</p>
            </div>
            <div className='bg-light col-sm-12 col-md-3 mx-md-2 px-4 py-4 rounded-5'>
              <Image 
                preview={false} 
                src='/last.png'
                alt='paybill' 
                placeholder={
                  <Image
                    src={`${imageUrl}${home.feature3_image_url}`} 
                    preview={false}
                    width={200}
                  />
                }
              />
              <h6 className='py-4'>{home.feature3_title}</h6>
              <p>{home.feature3_description}</p>
            </div>
          </Fade>
        </div>
      </section>

      <section className='features text-center' style={{ backgroundImage: 'url(/grain.png)' }}>
        <h4>Waya PayChat Unique Features</h4>
        <div className='infographic row'>
          <Fade big>
            <div
             className='col-md-6 singlePhone'
            //  className='singlePhone'
             >
              <Image 
                preview={false} 
                src='/singlePhone.png'
                alt='feature' 
                placeholder={
                  <Image
                    src={`${imageUrl}${home.feature_image_url}`} 
                    preview={false}
                    width={200}
                  />
                }
              />
            </div>
          </Fade>
          <Fade right cascade>
            <div className='col-md-6'>
              {defaultFeature.map(feature => (
                <div key={feature.id} className='special-row'>
                  <div className=''>
                    <Image 
                      preview={false} 
                      src={feature.img}
                      alt='feature' 
                      width={100}
                      placeholder={
                        <Image
                          src={`${imageUrl}${feature.image_url}`} 
                          preview={false}
                          width={200}
                        />
                      }
                    />
                  </div>
                  <div className='theTexts'>
                    <h6>{feature.title}</h6>
                    <p>
                      {feature.description}
                    </p>
                  </div>
                </div>))}
            </div>
          </Fade>
        </div>
      </section>

      <section className='features-two row'>
        <Fade right cascade>
          <ul className="timeline col-md-5 mr-lg-5">
            <li className="timeline-item">
              <div className="timeline-arrow"></div>
              <div>
                <strong>{home.feature4_title}</strong>
                <p className="">{home.feature4_description}</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-arrow"></div>
              <div>
                <strong>{home.feature5_title}</strong>
                <p className="">{home.feature5_description}</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-arrow"></div>
              <div>
                <strong >{home.feature6_title}</strong>
                <p className=" font-weight-light">{home.feature6_description}</p>
              </div>
            </li>
          </ul>
        </Fade>
        <Zoom>
          <div className='col-md-6 thevideoSection'>
            <iframe title="how it work" width='100%' height="315"
              src={home.feature_video_url} >
            </iframe>
            {/* <video controls>
              <source src={home.feature_video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </Zoom>
      </section>

      <section className='w-100 wayaPos my-5'>
        <div className='container'>
          <div className='text-center my-4'>
            <p className='fs-1 text-orange fw-bold'>Waya Paychat POS Products</p>
            <div className='switchPos col-md-4 mx-auto rounded-pill px-0'>
              <Button className={`${posType !=='web'?'':'active'} posButton w-50 rounded-pill border-0`} size='large' onClick={()=>switchPos('web')}>Web POS</Button>
              <Button className={`${posType !=='terminal'?'':'active'} posButton w-50 rounded-pill border-0`} size='large' onClick={()=>switchPos('terminal')}>Terminal POS</Button>
            </div>
          </div>

          <div className='switchContents'>
            <Fade left>
            <div className={`${posType !=='web'?'d-none':'d-block'} webPosContent`} style={{maxHeight:'350px'}}>
              <div className='row bg-light rounded-5'>
                <div className='col-md-7 px-4 px-lg-5 py-4 py-lg-4'>
                  <div className='py-lg-4 px-lg-5'>
                    <p className='text-secondary fs-2 fw-bold'>Web POS</p>
                    <p className='fs-3'>Sell online with an ecommerce website, Mobile App and more.</p>
                  </div>
                  <div className='px-lg-5'>
                    <a className='btn btn-orange'>Get started for free <img className='mx-2' alt='...' src='/rightArr.png' /></a>
                    <a className='btn btn-link'>LEARN MORE</a>
                  </div>
                </div>
                <div className='col-md-5 d-none d-lg-block'>
                  <Image 
                    style={{marginTop:'-20px', marginLeft:'80px'}}
                    width={400}
                    preview={false} 
                    src='/deskphone.png'
                    alt='paybill' 
                    placeholder={
                      <Image
                        src={`${imageUrl}${home.feature1_image_url}`} 
                        preview={false}
                      />
                    }
                  />
                </div>
              </div>
            </div>
            </Fade>
            
            <Fade right>
            <div className={`${posType !=='terminal'?'d-none':'d-block'} terminalPosContent`} style={{maxHeight:'350px'}}>
              <div className='row bg-light rounded-5'>
                <div className='col-md-6 px-4 px-lg-5 py-4'>
                  <div className='py-lg-5 px-lg-5'>
                    <p className='text-secondary fs-2 fw-bold'>Terminal POS</p>
                    <p className='fs-3'>Sell in-person at your store locations, pop-ups, concerts.</p>
                  </div>
                  <div className='px-lg-5'>
                    <a className='btn btn-orange'>Get started for free <img className='mx-2' alt='...' src='/rightArr.png' /></a>
                    <a className='btn btn-link'>LEARN MORE</a>
                  </div>
                </div>
                <div className='col-md-6 d-none d-lg-block' style={{display:'flex'}}>
                  <img src='orange.png' alt='ball' width='100px' style={{position:'absolute',top:'50px'}} />
                  <img src='orange.png' alt='ball' style={{position:'absolute',top:'170px',left:'260px'}} />
                  <Image 
                    width={350}
                    style={{marginTop:'0px', marginLeft:'190px'}}
                    preview={false} 
                    src='/pos.png'
                    alt='paybill' 
                    placeholder={
                      <Image
                        src={`${imageUrl}${home.feature1_image_url}`} 
                        preview={false}
                      />
                    }
                  />
                </div>
              </div>
            </div>
            </Fade>

          </div>
        </div>
      </section>


      <section className='wayaPosFeatures py-5 my-5' style={{background: 'url(/featuresbg.png)'}}>
        <div className='container'>
          <div className='row px-lg-auto'>
            <Fade left>
            <div className='col-md-3 mx-lg-4 my-2 py-4'>
              <div className='mx-auto'>
                <p className='fs-2 fw-bold'>
                  Our Amazing<br/>
                  <span className='fs-2 fw-bold text-orange'>Waya Web Pos</span><br/>
                  Our Amazing
                </p>
              </div>
            </div>
            </Fade>

            <Fade top>
            <div className='col-md-3 mx-lg-4 my-2 py-4 bg-white rounded-5'>
              <div className='mx-auto'>
                <img alt='...' width='50px' src='/posfeat/arrlink.png' />
                <div>
                  <p className='fw-bold'>Payment Link</p>
                  <p className='fs-6 lh-sm'>You dont have a website? Don’t worry. Use our payment link feature to collect payment from your cutomers. Just create and share.</p>
                </div>
                <div className='pt-5 fw-sm'>
                  <a><img alt='...' className='mx-1' width='20px' src='/right.png' />  Explore more</a>
                </div>
              </div>
            </div>
            </Fade>

            <Fade right>
            <div className='col-md-3 mx-lg-4 my-2 py-4 bg-white rounded-5'>
              <div className='mx-auto'>
                <img alt='...' width='50px' src='/posfeat/sub.png' />
                <div>
                  <p className='fw-bold'>Subscription</p>
                  <p className='fs-6 lh-sm'>Our Subscriptions feature allow customers to pay a specific amount for a recurring interval you set . With subscriptions, you only need to initialize.</p>
                </div>
                <div className='pt-5 fw-sm'>
                  <a><img alt='...' className='mx-1' width='20px' src='/right.png' />  Explore more</a>
                </div>
              </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className='col-md-3 mx-lg-4 my-2 py-4 bg-white rounded-5'>
              <div className='mx-auto'>
                <img alt='...' width='50px' src='/posfeat/dash.png' />
                <div>
                  <p className='fw-bold'>Dashboard monitoring</p>
                  <p className='fs-6 lh-sm'>Real-time data and insights on your Wayapaychat Dashboard to make informed business decisions.</p>
                </div>
                <div className='pt-5 fw-sm'>
                  <a><img alt='...' className='mx-1' width='20px' src='/right.png' />  Explore more</a>
                </div>
              </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className='col-md-3 mx-lg-4 my-2 py-4 bg-white rounded-5'>
              <div className='mx-auto'>
                <img alt='...' width='50px' src='/posfeat/test.png' />
                <div>
                  <p className='fw-bold'>Test and Live Mode</p>
                  <p className='fs-6 lh-sm'>You can test your dashboard before going live. No cost would beb incurred except you are ready to go live.</p>
                </div>
                <div className='pt-5 fw-sm'>
                  <a><img alt='...' className='mx-1' width='20px' src='/right.png' />  Explore more</a>
                </div>
              </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className='col-md-3 mx-lg-4 my-2 py-4 bg-white rounded-5'>
              <div className='mx-auto'>
                <img alt='...' width='50px' src='/posfeat/app.png' />
                <div>
                  <p className='fw-bold'>Wayapaychat Mobile App</p>
                  <p className='fs-6 lh-sm'>Follow your business performance
                    Stay up-to-date with revenue, payouts and recent activity on your business
                    View transaction details and make refunds to customers
                  </p>
                </div>
                <div className='pt-5 fw-sm'>
                  <a><img alt='...' className='mx-1' width='20px' src='/right.png' />  Explore more</a>
                </div>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </section>


      <section className='wayaCustomerFeedback my-4'>
        <div className='container'>
          <div className='text-center py-5'>
            <p className='fs-3 fw-sm lh-1 m-0'>Our Customer’s Feedbacks</p>
            <p className='fs-6'>What our customers love about us</p>
          </div>
          <Fade bottom>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" className='bg-orange active' data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" className='bg-orange' data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" className='bg-orange' data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                {
                  CustomerFeedback.map((props)=>(
                  <div id={props.id} className={`carousel-item ${props.id===1?'active':''}`}>
                    <div className='w-100 row'>
                      <div className='col-md-5 text-center'>
                        <Image 
                          width={300}
                          preview={false} 
                          src={props.img}
                          alt='paybill' 
                          placeholder={
                            <Image
                              src={`${imageUrl}${home.feature1_image_url}`} 
                              preview={false}
                            />
                          }
                        />
                      </div>
                      <div className='col-md-7'>
                        <div className='mx-auto px-3 py-4'>
                          <p>{props.com}</p>
                          <p className='fs-5 fw-bold lh-1'>{props.name}</p>
                          <p className='lh-1'>{props.role}</p>
                          <img width='50px' src={props.company} alt={props.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                }
              </div>
              <button style={{width:'50px',height:'50px'}} className="my-auto bg-orange rounded-circle carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button style={{width:'50px',height:'50px'}} className="my-auto bg-orange rounded-circle carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Fade>
        </div>
      </section>


      <Zoom>
        <div className="last-jumbotron pt-1 container my-5" style={{ backgroundImage: 'url(/grain.png)' }}>
          <div className=" row">
            <div className='col-md-3 col-lg-4'>
              <img src={`/phoneinhand.png`} alt='Phone in hand' />
            </div>
            <div className='col'>
              <h1 className="">Download <br /> the app</h1>
              <p className='py-2'>Download Waya PayChat and start enjoying our great features.</p>
              <div className='row mt-3 bannerLinks'>
                <a href={settings.play_store_link} className='col col-md-4' target='_blank'>
                  <img alt='Google Play Download' src='/google-play-badge.png' className='' />
                </a>
                <a className='col col-md-4' href={settings.app_store_link} target='_blank'>
                  <img alt='App Store Download' src='/app-store-badge.png' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <PageFooter />
    </div>
  )
}

export default Home