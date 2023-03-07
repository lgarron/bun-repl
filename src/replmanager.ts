//import $ from './colors';
//import fs from 'fs';
//import os from 'os';
import readline from 'readline/promises';

/** 
 * Bun node:readline polyfill is still very broken it seems
 * so this branch will have to wait for now
 * @see https://github.com/oven-sh/bun/issues/2333
 * @see https://github.com/oven-sh/bun/issues/2035
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
    tabSize: 4,
    prompt: '> ',
    historySize: 10,
    history: ['test history entry 1', 'test history entry 2'],
    //completer(line: string) {
    //    const completions = ['hello', 'world'];
    //    const hits = completions.filter(c => c.startsWith(line));
    //    return [hits.length ? hits : completions, line];
    //}
});
rl;

/*
export default class REPLManager extends null {
    constructor(prompt: string = '> ', historyPath?: string) {
        super();
        this.prompt = process.env.BUN_REPL_PROMPT ?? prompt;
        historyPath ||= `${process.env.BUN_INSTALL ?? os.homedir()}/.bun_repl_history`;
        this.#historyfd = fs.openSync(historyPath, 'a+');
        this.#historypath = historyPath;

        const historyLines = fs.readFileSync(historyPath, 'utf8').split('\n');
        const maxHistoryLines = Number(process.env.BUN_REPL_HISTORY_SIZE ?? 1000) || 1000;
        if (historyLines.length > maxHistoryLines) {
            fs.writeFileSync(historyPath, historyLines.slice(historyLines.length - maxHistoryLines).join('\n'));
        }
        this.loadHistory(historyPath);
    }

    promptline(): string {
        const input = this.readline(this.prompt);
        if (input.signal) switch (input.signal) {
            case 'CtrlC':
            case 'CtrlD':
                this.exit(); break;
            default:
                console.log(`${$.yellow+$.dim}Unknown signal: ${input.signal+$.reset}`);
                return '';
        }
        input.value = (input.value ?? '').trim();
        if (input.value) {
            fs.appendFileSync(this.#historyfd, `${input.value}\n`, 'utf8');
            this.loadHistory(this.#historypath);
        }
        return input.value || 'undefined';
    }

    exit(exitcode: number = 0): void {
        fs.closeSync(this.#historyfd);
        process.exit(exitcode);
    }

    prompt: string;
    readonly #historyfd: number;
    readonly #historypath: string;
}*/
