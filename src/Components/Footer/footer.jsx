import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './footer.scss';

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Footer = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sz5mh1q',
        'template_r8gvlc6',
        formRef.current,
        'QT0oZMY0tXEwrGXYS'
      )
      .then(
        (result) => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setSuccess(false);
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textcontainer" variants={variants}>
        <motion.h1 variants={variants}>Get in Touch</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>k.tanushreddy2003@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>Ballari</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>9113674413</span>
        </motion.div>
      </motion.div>

      <div className="formcontainer" ref={ref}>
        {/* SVG section... (keep as-is or trim for brevity) */}

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.input
            type="text"
            name="user_name"
            required
            placeholder="Name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.input
            type="email"
            name="user_email"
            required
            placeholder="Email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.textarea
            name="message"
            rows={8}
            placeholder="Message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.button
            type="submit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Submit
          </motion.button>
          {success && <span className="success">Thanks! Your message was sent.</span>}
          {success === false && (
            <span className="error">Something went wrong. Please try again.</span>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Footer;
