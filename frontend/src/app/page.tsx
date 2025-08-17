export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">FlowPlane Trading Platform</h1>
        <p className="text-lg text-muted-foreground mb-8">
          AI-powered trading strategy discovery and validation system
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
          >
            Go to Dashboard
          </a>
          <a
            href="/api/docs"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition"
          >
            API Documentation
          </a>
        </div>
      </div>
    </main>
  )
}