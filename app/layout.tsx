import './globals.css'

export const metadata = {
  title: 'E-matri Kerala Number 1 Free Matrimony Site',
  description: 'This website free matrimony website for all over kerala',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
