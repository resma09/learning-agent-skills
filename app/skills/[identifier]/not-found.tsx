import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="p-4 my-4 max-w-md mx-auto text-center p-16 border border-primary rounded">
            <h2>404 - Page Not Found</h2>
            <Link href="/skills" className="btn btn-primary mt-4">Return Home</Link>
        </section>
    )
}