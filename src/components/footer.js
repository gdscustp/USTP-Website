import './footer.css';

export default function Footer() {
    return (
        <footer className='footer'>        
            <div className='footer-content'>
                <p>&copy; {new Date().getFullYear()} GDSC USTP. All Rights Reserved.</p>
                <div className='footer-links'>
                    <a href="#" className='footer-link'>Privacy Policy</a>
                    <div className='separator'></div>
                    <a href="#" className='footer-link'>Terms of Use</a>
                    <div className='separator'></div>
                    <a href="#" className='footer-link'>Sitemap</a>
                </div>
            </div>
        </footer>
    );
}
