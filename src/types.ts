export interface SocialStat {
  platform: 'instagram' | 'facebook' | 'youtube_vlog' | 'youtube_comedy' | 'total';
  name: string;
  handle: string;
  count: number;
  formattedCount: string;
  label: string;
  subText: string;
  url: string;
  color: string;
  iconName: string;
}

export interface VideoContent {
  id: string;
  title: string;
  hindiTitle?: string;
  views: string;
  rawViews: number;
  published: string;
  category: 'Village Comedy' | 'Desi Vlogs' | 'Lifestyle' | 'Mini Vlogs';
  thumbnailUrl: string;
  platform: 'YouTube' | 'Instagram' | 'Facebook';
  url: string;
  videoCode?: string;
  description: string;
  likes?: string;
  tags: string[];
}

export interface MeetupExperience {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  badge: string;
  iconName: string;
  actionText: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface CollabPackage {
  id: string;
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface FanMessage {
  id: string;
  fanName: string;
  location: string;
  message: string;
  avatar: string;
  time: string;
}
