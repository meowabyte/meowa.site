import "@/styles/app.css";
import AboutMe from "@/components/about";
import Link from "@/components/link";
import ProgressYear from "@/components/progressYear";
import Terminal from "@/components/terminal";
import TimeOnPage from "@/components/timeOnPage";



function Page() {
    return <div className="py-16 flex flex-col gap-15 items-center">
        <div className="flex flex-col gap-3">
            <h1 className="text-center">Welcome to <span class="font-bold rainbow-text">meowa.site</span>!</h1>
            <div className="text-subtext0 flex flex-row justify-center gap-5">
                <a role="button" href="#about" className="important">About Me</a>
                <a role="button" href="#social" className="important">My Social Media</a>
            </div>
        </div>
        <ProgressYear />
        <AboutMe />
        <TimeOnPage />
    </div>
}

export default function App() {
    return <>
        <header className="h-screen">
            <Terminal className="absolute inset-1/2 -translate-1/2" />
        </header>
        <main className="min-h-screen py-5">
            <div className="border-2 border-dotted border-surface0 mx-5 max-md:mx-1 select-none">
                <Page />
            </div>
        </main>
        <footer className="flex flex-row gap-3 place-self-center m-10 text-subtext0">
            <span>Made by meowabyte with &#x2764;</span>
            &bull;
            <Link href="https://github.com/meowabyte/meowa.site/blob/main/CREDITS.md">Credits</Link>
        </footer>
    </>
}