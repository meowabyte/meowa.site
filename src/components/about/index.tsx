import ytImg from "@/assets/yt.webp"
import LinkedAnchor from "../linkedAnchor"
import Section from "./section"
import { IconType, SiBluesky, SiDiscord, SiGithub, SiYoutube } from "@icons-pack/react-simple-icons"

type SocialButtonProps = {
    icon: IconType,
    url: string,
    name: string
}
function SocialButton({ name, url, icon }: SocialButtonProps) {
    const Icon = icon as any // react typing problem :(

    return <a role="button" href={url} className="" title={`Visit ${name}`}>
        <div className="flex flex-row gap-3 border p-3 bg-crust not-active:hover:scale-105 transition-transform duration-200">
            <Icon title={`Visit ${name}`} size={30} />
            {name}
        </div>
    </a>
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
                    My most known projects currently are <a href="https://github.com/meowabyte/VencordPlugins" target="_blank">My Vencord Plugins</a>, <a href="https://github.com/meowabyte/gif-validator" target="_blank">GIFs Validator</a> or <a href="https://github.com/meowabyte/pak-patcher" target="_blank">PAK Patcher</a>.
                    You can check them out on my GitHub profile!
                </span>
            </div>
        </Section>
        <Section
            title={<h2 className="important">YouTube Videos</h2>}
            image={ytImg}
            place="right"
        >
            I work on a <a className="important" href="https://youtube.com/@meowabyte" target="_blank">successful YouTube channel</a> (1K+ subscribers)
            under the same name, where I create videos
            about various interesting secrets or facts
            from indie games, such as <a href="https://undertale.com/" target="_blank">UNDERTALE</a> or <a href="https://store.steampowered.com/app/420530/OneShot" target="_blank">OneShot</a>!
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
                <span className="important">Of course there is!</span> I show myself on
                many more places than just ones I mentioned above!
                You can check the ones below!
            </span>
            <div className="flex flex-row gap-5 justify-center">
                <SocialButton icon={{}} name="E-Mail" url="mailto:contact@meowabyte.lol" />
            </div>
        </Section>
    </>
} // TODO: finish contact page