import { cn } from "@/helpers"
import { ComponentChildren } from "preact"
import { useMemo } from "preact/hooks"

type Props = {
    children?: ComponentChildren,
    image?: string,
    place?: "left" | "right",
    title?: ComponentChildren,
    className?: string
}

export default function Section({ children, image, place = "left", title, className }: Props) {
    const content = useMemo(() => {
        if (!image) return <div className={cn("text-lg text-center", className)}>{children}</div>

        const c = 
            <div className="grid grid-cols-2 gap-3 justify-items-center">
                <div className={cn("text-lg", place === "left" ? "text-left" : "text-right", className)}>{children}</div>
                {image && <img src={image} className="object-contain max-h-80 border-2 border-dotted border-overlay0 hover:scale-105 transition-transform duration-150" />}
            </div>

        if (place === "right") c.props.children.reverse()
        return c;
    }, [children, className, place, image])

    return <div className="flex flex-col items-center border-2 border-surface0 w-4/5 py-10 px-20">
        {title && <div className="mb-10 w-96 text-center">
            {title}
        </div>}
        {content}
    </div>
}