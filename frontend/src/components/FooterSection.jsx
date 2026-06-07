import React from 'react'

const FooterSection = () => {
    const secondPartFirstList = ['Cafes', 'Events', 'About'];
    const secondPartSecondList = ['Help Center', 'Safety', 'Contact'];
    const secondPartThirdList = ['Privacy', 'Terms'];
  return (
    <div className='footer-section'>
        <div className="footer-first-part">
            <h1>DateFlyx</h1>
            <p>Create meaningful connections through curated cafe experiences.</p>
        </div>
        <div className="footer-second-part">
            <div className='footer-second-part-first-list'>
                <h4 className='footer-headers'>Explore</h4>
                <ul className='footer-lists'>
                    {
                        secondPartFirstList.map((elem, key) => {
                            return(
                                <li key={key}>{elem}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="footer-second-part-second-list">
                <h4 className='footer-headers'>Support</h4>
                <ul className='footer-lists'>
                    {
                        secondPartSecondList.map((elem, key) => {
                            return(
                                <li key={key}>{elem}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="footer-second-part-third-list">
                <h4 className='footer-headers'>Legal</h4>
                <ul className='footer-lists'>
                    {
                        secondPartThirdList.map((elem, key) => {
                            return(
                                <li key={key}>{elem}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterSection