// components/command-bar.tsx
"use client"

import * as React from "react"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { CircleDashed } from "lucide-react"
import Link from "next/link"
export function CommandBar({ search }: any) {
    const [open, setOpen] = React.useState(false)
    const onLinkClick = () => {
        setOpen(false)
    }

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="flex items-center justify-between w-full max-w-[190px] h-10 px-3 text-sm text-muted-foreground bg-muted rounded-md border-input shadow-sm hover:bg-accent/50 transition"
            >
                <span className="text-left">Search...</span>
                <kbd className="flex items-center gap-1 rounded border bg-white px-1.5 text-xs font-medium text-gray-700 shadow">
                    <span className="text-[10px]">Ctrl</span>
                    <span className="text-[10px]">K</span>
                </kbd>
            </button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    {search && search.map((searchGroup: any) => (
                        <div key={searchGroup.heading}>
                            <CommandGroup heading={searchGroup.heading}>
                                {searchGroup.items && searchGroup.items.map((item: any) => (
                                    <CommandItem asChild key={item.title}>
                                        <Link href={item.link} className="flex items-center" onClick={onLinkClick}>
                                            <CircleDashed />
                                            <div className="flex flex-col ml-2">
                                                <span className="font-medium">{item.title}</span>
                                                <span className="text-xs text-muted-foreground">{item.description}</span>
                                            </div>
                                        </Link>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </div>
                    ))}
                    <CommandEmpty>No results found.</CommandEmpty>
                </CommandList>
            </CommandDialog>
        </>
    )
}
