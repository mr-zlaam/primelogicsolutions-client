import PrimaryNavBar from "@/app-components/primary-navbar";
// import SecondaryNavbar from "@/app-components/secondary-navbar";
import MobileSecondaryNavbar from "@/app-components/secondary-navbar/navbar-components/mobileVersion";
import { menuData } from "@/app-components/secondary-navbar/secondaryMenus";
import {} from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrimaryNavBar />

      {/* <SecondaryNavbar items={menuData} /> */}
      <MobileSecondaryNavbar items={menuData} />
      {children}
    </>
  );
}

export default PageLayout;
