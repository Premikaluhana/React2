import React from "react";
import ScreenShot3 from "../media/hero-bcg.a876f19f6786a3aca992.jpeg";
import ScreenShot4 from "../media/product-3.jpeg";
import ScreenShot5 from "../media/product-3.jpeg";
import ScreenShot6 from "../media/product-3.jpeg";
import ScreenShot7 from "../media/lightning-in-a-circle1.png";
import ScreenShot8 from "../media/alarm-sign-of-an-exclamation-symbol-in-a-triangle2.png";
import ScreenShot9 from "../media/coffee-cup-in-a-circle3.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="home">
          <motion.h1
            initial={{ scale: 0, x: -400 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1, type: "tween", stiffness: 400 }}
          >
            Design Your Comfort Zone
          </motion.h1>
          <motion.p
            initial={{ scale: 0, x: -400 }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ duration: 2, type: "tween", stiffness: 400 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            consectetur veniam, beatae aspernatur ratione velit eligendi
            temporibus fugit unde atque. consectetur veniam, beatae aspernatur
            ratione velit eligendi temporibus fugit unde atque.
          </motion.p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileHover={{ scale: 1.9 }}
          >
            SHOP NOW
          </motion.button>
        </div>
        <motion.div
          className="hero-img"
          initial={{ scale: 0, x: 400 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1, type: "tween", stiffness: 400 }}
        >
          <img src={ScreenShot3} width={400} height={500} />
        </motion.div>
      </div>

      <div className="features">
        <motion.h2
          initial={{ scale: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileInView={{ scale: 1, x: 0 }}
        >
          Featured Products
        </motion.h2>
        <section className="products">
          <motion.article
            initial={{ scale: 0, x: -400 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1, type: "tween", stiffness: 400 }}
          >
            <div className="container">
              <img src={ScreenShot4} alt="" />
            </div>
            <footer className="Footer">
              <h5>Entertainment Center</h5>
              <p>$199.99</p>
            </footer>
          </motion.article>

          <motion.article
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="container">
              <img src={ScreenShot5} alt="" />
            </div>
            <footer className="Footer">
              <h5>High-back Bench</h5>
              <p>$399.99</p>
            </footer>
          </motion.article>

          <motion.article
            initial={{ scale: 0, x: 400 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1, type: "tween", stiffness: 400 }}
          >
            <div className="container">
              <img src={ScreenShot6} alt="" />
            </div>
            <footer className="Footer">
              <h5>Modern Bookshelf</h5>
              <p>$319.99</p>
            </footer>
          </motion.article>
        </section>

        <div className="product-btn">
          <button className="btn">All Products</button>
        </div>
      </div>

      <section className="M-sec">
        <div className="M-div">
          <article className="M-title">
            <h3>
              Custom Furniture
              <br />
              Built Only For You
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </article>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////*/}
      <div className="P-main">
        <section className="P-sec">
          <article className="P-card">
            <span className="P-img">
              <img src={ScreenShot7} width={50} />
            </span>
            <h4>Mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </article>
        </section>

        <section className="P-sec1">
          <article className="P-card1">
            <span className="P-img">
              <img src={ScreenShot8} width={50} />
            </span>
            <h4>Vission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </article>
        </section>

        <section className="P-sec2">
          <article className="P-card2">
            <span className="P-img">
              <img src={ScreenShot9} width={50} />
            </span>
            <h4>Coffee</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </article>
        </section>
        {/* </section> */}
      </div>

      <div className="sec-center">
        <motion.div
          className="content"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3>Join our newsletter and get 20% off</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </motion.div>
        <form className="contact-form">
          <input type="text" placeholder="Enter Email" />
          <button>Subscribe</button>
        </form>
      </div>

      <footer className="footer">
        <motion.h5
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          © 2024 <span>ComfySloth</span>
          All rights reserved
        </motion.h5>
      </footer>
    </>
  );
};

export default Home;
