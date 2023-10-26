// import React from "react";
// import "./Footer.scss";

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="container">
//         <div className="top">
//           <div className="item">
//             <h2>Categories</h2>
//             <span>Restuarnte</span>
//             <span>Digital Marketing</span>
//             <span>Writing & Translation</span>
//             <span>Hotel</span>
//             <span>business Services</span>
//             <span>coffe</span>
//             <span>Data</span>
//             <span>Business</span>
//             <span>Lifestyle</span>
            
//           </div>
//           <div className="item">
//             <h2>About</h2>
//             <span>Press & News</span>
//             <span>Partnerships</span>
//             <span>Privacy Policy</span>
//             <span>Terms of Service</span>
//             <span>Intellectual Property Claims</span>
//             <span>Investor Relations</span>
//             <span>Contact Sales</span>
//           </div>
//           <div className="item">
//             <h2>Support</h2>
//             <span>Help & Support</span>
//             <span>Trust & Safety</span>
//             <span>Selling on HabeshaInsights</span>
//             <span>Buying on HabeshaInsights</span>
//           </div>
//           <div className="item">
//             <h2>Community</h2>
//             <span>Customer Success Stories</span>
//             <span>Community hub</span>
//             <span>Forum</span>
//             <span>Events</span>
//             <span>Blog</span>
//             <span>Influencers</span>
//             <span>Affiliates</span>
//             <span>Podcast</span>
//             <span>Invite a Friend</span>
//             <span>Become a Seller</span>
//             <span>Community Standards</span>
//           </div>
//           <div className="item">
//             <h2>More From HabeshaInsights </h2>
//             <span>HabeshaInsights Business</span>
//             <span>HabeshaInsights Pro</span>
//             <span>HabeshaInsights Logo Maker</span>
//             <span>HabeshaInsights Guides</span>
//             <span>Get Inspired</span>
//             <span>HabeshaInsights Select</span>
//             <span>ClearVoice</span>
//             <span>HabeshaInsights Workspace</span>
//             <span>Learn</span>
//             <span>Working Not Working</span>
//           </div>
//         </div>
//         <hr />HabeshaInsights
//         <div className="bottom">
//           <div className="left">
//             <h2>HabeshaInsights</h2>
//             <span></span>
//           </div>
//           <div className="right">
//             <div className="social">
//               <img src="/img/twitter.png" alt="" />
//               <img src="/img/facebook.png" alt="" />
//               <img src="/img/linkedin.png" alt="" />
//               <img src="/img/pinterest.png" alt="" />
//               <img src="/img/instagram.png" alt="" />
//             </div>
//             <div className="link">
//               <img src="/img/language.png" alt="" />
//               <span>English</span>
//             </div>
//             <div className="link">
//               <img src="/img/coin.png" alt="" />
//               <span>USD</span>
//             </div>
//             <img src="/img/accessibility.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>About HabeshaInsights</span>
            <span>Investor Relations</span>
            <span>Trust&Saftey</span>
            <span>content Guidelines</span>
            <span>Accessibility Statement</span>
            <span> Terms of service </span>
            <span>Privacy Policy</span>
            <span>Ad choices</span>
            <span>Your Privacy Choices</span>
            {/* <span>Sitemap</span> */}
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Local discovery on HabeshaInsights </span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From HabeshaInsights </h2>
            <span >HabeshaInsights Business</span>
            <span>HabeshaInsights Pro</span>
            <span>HabeshaInsights Guides</span>
            <span>Get Inspired</span>
            <span >HabeshaInsights Select</span>
            <span>ClearVoice</span>
            <span>HabeshaInsights Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>HabeshaInsights</h2>
            <span></span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
