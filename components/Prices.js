import React from 'react'

const Prices = () => {
    return (
        <div className="bigContainer" id="pricing">
            <h1>Our Offers</h1>
           <div className='Offers'>
            <div className='offer'>
                <h2>Packet 1</h2>
                <ul>
                    <li>2 Posts per Week (Pictures provided by you)</li>
                    <li>2 Stories per Day</li>
                    <li>Google Business Management</li>
                    <li>Constant View Rate Reports</li>
                    <li>Content Creation</li>
                    <li>Personalised Hashtags</li>
                    <h2>Price: 100 EUR/Mo</h2>

                </ul>
            </div>
            <div className='offer'>
            <h2>Packet 2</h2>
                <ul>
                    <li>4 Posts per Week (Pictures provided by you)</li>
                    <li>3 Stories per Day</li>
                    <li>Google Business Management</li>
                    <li>Constant View Rate Reports</li>
                    <li>Content Creation</li>
                    <li>Personalised Hashtags</li>
                    <li>Logo and Business Card Design</li>
                    <li>Unique Branding and Google Ads Management</li>
                    <h2>Price: 200 EUR/Mo</h2>

                </ul>

            </div>
            <div className='offer'>
            <h2>Additional Services</h2>
                <ul>
                    <li>Web Design - <strong>400 EUR</strong></li>
                    <li>Google Business Management - <strong>50 EUR</strong></li>
                    <li>Google Ads Management - <strong>150 EUR</strong></li>
                   

                </ul>

            </div>

           </div>
        </div>
    )
}

export default Prices