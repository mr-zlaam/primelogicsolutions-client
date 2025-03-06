import Header from "@/appComponents/homePageComponents/header";

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

