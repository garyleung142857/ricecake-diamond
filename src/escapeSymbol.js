import {findAndReplace} from 'hast-util-find-and-replace'
import {h} from 'hastscript'


export const escapeSymbol = () => {
    return (tree) => {
        findAndReplace(tree, [
            [/!s/gi, ($0) => {return h('span.spsymbol', '♠')}],
            [/!h/gi, ($0) => {return h('span.hesymbol', '♥')}],
            [/!d/gi, ($0) => {return h('span.disymbol', '♦')}],
            [/!c/gi, ($0) => {return h('span.clsymbol', '♣')}],
            [/!n/gi, ($0) => {return h('span.ntsymbol', 'N')}],
        ])
    }
}
