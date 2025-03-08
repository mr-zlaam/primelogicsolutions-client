export interface FeatureType {
  id: string;
  title: string;
}

export interface MenuItemType {
  id: number;
  title: string;
  description?: string;
  pageData?: Sections[] | string;
  href?: string;
  image?: string;
  children?: MenuItemType[];
}
export interface Sections {
  id: number;
  title?: string;
  subTitle?: string;
  description?: string;
  sectionChildren: Sections[];
}
