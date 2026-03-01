import Image from 'next/image'
import React from 'react'

function PortfolioGrid() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* roller coaster header */}
                <div className='rounded-xl bg-light-bg px-4 py-2 md:col-span-2'>
                    <Image src="/images/portfolio/roller-coaster.gif" alt="Portfolio Item 1" width={2160} height={1080} className="rounded-lg object-cover w-full mb-6 mt-2" />
                    <p className='text-xs text-slate-800'>Roller Coaster Email Header</p>
                </div>

                {/* roller coaster */}
                <div className='rounded-xl bg-light-bg px-4 py-2'>
                    <Image src="/images/portfolio/roller-coaster.png" alt="Portfolio Item 1" width={1080} height={1080} className="rounded-lg object-cover" />
                    <p className='text-xs text-slate-800'>Roller Coaster Referral Email</p>
                </div>
                {/* goodies */}
                <div className='rounded-xl bg-amber-300 px-4 py-2'>
                    <Image src="/images/portfolio/goodies.png" alt="Portfolio Item 1" width={1080} height={1080} className="rounded-lg object-cover" />
                    <p className='text-xs text-slate-800'>Goodies Groceries Sale Announcement</p>
                </div>

                {/* new drop */}
                <div className='rounded-xl bg-light-bg px-4 py-2 md:col-span-2'>
                    <Image src="/images/portfolio/new-drop.gif" alt="Portfolio Item 1" width={2160} height={1080} className="rounded-lg object-cover w-full" />
                    <p className='text-xs text-slate-800'>Luxe Magic New Drop</p>
                </div>
                {/* yummee small */}
                <div className='rounded-xl bg-light-bg px-4 py-2 md:col-span-2'>
                    <Image src="/images/portfolio/yummee-small.png" alt="Portfolio Item 1" width={1080} height={1080} className="rounded-lg object-cover" />
                    <p className='text-xs text-slate-800'>Yummee Gummies Thank You</p>
                </div>
                {/* yummee large */}
                <div className='rounded-xl bg-light-bg px-4 py-2 md:col-span-2'>
                    <Image src="/images/portfolio/yummee-large.png" alt="Portfolio Item 1" width={2160} height={1080} className="rounded-lg object-cover mb-6 mt-2" />
                    <p className='text-xs text-slate-800'>Yummee Gummies Email Sequence</p>
                </div>
                {/* alley pop */}
                <div className='rounded-xl bg-[#f45d2e] px-4 py-2 md:col-span-2'>
                    <Image src="/images/portfolio/alleypop.png" alt="Portfolio Item 1" width={2160} height={1080} className="rounded-lg object-cover mb-6 mt-2 w-full" />
                    <p className='text-xs text-slate-100'>Alley Pop Email Header</p>
                </div>

            </div>
        </div>
    )
}

export default PortfolioGrid