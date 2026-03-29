import Awards from "@/MyComponents/Awards";
import BeautfiulPhotographs from "@/MyComponents/BeautfiulPhotographs";
import Blog from "@/MyComponents/Blog";
import Brands from "@/MyComponents/Brands";
import ClientReviews from "@/MyComponents/ClientReviews";
import Films from "@/MyComponents/Films";
import FollowInstagram from "@/MyComponents/FollowInstagram";
import Footer from "@/MyComponents/Footer";
import Hero from "@/MyComponents/Hero";
import Navbar from "@/MyComponents/Navbar";
import Services from "@/MyComponents/Services";
import Testimonital from "@/MyComponents/Testimonital";

function page() {
  return (
    <div>
      <Navbar dark={false} />
      <Hero />
      <BeautfiulPhotographs />
      <Films />
      <Blog />
      {/* <Awards />
      <Brands /> */}
      <ClientReviews />
      {/* <Services /> */}
      {/* <Testimonital /> */}
    </div>
  );
}
export default page;
