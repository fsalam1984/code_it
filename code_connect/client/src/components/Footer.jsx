import React from 'react';
import '../css/Footer.css'; // Ensure this path matches your project structure

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Social Media Icons */}
                <div className="social-media">
                    <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12.07C22 6.02 17.98 1 12 1S2 6.02 2 12.07C2 17.5 5.45 22 10.58 22c.74 0 1.46-.07 2.17-.21V14.8h-1.56v-2.17h1.56V11c0-1.55.93-2.4 2.28-2.4.65 0 1.33.11 1.33.11v1.47h-.75c-.73 0-.95.45-.95.92v1.11h1.9l-.3 2.17h-1.6V21.8c.69.15 1.41.21 2.14.21 5.1 0 9.58-4.51 9.58-10.74z"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 3a10.9 10.9 0 01-3.14.86A5.43 5.43 0 0022.4 2c-1.82 1.08-3.83 1.87-5.97 2.31A5.43 5.43 0 0016.71.45a5.34 5.34 0 00-5.16 6.52c-4.46-.22-8.41-2.36-11.05-5.59A5.34 5.34 0 001.3 8.6a5.36 5.36 0 002.39-.66A5.43 5.43 0 002.6 8.7a5.34 5.34 0 005.29 3.9A10.8 10.8 0 011 12.3a15.21 15.21 0 008.5 2.5c10.23 0 15.84-8.59 15.84-16 0-.24 0-.47-.02-.71A11.47 11.47 0 0023 3z"/>
                        </svg>
                    </a>
                    {/* Add more social media icons as needed */}
                </div>
                {/* Copyright Info */}
                <div className="copyright">
                    <p>&copy; 2024 Code-connect App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
