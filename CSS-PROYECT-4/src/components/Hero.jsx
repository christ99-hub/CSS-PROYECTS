import React from 'react'
import './Hero.css' 
import { useState } from 'react'


const carrouselArray = [
    {id: 1, img:"designs/london.jpg"},
    {id: 2, img:"designs/manarola.jpg"},
    {id: 3, img:"designs/Ocean.jpg"},
    
]




export const Hero = () => {

    const [index, setindex] = useState(0)
    const [fade, setFade] = useState("fade-in");
    const transitionDuration = 500; // milisegundos, igual que en el CSS
const handleCarrouselright = ()=>{
    setFade("fade-out");
    setTimeout(() => {
      setindex((prevIndex) => (prevIndex === carrouselArray.length - 1 ? 0 : prevIndex + 1));
      setFade("fade-in");
    }, transitionDuration);
    
}

const handleCarrouselleft = ()=>{
     setFade("fade-out");

    setTimeout(() => {
      setindex((prevIndex) =>
        prevIndex === 0 ? carrouselArray.length - 1 : prevIndex - 1
      );
      setFade("fade-in");
    }, transitionDuration);
    
}

  return (
    <section className='hero'>
        <div className='hero-container'>
            <div className='header-container'>
                <div className='header-margin'>
                    <div className='header-globe'>
                    Let's make news
                </div>
                <nav>
                    <a href="">About us</a>
                    <a href="">Packages</a>
                    <a href="">Blog</a>
                </nav>
                <button>Contact us</button>
                </div>
                
            </div>
        <div className='hero-grid'>
            <div className='hero-left'>
                <span>Spread Your News Worldwide!</span>
                <h1>Welcome to </h1>
                <h1>Let's Make <span>News!</span></h1>
                <button>Explore our news</button>
                <a href="/*">Learn more</a>
                <p>Rated Excelent</p>
                <p>⭐️⭐️⭐️⭐️⭐️ 4.6 on TrustPlot</p>
            </div>
            <div className='hero-right'>
                <img src={carrouselArray[index].img} alt="img" className={`hero-img ${fade}`} />
                <button className='left' onClick={handleCarrouselleft}></button>
                <button className='right' onClick={handleCarrouselright}></button>
                <div className='tag'>
                    <img src="designs/carlos-profime.png" alt="" />
                    <div className='tag-texts'>
                    <p>Carlos Andrés Mora Gonzáles</p>
                    <h5>Summer is calling.</h5>
                    <h5>Top 10 Florida hotels</h5>
                    </div>
                    
                </div>
        </div>

            </div>
            <div className='hero-networks'>
                <h3>Publish your story on</h3>
                <a className='btn-redes cbs'></a>
                <a className='btn-redes usa'></a>
                <a className='btn-redes foxnews'></a>
                <a className='btn-redes cbs'></a>
                <a className='btn-redes spotify'></a>
                <a className='btn-redes NBC'></a>

            </div>
        </div>
        <div className='hero-paragraph'>
             <p><span>We are a Misisipi Company</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corporis dolor veritatis error esse qui doloremque eius, iste laborum mollitia nobis blanditiis corrupti at ipsa molestiae reiciendis tempore
               repellendus aperiam impedit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quae sint sequi, 
               maiores quisquam nisi et explicabo! Nihil aliquid facere iste repudiandae. Architecto ea fugit magni odit 
               quis aperiam tenetur.</p>
        </div>
        <div className='hero-pinkcard'>
            <div className='hero-pinkcard-margin'>
            <div className='hero-pinkcard-left'>
                <p>Who we are</p>
                <h1>Let's Make News
                    is an innovative
                    news plattform
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repudiandae, nisi? Officia quae incidunt doloribus esse minus, 
                    blanditiis eveniet explicabo facilis maxime rerum quibusdam quod aperiam fugit nulla,
                     dolores consequatur culpa.</p>
                     <button>Learn about us</button>
            </div>
            <div className='hero-pinkcard-right'>
                    <img src="designs/hotel.jpg" alt="png" />
                    <div className='globe-pink'>
                        <span>asdadasdsd</span>
                        <h3>Jessica Waters Opes The Hottest New Cafein LA</h3>
                    </div>
            </div>
            </div>
        </div>
        <div className='hero-bluecard'>
            <div className='hero-bluecard-margin'>
            <div className='hero-bluecard-left'>
                <p>Why to work with us</p>
                <h1>Freedom of Speech
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repudiandae, nisi? Officia quae incidunt doloribus esse minus, 
                    blanditiis eveniet explicabo facilis maxime rerum quibusdam quod aperiam fugit nulla,
                     dolores consequatur culpa.</p>
                     <button>Learn about us</button>
            </div>
            <div className='hero-bluecard-right'>
                    <img src="designs/audifonos.jpg" alt="png" />
                    <div className='globe-blue'>
                        <span>asdadasdsd</span>
                        <h3>Jessica Waters Opes The Hottest New Cafein LA</h3>
                    </div>
            </div>
            </div>
        </div>
        <div className='hero-orange'>
            <div className='hero-orange-margin'>
            <div className='hero-orange-left'>
                <p>Our speciality</p>
                <h1>Accessibility
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repudiandae, nisi? Officia quae incidunt doloribus esse minus, 
                    blanditiis eveniet explicabo facilis maxime rerum quibusdam quod aperiam fugit nulla,
                     dolores consequatur culpa.</p>
                     <button>Read more</button>
            </div>
            <div className='hero-orange-right'>
                    <img src="designs/cantante.jpg" alt="png" />
                    <div className='globe-orange'>
                        <span>asdadasdsd</span>
                        <h3>Singer Lexi Arkins Performs Live Ser for Charity</h3>
                    </div>
            </div>
            </div>
        </div>
    </section>
  )
}
