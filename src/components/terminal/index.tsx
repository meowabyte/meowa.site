import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import { cn } from "../../helpers";
import s from "../../styles/components/terminal.module.css";
import logo from "./logo.txt?raw"

const calculateAge = (date: Date): string => {
    const now = new Date()

    let years = now.getFullYear() - date.getFullYear();
    let months = now.getMonth() - date.getMonth();
    let days = now.getDate() - date.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
    if (days > 0 || parts.length === 0) parts.push(`${days} ${days === 1 ? 'day' : 'days'}`);

    return parts.join(', ');
}

type TerminalProps = { className?: string }

export default function Terminal({ className }: TerminalProps = {}) {
    const ref = useRef<HTMLDivElement>(null)

    const [command, setCommand] = useState("")
    const [forceActive, setForceActive] = useState(true)
    const [isActive, setActive] = useState(true)
    const [showInfo, setShowInfo] = useState(false)
    const [validCommand, setValidCommand] = useState(false)

    // active state
    useEffect(() => {
        if (!ref.current) return;
        if (forceActive) {
            setActive(true)
            return
        }

        const checkActive = (ev: PointerEvent) =>
            setActive(ref.current.contains(ev.target as Node))

        window.addEventListener("mousedown", checkActive)
        return () => window.removeEventListener("mousedown", checkActive)
    }, [ref, forceActive])

    // animation
    useEffect(() => {
        if (!ref.current) return;

        const typeCommand = async (str: string, delay: number) => {
            for (const l of str) {
                setCommand(cmd => cmd + l)
                await new Promise(r => setTimeout(r, delay))
            }
        }

        const startAnim = async () => {
            setCommand("")
            setShowInfo(false)
            setForceActive(true)
            setValidCommand(false)

            await ref.current.animate([{ width: 0 }, { width: "800px" }], { easing: "ease-out", duration: 700, fill: "forwards" }).finished
            await ref.current.animate([{ height: 0 }, { height: "600px" }], { easing: "ease-out", duration: 600, fill: "forwards" }).finished

            await typeCommand("neofetch", 50)
            setValidCommand(true)

            await new Promise(r => setTimeout(r, 300))

            setCommand("")
            setValidCommand(false)
            setShowInfo(true)
            setForceActive(false)

            await new Promise(r => setTimeout(r, 600))
            await typeCommand("scroll down for more! <3", 80)
        }

        setTimeout(startAnim, 500)
    }, [ref])

    const neofetchResult = useMemo(() => <>
            ┏━[ <span className="text-teal font-bold">meowabyte</span>@<span className="text-teal font-bold">meowa.site</span> ]━━━━━━━━━━━━━━━━━━━━╍╍╍ ╍╸ ╍╺  ╺
            {[
                ["NAME", "Jake"],
                ["UPTIME", calculateAge(new Date("2005-05-27"))],
                ["NATIONALITY", "Polish"],
                ["OS", ["Arch Linux", "Windows 10 LTSC"]],
                ["LANGUAGES", ["TypeScript", "Rust"]],
                [""],
                ["", <div key="terminal-colors" class="inline">
                    {[
                        "text-text",
                        "text-subtext1",
                        "text-green",
                        "text-pink",
                        "text-blue",
                        "text-yellow",
                        "text-green",
                        "text-red"
                    ].map((col, i) => <span key={i} class={col}>■ </span>)}
                </div>]
            ].map(([n, v]: [string, string | string[]], _, arr) => {
                const keyStr = n.padEnd(
                        Math.max(...arr.map(([k]: [string]) => k.length)),
                        " "
                    ) + " ".repeat(5)

                const valStr =
                        Array.isArray(v)
                        ? <div className="flex flex-col">{v.map((x, i) => <div key={`value-${n}-${i}`}>┃ {" ".repeat(keyStr.length)}{x}</div>)}</div>
                        : v

                return <div key={`entry-${n}`}>
                    ┃ <span className="text-teal font-bold">{keyStr}</span>
                    {valStr}
                </div>
            })}
            ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╍╍╍ ╍╸ ╍╺  ╺
        </>,
        []
    )

    return <div
        className={cn(className, s.frame, isActive && s.active, "")}
        ref={ref}
    >
        <div className="px-3 py-5 mx-5 mb-5 border-b-2 border-b-surface1">
            <span><span className="text-teal">meowabyte</span>@<span className="text-blue">meowa.site</span> <span className="text-yellow">~</span>&gt; </span>
            <span className={cn(s.blinker, isActive && s.active, validCommand ? "text-green" : "text-red")}>{command}</span>
        </div>
        {showInfo && <div className="flex flex-row">
            <div className={cn("ml-10 whitespace-pre", s.rainbowtext)}>{logo}</div>
            <div>{neofetchResult}</div>
        </div>}
    </div>
}