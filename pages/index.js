import Image from "next/image";
import React, { useState } from "react";

import doubleHImg from "../public/Asset 2@3x 1.png";
import vectorImg from "../public/Vector.png";
import datePickerImg from "../public/Date-picker.png";
import datePickerTopImg from "../public/datepickerTop.png";
import pluseImg from "../public/+.png";
import searchImg from "../public/search.png";
import roomImg from "../public/Rectangle 5.png";
import roomBackShadowImg from "../public/Rectangle 994.png";
import firstRotateImg from "../public/signed up.svg";
import secondRotateImg from "../public/Rectangle 559.png";
import barcodeImg from "../public/barcode.png";
import likeImg from "../public/like.png";
import previousImg from "../public/pre.svg";
import previousContentImg from "../public/prevContent.svg";
import nextImg from "../public/next.svg";
import nextContentImg from "../public/nextContent.svg";
import activeSlideImg from "../public/firstSlide.png";
import notActiveSlideImg from "../public/notActiveSlide.png";
import appleStoreImg from "../public/appImage 1.png";
import playStoreImg from "../public/playstore 1.png";
import visaImg from "../public/visa.png";
import phoneImg from "../public/phone.png";
import gpsImg from "../public/gpsImg.png";
import instaImg from "../public/infa.png";
import twitterImg from "../public/twitter.png";
import linkdinImg from "../public/linkdin.png";
import bigAppleStoreImg from "../public/bigAppleStore.png";
import bigPlayStoreImg from "../public/bigPlayStore.png";
import backRoomeImg from "../public/Rectangle 993.png";
import thirdDiv from "../public/Frame 1.png";
import goToNextPageIcon from "../public/grater.png";
import paymentLogoIcon from "../public/logo 1.png";
import blankBgIcon from "../public/blankPlaystore.png";

import styles from "../styles/Home.module.css";
import "@fontsource/playfair-display";

export default function Home() {
  const [selectedSlide, setSelectedSlide] = useState(1);

  const clickOnPreAndNext = (type) => {
    if (type === "next") {
      if (parseInt(selectedSlide) < 5) {
        setSelectedSlide(selectedSlide + 1);
      }
    } else {
      if (parseInt(selectedSlide) > 1) {
        setSelectedSlide(selectedSlide - 1);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstDiv}>
        <div className={styles.firstDivHeader}>
          <div className={styles.leftHeader}>
            <Image src={doubleHImg} />
            <span style={{ paddingLeft: "10px" }}>Double H</span>
          </div>
          <div className={styles.rightHeader}>
            <div className={styles.menuItem}>Our Homes</div>
            <div className={styles.menuItem}>
              <a href="#downloadApp">Download App</a>
            </div>
            <div className={styles.menuItem}>Sign in</div>
            <div className={styles.locationName}>
              <Image src={vectorImg} />
              <span style={{ paddingLeft: "10px" }}>Lekki Phase 1</span>
            </div>
          </div>
        </div>
        <div className={styles.firstDivContent}>
          <div className={styles.firstDivInner}>
            <div className={styles.contentTitle}>
              Experience luxury at the tap of a button
            </div>
            <div className={styles.contentDetail}>
              <div
                className={styles.addInformation}
                style={{ display: "flex" }}
              >
                <div>
                  <div>
                    <Image src={datePickerTopImg} />
                  </div>
                  <div>
                    <Image src={datePickerImg} />
                  </div>
                </div>
                <div style={{ paddingLeft: "10px" }}>Check in</div>
              </div>
              <div
                className={styles.addInformation}
                style={{ display: "flex" }}
              >
                <div>
                  <div>
                    <Image src={datePickerTopImg} />
                  </div>
                  <div>
                    <Image src={datePickerImg} />
                  </div>
                </div>
                <div style={{ paddingLeft: "10px" }}>Check out</div>
              </div>
              <div
                className={styles.addInformation}
                style={{ position: "relative" }}
              >
                <Image src={pluseImg} />
                <div style={{ paddingLeft: "10px" }}>Add occupant (s)</div>
                <div className={styles.detailDropdown}>
                  <div className={styles.singleInfo}>
                    <div>Adult</div>
                    <div className={styles.countContent}>
                      <div className={styles.makeElipsis}>-</div>
                      <div className={styles.countValue}>1</div>
                      <div className={styles.makeElipsis}>+</div>
                    </div>
                  </div>
                  <div className={styles.singleInfo}>
                    <div>Children</div>
                    <div className={styles.countContent}>
                      <div className={styles.makeElipsis}>-</div>
                      <div className={styles.countValue}>1</div>
                      <div className={styles.makeElipsis}>+</div>
                    </div>
                  </div>
                  <div
                    className={styles.singleInfo}
                    style={{ borderBottom: "none" }}
                  >
                    <div>Infant</div>
                    <div className={styles.countContent}>
                      <div className={styles.makeElipsis}>-</div>
                      <div className={styles.countValue}>1</div>
                      <div className={styles.makeElipsis}>+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.searchItems}>
                <Image src={searchImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <div className={styles.imageContainer}>
          <Image src={backRoomeImg} width={321} height={270} />
          <Image src={roomImg} width={440} height={439} />
          <Image src={roomBackShadowImg} width={440} height={439} />
        </div>
        <div className={styles.imgContent}>
          <div className={styles.imgTitle}>About Double H</div>
          <div className={styles.imgBody}>
            The Double H experience is one that lives long in memory. With
            service that is luxurious and discreet, delivered in a relaxed and
            comfortable environment. Our smart homes have been carefully created
            to simplify everyday complexities.
          </div>
          <div className={styles.ourHouseDiv}>
            <div className={styles.ourHomesOuter}>
              <div className={styles.ourHouseInner}>
                Our Homes&nbsp;&nbsp;&nbsp;
                <Image src={goToNextPageIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="downloadApp" style={{ width: "100%" }}>
        <Image src={thirdDiv} layout="responsive" />
        {/* <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Image src={firstRotateImg} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Image src={secondRotateImg} />
        </div>
        <div className={styles.dealDiscountPortion}>
          <div>
            <div className={styles.dealsDiscountTitle}>Deals? Discounts?</div>
            <div className={styles.dealDiscountDesc}>
              <div>Scan <b>Barcode</b> now  to download our app. Booking has never been this easy. Download our mobile application to be the first to know when we have exclusive offers. </div>
              <div className={styles.barcodeScan}><Image src={barcodeImg} /></div>
            </div>
            <div className={styles.flexItem}>
              <Image src={bigPlayStoreImg} />
              <Image src={bigAppleStoreImg}/>
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <div className={styles.fourthDiv}>
        <div className={styles.footerTitle}>
          People like you <Image src={likeImg} height={50} width={53} /><span style={{paddingLeft: '8px'}}> us</span>
        </div>
        <div
          className={styles.reviewDesc}
        >{`" I enjoyed my stay. It was everything luxury.`}</div>
        <div
          className={styles.reviewDesc}
        >{`The customer service was topnotch. I will definitely`}</div>
        <div
          className={styles.reviewDesc}
        >{`visit again anytime I am in Nigeris "`}</div>
        <div className={styles.slidingContent}>
          <Image
            src={
              selectedSlide.toString() <= "1" ? previousImg : previousContentImg
            }
            style={{ cursor: "pointer" }}
            onClick={() => clickOnPreAndNext("pre")}
          />
          <div className={styles.slidingTitle}>Olatunde OG.</div>
          <Image
            src={selectedSlide.toString() <= "4" ? nextImg : nextContentImg}
            style={{ cursor: "pointer" }}
            onClick={() => clickOnPreAndNext("next")}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {[1, 2, 3, 4, 5].map((data, ind) => (
            <div key={ind} className={styles.slideSpacing}>
              <Image
                src={
                  selectedSlide.toString() === (ind + 1).toString()
                    ? activeSlideImg
                    : notActiveSlideImg
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fifthDiv}>
        <div className={styles.firstFisthDiv}>
          <div style={{ height: "100%" }}>
            <div className={styles.aboutTitle}>
              Deals? Discounts? Download Our App
            </div>
            <div className={styles.flexItem}>
              <div className={styles.blankBackground}>
                <Image src={appleStoreImg} />
              </div>
              <div className={styles.blankBackground}>
                <Image src={playStoreImg} />
              </div>
            </div>
          </div>
          <div className={styles.buttonWithFunctionality}>
            <div>
              <div className={styles.aboutTitle}>
                Subscribe to our newsletter
              </div>
              <div className={styles.flexItem} style={{ marginTop: "40px" }}>
                <div className={styles.emailAddressBtn}>
                  Enter email address
                </div>
                <div className={styles.subscribeBtn}>Subscribe</div>
              </div>
            </div>
            <div className={styles.aboutCompany}>
              <div className={styles.aboutTitle}>Company</div>
              <div className={styles.aboutSubTitle}>Contact Us</div>
              <div className={styles.aboutSubTitle}>List your Home</div>
              <div className={styles.aboutSubTitle}>Our Mission and Vision</div>
            </div>
          </div>
          <div>
            <div className={styles.aboutTitle}>Payment Methods</div>
            <div className={styles.aboutSubTitle2}>
              <div>
                <Image src={visaImg} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                VISA&nbsp;
                <Image src={paymentLogoIcon} height={14} />
              </div>
            </div>
            <div className={styles.aboutSubTitle2}>
              <div>
                <Image src={phoneImg} />
              </div>
              <div style={{ marginLeft: "10px" }}> + 234 909 093 8394</div>
            </div>
            <div className={styles.aboutSubTitle2}>
              <div>
                <Image src={gpsImg} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                2 Swiss Trade Drive, Ikota, Lekki, Lagos
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerItem}>
          <div className={styles.flexItemWithAlignCenter}>
            <div>
              <Image src={doubleHImg} />
            </div>
            <div style={{ marginLeft: "10px" }}>© 2021 Double H</div>
          </div>
          <div className={styles.flexItemWithAlignCenter}>
            <div>Find us on Social Media</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "60px",
              }}
            >
              <div className={styles.whiteCircle}>
                <Image src={instaImg} />
              </div>
              <div
                className={styles.whiteCircle}
                style={{ marginLeft: "30px" }}
              >
                <Image src={twitterImg} />
              </div>
              <div
                className={styles.whiteCircle}
                style={{ marginLeft: "30px" }}
              >
                <Image src={linkdinImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
