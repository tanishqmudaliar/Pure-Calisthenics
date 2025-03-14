import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import BlogPage from "@/components/BlogPage";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-x-hidden bg-secondary">
      <FloatingButton />
      <NavBar />
      <BlogPage />
      <Footer />
    </main>
  );
}
