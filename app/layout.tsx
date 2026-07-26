import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "RENAQUAREL – Bilderbuchillustration", description: "Portfolio von RENAQUAREL: Bilderbuchillustratorin und Autorin mit psychologischem Feinsinn." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body>{children}</body></html>}
