import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata = {
  title: "Backternity",
  description: "Build scalable backend via command line",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-foreground antialiased selection:bg-primary selection:text-primary-foreground min-w-[320px] max-w-[100vw] overflow-x-hidden">
        <NextTopLoader color="#50C878" showAtBottom />
        {children}
      </body>
    </html>
  );
}
