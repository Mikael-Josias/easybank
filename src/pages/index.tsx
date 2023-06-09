import ArticleSection from "@/components/article-section";
import ContentSection from "@/components/content-section";
import Footer from "@/components/footer";
import Header from "@/components/header"
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ContentSection/>
      <ArticleSection/>
      <Footer/>
    </>
  );
}
