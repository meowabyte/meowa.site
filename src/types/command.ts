import type { MaybePromise } from ".";

export type CommandContext = {
    print: (text: string) => void;
    clear: () => void;
}

export type CommandHandler = (this: CommandContext, ...args: string[]) => MaybePromise<void>

export type Command = {
    name: string;
    usage?: string,
    description?: string;
    autocomplete?: (...args: string[]) => (string | null | undefined),
    run: CommandHandler;
};