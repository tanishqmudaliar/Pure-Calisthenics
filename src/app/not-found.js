import Link from "next/link";
import localFont from "next/font/local";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex justify-between items-center flex-col min-h-screen bg-white overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col justify-center items-center mt-16 px-5 text-center">
        <h1
          className={`${ppeditorialul.className} text-7xl md:text-8xl xl:text-9xl font-light text-secondary`}
        >
          4
          <span className={`${ppeditorialul.className} italic text-main`}>
            0
          </span>
          4
        </h1>
        <h2
          className={`${aspekta.className} text-2xl md:text-3xl text-secondary mt-4 font-light`}
        >
          Page Not Found
        </h2>
        <p
          className={`${aspekta.className} text-[#505050] max-w-md mt-3 text-base`}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="mt-8 shadow-[5px_5px_0px_#1e1e1e]">
          <Link
            href="/"
            className={`${aspekta.className} inline-flex justify-center items-center bg-[#5e3ad4] px-8 h-14 border-2 border-secondary font-semibold text-base text-white uppercase hover:translate-x-[3px] hover:translate-y-[3px] transition-transform duration-200`}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className="w-full bg-secondary flex justify-center">
        <Footer />
      </div>
    </main>
  );
}
