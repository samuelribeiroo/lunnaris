import { Navbar } from "@/components"
import type React from "react"

interface Props {
	children: React.ReactNode
}

export default function MarketingLayout({ children }: Props) {
	return (
		<div className="flex flex-col items-center w-full">
			<Navbar />
			{children}
		</div>
	)
}
