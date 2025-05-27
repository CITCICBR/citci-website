'use client'

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

type AlbumModalProps = {
    isOpen: boolean
    onClose: () => void
    album: {
        title: string
        images: string[]
    } | null
}

type ImageMeta = {
    src: string
    orientation: 'portrait' | 'landscape' | 'square'
}

export function AlbumModal({ isOpen, onClose, album }: AlbumModalProps) {
    const [imagesWithMeta, setImagesWithMeta] = useState<ImageMeta[]>([])

    useEffect(() => {
        if (!album) return

        const fetchImageMeta = async () => {
            const promises = album.images.map(
                (src) =>
                    new Promise<ImageMeta>((resolve) => {
                        const img = new window.Image()
                        img.src = src
                        img.onload = () => {
                            const orientation =
                                img.naturalWidth > img.naturalHeight
                                    ? "landscape"
                                    : img.naturalWidth < img.naturalHeight
                                    ? "portrait"
                                    : "square"
                            resolve({ src, orientation })
                        }
                    })
            )
            const meta = await Promise.all(promises)
            setImagesWithMeta(meta)
        }

        fetchImageMeta()
    }, [album])

    if (!album) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTitle title={album.title} />
            <DialogContent className="max-w-7xl">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{album.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {imagesWithMeta.map(({ src, orientation }, index) => (
                            <div
                                key={index}
                                className={`relative w-full overflow-hidden rounded-lg ${
                                    orientation === 'portrait'
                                        ? 'row-span-2 aspect-[3/4]'
                                        : orientation === 'landscape'
                                        ? 'col-span-2 aspect-video'
                                        : 'aspect-square'
                                }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
