export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "John Smith",
    role: "Engineering Manager",
    company: "Tech Solutions Inc.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    imageUrl: "/testimonials/john-smith.jpg"
  },
  {
    id: "testimonial-2",
    name: "Sarah Johnson",
    role: "Product Owner",
    company: "Innovate Tech",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    imageUrl: "/testimonials/sarah-johnson.jpg"
  },
  {
    id: "testimonial-3",
    name: "Michael Chen",
    role: "Senior Developer",
    company: "Digital Solutions",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    imageUrl: "/testimonials/michael-chen.jpg"
  }
]; 