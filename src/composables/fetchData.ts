import type {
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSListResponse,
  MicroCMSListContent,
} from 'microcms-js-sdk';

interface Concept {
  fieldId: string;
  concept1Text: string;
  concept1Image: MicroCMSImage;
  concept2Text: string;
  concept2Image: MicroCMSImage;
}

interface Stylist {
  fieldId: string;
  nameJa: string;
  nameEn: string;
  headerText: string;
  bodyText: string;
  thumbnail: MicroCMSImage;
}

interface Access {
  fieldId: string;
  address: string;
  tel: string;
  email: string;
  open: string;
  close: string;
  other: string;
}

type Settings = {
  catchcopy: string;
  concept: Concept;
  gallery: MicroCMSImage[];
  stylist: Stylist;
  access: Access;
  hotpepperUrl: string;
  lineUrl: string;
} & MicroCMSDate;

interface MenuItem {
  attr: string[];
  name: string;
  price: string;
}

interface BlogListItem {
  title: string;
  postAt: string;
  contents: string;
  thumbnail: MicroCMSImage;
}

type Menu = MicroCMSListResponse<MenuItem>;
type BlogList = MicroCMSListResponse<BlogListItem>;
type BlogDetail = {
  title: string;
  postAt: string;
  contents: string;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

export const fetchHome = async (): Promise<Settings> => {
  const res = await useMicroCMSGetObject({ endpoint: 'settings' });
  const data: Settings = res.data.value;
  return data;
};

export const fetchMenu = async (): Promise<Menu | null> => {
  const res = await useMicroCMSGetList<MenuItem>({
    endpoint: 'menu',
    queries: { limit: 100 },
  });
  const data: Menu | null = res.data.value;
  return data;
};

export const fetchBlogList = async (): Promise<BlogList | null> => {
  const res = await useMicroCMSGetList<BlogListItem>({
    endpoint: 'blog',
    queries: {
      limit: 12,
      orders: '-postAt',
    },
  });
  const data: BlogList | null = res.data.value;
  return data;
};

export const fetchBlog = async (contentId: string): Promise<BlogDetail> => {
  const res = await useMicroCMSGetListDetail<BlogDetail>({
    endpoint: 'blog',
    contentId: contentId,
  });
  const data: BlogDetail = res.data.value;
  return data;
};
