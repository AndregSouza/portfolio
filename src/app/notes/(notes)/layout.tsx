import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftCircle } from "lucide-react"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <div className="w-full pb-24 flex flex-col max-w-3xl p-6 gap-4 sm:gap-8 sm:pt-16 sm:px-12 sm:pb-24 self-center">
            <article>
                {children}
            </article>
        </div>
    )
}
