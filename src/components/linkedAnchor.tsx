import { ComponentChildren } from "preact";

type Props = { id: string, children: ComponentChildren }

/** Provides quick indicator for text that's linked (for example in navbar) */
export default function LinkedAnchor({ id, children }: Props) {
    return <a role="button" id={id} href={`#${id}`} className="hover:after:content-['_#'] after:text-subtext0">{children}</a>
}