import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=' justify-center items-center md:justify-normal md:items-start px-5 md:px-10 xl:px-40 flex flex-col'>
      
      <div className=' w-full  flex  flex-col  md:flex-row '>
        <div className=' w-full   md:w-2/3 flex flex-col'>
          <div className=' w-full'>
            <Image
            src={"/images/image-web-3-desktop.jpg"}
            width={10000}
            height={10000}
            alt='image-main'
            className='hidden md:flex w-full object-contain'/>
            <Image
            src={"/images/image-web-3-mobile.jpg"}
            width={10000}
            height={10000}
            alt='image-main'
            className='flex md:hidden w-full object-contain'/>
          </div>
          <div className=' mt-7 flex flex-col md:flex-row w-full '>
            <div className='text-4xl  md:text-5xl xl:text-6xl  font-extrabold w-full md:w-1/2'>
              The Bright Future of Web 3.0?
            </div>
            <div className=' relative w-full md:w-1/2 flex flex-col'>
              <div className='md:text-sm xl:text-base  text-custom-500'>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
              </div>
              <button className=' w-44 md:mt-0 mt-3 md:w-auto bg-custom-200 hover:bg-custom-600 text-white px-5 py-3 tracking-[.25em] static md:absolute bottom-0 left-0'>
                READ MORE
              </button>
            </div>
          </div>
          
        </div>
        <div className=' md:mt-0 mt-10 ml-0 md:ml-10 bg-custom-600 p-5  w-full md:w-1/3'>
          <div className=' text-3xl md:text-4xl xl:text-5xl text-custom-100 font-bold' >
            New 
          </div>
          <div className=' lg:space-y-5 xl:space-y-10 mt-5 flex flex-col'>
            <div className='  hover:text-custom-100 mt-5 text-white flex flex-col'>
              <Link href={'/'} className=' lg:text-lg md:text-sm font-bold'>
                Hydrogen VS Electric Cars 
              </Link>
              <div className=' lg:text-base md:text-xs text-custom-400'>
                Will hydrogen-fueled cars ever catch up to EVs? 
              </div>
            </div>
            <hr className=' mt-5' />
            <div className=' hover:text-custom-100 mt-5 text-white flex flex-col'>
              <Link href={'/'} className=' lg:text-lg md:text-sm font-bold'>
                The Downsides of AI Artistry 
              </Link>
              <div className=' lg:text-base md:text-xs text-custom-400'>
                What are the possible adverse effects of on-demand AI image generation?
              </div>
            </div>
            <hr className=' mt-5' />
            <div className=' hover:text-custom-100 mt-5 text-white flex flex-col'>
              <Link href={'/'} className=' lg:text-lg md:text-sm font-bold'>
                Is VC Funding Drying Up? 
              </Link>
              <div className=' lg:text-base md:text-xs text-custom-400'>
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='  md:pb-0  pb-10 md:space-y-0  space-y-4 mt-10 w-full justify-around flex-col  flex md:flex-row '> 
        <div className=' flex flex-row'>
          <div className=' w-1/3'>
            <Image
            src={"/images/image-retro-pcs.jpg"}
            width={10000}
            height={10000}
            alt='retro'
            className=' md:w-24 md:h-28 lg:w-28 lg:h-32'/>
          </div>
          <div className=' ml-2  w-2/3'>
            <div className=' space-y-2 flex flex-col'>
              <div className='lg:text-3xl md:text-xl font-bold text-custom-400'>
                01
              </div>
              <Link href={"/"} className='lg:text-lg md:text-base  hover:text-custom-200 text-lg font-extrabold'>
                Reviving Retro PCs
              </Link>
              <div className=' lg:text-base md:text-xs text-custom-500'>
                What happens when old PCs are given modern upgrades?
              </div>
            </div>
          </div>
        </div>
        <div className=' flex flex-row'>
          <div className=' w-1/3'>
            <Image
            src={"/images/image-top-laptops.jpg"}
            width={10000}
            height={10000}
            alt='retro'
            className=' md:w-24 md:h-28 lg:w-28 lg:h-32'/>
          </div>
          <div className='ml-2  w-2/3'>
            <div className=' space-y-2 flex flex-col'>
              <div className='lg:text-3xl md:text-xl font-bold text-custom-400'>
                02
              </div>
              <Link href={"/"} className=' lg:text-lg md:text-base  hover:text-custom-200 text-lg font-extrabold'>
                Top 10 Laptops of 2022 
              </Link>
              <div className='lg:text-base md:text-xs text-custom-500'>
                Our best picks for various needs and budgets.
              </div>
            </div>
          </div>
        </div>
        <div className=' flex flex-row'>
          <div className=' w-1/3'>
            <Image
            src={"/images/image-gaming-growth.jpg"}
            width={10000}
            height={10000}
            alt='retro'
            className=' md:w-24 md:h-28 lg:w-28 lg:h-32'/>
          </div>
          <div className=' ml-2  w-2/3'>
            <div className=' space-y-2 flex flex-col'>
              <div className='lg:text-3xl md:text-xl font-bold text-custom-400'>
                03
              </div>
              <Link href={"/"} className=' hover:text-custom-200 lg:text-lg md:text-base font-extrabold'>
                The Growth of Gaming 
              </Link>
              <div className=' lg:text-base md:text-xs text-custom-500'>
                How the pandemic has sparked fresh opportunities.
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    
  )}
    