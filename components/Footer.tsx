'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'


function Footer() {
   
    const [time, setTime] = useState("");
    
        useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date();
                setTime(
                    now.toLocaleString("en-NG", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                    })
                );
            }, 1000);
    
            return () => clearInterval(interval);
        }, []);
    return (
        <div className='bg-light-bg rounded-xl p-4 h-100 flex flex-col justify-between '>
            <div className='text-center text-neutral-600 text-sm '>
                {time}
            </div>
            <div className='text-6xl font-medium text-center tracking-tight leading-none'>Dee <br />Caulcrick</div>
            <div className='flex justify-between items-center'>
                <Link href="mailto:deecaulcrick@gmail.com" className='text-neutral-600 hover:text-black text-sm font-light'>
                    deecaulcrick@gmail.com
                </Link>
                <Link href="https://www.linkedin.com/in/deborah-caulcrick/" className='text-neutral-600 hover:text-black text-sm font-light'>
                    Linkedin
                </Link>

            </div>

        </div>
    )
}

export default Footer