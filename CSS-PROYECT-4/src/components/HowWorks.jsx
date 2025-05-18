import React from 'react'
import './HowWork.css' 
export const HowWorks = () => {
  return (
    <section className='HowWorks'>
        <div className='HowWorks-info'>
            <h1>How it work</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea facilis eveniet consequatur harum consectetur beatae debitis omnis voluptatibus dolorum nihil, laborum impedit iusto soluta at ut, distinctio numquam ipsa perferendis?</p>

        </div>
        <div className='HowWorks-imgs'>
            <div className='HowWorks-img1'>
                 <img src="designs/libreta.jpg" alt="asdasd" />
                 <h2>Writing</h2>
                 <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum, repr</span>
            </div>
            <div className='HowWorks-img2'>
            <img src="designs/newspaper.jpg" alt="asdasd" />
            <h2>Publishing</h2>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum, repr</span>
           </div>
            <div className='HowWorks-img3'>
            <img src="designs/exito.jpg" alt="asdasd" />
            <h2>Get Results</h2>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum, repr</span>
            </div> 
            
        </div>
    </section>
  )
}
