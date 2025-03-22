import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floatingButton";
import BlogPage from "@/components/blogPage";

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
