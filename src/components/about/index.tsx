import ytImg from "@/assets/imgs/yt.webp"
import LinkedAnchor from "../linkedAnchor"
import Section from "./section"
import { IconType, SiBluesky, SiDiscord, SiGithub, SiTelegram, SiYoutube } from "@icons-pack/react-simple-icons"
import { type LucideIcon, Mail } from "lucide-preact"
import { useCallback, useMemo, useState } from "preact/hooks"
import { cn } from "@/helpers"
import Link from "../link"

type SocialButtonProps = {
    icon: IconType | LucideIcon,
    name: string,
    url?: string,
    text?: string
}
function SocialButton({ icon, name, text, url }: SocialButtonProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Icon = icon as any // react typing problem :(

    const [copied, setCopied] = useState(false)

    const tooltipText = useMemo(() => {
        if (text) return `Copy ${name} to clipboard`
        if (url) return `Visit ${name}`
    }, [name, text, url])

    const onClick = useCallback(() => {
        if (copied) return;

        if (text)
            return navigator.clipboard.writeText(text)
                .then(() => {
                    setCopied(true)
                    setTimeout(() => setCopied(false), 1000)
                })
                .catch(e => {
                    console.error(`Could not copy ${name} to clipboard... `, e)
                    alert("Could not copy to clipboard... Maybe no permissions?")
                })
        if (url)
            return window.open(url, "_blank")
    }, [name, text, url, copied])

    return <button onClick={onClick} title={tooltipText} className={cn("flex flex-row gap-3 border p-3 bg-crust not-active:hover:scale-105 transition-all duration-200", copied && "text-green border-green")}>
        <Icon title={tooltipText} size={30} />
        {copied ? "Copied!" : name}
    </button>
}

export default function AboutMe() {
    return <>
        <Section
            title={<h2><LinkedAnchor id="about">...but <span className="important">who am I</span>?</LinkedAnchor></h2>}
            image="https://avatars.githubusercontent.com/u/47297843"
        >
            <div className="flex flex-col gap-10">
                <span>
                    I'm <b>Jake</b> (aka meowabyte) and I'm passionated around various
                    computer topics including computer programming, security researching
                    or just content creating!
                </span>
                <span>
                    My most known projects currently are <Link href="https://github.com/meowabyte/VencordPlugins">My Vencord Plugins</Link>, <Link href="https://github.com/meowabyte/gif-validator">GIFs Validator</Link> or <Link href="https://github.com/meowabyte/pak-patcher">PAK Patcher</Link>.
                    You can check them out on my GitHub profile!
                </span>
            </div>
        </Section>
        <Section
            title={<h2 className="important">YouTube Videos</h2>}
            image={ytImg}
            place="right"
        >
            I work on a <Link className="important" href="https://youtube.com/@meowabyte">successful YouTube channel</Link> (1K+ subscribers)
            under the same name, where I create videos
            about various interesting secrets or facts
            from indie games, such as <Link href="https://undertale.com/">UNDERTALE</Link> or <Link href="https://store.steampowered.com/app/420530/OneShot">OneShot</Link>!
        </Section>
        <Section
            title={<h2><LinkedAnchor id="social">There's <span className="important">more</span>?!</LinkedAnchor></h2>}
            className="flex flex-col gap-5"
        >
            <span>
                <span className="important">Of course there is!</span> I show myself on
                many more places than just ones I mentioned above!
                You can check the ones below!
            </span>
            <div className="flex flex-row gap-5 justify-center">
                <SocialButton icon={SiYoutube} name="YouTube" url="https://youtube.com/@meowabyte" />
                <SocialButton icon={SiBluesky} name="Bluesky" url="https://bsky.app/profile/@meowabyte.lol" />
                <SocialButton icon={SiGithub} name="GitHub" url="https://github.com/meowabyte" />
                <SocialButton icon={SiDiscord} name="Discord Server" url="https://discord.gg/tqssnTUxDR" />
            </div>
        </Section>
        <Section
            title={<h2><LinkedAnchor id="social">Can I ask you something?</LinkedAnchor></h2>}
            className="flex flex-col gap-5"
        >
            <span>
                <span className="important">Sure!</span> You can contact me through
                ways below! Depending on my availability I might respond quickly or
                after some time so give me some time please!
            </span>
            <div className="flex flex-row gap-5 justify-center">
                <SocialButton icon={Mail} name="E-Mail" url="mailto:contact@meowabyte.lol" />
                <SocialButton icon={SiTelegram} name="Telegram" url="https://meowabyte.t.me" />
                <SocialButton icon={SiDiscord} name="Discord" text=".kb." />
            </div>
        </Section>
    </>
} // TODO: finish contact page