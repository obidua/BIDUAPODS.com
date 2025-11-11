export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: string;
  metaDescription: string;
  metaKeywords: string[];
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}
