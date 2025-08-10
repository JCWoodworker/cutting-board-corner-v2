/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { cn } from "@/utils/cn"

type ButtonVariant = "default" | "secondary" | "outline"
type ButtonSize = "sm" | "md" | "lg"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
	asChild?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
	default:
		"bg-brand-700 text-white hover:bg-brand-800 shadow-sm disabled:bg-brand-700/50",
	secondary:
		"bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm disabled:bg-neutral-900/50",
	outline:
		"ring-1 ring-brand-800/30 text-brand-800 hover:bg-brand-100 disabled:opacity-50",
}

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-3 py-2 text-sm",
	md: "px-4 py-2 text-sm",
	lg: "px-5 py-3 text-base",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant = "default", size = "md", asChild = false, ...props },
		ref
	) => {
		const classes = cn(
			"inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:cursor-not-allowed",
			variantClasses[variant],
			sizeClasses[size],
			className
		)

		if (asChild) {
			// Consumers can pass an anchor as a child; we clone it to inject classes
			const onlyChild = React.Children.only(
				props.children
			) as React.ReactElement<any>
			return React.cloneElement(onlyChild, {
				className: cn(onlyChild.props.className, classes),
			})
		}

		return <button ref={ref} className={classes} {...props} />
	}
)

Button.displayName = "Button"

export default Button
