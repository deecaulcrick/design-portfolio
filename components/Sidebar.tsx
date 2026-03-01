'use client'
import Link from 'next/link'
import Avatar from './Avatar'
import { useEffect, useState } from 'react'

const skills = [
    "Semantic HTML",
    "CSS",
    "Responsive Email Design",
    "UI/UX Design",
    "Design Engineering",
    "Frontend Development",
    "Email Automation Design",
    "A/B Testing for Email",
    "Motion Design for Email (GIFs & Micro-animations)",
    "Technical Writing",
    "AI-Assisted Creative & Optimization"
]

const tools = [
    "Figma",
    "Canva",
    "Mailchimp",
    "MailerLite",
    "ClickFunnels",
    "FG Funnels",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "WordPress",
    "Elementor"
]

function Sidebar() {
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
        <div className='font-sans flex flex-col gap-4 min-h-screen sticky top-3'>
            <Avatar />
            <div className='bg-light-bg p-6 tracking-tight rounded-xl flex flex-col justify-center gap-4 lg:h-[18vh]'>
                <p> Designer & frontend engineer — I design high-impact digital experiences across web and marketing, blending UI/UX, performance strategy, and AI-assisted creative execution. Originally from Nigeria, building globally and working across time zones.</p>

                <Link href="mailto:deecaulrick@gmail.com" className='bg-white rounded-3xl px-6 py-2 w-fit hover:bg-black hover:text-white transition-colors text-sm '>
                    Let's talk
                </Link>
            </div>
            <div className='bg-light-bg p-6 text-2xl text-center h-[30vh] flex items-center justify-center'>
                {time} / Lagos
            </div>

            <div className='bg-light-bg p-6 rounded-xl flex flex-col gap-4 lg:h-[39vh]'>
                <div>
                    <h3 className='text-lg font-medium mb-2'>Relevant skills</h3>
                    <div className='text-sm'>

                        {skills.map((skill) => (
                            <span className='mr-2 mb-1 inline-block' key={skill}>• {skill}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className='text-lg font-medium mb-2'>Tools</h3>
                    <div className='text-sm'>
                        {tools.map((tool) => (
                            <span className='mr-2 mb-1 inline-block' key={tool}>• {tool}</span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar