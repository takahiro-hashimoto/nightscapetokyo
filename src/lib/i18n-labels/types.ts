import type React from "react";
import type { SiteLocale } from "@/lib/types";

export type RatingLabels = {
  header: (name: string, area: string) => string;
  beautiful: string;
  access: string;
  atmosphere: string;
  cost: string;
  topLink: string;
  topLinkHref: string;
};

export type OverviewLabels = {
  heading: (name: string | null) => string;
};

export type GalleryLabels = {
  heading: (name: string | null) => string;
};

export type InfoLabels = {
  heading: (name: string | null) => string;
  address: string;
  hours: string;
  holiday: string;
  fee: string;
  height: string;
  features: string;
  links: string;
  officialSite: string;
  sns: string;
  relatedSite: string;
  categoryListLabel: (name: string) => string;
  eventPeriod: string;
  eventVenue: string;
  eventHours: string;
  hotelInfo: string;
  checkinCheckout: string;
  amenity: string;
};

export type AccessLabels = {
  heading: (name: string) => string;
  caption: string;
  station: string;
  parking: string;
  map: string;
};

export type BestTimeLabels = {
  heading: (name: string | null) => string;
  label: (dateLabel: string) => string;
  desc: string;
  sunset: (time: string) => string;
};

export type ReviewLabels = {
  heading: (name: string | null) => string;
  noReviews: string;
  formTitle: string;
  formDesc: string;
  ratingLabel: string;
  ratingPlaceholder: string;
  titleLabel: string;
  titlePlaceholder: string;
  contentLabel: string;
  contentPlaceholder: string;
  nameLabel: string;
  namePlaceholder: string;
  submit: string;
  ariaRating: (rating: number) => string;
};

export type FaqLabels = {
  heading: string;
};

export type MovieLabels = {
  heading: (name: string) => string;
  timeLapseLink: string;
};

export type AnchorLabels = {
  report: string;
  gallery: string;
  info: string;
  access: string;
  besttime: string;
  review: string;
  faq: string;
  movie: string;
  navAriaLabel: string;
};

export type RelatedLabels = {
  heading: (area: React.ReactNode) => React.ReactNode;
  more: (area: string) => string;
  asideLabel: string;
  imageAlt: (name: string) => string;
};

export type RecommendLabels = {
  heading: string;
};

export type ShareLabels = {
  heading: string;
  x: string;
  line: string;
  hatena: string;
  copy: string;
  copied: string;
  facebook?: string;
  whatsapp?: string;
  weibo?: string;
};

export type FooterLabels = {
  author: string;
  authorLabel: string;
  desc: string;
  published: string;
  updated: string;
};

export type HomePageLabels = {
  seoTitle: (year: number) => string;
  seoDescription: string;
  hero: {
    catchphrase: string;
    subtitle: (count: number) => string;
    searchPlaceholder: string;
    searchAriaLabel: string;
    searchButton: string;
    imgAlt: string;
    linkSpots: string;
    linkHotels: string;
    linkPhoto: string;
  };
  categoryNav: {
    ariaLabel: string;
    names: Record<string, string>;
  };
  spotRanking: {
    heading: (year: number) => string;
    desc1: string;
    desc2: string;
    moreLink: string;
  };
  hotelRanking: {
    heading: (year: number) => string;
    desc: string;
    moreLink: string;
  };
  purposeSearch: {
    heading: string;
    desc?: string;
    tagNames?: Record<string, string>;
  };
  areaSearch: {
    heading: string;
    desc?: string;
    areaLabel: (name: string, count: number) => string;
    areaNames?: Record<string, string>;
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
    sunsetAnswer: (sunset: string, from: string, to: string) => string;
    sunsetUnavailable: string;
    simulatorLinkText: string;
    simulatorSuffix: string;
    moonLinkText: string;
    moonSuffix: string;
    twilightPrefix: string;
    twilightLinkText: string;
    twilightSuffix: string;
  };
  mapSection: {
    heading: string;
    desc: (count: number) => string;
    allLabel: string;
    countLabel: string;
    loadingLabel: string;
  };
};

export type AreaPageLabels = {
  title: (area: string, count?: number) => string;
  lead: (area: string, spots: { name: string; rating_avg: number }[]) => string;
  count: (n: number) => string;
  sortLabel: string;
  sortRating: string;
  sortUpdated: string;
  faqHeading: (area: string) => string;
  faqSpotCount: (area: string, n: number) => { q: string; a: string };
  faqTopSpot: (area: string, name: string, rating: string, lead: string) => { q: string; a: string };
  faqTop3: (area: string, list: string) => { q: string; a: string };
  faqDate: (area: string, name: string) => { q: string; a: string };
  faqFree: (area: string, freeNames: string) => { q: string; a: string };
  faqBestTime: (area: string) => { q: string; a: string };
  imageAlt: (name: string) => string;
  mapHeading: (area: string) => string;
  mapCount: (area: string, n: number) => string;
  closedBadge: string;
  emptyState: string;
};

export type SearchPageLabels = {
  breadcrumb: string;
  heading: (query: string) => string;
  headingDefault: string;
  found: (fields: string, query: string, count: number) => string;
  notFound: (query: string) => string;
  resultCountTemplate: string;
  sortRelevance: string;
  sortRating: string;
  sortName: string;
  fieldSpotName: string;
  fieldAddress: string;
  fieldStation: string;
  fieldReport: string;
  fieldLead: string;
  fieldTag: string;
  fieldCategory: string;
  matchHit: (fields: string) => string;
};

export type NotFoundLabels = {
  title: string;
  desc: string;
  button: string;
};

export type HomeAuthorLabels = {
  heading: string;
  name: string;
  title: string;
  desc1: string;
  desc2: string;
  achievementsLabel: string;
  achievements: string[];
  moreLink: string;
};

export type ComponentLabels = {
  seoH1: (name: string) => string;
  seoDescription: (name: string, area: string, type: string, lead?: string | null) => string;
  heroImageAlt: (name: string) => string;
  closedBadge: string;
  rating: RatingLabels;
  overview: OverviewLabels;
  gallery: GalleryLabels;
  info: InfoLabels;
  access: AccessLabels;
  bestTime: BestTimeLabels;
  review: ReviewLabels;
  faq: FaqLabels;
  movie: MovieLabels;
  related: RelatedLabels;
  recommend: RecommendLabels;
  share: ShareLabels;
  anchor: AnchorLabels;
  footer: FooterLabels;
  areaPage: AreaPageLabels;
  homePage: HomePageLabels;
  searchPage: SearchPageLabels;
  notFound: NotFoundLabels;
  homeAuthor: HomeAuthorLabels;
};
