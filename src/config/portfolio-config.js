
 
import profileImage from '@/assets/images/punk1164.png'


import vibegraphImage from '@/assets/images/vibegraph_doodle.png'
 
import portfolioImage from '@/assets/images/portfolio_doodle.png'
import xcopyImage from '@/assets/images/xcopy_cult.gif'


import degenGuideImage from '@/assets/images/degen_guide.png'

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
            title:"Ethereum for the Beginner Degen ($1)",
            description:"The definitive online course for Ethereum including wallet creation, transactions, and the latest security+safety practices.",
            image: degenGuideImage,
            link: "https://ethereum-degen-network.mn.co/users/onboarding/choose_plan?plan_id=455735&bundle_token=6498938a95ac4ef85643ba4607f4650d&u"

        },

        {
            title:"XCOPY Cult",
            description:"XCOPY fan website displaying original works.",
            image: xcopyImage,
            link: "https://xcopycult.com"

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
