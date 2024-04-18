import './footer.css';

function Footer() {
  return (
    <footer>
        <section className='social'>
            <p className='social__follow'>Follow us on:</p>
            <ul className='social__media'>
                <li className='facebook'><img src="./src/assets/facebook.png" alt="Facebook logo" /></li>
                <li className='instagram'><img src="./src/assets/instagram.png" alt="Instagram logo" /></li>
                <li className='youtube'><img src="./src/assets/youtube.png" alt="Youtube logo" /></li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer;