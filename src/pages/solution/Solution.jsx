import React from "react";
import "../../styles/solution.scss";
import Navbar from '../../components/sections/Navbar/Navbar';
import PageFooter from "../../components/sections/Footer/Footer";
import FeatureCard from "../../components/parts/FeatureCard";
import SupportPhone from "../../assets/images/supportPhone.png";
import DigitalWallet from "../../assets/images/digitalMoney.png";
import SendMoney from "../../assets/images/sendMoney.png";
import WithdrawMoney from "../../assets/images/withdrawMoney.png";
import QrCodeScan from "../../assets/images/qrCodeScan.png";
import payBills from "../../assets/images/payBills.png";
import onLinecheckout from "../../assets/images/onlineCheckout.png";
import requestMoney from "../../assets/images/requestsMoney.png";
import settleInvoice from "../../assets/images/settleInvoice.png";
import tvSubscription from "../../assets/images/tvSubscription.png";
import mobileTopup from "../../assets/images/movileTopup.png";

const Support = () => {
  const spbItem = [
    {
      img: DigitalWallet,
      title: "DIGITAL WALLET",
      content:
        "Digital Banking personalised for you to store funds safely, receive money, budget spendings, pay bills",
    },
    {
      img: SendMoney,
      title: "SEND MONEY",
      content:
        "Send money using Wayabank at insanely fast, secure and cheap rates either as a customer or agent",
    },
    {
      img: WithdrawMoney,
      title: "WITHDRAW MONEY",
      content:
        "Withdraw money from your Waya digital Banking direct to your bank account or any WAYA Agent",
    },
    {
      img: QrCodeScan,
      title: "qr code scanner",
      content:
        "WayaBank’s scan and pay feature helps ypu transfer or receive funds without needing a bank account or phone number. Just whip out your app, scan and pay and the fund is transferred easy peasy!",
    },
    {
      img: payBills,
      title: "pay bills",
      content:
        "Pay bills using our digital wallet with our list of growing merchants who use WayaBank as their preferred way of receiving money from their customers, school fess, hotel booking, visa payment, utility bills, church, mosque and religious expenses etc.",
    },
    {
      img: onLinecheckout,
      title: "online checkout",
      content:
        "Online checkout has never been easier with Waya digital Banking, pay for your online shopping across several top websites like Jumia, Amazon, Konga, Alibaba etc. WayaBank affords every user simple and easy way to create instant virtual cards to shop and enjoy befitting lifestyle.",
    },
    {
      img: requestMoney,
      title: "REQUEST MONEY",
      content:
        "Request and receive money from friends and families, customers etc, using phone number through WayaBank",
    },
    {
      img: settleInvoice,
      title: "settle invioce",
      content:
        "Settle invoice from customers, WayaBank enables easy settlement and clearing for smooth business operation",
    },
    {
      img: tvSubscription,
      title: "pay tv subscription",
      content:
        "Pay - TV subscription for your pay - TV like DSTV, GoTV, TSTV etc",
    },
    {
      img: mobileTopup,
      title: "top-up airtime and data",
      content:
        "Request and receive money from friends and families, customers etc, using phone number through WayaPay",
    },
  ];
  return (
    <div id="solutionPage">
      <Navbar />
      <div className="sp-content">
        <div className="sp-top">
          <div className="spt-text text-center w-full">
            <h1 className="section-title">
              Send money to friends and family or <span className="section-title-accent">get payments</span> from your customers
            </h1>
            <div className="section-divider" />
            <p className="section-subtitle">
              Wayabank digital Banking is an all - in - one platform to perform
              safe and secure transactions, pay your bills.
            </p>
          </div>
          <div className="spt-img">
            <img src={SupportPhone} alt="phone" />
          </div>
        </div>
        <div className="sp-bottom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-[1440px] mx-auto py-20">
          {spbItem?.map((item, index) => (
            <FeatureCard 
              key={index}
              title={item.title}
              description={item.content}
              icon={<img src={item.img} alt={item.title} className="w-8 h-8 object-contain" />}
            />
          ))}
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default Support;
