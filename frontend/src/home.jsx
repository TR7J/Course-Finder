import {  Link } from "react-router-dom";
import './App.css'
import intropic from './img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons' 

function Home() {
    return (
      <main> 
        <header className='home-header'>
            <Link to="/" className='logo'><h1>Course Finder</h1></Link>
            <nav className="nav-mid">
                <Link to="/" className='nav'>Home</Link>
                <Link to="/createblog" className='nav'>Create Blog</Link>
            </nav>
            <nav className='nav-right'>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>

        <body>
            <div className="intro-pic">
                <img  src={intropic} >
                    
                </img>
            </div>

            <div className="search">
                        <input 
                            type="text"
                            placeholder="Search..."
                        /> 
                        <button>Search</button>
            </div>

            <button className="chatbox"></button>

            <section className="home">
                <h2 className="stories-h2">Stories</h2>
                <div className="stories">
                    <div className="blog">
                        <img src={intropic} className="blog-img">
                        </img>
                        <h3 className="blog-title">Example Blog Title</h3>
                        <p className="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore odio. Fuga a similique minus magnam blanditiis quas obcaecati praesentium perferendis quaerat necessitatibus, dolorem inventore nulla, at natus dolores maxime ab temporibus, maiores tenetur repudiandae iste velit? Maxime aliquid eveniet veniam ut ab facere repudiandae? Et ipsum unde ut temporibus.</p>
                    </div>
                </div>
            </section>
        </body>

        <footer>
            <main className="footer-main">
                <h3 className="footer-logo">Course Finder</h3>
                <div className="footer-content">
                    <div className="footer-info">
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                    </div>
                    <div className="footer-info">
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                    </div>
                    <div className="footer-info">
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                    </div>
                </div>
                <div className="footer-socials">
                    <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon icon={faInstagramSquare}/></a>
                    <a href="https://www.twitter.com/your_username" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon icon={faFacebook}/></a>
                </div>    
                <span className="footer-text">Copyright[&copy]Course Finder.</span>
                <span className="footer-text">All rights reserved.</span>
            </main>
        </footer>

      </main>
    
    )}

    export default Home;