import { useEffect, useState } from "preact/hooks"

const TIME_SINCE_ON_PAGE = Date.now()

const formatTime = (durationS: number): string => {
    const mins = Math.floor(durationS / 60),
        secs = durationS - (mins * 60)

    const parts: string[] = []

    if (mins > 0) parts.push(`${mins} minute${mins > 1 ? "s" : ""}`)
    if (secs > 0) parts.push(`${secs} second${secs > 1 ? "s" : ""}`)

    return parts.join(", ")
}

export default function TimeOnPage() {
    const [timeSeconds, setTime] = useState(0)

    useEffect(() => {
        const i = setInterval(() => {
            setTime(Math.round((Date.now() - TIME_SINCE_ON_PAGE) / 1000))
        }, 1000)

        return () => clearInterval(i)
    }, [])
    return <div className="flex flex-col border-3 p-3 items-center rainbow-border w-1/2 max-lg:w-3/4">
        <h3>You've been on this page for <span className="rainbow-text">{formatTime(timeSeconds)}</span>!</h3>
        <span>Thank you for checking it out! It really means a lot to me. &lt;3</span>
    </div>
}