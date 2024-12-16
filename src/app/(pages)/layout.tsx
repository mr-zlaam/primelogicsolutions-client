import PrimaryNavBar from "@/app-components/primary-navbar";
import { SecondaryNavbar } from "@/app-components/secondary-navbar";
import {} from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrimaryNavBar />
      <SecondaryNavbar />
      {children}
    </>
  );
}

export default PageLayout;
