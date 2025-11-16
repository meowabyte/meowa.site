import { motion, TargetAndTransition } from "motion/react"
import { cn } from "@/helpers"
import { ComponentChildren } from "preact"

type Props = {
    children?: ComponentChildren,
    image?: string,
    place?: "left" | "right",
    title?: ComponentChildren,
    className?: string
}

export default function Section({ children, image, place = "left", title, className }: Props) {
    const initial: TargetAndTransition =
        image ? { translateX: place === "left" ? "-10px" : "10px" }
            : { scale: "50%" }

    const animation: TargetAndTransition =
        image ? { translateX: "0px" } : { scale: "100%" }


    return <motion.div
            initial={{ ...initial, opacity: "0%" }}
            whileInView={{ ...animation, opacity: "100%" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="flex flex-col items-center border-2 border-surface0 w-4/5 py-10 px-20 max-md:px-5"
        >
        {title && <div className="mb-10 w-96 text-center">
            {title}
        </div>}
        {
            image
            ? <div className="grid gap-3 lg:grid-cols-2 max-lg:grid-rows-2 justify-items-center">
                <div className={cn("text-lg max-lg:text-center", place === "left" ? "text-left -order-1" : "text-right order-1", className)}>{children}</div>
                <img loading="lazy" alt="Image for section" src={image} className="object-contain max-h-80 border-2 border-dotted border-overlay0 hover:scale-105 transition-transform duration-150" />
            </div>
            : <div className={cn("text-lg text-center", className)}>{children}</div>
        }
    </motion.div>
}