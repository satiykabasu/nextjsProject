

export default function RootLayout({ children }) {
    return (
        <>

        {/* now this "Test " will get each page whatever is in about folder */}
    <section>
        <h1>
            why
        </h1>
        <div className="bg-green-900 min-h-screen">
        {children}
        </div>
        
    </section>
    </>
  )
}

