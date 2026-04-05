'use client' // Error boundaries must be Client Components

export default function GlobalError({
    error,
    unstable_retry,
}: {
    error: Error & { digest?: string }
    unstable_retry: () => void
}) {
    return (
        // global-error must include html and body tags
        <html>
            <body className="min-h-screen h-full antialiased text-center p-16">
                <h2>Something went wrong!</h2>
                <button className="btn btn-primary py-4" onClick={() => unstable_retry()}>Try again</button>
            </body>
        </html>
    )
}