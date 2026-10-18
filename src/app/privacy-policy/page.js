import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floatingButton";
import localFont from "next/font/local";

const aspekta = localFont({
  src: "../../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../../fonts/ppeditorialold-ultralightitalic.otf",
});

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Pure Calisthenics. Learn how we handle your personal consultation data and contact information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex justify-center items-center flex-col overflow-x-hidden bg-secondary">
      <FloatingButton />
      <NavBar />
      <div className="w-full min-h-screen bg-white pt-28 pb-16 flex flex-col items-center">
        <div className="w-4/5 md:w-3/5 my-8">
          <h1
            className={`${aspekta.className} text-4xl md:text-5xl font-light text-black mb-8`}
          >
            Privacy{" "}
            <span className={`${ppeditorialul.className} text-main`}>
              Policy
            </span>
          </h1>

          <div
            className={`${aspekta.className} flex flex-col gap-6 text-[#333333] text-base leading-relaxed`}
          >
            <p className="text-sm text-gray-500">
              Last Updated: October 2026
            </p>

            <section>
              <h2 className="text-xl font-bold text-black mb-2">
                1. Information We Collect
              </h2>
              <p>
                When you request a fitness assessment, consultation, or contact us
                through our website, we may collect the following personal
                information:
              </p>
              <ul className="list-disc ml-6 mt-2 flex flex-col gap-1">
                <li>Your Full Name</li>
                <li>Email Address</li>
                <li>Phone Number (WhatsApp contact)</li>
                <li>Fitness goals or messages submitted in the form</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                The information collected is used solely for the following
                purposes:
              </p>
              <ul className="list-disc ml-6 mt-2 flex flex-col gap-1">
                <li>
                  To schedule and conduct your Free Fitness Assessment.
                </li>
                <li>
                  To contact you regarding our personal training programs
                  (offline in Mumbai and online).
                </li>
                <li>
                  To answer queries submitted via our contact and consultation
                  forms.
                </li>
              </ul>
              <p className="mt-2">
                We never sell, rent, or trade your personal data to any third
                parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-2">
                3. Data Storage & Protection
              </h2>
              <p>
                Your form submissions are transmitted securely via encrypted
                connections to our consultation management system. We adopt
                strict internal practices to ensure that your data remains safe
                from unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-2">
                4. Third-Party Services
              </h2>
              <p>
                Our website links to external platforms such as WhatsApp,
                Instagram, YouTube, and Google Maps. Please note that these
                services have their own independent privacy policies, and we do
                not assume responsibility for their practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-2">
                5. Your Rights & Contact Details
              </h2>
              <p>
                You have the right to request access to the personal data we hold
                about you, or to request its immediate deletion from our records.
                If you have any questions or wish to update your details, contact
                us:
              </p>
              <div className="mt-3 bg-[#f8f8f8] p-4 rounded-lg border border-gray-200">
                <p>
                  <strong>Pure Calisthenics</strong>
                </p>
                <p>Phone / WhatsApp: +91 9773968119</p>
                <p>Location: Mumbai, Maharashtra, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
