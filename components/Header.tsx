"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
    const [show,setShow ] = useState(false)
    return(
        <div className=" relative w-full flex py-5 px-7 md:pt-10 md:pb-7 md:px-10 xl:pt-14 xl:pb-10 xl:px-40 flex-row justify-between">
            <div>
                <Image
                src={"/images/logo.svg"}
                width={65}
                height={40}
                alt='logo'
                />
            </div>
            <div className=" hidden md:flex  md:w-1/2 xl:w-1/3 text-custom-500 flex-row justify-around">
                <div>
                   <Link href={"/"}>Home</Link> 
                </div>
                <div>
                    <Link href={"/"}>New</Link>
                </div>
                <div>
                    <Link href={"/"}>Popular</Link>
                </div>
                <div>
                    <Link href={"/"}>Trending</Link>
                </div>
                <div>
                    <Link href={"/"}>Categories</Link>
                </div>

            </div>
            <div className=' flex md:hidden z-20'>
                <button onClick={()=>{setShow(!show)}}>
                    <Image
                    
                    src={!show ? "/images/icon-menu.svg" : "/images/icon-menu-close.svg" }
                    width={40}
                    height={17}

                    className={show ? " top-5 right-7 fixed" : "static" }
                    alt='menu'/>
                </button>   
            </div>
            {show && (
                <div className='z-10 top-0 right-0 fixed w-2/3 h-full bg-white'>
                    <div className=' px-5 text-2xl w-full h-full flex space-y-10  flex-col justify-center'>
                        <div>
                            <Link href={"/"}>Home</Link> 
                        </div>
                        <div>
                            <Link href={"/"}>New</Link>
                        </div>
                        <div>
                            <Link href={"/"}>Popular</Link>
                        </div>
                        <div>
                            <Link href={"/"}>Trending</Link>
                        </div>
                        <div>
                            <Link href={"/"}>Categories</Link>
                        </div>
                    </div>
                    
                </div>
                
            )}
            {show && (
                <div className='z-10 top-0 left-0 fixed w-1/3 bg-black bg-opacity-50 h-screen '>
                    
                    
                </div>
                
            )}
        </div>
    )
}