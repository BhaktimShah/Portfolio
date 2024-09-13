import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

         

          <a
            href="https://github.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &#169; 2024 <span>ThinkCreative. All rigths reserved</span>
        </p>
        <p className="footer__copyright text-cs">
          Developed by <span>Bhakti Shah</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer