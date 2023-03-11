
 
import profileImage from '@/assets/images/punk1164.png'


import vibegraphImage from '@/assets/images/vibegraph_doodle.png'
 
import portfolioImage from '@/assets/images/portfolio_doodle.png'

import ensApiImage from '@/assets/images/ensapi.png'

const config = {
    title: 'Ethereum Degen',
    socialHandle: '@ethereumdegen',
     
    profileImage: profileImage,

  
    items: [
        {
            title:"Vibegraph",
            description:"A chain-data event scraping service for ethereum applications.",
            image: vibegraphImage,
            link: "https://github.com/ethereumdegen/vibegraph"

        },

        {
            title:"Degen Portfolio",
            description:"An open-source personal portfolio website built with vite, react and tailwind.",
            image: portfolioImage,
            link: "https://github.com/ethereumdegen/degen-portfolio"

        },

        {
            title:"ENS API",
            description:"Fast & free api for ENS domain resolution.",
            image: ensApiImage,
            link: "https://ensapi.io"

        }




    ]

}



export default config;
//module.exports = config;
