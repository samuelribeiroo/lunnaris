import React from "react"
import { cn } from "@/lib/utils"
import type { WrapperProps } from "@/@types"

export default function Wrapper({ children, className }: WrapperProps) {
	return (
		<div className={cn("h-full w-full mx-auto max-w-screen-xl px-4 md:px-0", className)}>
			{children}
		</div>
	)
}