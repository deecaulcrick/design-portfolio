import Image from "next/image"


function Avatar() {
    return (
        <div className="bg-light-bg rounded-xl overflow-hidden md:h-[10vh] flex items-center justify-center">
            <div className='flex items-center justify-center gap-4 p-6'>
                <Image src="/images/dee.jpeg" alt="Avatar" width={96} height={96} className="rounded-full h-12 w-12 object-cover object-top" />
                <div>
                    <h1 className="font-medium text-3xl tracking-tight"> Dee Caulcrick</h1>
                    <p className="text-sm text-slate-900">Designer & Developer</p>
                </div>
            </div>

        </div>
    )
}

export default Avatar