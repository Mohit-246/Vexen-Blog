import "./globals.css";
import { Google_Sans, Poppins } from "next/font/google";
import Footer from "@/component/Footer";
import GoToTop from "@/element/GotoTop";
import Navbar from "@/component/Navbar";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
});

/* const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["600", "400", "500", "700"],
}); */

export const metadata = {
  title: "Vexen Blogs",
  description:
    "Thoughts on Code, Systems, and Building Software.Writing about backend development, system design, and practical engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
      ${poppin.className}
      antialiased`}
      >
        <div>
          <Navbar />
          <main>
            {children}
            <GoToTop />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
