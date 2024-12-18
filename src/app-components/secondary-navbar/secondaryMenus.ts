export const menuData: IMENUITEM[] = [
  {
    id: 1,
    title: "Home",
    description: "",
    href: "/"
  },
  {
    id: 10,
    title: "About Us",
    description: "",
    href: "#",

    children: [
      {
        id: 1,
        title: "Mission Vision & Core Values",
        href: "#",
        description: ""
      },
      {
        id: 2,
        title: "Leadership Team",
        description: "",
        href: "#"
      },

      {
        id: 3,
        title: "Awards and Recognition",
        description: "",
        href: "#"
      },

      {
        id: 4,
        title: "Global Presence",
        description: "",
        href: "#"
      },

      {
        id: 5,
        title: "Partners and Clients",
        description: "",
        href: "#"
      }
    ]
  },
  {
    id: 6,
    title: "Services",
    description: "",
    href: "#",
    children: [
      {
        id: 7,
        title: "Web Development",
        description: "",
        href: "#",
        children: [
          {
            id: 8,
            title: "Frontend Development",
            description: "",
            href: "#"
          },

          {
            id: 9,
            title: "Backend Development",
            description: "",
            href: "#"
          },

          {
            id: 10,
            title: "Full Stack Development",
            description: "",
            href: "#"
          }
        ]
      },
      {
        id: 11,
        title: "Mobile Application Development",
        description: "",
        href: "#",
        children: [
          {
            id: 12,
            title: "Android Development",
            description: "",
            href: "#"
          },
          {
            id: 13,
            title: "iOS Development",
            description: "",
            href: "#"
          },
          {
            id: 14,
            title: "Cross-Platform Development",
            description: "",
            href: "#"
          }
        ]
      },
      {
        id: 15,
        title: "Data Analysis",
        description: "",
        href: "#"
      },
      {
        id: 16,
        title: "E-Commerce",
        description: "",
        href: "#"
      },
      {
        id: 17,
        title: "Saas Development",
        description: "",
        href: "#"
      },
      {
        id: 18,
        title: "Digital Marketing",
        description: "",
        href: "#"
      },
      {
        id: 19,
        title: "Product Services",
        description: "",
        href: "#"
      },
      {
        id: 20,
        title: "Graphic Design",
        description: "",
        href: "#"
      },
      {
        id: 21,
        title: "Sound Engineering",
        description: "",
        href: "#"
      }
    ]
  },
  {
    id: 22,
    title: "Industries",
    description: "",
    href: "#",
    children: [
      {
        id: 23,
        title: "Information Technology (IT)",
        description: "",
        href: "#"
      },
      {
        id: 24,
        title: "Health Care",
        description: "",
        href: "#"
      },
      {
        id: 25,
        title: "Finace & Banking",
        description: "",
        href: "#"
      },
      {
        id: 26,
        title: "Retail & E-commerce",
        description: "",
        href: "#"
      },
      {
        id: 27,
        title: "Tourism & Hospitality",
        description: "",
        href: "#"
      },
      {
        id: 28,
        title: "Education",
        description: "",
        href: "#"
      },
      {
        id: 29,
        title: "Media & entertainment",
        description: "",
        href: "#"
      },
      {
        //construction
        id: 30,
        title: "Construction",
        description: "",
        href: "#"
      },
      {
        // Energy & Utility
        id: 31,
        title: "Energy & Utility",
        description: "",
        href: "#"
      },
      {
        //Logistics & Transport
        id: 32,
        title: "Logistics & Transport",
        description: "",
        href: "#"
      },
      {
        //Legal & Compliance
        id: 33,
        title: "Legal & Compliance",
        description: "",
        href: "#"
      }
    ]
  },
  {
    id: 34,
    title: "Technologies",
    href: "#",
    children: [
      {
        //Web Technology
        id: 35,
        title: "Web Technology",
        href: "#"
      },
      {
        //Mobile Technology
        id: 36,
        title: "Mobile Technology",
        href: "#"
      },
      {
        //Desktop Technology
        id: 37,
        title: "Desktop Technology",
        href: "#"
      },
      {
        //Database Technology
        id: 38,
        title: "Database Technology",
        href: "#"
      },
      {
        //Cloud Technology
        id: 39,
        title: "Cloud Technology",
        href: "#"
      },
      {
        //Automation Technology
        id: 40,
        title: "Automation Technology",
        href: "#"
      },
      {
        // Cloud Infrastructure
        id: 41,
        title: "Cloud Infrastructure",
        href: "#"
      },
      {
        // BLock chain
        id: 42,
        title: "Block chain",
        href: "#"
      },
      {
        //Cybersecurity
        id: 43,
        title: "Cybersecurity",
        href: "#"
      }
    ]
  },
  {
    id: 44,
    title: "Products",
    description: "",
    href: "/products"
  },
  {
    id: 45,
    title: "Portfolio",
    description: "",
    href: "/portfolio"
  },
  {
    id: 46,
    title: "Blog",
    description: "",
    href: "/blog"
  },
  {
    id: 47,
    title: "Contact",
    description: "",
    href: "/contact"
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
