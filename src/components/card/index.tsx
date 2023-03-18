import { forwardRef } from "react"
import Image, { ImageProps } from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Poster } from "../poster"
import { AspectRatio } from "../ui/aspect-ratio"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible"
import { Typography, typographyVariants } from "../ui/typography"

export const Cover = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <AspectRatio ratio={320 / 180}>
        {/*  eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          fill
          className={cn("rounded-lg object-cover", className)}
          ref={ref}
          {...props}
        />
      </AspectRatio>
    )
  }
)

Cover.displayName = "Cover"

export type CardProps = {
  href?: string
  image: {
    src: string
    alt: string
  }
  title: string
  rating?: number
}
export const Card = (props: CardProps) => {
  const Tag = props.href ? Link : "div"
  return (
    <Tag
      href={props.href}
      className="relative flex w-full flex-col space-y-2 space-x-2 rounded-xl border-2 border-transparent bg-slate-100 p-2 pb-4 shadow backdrop-blur-sm hover:border-dark-300 dark:bg-dark-800/80"
    >
      <Poster {...props.image} />
      <div>
        <Typography variant="h5" className="text-dark-900 dark:text-white">
          {props.title}
        </Typography>
      </div>

      {props.rating && (
        <span className="absolute flex items-center gap-1 rounded-lg bg-black/60 p-2 font-secondary text-base text-[#FFAD49]">
          <Star size={16} /> {props.rating}
        </span>
      )}
    </Tag>
  )
}

export const CardSkeleton = () => {
  return (
    <div className="relative flex w-full flex-col space-y-2 rounded-xl border-2 border-transparent bg-slate-100 p-2 pb-4 shadow backdrop-blur-sm hover:border-dark-300 dark:bg-dark-800/80">
      <Poster isLoading />
      <div className="h-4 w-1/3 animate-pulse rounded-lg bg-dark-600/20"></div>
      <span className="absolute left-4 h-8 w-12 animate-pulse rounded-lg bg-dark-600/20 p-2 text-base text-[#FFAD49]"></span>
    </div>
  )
}

type LateralProps = {
  imageLayout: "portrait" | "landscape"
  title: string
  subtitle?: string
  overtitle?: string
  innerCustom?: React.ReactNode
  lateralDetail?: string
  description: string

  image: {
    src: string
    alt: string
  }
}
const imageComponents = {
  portrait: Poster,
  landscape: Cover,
}
export const LateralCard = (props: LateralProps) => {
  const Image = imageComponents[props.imageLayout]
  return (
    <div
      className={cn(
        "relative flex space-y-2  rounded-xl border-2 border-transparent bg-slate-100 p-2 pr-4 shadow backdrop-blur-sm hover:border-dark-300 dark:bg-dark-800/80",
        {
          "flex-col md:flex-row": props.imageLayout === "landscape",
          "space-x-4": props.imageLayout === "portrait",
        }
      )}
    >
      <div
        className={cn(
          {
            "w-1/3 max-w-[8rem]": props.imageLayout === "portrait",
            "w-80": props.imageLayout === "landscape",
          },
          "md:shrink-0"
        )}
      >
        {/*  eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...props.image} />
      </div>
      <div className="w-full">
        {props.overtitle && (
          <span
            className={typographyVariants({
              variant: "overline",
              className: "mb-1",
            })}
          >
            {props.overtitle}
          </span>
        )}
        <div className="flex w-full items-center justify-between ">
          <div className="flex items-center space-x-2">
            <Typography variant="h4" className="text-dark-900 dark:text-white">
              {props.title}
            </Typography>
            {props.subtitle && (
              <span
                className={typographyVariants({
                  variant: "h4",
                })}
              >
                {props.subtitle}
              </span>
            )}
          </div>

          {props.lateralDetail && (
            <span
              className={typographyVariants({
                variant: "body",
                className: "justify-self-end",
              })}
            >
              {props.lateralDetail}
            </span>
          )}
        </div>
        {props.innerCustom}
        <Collapsible>
          <CollapsibleTrigger>ver mais</CollapsibleTrigger>
          <CollapsibleContent asChild>
            <Typography
              variant="body"
              className="mt-2 overflow-hidden text-ellipsis text-xs md:text-base"
            >
              {props.description}
            </Typography>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}
