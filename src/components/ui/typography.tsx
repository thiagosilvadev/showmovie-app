import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

export const typographyVariants = cva('font-bold text-slate-400 group', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl md:text-6xl tracking-tight leading-snug font-bold',
      h2: 'text-2xl md:text-5xl font-bold leading-snug tracking-tight',
      h3: 'text-xl md:text-3xl font-bold tracking-tight',
      h4: 'text-lg md:text-2xl font-bold tracking-[-0.015em]',
      h5: 'text-base md:text-xl tracking-[-0.015em]',
      h6: 'text-sm md:text-base tracking-[-0.015em]',
      body: 'tracking-normal font-secondary font-normal',
      overline: 'font-auxiliar tracking-wider text-sm uppercase font-semibold '
    }
  },
  defaultVariants: {
    variant: 'h1'
  }
})

const getTag = (variant: VariantProps<typeof typographyVariants>['variant']) => {
  if (!variant) return 'h1'
  if (variant === 'overline' || variant === 'body') {
    return 'p'
  }
  return variant
}

type AllowedHTMLElements = HTMLHeadingElement | HTMLParagraphElement

export interface TypographyProps
  extends VariantProps<typeof typographyVariants>,
    React.HTMLAttributes<AllowedHTMLElements> {
  asChild?: boolean
}
export const Typography = forwardRef<AllowedHTMLElements, TypographyProps>(
  ({ children, asChild, className, variant = 'h1' }, ref) => {
    const Tag = asChild ? Slot : getTag(variant)
    return (
      <Tag className={cn(typographyVariants({ variant }), className)} ref={ref}>
        {children}
      </Tag>
    )
  }
)

Typography.displayName = 'Typography'
