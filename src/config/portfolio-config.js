
 
import profileImage from '@/assets/images/punk1164.png'


import vibegraphImage from '@/assets/images/vibegraph.png'
 
import portfolioImage from '@/assets/images/portfolio.png'

import ensApiImage from '@/assets/images/ensapi_logo.png'

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
            description:"A chain-data event scraping service for ethereum applications.",
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
