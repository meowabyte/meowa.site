import { ComponentProps } from "preact";

export default function Link(props: ComponentProps<"a">) {
    return <a {...props} target="_blank" rel="noreferer" />
}