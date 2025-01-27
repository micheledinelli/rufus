import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <Grid />
      <Footer />
    </div>
  );
}
