import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shourov/Navbar";
import Footer from "@/components/shourov/Footer";
import AppProvider from "@/components/app-provider/AppProvider";

const poppins = Poppins({
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Furniro",
	description: "Furniro app next.js",
	icons: {
		icon: "/logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-arp=""
			className={`${poppins.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<AppProvider>
					<Navbar />
					{children}
					<Footer />
				</AppProvider>
			</body>
		</html>
	);
}
