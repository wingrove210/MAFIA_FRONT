import { Link } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { CiBookmarkMinus } from "react-icons/ci";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
// import "./Footer.css";
const Footer = () => {
  const { user } = useContext(UserContext);
//   useEffect(() => {
//     // By @AbubakerSaeed96 (Twitter)
//     // ===================

//     // Inspiration:
//     // Taras Migulko's dribbble shot: https://dribbble.com/shots/6798414
//     // Aaron Iker's codepen pen: https://codepen.io/aaroniker/pen/bGbBQaR

//     // Thank You For Viewing!
//     // Say 👋🏻 or hire me 👉🏻 abubaker.saeed.1996@gmail.com
//     // ================================================================

//     // Helpers
//     // =======
//     const $ = (e) => document.querySelector(e);
//     const $$ = (e) => document.querySelectorAll(e);

//     // Main
//     // ====
//     const t = $("#tab");
//     const ics = $$(".icon");
//     const c = $(".circle");

//     let s = {
//       animating: false,
//       animated: true,
//     };

//     // On Load
//     setTimeout(() => {
//       ics[1].removeAttribute("style");
//       ics[2].removeAttribute("style");
//       c.removeAttribute("style");
//       c.setAttribute("data-animating", "false");
//     }, 2000);

//     // On Event
//     ics.forEach((i, index) => {
//       i.addEventListener("click", ({ target }) => {
//         if (s.animated === true && index != c.getAttribute("data-active")) {
//           t.style.setProperty(
//             "--x",
//             target.getAttribute("data-x") * 101 + "px"
//           );

//           $(".active").classList.remove("active");
//           i.classList.add("active");

//           c.setAttribute("data-animating", "true");
//           s.animating = true;
//           s.animated = false;

//           setTimeout(() => {
//             c.setAttribute("data-active", index);
//             c.setAttribute("data-animating", "false");
//             s.animating = false;
//             s.animated = true;
//           }, 2000);
//         }
//       });
//     });

//     // Professional Abubaker ;P
//     // =====================
//     const twitter = $(".abs-twitter");
//     window.addEventListener(
//       "mousemove",
//       () => twitter.classList.add("abs-twitter--show"),
//       { once: true }
//     );
//   });
//   fixed bottom-0 h-[10vh] bg-[#282A2F] w-full rounded-t-2xl flex items-center justify-between px-10 text-3xl text-white
  return (
    <footer className="fixed bottom-0 h-[10vh] bg-[#282A2F] w-full rounded-t-2xl flex items-center justify-between px-10 text-3xl text-white">
      <Link to={"/"}>
        <RiHome6Line />
      </Link>
      <Link to={"/shop"}>
        <CiBookmarkMinus className="font-bold" />
      </Link>
      <Link to={"/play"}>
        <IoNotificationsOutline />
      </Link>
      <Link to={user ? "/protected" : "/login"}>
        <HiOutlineUser />
      </Link>
      {/* <div> */}
      {/* <div className="h-[120px] flex justify-center bg-[hsl(0_1%_28%)] absolute bottom-0 w-full">
      <section id="container">
        <div id="tab">
          <div className="icon box active" data-x="0">
            <div className="l1">
              <svg viewBox="0 0 24 24">
                <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
              </svg>
            </div>
            <div className="l2">
              <svg viewBox="0 0 24 24" fill="none">
                <polyline points="2.32 6.16 12 11 21.68 6.16" />
              </svg>
            </div>
            <div className="l3">
              <svg viewBox="0 0 24 24">
                <line x1="12" y1="22.76" x2="12" y2="11" />
              </svg>
            </div>
          </div>

          <div
            className="icon home"
            data-x="1"
            style={{ animation: "back 0s forwards" }}
          >
            <div className="l1">
              <svg viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <div className="l2">
              <svg viewBox="0 0 24 24">
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
          </div>

          <div
            className="icon calender"
            data-x="2"
            style={{ animation: "back 0s forwards" }}
          >
            <div className="l1">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              </svg>
            </div>
            <div className="l2">
              <svg viewBox="0 0 24 24" className=".iconimage">
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
              </svg>
            </div>
            <div className="l3">
              <svg viewBox="0 0 24 24">
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
          </div>

          <div
            className="circle"
            data-active="0"
            data-animating="true"
            style={{ top: "80px" }}
          >
            <div className="circle-inner"></div>
          </div>
        </div>
      </section>
      <a
        href="#"
        rel="nofollow noreferrer"
        target="_blank"
        className="abs-twitter"
      >
        <svg viewBox="0 0 32 32" height="28px" className="twitter-icon">
          <path
            fill="hsl(358deg, 99%, 98%)"
            d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
          />
        </svg>
      </a>
      </div> */}
    </footer>
  );
};

export default Footer;
