import { useMemo } from "preact/hooks"
import s from "../styles/app.module.css"
import { cn } from "../helpers"

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as const;

const EVENTS: { date: `${number}-${number}`, title: string, className?: string, link?: string }[] = [
    { date: `05-27`, title: "My birthday!", className: s.rainbow },
    { date: `09-14`, title: "1000 subs on YouTube! (2025)", className: "bg-white", link: "https://www.youtube.com/post/UgkxffXH5J0DeRMAlWN5vW2iGsqrS8-fU8DA" },
    { date: `11-05`, title: "Day of page release! (2025)", className: "bg-blue" },
]

const formatDate = (date: `${number}-${number}`): string => {
    const [monthStr, dayStr] = date.split("-")
    return `${dayStr} ${MONTHS[parseInt(monthStr) - 1].slice(0, 3)}`
}

const calculateProgress = (time: Date = new Date()) => {
    const start = new Date(`${time.getFullYear()}`)
    const end = new Date(`${time.getFullYear() + 1}`)
    return (Number(time) - Number(start)) / (Number(end) - Number(start)) * 100
}

export default function ProgressYear() {
    const now = useMemo(() => new Date(), [])
    const timePassed = useMemo(() => calculateProgress(), [])

    return <div className="flex flex-col gap-5 w-1/2">
        <div className="text-center">
            <h2>We're currently this far into the year!</h2>
            <span className="text-subtext0">(and also additional events that happened)</span>
        </div>
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-10 flex flex-row bg-surface0">
                <div className="relative w-full h-full">
                    {
                        EVENTS.map(({ date, title, className, link }) => {
                            const progress = calculateProgress(new Date(`${now.getFullYear()}-${date}`))

                            const el = <div style={{ "--progress": `${progress}%` }} className={cn("absolute h-full w-2 transition-all duration-200 hover:w-8 z-10 left-(--progress) -translate-x-1/2 not-hover:*:hidden", className)}>
                                <span className="absolute top-[calc(100%+10px)] w-52"><b>{formatDate(date)}</b> - {title}</span>
                            </div>

                            if (link) return <a href={link} title="Visit related source" target="_blank">{el}</a>
                            else return el
                        })
                    }
                    <div style={{ "--progress": `${timePassed}%` }} className="z-0 top-0 left-0 absolute w-(--progress) h-full bg-green"></div>
                </div>
            </div>
            <div className="w-full flex flex-row place-content-between">
                <span className="font-bold">{now.getFullYear()}</span>
                <span className="font-bold">{now.getFullYear() + 1}</span>
            </div>
        </div>
    </div>
}