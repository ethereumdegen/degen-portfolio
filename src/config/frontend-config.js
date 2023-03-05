
 
import homeImage from '@/assets/images/ensapi_logo.png'
import favicon from '@/assets/images/fire_logo.png'

const config = {
    title: 'Portfolio - ethereumdegen',
    tagline: '',
    url: 'https://ethereumdegen,com',
    baseURL: '/',
    favicon: favicon,
    homeImage: homeImage,



    navbar: {
        title: '',
        logo: {
          alt: 'Fire Logo',
          src: 'assets/images/fire_logo.png',
        },
        items: [
         
          { to:'/', label:'Home' },
          { to:'/blog', label:'Blog' },
    
          
        ],
    },

      accountMenu: {


          items: [
            {
              to:'/',
              label: 'Home'
            }


          ]
      },


    footer: {
        style: 'light',
        columns: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Blog',
                to: '/blog/',
              } 
            ],
          },
          {
            title: 'Community',
            items: [
            
              {
                label: 'Twitter',
                href: 'https://twitter.com/ethereumdegen',
              },
            ],
          },
          {
            title: 'More',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/ethereumdegen',
              },

             
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} `,

        socials:{
          twitter:"https://twitter.com/ethereumdegen",
          github:"https://github.com/ethereumdegen"
        }
      }
    

}



export default config;
//module.exports = config;
