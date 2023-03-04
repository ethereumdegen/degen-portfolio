
 
import homeImage from '@/assets/images/ensapi_logo.png'
import favicon from '@/assets/images/fire_logo.png'

const config = {
    title: 'ENS Api',
    tagline: 'High-availability data services for Ethereum Name Service domains.',
    url: 'https://ensapi.io',
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
         
          { to:'/welcome', label:'Home' },
          { to:'/docs', label:'Docs' },
       //   { to: '/blog', label: 'Blog' },

       
          
        ],
    },

    footer: {
        style: 'light',
        columns: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
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
