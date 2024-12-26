import PrimaryNavBar from "@/appComponents/primaryNavbar";
import SecondaryNavbar from "@/appComponents/secondary-navbar";
import { menuData } from "@/appComponents/secondary-navbar/secondaryMenus";
import {} from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrimaryNavBar />

      <SecondaryNavbar items={menuData} />
      {children}
    </>
  );
}

export default PageLayout;
