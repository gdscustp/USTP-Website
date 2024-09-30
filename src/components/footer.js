import './footer.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className='footer'>        
            <div className='lower'>
                <p>&copy; {new Date().getFullYear()} GDSC USTP. -Univeristy of Science and Technology of Southern Philippines - CDO</p>
            </div>
        </footer>
    );
}
