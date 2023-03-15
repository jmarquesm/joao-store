export type Product = {
  category: string;
  coverImage: string;
  description: string;
  id: number;
  images: string[];
  offer: number;
  price: number;
  title: string
  units?: number
  items?: Product[]
}

