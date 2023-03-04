import React, { useState } from 'react';
 
 
import PortfolioConfig from '@/config/portfolio-config'
 

function Portfolio() {

   
  return (
    <section className="relative">

     
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

      <div className="pt-8 pb-12 md:pt-12 md:pb-12 text-center">

      <div className="text-center">
        <img
        src={ `${PortfolioConfig.profileImage}` }
        className={`rounded-full mx-auto`}
        width={64} height={64} 
         ></img>
        </div>
        <div className="flex flex-col">

          <div className="font-bold text-lg">  {`${PortfolioConfig.title}` }  </div>
        
          <div className="text-md"> 
                {`${PortfolioConfig.socialHandle}`}
           </div>

        </div>


      </div>


        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-left pb-12 md:pb-16">

        
         
           
            <div className="max-w-3xl  ">
              
               {

                PortfolioConfig.items.map( (item, index ) => (


                    <div> 

                      An item 

                    </div>

                )  )

               }
                
               

              </div>
              <div className="max-w-3xl mx-auto mt-16 hidden  ">
             
         
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center hidden" data-aos="zoom-y-out" data-aos-delay="300"  >
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://degenhaus.com/getstarted">Get started</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://docs.degenhaus.com">Docs</a>
                </div>
              </div>
             
            </div>
          </div>


          

        

        </div>

      </div>
    </section>
  );
}

export default Portfolio;