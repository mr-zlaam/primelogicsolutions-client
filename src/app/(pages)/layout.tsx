import PrimaryNavBar from "@/app-components/primary-navbar";
import {} from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrimaryNavBar />
      {children}
    </>
  );
}

export default PageLayout;
