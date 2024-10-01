import './footer.css';

export default function Footer() {
    return (
        <footer className='footer'>        
            <div className='lower'>
                <p>&copy; {new Date().getFullYear()} GDSC USTP. - University of Science and Technology of Southern Philippines - CDO</p>
            </div>
        </footer>
    );
}
