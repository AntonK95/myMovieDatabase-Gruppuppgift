import './footer.css';

import React from 'react'

function Footer() {
  return (
    <footer>
        <section className='social'>
            <p>Follow us on:</p>
            <ul className='social__media'>
                <li className='facebook'><img src="../.././public/facebook.png" alt="" /></li>
                <li className='instagram'><img src="../.././public/instagram.png" alt="" /></li>
                <li className='youtube'><img src="../.././public/youtube.png" alt="" /></li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer