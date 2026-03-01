import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="p-3 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4">
        <div className="md:col-span-2 lg:col-span-2 relative">
          <Sidebar />
        </div>
        <div className="md:col-span-3 lg:col-span-4">
          <PortfolioGrid />
        </div>

      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}
