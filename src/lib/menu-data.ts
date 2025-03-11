import type { MenuItemType, ISECTION } from "@/types";

export const menuData: MenuItemType[] = [
  {
    id: 1,
    title: "HOME",
    pageData: [] as ISECTION[],
    description: "",
    href: "/"
  },
  {
    id: 6,
    title: "SERVICES",
    pageData: [] as ISECTION[],
    description: "Our comprehensive range of technology services",
    image: "https://placehold.co/200x200.jpg",
    href: "/services",
    children: [
      // Original 6 service categories
      {
        id: 7,
        title: "Software Development",
        description: "Custom software solutions built for your business",
        image: "/images/menu/software-dev.jpg",
        href: "/services/software-development",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 8,
            title: "Web Development",
            pageData: [{ title: "Hello world" } as ISECTION],
            description: "",
            href: "/services/software-development/web-development"
          },
          {
            id: 9,
            title: "Mobile Development",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/mobile-development"
          },
          {
            id: 10,
            title: "SaaS Platforms",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/saas-platforms"
          },
          {
            id: 101,
            title: "API Integration",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/api-integration"
          },
          {
            id: 102,
            title: "Web 3.0",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/web3"
          },
          {
            id: 103,
            title: "Salesforce Solutions",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/salesforce"
          }
        ]
      },
      {
        id: 11,
        title: "Data and Analytics",
        pageData: [] as ISECTION[],
        description: "Transform your data into actionable insights",
        image: "/images/menu/data-analytics.jpg",
        href: "/services/data-and-analytics",
        children: [
          {
            id: 120,
            title: "Data Visualization",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/data-visualization"
          },
          {
            id: 130,
            title: "Predictive Analytics",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/predictive-analytics"
          },
          {
            id: 140,
            title: "Big Data",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/big-data"
          },
          {
            id: 141,
            title: "Machine Learning",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/machine-learning"
          },
          {
            id: 142,
            title: "Computer Vision",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/computer-vision"
          },
          {
            id: 143,
            title: "Data Cleansing",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/data-cleansing"
          }
        ]
      },
      // Add 12 more service test items for pagination testing
      {
        id: 1001,
        title: "Service Test 1",
        description: "Description for Service Test 1",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/1",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10011,
            title: "Service Test Child 1.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/1/child-1"
          },
          {
            id: 10012,
            title: "Service Test Child 1.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/1/child-2"
          },
          {
            id: 10013,
            title: "Service Test Child 1.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/1/child-3"
          },
          {
            id: 10014,
            title: "Service Test Child 1.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/1/child-4"
          },
          {
            id: 10015,
            title: "Service Test Child 1.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/1/child-5"
          },
          {
            id: 10016,
            title: "Service Test Child 1.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/1/child-6"
          }
        ]
      },
      {
        id: 1002,
        title: "Service Test 2",
        description: "Description for Service Test 2",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/2",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10021,
            title: "Service Test Child 2.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/2/child-1"
          },
          {
            id: 10022,
            title: "Service Test Child 2.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/2/child-2"
          },
          {
            id: 10023,
            title: "Service Test Child 2.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/2/child-3"
          },
          {
            id: 10024,
            title: "Service Test Child 2.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/2/child-4"
          },
          {
            id: 10025,
            title: "Service Test Child 2.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/2/child-5"
          },
          {
            id: 10026,
            title: "Service Test Child 2.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/2/child-6"
          }
        ]
      },
      {
        id: 1003,
        title: "Service Test 3",
        description: "Description for Service Test 3",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/3",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10031,
            title: "Service Test Child 3.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/3/child-1"
          },
          {
            id: 10032,
            title: "Service Test Child 3.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/3/child-2"
          },
          {
            id: 10033,
            title: "Service Test Child 3.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/3/child-3"
          },
          {
            id: 10034,
            title: "Service Test Child 3.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/3/child-4"
          },
          {
            id: 10035,
            title: "Service Test Child 3.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/3/child-5"
          },
          {
            id: 10036,
            title: "Service Test Child 3.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/3/child-6"
          }
        ]
      },
      {
        id: 1004,
        title: "Service Test 4",
        description: "Description for Service Test 4",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/4",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10041,
            title: "Service Test Child 4.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/4/child-1"
          },
          {
            id: 10042,
            title: "Service Test Child 4.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/4/child-2"
          },
          {
            id: 10043,
            title: "Service Test Child 4.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/4/child-3"
          },
          {
            id: 10044,
            title: "Service Test Child 4.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/4/child-4"
          },
          {
            id: 10045,
            title: "Service Test Child 4.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/4/child-5"
          },
          {
            id: 10046,
            title: "Service Test Child 4.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/4/child-6"
          }
        ]
      },
      {
        id: 1005,
        title: "Service Test 5",
        description: "Description for Service Test 5",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/5",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10051,
            title: "Service Test Child 5.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/5/child-1"
          },
          {
            id: 10052,
            title: "Service Test Child 5.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/5/child-2"
          },
          {
            id: 10053,
            title: "Service Test Child 5.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/5/child-3"
          },
          {
            id: 10054,
            title: "Service Test Child 5.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/5/child-4"
          },
          {
            id: 10055,
            title: "Service Test Child 5.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/5/child-5"
          },
          {
            id: 10056,
            title: "Service Test Child 5.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/5/child-6"
          }
        ]
      },
      {
        id: 1006,
        title: "Service Test 6",
        description: "Description for Service Test 6",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/6",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10061,
            title: "Service Test Child 6.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/6/child-1"
          },
          {
            id: 10062,
            title: "Service Test Child 6.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/6/child-2"
          },
          {
            id: 10063,
            title: "Service Test Child 6.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/6/child-3"
          },
          {
            id: 10064,
            title: "Service Test Child 6.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/6/child-4"
          },
          {
            id: 10065,
            title: "Service Test Child 6.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/6/child-5"
          },
          {
            id: 10066,
            title: "Service Test Child 6.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/6/child-6"
          }
        ]
      },
      {
        id: 1007,
        title: "Service Test 7",
        description: "Description for Service Test 7",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/7",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10071,
            title: "Service Test Child 7.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/7/child-1"
          },
          {
            id: 10072,
            title: "Service Test Child 7.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/7/child-2"
          },
          {
            id: 10073,
            title: "Service Test Child 7.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/7/child-3"
          },
          {
            id: 10074,
            title: "Service Test Child 7.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/7/child-4"
          },
          {
            id: 10075,
            title: "Service Test Child 7.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/7/child-5"
          },
          {
            id: 10076,
            title: "Service Test Child 7.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/7/child-6"
          }
        ]
      },
      {
        id: 1008,
        title: "Service Test 8",
        description: "Description for Service Test 8",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/8",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10081,
            title: "Service Test Child 8.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/8/child-1"
          },
          {
            id: 10082,
            title: "Service Test Child 8.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/8/child-2"
          },
          {
            id: 10083,
            title: "Service Test Child 8.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/8/child-3"
          },
          {
            id: 10084,
            title: "Service Test Child 8.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/8/child-4"
          },
          {
            id: 10085,
            title: "Service Test Child 8.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/8/child-5"
          },
          {
            id: 10086,
            title: "Service Test Child 8.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/8/child-6"
          }
        ]
      },
      {
        id: 1009,
        title: "Service Test 9",
        description: "Description for Service Test 9",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/9",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10091,
            title: "Service Test Child 9.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/9/child-1"
          },
          {
            id: 10092,
            title: "Service Test Child 9.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/9/child-2"
          },
          {
            id: 10093,
            title: "Service Test Child 9.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/9/child-3"
          },
          {
            id: 10094,
            title: "Service Test Child 9.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/9/child-4"
          },
          {
            id: 10095,
            title: "Service Test Child 9.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/9/child-5"
          },
          {
            id: 10096,
            title: "Service Test Child 9.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/9/child-6"
          }
        ]
      },
      {
        id: 1010,
        title: "Service Test 10",
        description: "Description for Service Test 10",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/10",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10101,
            title: "Service Test Child 10.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/10/child-1"
          },
          {
            id: 10102,
            title: "Service Test Child 10.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/10/child-2"
          },
          {
            id: 10103,
            title: "Service Test Child 10.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/10/child-3"
          },
          {
            id: 10104,
            title: "Service Test Child 10.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/10/child-4"
          },
          {
            id: 10105,
            title: "Service Test Child 10.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/10/child-5"
          },
          {
            id: 10106,
            title: "Service Test Child 10.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/10/child-6"
          }
        ]
      },
      {
        id: 1011,
        title: "Service Test 11",
        description: "Description for Service Test 11",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/11",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10111,
            title: "Service Test Child 11.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/11/child-1"
          },
          {
            id: 10112,
            title: "Service Test Child 11.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/11/child-2"
          },
          {
            id: 10113,
            title: "Service Test Child 11.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/11/child-3"
          },
          {
            id: 10114,
            title: "Service Test Child 11.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/11/child-4"
          },
          {
            id: 10115,
            title: "Service Test Child 11.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/11/child-5"
          },
          {
            id: 10116,
            title: "Service Test Child 11.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/11/child-6"
          }
        ]
      },
      {
        id: 1012,
        title: "Service Test 12",
        description: "Description for Service Test 12",
        image: "/images/menu/test.jpg",
        href: "/test/service-test/12",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 10121,
            title: "Service Test Child 12.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/12/child-1"
          },
          {
            id: 10122,
            title: "Service Test Child 12.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/12/child-2"
          },
          {
            id: 10123,
            title: "Service Test Child 12.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/12/child-3"
          },
          {
            id: 10124,
            title: "Service Test Child 12.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/12/child-4"
          },
          {
            id: 10125,
            title: "Service Test Child 12.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/12/child-5"
          },
          {
            id: 10126,
            title: "Service Test Child 12.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/service-test/12/child-6"
          }
        ]
      }
    ]
  },
  {
    id: 500,
    title: "INDUSTRIES",
    pageData: [] as ISECTION[],
    description: "Specialized solutions for diverse sectors",
    image: "https://placehold.co/200x200.jpg",
    href: "/industries",
    children: [
      // INDUSTRIES test items (12 items for pagination)
      {
        id: 2001,
        title: "Industry Test 1",
        description: "Description for Industry Test 1",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/1",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20011,
            title: "Industry Test Child 1.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/1/child-1"
          },
          {
            id: 20012,
            title: "Industry Test Child 1.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/1/child-2"
          },
          {
            id: 20013,
            title: "Industry Test Child 1.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/1/child-3"
          },
          {
            id: 20014,
            title: "Industry Test Child 1.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/1/child-4"
          },
          {
            id: 20015,
            title: "Industry Test Child 1.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/1/child-5"
          },
          {
            id: 20016,
            title: "Industry Test Child 1.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/1/child-6"
          }
        ]
      },
      {
        id: 2002,
        title: "Industry Test 2",
        description: "Description for Industry Test 2",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/2",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20021,
            title: "Industry Test Child 2.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/2/child-1"
          },
          {
            id: 20022,
            title: "Industry Test Child 2.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/2/child-2"
          },
          {
            id: 20023,
            title: "Industry Test Child 2.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/2/child-3"
          },
          {
            id: 20024,
            title: "Industry Test Child 2.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/2/child-4"
          },
          {
            id: 20025,
            title: "Industry Test Child 2.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/2/child-5"
          },
          {
            id: 20026,
            title: "Industry Test Child 2.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/2/child-6"
          }
        ]
      },
      {
        id: 2003,
        title: "Industry Test 3",
        description: "Description for Industry Test 3",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/3",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20031,
            title: "Industry Test Child 3.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/3/child-1"
          },
          {
            id: 20032,
            title: "Industry Test Child 3.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/3/child-2"
          },
          {
            id: 20033,
            title: "Industry Test Child 3.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/3/child-3"
          },
          {
            id: 20034,
            title: "Industry Test Child 3.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/3/child-4"
          },
          {
            id: 20035,
            title: "Industry Test Child 3.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/3/child-5"
          },
          {
            id: 20036,
            title: "Industry Test Child 3.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/3/child-6"
          }
        ]
      },
      {
        id: 2004,
        title: "Industry Test 4",
        description: "Description for Industry Test 4",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/4",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20041,
            title: "Industry Test Child 4.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/4/child-1"
          },
          {
            id: 20042,
            title: "Industry Test Child 4.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/4/child-2"
          },
          {
            id: 20043,
            title: "Industry Test Child 4.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/4/child-3"
          },
          {
            id: 20044,
            title: "Industry Test Child 4.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/4/child-4"
          },
          {
            id: 20045,
            title: "Industry Test Child 4.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/4/child-5"
          },
          {
            id: 20046,
            title: "Industry Test Child 4.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/4/child-6"
          }
        ]
      },
      {
        id: 2005,
        title: "Industry Test 5",
        description: "Description for Industry Test 5",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/5",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20051,
            title: "Industry Test Child 5.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/5/child-1"
          },
          {
            id: 20052,
            title: "Industry Test Child 5.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/5/child-2"
          },
          {
            id: 20053,
            title: "Industry Test Child 5.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/5/child-3"
          },
          {
            id: 20054,
            title: "Industry Test Child 5.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/5/child-4"
          },
          {
            id: 20055,
            title: "Industry Test Child 5.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/5/child-5"
          },
          {
            id: 20056,
            title: "Industry Test Child 5.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/5/child-6"
          }
        ]
      },
      {
        id: 2006,
        title: "Industry Test 6",
        description: "Description for Industry Test 6",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/6",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20061,
            title: "Industry Test Child 6.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/6/child-1"
          },
          {
            id: 20062,
            title: "Industry Test Child 6.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/6/child-2"
          },
          {
            id: 20063,
            title: "Industry Test Child 6.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/6/child-3"
          },
          {
            id: 20064,
            title: "Industry Test Child 6.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/6/child-4"
          },
          {
            id: 20065,
            title: "Industry Test Child 6.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/6/child-5"
          },
          {
            id: 20066,
            title: "Industry Test Child 6.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/6/child-6"
          }
        ]
      },
      {
        id: 2007,
        title: "Industry Test 7",
        description: "Description for Industry Test 7",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/7",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20071,
            title: "Industry Test Child 7.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/7/child-1"
          },
          {
            id: 20072,
            title: "Industry Test Child 7.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/7/child-2"
          },
          {
            id: 20073,
            title: "Industry Test Child 7.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/7/child-3"
          },
          {
            id: 20074,
            title: "Industry Test Child 7.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/7/child-4"
          },
          {
            id: 20075,
            title: "Industry Test Child 7.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/7/child-5"
          },
          {
            id: 20076,
            title: "Industry Test Child 7.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/7/child-6"
          }
        ]
      },
      {
        id: 2008,
        title: "Industry Test 8",
        description: "Description for Industry Test 8",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/8",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20081,
            title: "Industry Test Child 8.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/8/child-1"
          },
          {
            id: 20082,
            title: "Industry Test Child 8.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/8/child-2"
          },
          {
            id: 20083,
            title: "Industry Test Child 8.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/8/child-3"
          },
          {
            id: 20084,
            title: "Industry Test Child 8.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/8/child-4"
          },
          {
            id: 20085,
            title: "Industry Test Child 8.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/8/child-5"
          },
          {
            id: 20086,
            title: "Industry Test Child 8.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/8/child-6"
          }
        ]
      },
      {
        id: 2009,
        title: "Industry Test 9",
        description: "Description for Industry Test 9",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/9",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20091,
            title: "Industry Test Child 9.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/9/child-1"
          },
          {
            id: 20092,
            title: "Industry Test Child 9.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/9/child-2"
          },
          {
            id: 20093,
            title: "Industry Test Child 9.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/9/child-3"
          },
          {
            id: 20094,
            title: "Industry Test Child 9.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/9/child-4"
          },
          {
            id: 20095,
            title: "Industry Test Child 9.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/9/child-5"
          },
          {
            id: 20096,
            title: "Industry Test Child 9.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/9/child-6"
          }
        ]
      },
      {
        id: 2010,
        title: "Industry Test 10",
        description: "Description for Industry Test 10",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/10",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20101,
            title: "Industry Test Child 10.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/10/child-1"
          },
          {
            id: 20102,
            title: "Industry Test Child 10.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/10/child-2"
          },
          {
            id: 20103,
            title: "Industry Test Child 10.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/10/child-3"
          },
          {
            id: 20104,
            title: "Industry Test Child 10.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/10/child-4"
          },
          {
            id: 20105,
            title: "Industry Test Child 10.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/10/child-5"
          },
          {
            id: 20106,
            title: "Industry Test Child 10.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/10/child-6"
          }
        ]
      },
      {
        id: 2011,
        title: "Industry Test 11",
        description: "Description for Industry Test 11",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/11",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20111,
            title: "Industry Test Child 11.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/11/child-1"
          },
          {
            id: 20112,
            title: "Industry Test Child 11.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/11/child-2"
          },
          {
            id: 20113,
            title: "Industry Test Child 11.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/11/child-3"
          },
          {
            id: 20114,
            title: "Industry Test Child 11.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/11/child-4"
          },
          {
            id: 20115,
            title: "Industry Test Child 11.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/11/child-5"
          },
          {
            id: 20116,
            title: "Industry Test Child 11.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/11/child-6"
          }
        ]
      },
      {
        id: 2012,
        title: "Industry Test 12",
        description: "Description for Industry Test 12",
        image: "/images/menu/test.jpg",
        href: "/test/industry-test/12",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 20121,
            title: "Industry Test Child 12.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/12/child-1"
          },
          {
            id: 20122,
            title: "Industry Test Child 12.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/12/child-2"
          },
          {
            id: 20123,
            title: "Industry Test Child 12.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/12/child-3"
          },
          {
            id: 20124,
            title: "Industry Test Child 12.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/12/child-4"
          },
          {
            id: 20125,
            title: "Industry Test Child 12.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/12/child-5"
          },
          {
            id: 20126,
            title: "Industry Test Child 12.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/industry-test/12/child-6"
          }
        ]
      }
    ]
  },
  {
    id: 9000,
    title: "TECHNOLOGIES",
    pageData: [] as ISECTION[],
    description: "Expertise across leading technology stacks",
    image: "https://placehold.co/200x200.jpg",
    href: "/technologies",
    children: [
      // TECHNOLOGIES test items (12 items for pagination)
      {
        id: 3001,
        title: "Technology Test 1",
        description: "Description for Technology Test 1",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/1",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30011,
            title: "Technology Test Child 1.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/1/child-1"
          },
          {
            id: 30012,
            title: "Technology Test Child 1.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/1/child-2"
          },
          {
            id: 30013,
            title: "Technology Test Child 1.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/1/child-3"
          },
          {
            id: 30014,
            title: "Technology Test Child 1.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/1/child-4"
          },
          {
            id: 30015,
            title: "Technology Test Child 1.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/1/child-5"
          },
          {
            id: 30016,
            title: "Technology Test Child 1.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/1/child-6"
          }
        ]
      },
      {
        id: 3002,
        title: "Technology Test 2",
        description: "Description for Technology Test 2",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/2",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30021,
            title: "Technology Test Child 2.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/2/child-1"
          },
          {
            id: 30022,
            title: "Technology Test Child 2.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/2/child-2"
          },
          {
            id: 30023,
            title: "Technology Test Child 2.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/2/child-3"
          },
          {
            id: 30024,
            title: "Technology Test Child 2.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/2/child-4"
          },
          {
            id: 30025,
            title: "Technology Test Child 2.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/2/child-5"
          },
          {
            id: 30026,
            title: "Technology Test Child 2.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/2/child-6"
          }
        ]
      },
      {
        id: 3003,
        title: "Technology Test 3",
        description: "Description for Technology Test 3",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/3",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30031,
            title: "Technology Test Child 3.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/3/child-1"
          },
          {
            id: 30032,
            title: "Technology Test Child 3.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/3/child-2"
          },
          {
            id: 30033,
            title: "Technology Test Child 3.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/3/child-3"
          },
          {
            id: 30034,
            title: "Technology Test Child 3.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/3/child-4"
          },
          {
            id: 30035,
            title: "Technology Test Child 3.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/3/child-5"
          },
          {
            id: 30036,
            title: "Technology Test Child 3.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/3/child-6"
          }
        ]
      },
      {
        id: 3004,
        title: "Technology Test 4",
        description: "Description for Technology Test 4",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/4",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30041,
            title: "Technology Test Child 4.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/4/child-1"
          },
          {
            id: 30042,
            title: "Technology Test Child 4.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/4/child-2"
          },
          {
            id: 30043,
            title: "Technology Test Child 4.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/4/child-3"
          },
          {
            id: 30044,
            title: "Technology Test Child 4.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/4/child-4"
          },
          {
            id: 30045,
            title: "Technology Test Child 4.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/4/child-5"
          },
          {
            id: 30046,
            title: "Technology Test Child 4.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/4/child-6"
          }
        ]
      },
      {
        id: 3005,
        title: "Technology Test 5",
        description: "Description for Technology Test 5",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/5",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30051,
            title: "Technology Test Child 5.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/5/child-1"
          },
          {
            id: 30052,
            title: "Technology Test Child 5.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/5/child-2"
          },
          {
            id: 30053,
            title: "Technology Test Child 5.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/5/child-3"
          },
          {
            id: 30054,
            title: "Technology Test Child 5.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/5/child-4"
          },
          {
            id: 30055,
            title: "Technology Test Child 5.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/5/child-5"
          },
          {
            id: 30056,
            title: "Technology Test Child 5.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/5/child-6"
          }
        ]
      },
      {
        id: 3006,
        title: "Technology Test 6",
        description: "Description for Technology Test 6",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/6",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30061,
            title: "Technology Test Child 6.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/6/child-1"
          },
          {
            id: 30062,
            title: "Technology Test Child 6.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/6/child-2"
          },
          {
            id: 30063,
            title: "Technology Test Child 6.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/6/child-3"
          },
          {
            id: 30064,
            title: "Technology Test Child 6.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/6/child-4"
          },
          {
            id: 30065,
            title: "Technology Test Child 6.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/6/child-5"
          },
          {
            id: 30066,
            title: "Technology Test Child 6.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/6/child-6"
          }
        ]
      },
      {
        id: 3007,
        title: "Technology Test 7",
        description: "Description for Technology Test 7",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/7",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30071,
            title: "Technology Test Child 7.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/7/child-1"
          },
          {
            id: 30072,
            title: "Technology Test Child 7.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/7/child-2"
          },
          {
            id: 30073,
            title: "Technology Test Child 7.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/7/child-3"
          },
          {
            id: 30074,
            title: "Technology Test Child 7.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/7/child-4"
          },
          {
            id: 30075,
            title: "Technology Test Child 7.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/7/child-5"
          },
          {
            id: 30076,
            title: "Technology Test Child 7.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/7/child-6"
          }
        ]
      },
      {
        id: 3008,
        title: "Technology Test 8",
        description: "Description for Technology Test 8",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/8",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30081,
            title: "Technology Test Child 8.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/8/child-1"
          },
          {
            id: 30082,
            title: "Technology Test Child 8.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/8/child-2"
          },
          {
            id: 30083,
            title: "Technology Test Child 8.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/8/child-3"
          },
          {
            id: 30084,
            title: "Technology Test Child 8.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/8/child-4"
          },
          {
            id: 30085,
            title: "Technology Test Child 8.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/8/child-5"
          },
          {
            id: 30086,
            title: "Technology Test Child 8.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/8/child-6"
          }
        ]
      },
      {
        id: 3009,
        title: "Technology Test 9",
        description: "Description for Technology Test 9",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/9",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30091,
            title: "Technology Test Child 9.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/9/child-1"
          },
          {
            id: 30092,
            title: "Technology Test Child 9.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/9/child-2"
          },
          {
            id: 30093,
            title: "Technology Test Child 9.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/9/child-3"
          },
          {
            id: 30094,
            title: "Technology Test Child 9.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/9/child-4"
          },
          {
            id: 30095,
            title: "Technology Test Child 9.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/9/child-5"
          },
          {
            id: 30096,
            title: "Technology Test Child 9.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/9/child-6"
          }
        ]
      },
      {
        id: 3010,
        title: "Technology Test 10",
        description: "Description for Technology Test 10",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/10",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30101,
            title: "Technology Test Child 10.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/10/child-1"
          },
          {
            id: 30102,
            title: "Technology Test Child 10.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/10/child-2"
          },
          {
            id: 30103,
            title: "Technology Test Child 10.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/10/child-3"
          },
          {
            id: 30104,
            title: "Technology Test Child 10.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/10/child-4"
          },
          {
            id: 30105,
            title: "Technology Test Child 10.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/10/child-5"
          },
          {
            id: 30106,
            title: "Technology Test Child 10.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/10/child-6"
          }
        ]
      },
      {
        id: 3011,
        title: "Technology Test 11",
        description: "Description for Technology Test 11",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/11",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30111,
            title: "Technology Test Child 11.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/11/child-1"
          },
          {
            id: 30112,
            title: "Technology Test Child 11.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/11/child-2"
          },
          {
            id: 30113,
            title: "Technology Test Child 11.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/11/child-3"
          },
          {
            id: 30114,
            title: "Technology Test Child 11.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/11/child-4"
          },
          {
            id: 30115,
            title: "Technology Test Child 11.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/11/child-5"
          },
          {
            id: 30116,
            title: "Technology Test Child 11.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/11/child-6"
          }
        ]
      },
      {
        id: 3012,
        title: "Technology Test 12",
        description: "Description for Technology Test 12",
        image: "/images/menu/test.jpg",
        href: "/test/technology-test/12",
        pageData: [] as ISECTION[],
        children: [
          {
            id: 30121,
            title: "Technology Test Child 12.1",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/12/child-1"
          },
          {
            id: 30122,
            title: "Technology Test Child 12.2",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/12/child-2"
          },
          {
            id: 30123,
            title: "Technology Test Child 12.3",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/12/child-3"
          },
          {
            id: 30124,
            title: "Technology Test Child 12.4",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/12/child-4"
          },
          {
            id: 30125,
            title: "Technology Test Child 12.5",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/12/child-5"
          },
          {
            id: 30126,
            title: "Technology Test Child 12.6",
            description: "",
            pageData: [] as ISECTION[],
            href: "/test/technology-test/12/child-6"
          }
        ]
      }
    ]
  },
  {
    id: 45,
    title: "BLOG",
    pageData: [] as ISECTION[],
    description: "",
    href: "/blog"
  },
  {
    id: 47,
    title: "CONTACT",
    pageData: [] as ISECTION[],
    description: "",
    href: "/contact"
  }
];
