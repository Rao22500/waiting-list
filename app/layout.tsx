import "./css/style.css";
import { Inter, Inter_Tight } from "next/font/google";
import Theme from "@/app/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "Global Trading Academy",
  description: "Master the art of trading with expert-led education, live sessions, and AI-powered tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-indigo-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 tracking-tight`}
      >
        <Theme>
          <div className="relative flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}