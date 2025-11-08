import "./styles/app.css";
import Terminal from "./components/terminal";
import ProgressYear from "./components/progressYear";
import AboutMe from "./components/about";
import TimeOnPage from "./components/timeOnPage";



function Page() {
    return <div className="py-15 flex flex-col gap-15 items-center">
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
        <div className="h-screen">
            <Terminal className="absolute inset-1/2 -translate-1/2" />
        </div>
        <div className="min-h-screen py-5">
            <div className="border-2 border-dotted border-surface0 mx-5 select-none">
                <Page />
            </div>
        </div>
    </>
}