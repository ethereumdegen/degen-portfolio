
 
import profileImage from '@/assets/images/punk1164.png'


import vibegraphImage from '@/assets/images/vibegraph_doodle.png'
 
import portfolioImage from '@/assets/images/portfolio_doodle.png'
import xcopyImage from '@/assets/images/xcopy_cult.gif'

import defiPenthouseImage from "@/assets/images/defipenthouse.jpg"
 
import skyGalleryImage from '@/assets/images/aleqth_sky.jpeg'

import laptopImage from '@/assets/images/laptop.png'

const config = {
    title: 'Ethereum Degen',
    socialHandle: '@ethereumdegen',
    socialLink:"https://twitter.com/ethereumdegen",
     
    profileImage: profileImage,

  
    items: [
      

        {
            title:"Webapp Devops 101",
            description:"For the computer dev-ops beginning learning how to deploy a web server, this guide is for you, starting with registering a domain and ending in how to host your frontend and backend services",
            image: laptopImage,
            link: "/blog/webapp-devops"

        }, 


        {
            title:"Sky Gallery 3D",
            description:"A virtual 3d html gallery for artworks by artist Aleqth.",
            image: skyGalleryImage,
            link: "https://sky.aleqth.com"

        },



        {
            title:"Defi Penthouse",
            description:"A youtube channel for the future of finance in ethereum applications.",
            image: defiPenthouseImage,
            link: "http://defipenthouse.com"

        }, 


         
        {
            title:"XCOPY Cult",
            description:"XCOPY fan website displaying original works.",
            image: xcopyImage,
            link: "https://xcopycult.com"

        },


        {
            title:"Vibegraph",
            description:"A chain-data event scraping service for ethereum applications. Now built in Rust",
            image: vibegraphImage,
            link: "/blog/vibegraph"

        },


     





    ]

}



export default config;
//module.exports = config;
