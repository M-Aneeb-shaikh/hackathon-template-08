import Banner from "@/components/Banner";
import CompanyLogos from "@/components/CompanyLogo";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <CompanyLogos />
      <Products />
      <Footer />
    </div>
  );
}
