// services.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  selectedService: string | null = null;

  // Define content for each service
  serviceContent: { [key: string]: string } = {
    'website-design': 'Web development is essential for businesses seeking to establish a strong online presence. A well-designed website enhances credibility, expands global reach, and serves as a powerful marketing tool. With e-commerce capabilities, direct customer engagement, and adaptability to market trends, web development is crucial for staying competitive and fostering business growth in the digital age.',
    'social-media-marketing': 'Social media marketing is a dynamic strategy that leverages popular platforms to connect businesses with their target audience. Through engaging content, strategic campaigns, and audience interaction, it builds brand awareness, fosters customer relationships, and drives traffic. In the era of digital communication, social media marketing is a powerful tool for businesses to stay relevant, showcase their personality, and create a community of loyal customers.',
    'Software-Development': 'Software development is the backbone of modern technological advancements. It involves the systematic process of designing, coding, testing, and maintaining software applications. Whether creating innovative mobile apps, robust web solutions, or complex enterprise systems, software development empowers businesses to streamline operations, enhance efficiency, and deliver exceptional user experiences. In an ever-evolving',
    'E-Commerce': "E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. This online business model has transformed the way people shop and conduct transactions. E-commerce platforms enable businesses to showcase their products or services, process online payments, and facilitate secure transactions. Customers benefit from the convenience of browsing and shopping from anywhere at any time. With the growth of e-commerce, businesses can reach a global audience, enhance customer experience, and streamline their operations. Whether it's retail, services, or digital products, e-commerce has become a vital component of modern commerce, offering a seamless and efficient way for businesses and consumers to engage in transactions.",
    'Search-Engine-Optimization': "Search Engine Optimization (SEO) is the strategic practice of optimizing online content to improve its visibility in search engine results. By employing SEO techniques, businesses aim to enhance their website's ranking, driving organic traffic and reaching a wider audience. Key elements of SEO include optimizing keywords, creating high-quality content, improving website structure, and building backlinks. In the competitive online landscape, effective SEO not only boosts visibility but also establishes credibility, leading to increased online presence and better chances of connecting with target audiences.",
    'Mobile-App':"Mobile apps have revolutionized the way we interact with technology, bringing convenience and accessibility to our fingertips. From productivity tools to entertainment and lifestyle apps, mobile applications have become an integral part of our daily lives. Businesses leverage mobile apps to connect with users, enhance customer engagement, and provide on-the-go solutions. With intuitive interfaces and powerful functionalities, mobile apps offer a seamless experience, catering to diverse needs and contributing to the dynamic landscape of digital innovation.",
  };
}
