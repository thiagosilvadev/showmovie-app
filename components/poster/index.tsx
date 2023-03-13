/* eslint-disable jsx-a11y/alt-text */
import { forwardRef } from "react"
import Image, { ImageProps } from "next/image"

import { cn } from "@/lib/utils"
import { Icons } from "../icons"
import { AspectRatio } from "../ui/aspect-ratio"
// @ts-expect-error
interface PosterProps extends ImageProps {
  src?: string
  alt?: string
  isLoading?: boolean
}

export const Poster = forwardRef<HTMLImageElement, PosterProps>(
  ({ className, src, isLoading = true, ...props }, ref) => {
    return (
      <AspectRatio ratio={133 / 200}>
        {src ? (
          // @ts-ignore
          <Image
            fill
            className={cn("rounded-lg object-cover", className)}
            ref={ref}
            src={src}
            {...props}
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center rounded-lg bg-dark-600/20",
              {
                "animate-pulse": isLoading,
              }
            )}
          >
            {<Icons.logo className="w-8 opacity-10" />}
          </div>
        )}
      </AspectRatio>
    )
  }
)
Poster.displayName = "Poster"
