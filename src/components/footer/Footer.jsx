import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="login_footer">
            <div className="footer">
                <div className="footer_top">Questions? Call <a className='footer_top_a' href="#">000-800-919-1694</a></div>
                <ul className='footer_ul'>
                    <li className='footer_li'>FAQ</li>
                    <li className='footer_li'>Help Center</li>
                    <li className='footer_li'>Terms of Use</li>
                    <li className='footer_li'>Privacy</li>
                    <li className='footer_li'>Cookie Preferences</li>
                    <li className='footer_li'>Corporate Information</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer