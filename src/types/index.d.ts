export interface FeatureType {
  id: string;
  title: string;
}

export interface MenuItemType {
  id: number;
  title: string;
  description?: string;
  pageData?: ISECTION[];
  href?: string;
  image?: string;
  children?: MenuItemType[];
}
export type SECTIONTYPE = "LIST" | "IMAGE" | "PARAGRAPH" | "LINK" | "HEADING";
export interface ISECTION {
  id: number;
  title: string;
  sectionType: SECTIONTYPE;
  subTitle?: string;
  description: string;
  image?: string;
  sectionChildren?: ISECTION[];
}
