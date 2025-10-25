
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
