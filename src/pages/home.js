import PageFooter from "../componentParts/footer";
import GenericJumbotron from "../componentParts/genericJumbotron";
import TopNav from "../componentParts/topNav";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "../styles/home.scss";
import { useRecoilValueLoadable } from "recoil";
import { getHome, getSettings, getFeatures } from "../states/home";
import { imageUrl } from "../services/axios";
import { Button, Image, Switch } from "antd";
import { useState } from "react";
import HomeImg1 from "../assets/images/homeimg1.png";
import send from "../assets/svgs/send.svg";
import perform from "../assets/svgs/perform.svg";
import recieve from "../assets/svgs/recieve.svg";
import pay from "../assets/svgs/pay.svg";
import request from "../assets/svgs/request.svg";
import explore from "../assets/svgs/explore.svg";
import chain from "../assets/svgs/chain.svg";
import qrcode from "../assets/images/qrcode.png";
import makePayment from "../assets/images/phoneicon.png";
import bar from "../assets/images/bar.png";
import safe from "../assets/images/safensecure.png";
import agent from "../assets/images/agent.png";
import chat from "../assets/images/chat.png";
import merchant from "../assets/images/speaker.png";
import phone from "../assets/images/phone.png";
import smallBlue from "../assets/images/smallBlue.png";
import phoneinhand from "../assets/images/phoneinhand.png";
import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.png";

function Home() {
  const [posType, setPosType] = useState("web");
  const data = useRecoilValueLoadable(getHome);
  const dataS = useRecoilValueLoadable(getSettings);
  const dataF = useRecoilValueLoadable(getFeatures);
  const home = data.state === "hasValue" ? data.contents : {};
  const settings = dataS.state === "hasValue" ? dataS.contents : {};
  const features =
    dataF.state === "hasValue" && dataF.contents ? dataF.contents : [];
  console.log(home);

  const defaultFeature = [
    {
      img: "/safensecure.png",
      title: "Safe And Secure",
      description:
        "Transactions are safe and secure when you send and receive money and our fees are low (10N).",
    },
    {
      img: "/phoneicon.png",
      title: "USSD Access",
      description:
        "No internet? No problem. Waya has free USSD codes so you can simply dial to make transactions.",
    },
    {
      img: "/qrcode.png",
      title: "QR Code Scanner",
      description: "Quick and easy transactions by scanning a QR code.",
    },
    {
      img: "/cryptochat.png",
      title: "Socialize",
      description:
        "Chat, call and keep up with your favorite vendors and customers on WayaGram.",
    },
    {
      img: "/briefcase.png",
      title: "Agents and Kiosks",
      description: "Top up your wallet or get cash out via Waya Agent.",
    },
    {
      img: "/speaker.png",
      title: "Merchants",
      description:
        "Make extra cash as a Waya Merchant. Earn commissions every time your customer pays you using Waya PayChat.",
    },
  ];

  const switchPos = (type) => {
    setPosType(type);
  };

  const CustomerFeedback = [
    {
      id: 1,
      img: "/feedback.png",
      name: "Rahul Salem",
      role: "Product Manager",
      company: "/brands/biggs.png",
      com: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.",
    },
    {
      id: 2,
      img: "/feedback.png",
      name: "Rahul Salem",
      role: "Product Manager",
      company: "/brands/biggs.png",
      com: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.",
    },
    {
      id: 3,
      img: "/feedback.png",
      name: "Rahul Salem",
      role: "Product Manager",
      company: "/brands/biggs.png",
      com: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante id malesuada mauris orci vulputate ut blandit et. Pharetra dui suscipit odio diam et nunc suspendisse. Sagittis pretium fringilla egestas facilisi ornare sit fames. Tortor, dui, sit tellus hendrerit pharetra arcu quis.",
    },
  ];
  console.log(posType);
  return (
    <div id="homesection">
      <TopNav className="mb-4" />
      <div
        className="home-jumbotron pt-4 "
        style={{ backgroundImage: "url(/grain.png)" }}
      >
        <div className="container">
          <div className="py-4 row">
            <Fade left className="w-100 ">
              <div className="col-md-12 text-center px-lg-5 mb-lg-5">
                <h1 className="w-75 mx-auto">
                  Accept payment, make Transfers and transact seamlessly
                </h1>
                <p className="w-75 mx-auto px-lg-5">
                  Waya Bank is an all-in-one platform that enable you accept
                  payments, transfer, request fund, pay your bills and perform
                  safe and secure transactions.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="col-md-12 text-center md-m">
                {/* initial image url  */}
                {/* `${imageUrl}${home.hero_image_url}` */}
                <img src={HomeImg1} className="m-0 p-0" alt="jumbotron" />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <Fade bottom>
        <div
          className="genericJumbo py-4"
          style={{ backgroundImage: "url(/grain.png)" }}
        >
          <GenericJumbotron
            titleText="How Waya Bank Works"
            desc="Waya Bank provide users the platform to carryout financial activities as an Individual (personal) or corporate (Merchants, Agents and Aggregators). Access to the platform is by downloading the mobile application from app store or playstore or accessing the web version via the url (www.wayabank.com).​ WayaBank payment platform combine a lots of financial benefits and features, our mobile platform ease the challenges of all financial transactions.

              We are committed to providing a secure and cashless payment solution that assists our users, merchants, and organizations, to optimize their daily lives and business processes while taking care of their transactions."
          />
        </div>

        <div
          style={{
            backgroundImage: "url(/grain.png)",
          }}
        >
          <div
            className="mx-auto howBottom "
            style={{
              width: "85%",
            }}
          >
            <div className="hb-item">
              <img src={smallBlue} alt="" />
              <div className="hbi-right">
                <div className="title">Download WayaBank App</div>
                <div className="content">
                  You dont have a website? Don’t worry. Use our payment link
                  feature to collect payment from your cutomers. Just create and
                  share.
                </div>
              </div>
            </div>
            <div className="hb-item">
              <img src={smallBlue} alt="" />
              <div className="hbi-right">
                <div className="title">Complete your KYC</div>
                <div className="content">
                  You dont have a website? Don’t worry. Use our payment link
                  feature to collect payment from your cutomers. Just create and
                  share.
                </div>
              </div>
            </div>
            <div className="hb-item">
              <img src={smallBlue} alt="" />
              <div className="hbi-right">
                <div className="title">Start Transacting</div>
                <div className="content">
                  You dont have a website? Don’t worry. Use our payment link
                  feature to collect payment from your cutomers. Just create and
                  share.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <section className="categories">
        <div className="cat-item-2">
          <div>Our Amazing </div>
          <div
            style={{
              color: "#FA4400",
            }}
          >
            Waya Bank
          </div>
          <div>Features</div>
        </div>
        <div className="cat-item">
          <img src={send} alt="send" className="cat-img" />
          <div className="ci-title">Send Money</div>
          <div className="ci-content">
            On WayaBank, you can send money to anyone, both WayaBank users &
            non-users. They will receive the money seamlessly.
          </div>
          <div className="ci-footer">
            <img src={explore} alt="" />
            <div>Explore more</div>
          </div>
        </div>
        <div className="cat-item">
          <img src={recieve} alt="send" className="cat-img" />
          <div className="ci-title">Recieve Money</div>
          <div className="ci-content">
            Our platform enable our users and non-users to receive money from
            WayaBank user and non-users. We also enable users to create multiple
            wallet
          </div>
          <div className="ci-footer">
            <img src={explore} alt="" />
            <div>Explore more</div>
          </div>
        </div>
        <div className="cat-item">
          <img src={perform} alt="send" className="cat-img" />
          <div className="ci-title">
            Perform Transaction with Phone NumberRecieve Money
          </div>
          <div className="ci-content">
            Do you have phone number? On WayaBank, you can perform any financial
            transactions with your phone number with ease.
          </div>
          <div className="ci-footer">
            <img src={explore} alt="" />
            <div>Explore more</div>
          </div>
        </div>
        <div className="cat-item">
          <img src={request} alt="send" className="cat-img" />
          <div className="ci-title">Request Fund</div>
          <div className="ci-content">
            This Feature allows you to request money from friends and families.
            With a 10-digit code sent to your phone, you can withdraw the cash
          </div>
          <div className="ci-footer">
            <img src={explore} alt="" />
            <div>Explore more</div>
          </div>
        </div>
        <div className="cat-item">
          <img src={pay} alt="send" className="cat-img" />
          <div className="ci-title">Pay Bills</div>
          <div className="ci-content">
            To guaranty that paying your bills at ease. You can pay your power,
            Tv, data and all subscriptions
          </div>
          <div className="ci-footer">
            <img src={explore} alt="" />
            <div>Explore more</div>
          </div>
        </div>
      </section>

      <section
        className="features text-center"
        style={{
          backgroundImage: "url(/grain.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <h4>Made for All</h4>
        <img src={chain} alt="" className="w-50 my-5" />
        <div className="made4All mx-auto">
          <div className="m4A-item">
            <div className="title">Protected Access</div>
            <div className="content">
              Your Waya Account is protected with multiple layers of security.
              If you lose your phone, you can have your Waya PayChat account
              blocked at any time.
            </div>
          </div>
          <div className="m4A-item">
            <div className="title">Protected Access</div>
            <div className="content">
              Your Waya Account is protected with multiple layers of security.
              If you lose your phone, you can have your Waya PayChat account
              blocked at any time.
            </div>
          </div>
          <div className="m4A-item">
            <div className="title">Protected Access</div>
            <div className="content">
              Your Waya Account is protected with multiple layers of security.
              If you lose your phone, you can have your Waya PayChat account
              blocked at any time.
            </div>
          </div>
        </div>
        <div className="infographic row">
          <Fade big>
            <div
              className="col-md-6 singlePhone"
              //  className='singlePhone'
            >
              <Image
                preview={false}
                src="/singlePhone.png"
                alt="feature"
                placeholder={<Image src={phone} preview={false} width={200} />}
              />
            </div>
          </Fade>
          <Fade right cascade>
            <div className="col-md-6">
              <div className="special-row">
                <div className="">
                  <Image
                    preview={false}
                    src={safe}
                    alt="feature"
                    width={100}
                    placeholder={
                      <Image src={bar} preview={false} width={200} />
                    }
                  />
                </div>
                <div className="theTexts">
                  <h6>Safe and secure</h6>
                  <p>
                    Transactions are safe and secure when you send and receive
                    money and our fees are low (10N).
                  </p>
                </div>
              </div>

              <div className="special-row">
                <div className="">
                  <Image
                    preview={false}
                    src={makePayment}
                    alt="feature"
                    width={100}
                    placeholder={
                      <Image src={makePayment} preview={false} width={200} />
                    }
                  />
                </div>
                <div className="theTexts">
                  <h6>Make Payments and Receive cash</h6>
                  <p>
                    Banking without restrictions. Perform your financial
                    transactions anytime, any day. Also USSD codes to make
                    transactions.
                  </p>
                </div>
              </div>
              <div className="special-row">
                <div className="">
                  <Image
                    preview={false}
                    src={qrcode}
                    alt="feature"
                    width={100}
                    placeholder={
                      <Image src={qrcode} preview={false} width={200} />
                    }
                  />
                </div>
                <div className="theTexts">
                  <h6>Qr Code Scanner</h6>
                  <p>Quick and easy transactions by scanning a QR code.</p>
                </div>
              </div>
              <div className="special-row">
                <div className="">
                  <Image
                    preview={false}
                    src={agent}
                    alt="feature"
                    width={100}
                    placeholder={
                      <Image src={agent} preview={false} width={200} />
                    }
                  />
                </div>
                <div className="theTexts">
                  <h6>Agents and Kiosks</h6>
                  <p>Top up your wallet or get cash out via Waya Agent.</p>
                </div>
              </div>
              <div className="special-row">
                <div className="">
                  <Image
                    preview={false}
                    src={merchant}
                    alt="feature"
                    width={100}
                    placeholder={
                      <Image src={merchant} preview={false} width={200} />
                    }
                  />
                </div>
                <div className="theTexts">
                  <h6>Merchants</h6>
                  <p>
                    Make extra cash as a Waya Merchant. Earn commissions every
                    time your customer pays you using Waya PayChat.
                  </p>
                </div>
              </div>
              <div className="special-row">
                <div className="">
                  <Image
                    preview={false}
                    src={chat}
                    alt="feature"
                    width={100}
                    placeholder={
                      <Image src={chat} preview={false} width={200} />
                    }
                  />
                </div>
                <div className="theTexts">
                  <h6>24/7 Support</h6>
                  <p>
                    Our support and engineering team are ever on standby to give
                    you necessary support you need.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="wayaCustomerFeedback my-4">
        <div className="">
          <div className="text-center py-5">
            <p className="fs-3 fw-sm lh-1 m-0">Our Customer’s Feedbacks</p>
            <p className="fs-6">What our customers love about us</p>
          </div>
          <Fade bottom>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  className="bg-orange active"
                  data-bs-slide-to="0"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  className="bg-orange"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  className="bg-orange"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                {CustomerFeedback.map((props) => (
                  <div
                    id={props.id}
                    className={`carousel-item ${
                      props.id === 1 ? "active" : ""
                    }`}
                  >
                    <div className="w-100 row">
                      <div className="col-md-5 text-center">
                        <Image
                          width={300}
                          preview={false}
                          src={props.img}
                          alt="paybill"
                          placeholder={
                            <Image
                              src={`${imageUrl}${home.feature1_image_url}`}
                              preview={false}
                            />
                          }
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="mx-auto px-3 py-4">
                          <p>{props.com}</p>
                          <p className="fs-5 fw-bold lh-1">{props.name}</p>
                          <p className="lh-1">{props.role}</p>
                          <img
                            width="50px"
                            src={props.company}
                            alt={props.name}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                style={{ width: "50px", height: "50px" }}
                className="my-auto bg-orange rounded-circle carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                style={{ width: "50px", height: "50px" }}
                className="my-auto bg-orange rounded-circle carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Fade>
        </div>
      </section>

      <Zoom>
        <div
          className=" pt-1  my-5"
          style={{
            backgroundImage: "url(/grain.png)",
            backgroundRepeat: "repeat",
          }}
        >
          <div
            style={{
              background: "#fff",
              backgroundImage: "url(/grain.png)",
              backgroundRepeat: "repeat",
              height: "236px",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "72px",
                lineHeight: "123px",
                letterSpacing: "-0.03em",
                color: "#FF4400",
                position: "absolute",
                left: "50%",
                top: "105px",
              }}
            >
              Download
            </div>
            <img
              src={phoneinhand}
              alt=""
              style={{
                position: "absolute",
                left: "84px",
                zIndex: "1",
                top: "55px",
              }}
            />
          </div>
          <div
            className="d-flex last-jumbotron justify-content-end"
            style={{
              backgroundImage: "url(/grain.png)",
              backgroundRepeat: "repeat",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "72px",
                lineHeight: "123px",
                letterSpacing: "-0.03em",
                color: "#fff",
                position: "absolute",
                left: "50%",
              }}
            >
              the app
            </div>
            <div className="d-flex flex-column w-50 align-self-center">
              <div
                style={{
                  fontFamily: "Sarabun",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  marginBottom: "43.37px",
                  marginTop: "50px",
                }}
              >
                Download Waya PayChat and start enjoying our great <br />{" "}
                features.
              </div>
              <div className="d-flex">
                <img src={googleplay} alt="" className="mr-4" />
                <img src={appstore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <PageFooter />
    </div>
  );
}

export default Home;
