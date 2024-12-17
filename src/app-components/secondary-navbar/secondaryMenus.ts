export const menuData: IMENUITEM[] = [
  {
    id: 10,
    title: "About Us",
    description: "",
    href: "#",

    children: [
      {
        id: 4,
        title: "Mission Vision & Core Values",
        href: "#",
        description: ""
      },
      {
        id: 25,
        title: "Settings",
        description: "",
        href: "#"
      }
    ]
  },
  {
    id: 61,
    title: "Projects",
    description: "",
    href: "#",
    children: [
      {
        id: 79,
        title: "Project A",
        description: "",
        href: "#",
        children: [
          {
            id: 89,
            title: "Sub A",
            description: "",
            href: "#"
          }
        ]
      },
      {
        id: 8,
        title: "Project B",
        description: "",
        href: "#"
      }
    ]
  }
];
export interface IMENUITEM {
  id: number;
  title: string;
  description?: string; // Optional description
  href: string; // Optional link
  image?: string; // Optional image URL
  children?: IMENUITEM[]; // Optional nested children
}
