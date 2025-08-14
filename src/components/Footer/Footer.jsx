import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-logo text-center'>
                    <img src={require('../../assests/images/logo/elysiumLogo.png')} alt='Elysium Logo' />
                </div>
                <div className='footer-powered-by'>
                    <p className='footer-copyright'>
                        © 2025 Elysium, All rights reserved – Technology Powered By
                    </p>
                    <img src={require('../../assests/images/logo/maghilLogo.png')} alt='Maghil Logo' />
                </div>
            </div>
        </div>
    )
}

export default Footer;