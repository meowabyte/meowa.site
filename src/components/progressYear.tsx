import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks"
import { cn } from "@/helpers"
import s from "@/styles/app.module.css"

type ProgressEventType = { date: `${number}-${number}`, title: string, className?: string, link?: string }
const EVENTS: ProgressEventType[] = [
    { date: `05-27`, title: "My birthday!", className: s.rainbow },
    { date: `09-14`, title: "1000 subs on YouTube! (2025)", className: "bg-white", link: "https://www.youtube.com/post/UgkxffXH5J0DeRMAlWN5vW2iGsqrS8-fU8DA" },
    { date: `11-05`, title: "Day of page release! (2025)", className: "bg-blue" },
] as const

const calculateProgressInYear = (time: Date = new Date()) => {
    const start = new Date(`${time.getFullYear()}`)
    const end = new Date(`${time.getFullYear() + 1}`)
    return (Number(time) - Number(start)) / (Number(end) - Number(start)) * 100
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short"
})

function ProgressEvent({ event: { date, title, className, link }, isActive, makeActive }: { event: ProgressEventType, isActive: boolean, makeActive: () => void }) { // TODO: fix mobile preview
    const progress = useMemo(() => calculateProgressInYear(new Date(`${new Date().getFullYear()}-${date}`)), [date])

    const onClick = (e: PointerEvent) => {
        e.stopPropagation()

        if ((isActive || e.pointerType === "mouse") && link)
            return window.open(link, "_blank", "noreferrer")
        makeActive()
    }

    return <div
        style={{ "--progress": `${progress}%` }}
        onPointerUp={onClick}
        className={cn(
            "absolute h-full transition-all duration-200 z-10 left-(--progress) -translate-x-1/2",
            isActive ? "w-8" : "w-2 hover:w-8 not-hover:*:hidden",
            link && "cursor-pointer",
            className
        )}
    >
        <span
            className={cn(
                "absolute top-[calc(100%+10px)] w-52",
                link && "important"
            )}
        ><b>{dateFormatter.format(new Date(date))}</b> - {title}</span>
    </div>
} 

export default function ProgressYear() {
    const [activeEvent, setActiveEvent] = useState<number | null>(null)
    const eventsRef = useRef<HTMLDivElement>(null)

    const now = useMemo(() => new Date(), [])
    const timePassed = useMemo(() => calculateProgressInYear(), [])

    // unselect current event
    useEffect(() => {
        if (!eventsRef.current) return;

        const resetActiveEvent = (e: PointerEvent) => {
            if (eventsRef.current.contains(e.target as Node)) return
            setActiveEvent(null)
        }

        window.addEventListener("click", resetActiveEvent)
        return () => window.removeEventListener("click", resetActiveEvent)
    }, [eventsRef])

    return <div className="flex flex-col gap-5 w-1/2 max-lg:w-3/4 max-sm:w-4/5">
        <div className="text-center">
            <h2>We're currently this far into the year!</h2>
            <span className="text-subtext0">(and also additional events that happened)</span>
        </div>
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-10 flex flex-row bg-surface0">
                <div className="relative w-full h-full">
                    <div ref={eventsRef}>
                        {EVENTS.map((ev, i) =>
                            <ProgressEvent
                                key={`event-${i}`}
                                event={ev}
                                isActive={activeEvent === i}
                                makeActive={() => setActiveEvent(i)}
                            />
                        )}
                    </div>
                    <div style={{ "--progress": `${timePassed}%` }} className="z-0 top-0 left-0 absolute w-(--progress) h-full bg-green" />
                </div>
            </div>
            <div className="w-full flex flex-row place-content-between">
                <span className="font-bold">{now.getFullYear()}</span>
                <span className="font-bold">{now.getFullYear() + 1}</span>
            </div>
        </div>
    </div>
}