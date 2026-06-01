"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Clock, MapPin, Package, Phone, Tag, Wheat } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E923ZfdGYDYWgnJm5LaLYhms8L/uploaded-1780343785242-airbfhiu.png"
      logoAlt="Golden Deli & Groceries Logo"
      brandName="Golden Deli & Groceries"
      button={{
        text: "Order Online",
        href: "#menu",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Golden Deli & Groceries"
      description="Experience culinary excellence and discover a world of gourmet delights. Golden Deli & Groceries offers an exquisite selection of fresh, high-quality ingredients and a full kitchen menu crafted with passion."
      buttons={[
        {
          text: "Explore Our Menu",
          href: "#menu",
        },
        {
          text: "Order Online",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/chef-is-working-nicely-decorated-kitchen-preparing-pastry-pizza_613910-3408.jpg?_wi=1"
      imageAlt="Luxurious deli interior with gourmet food displays"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="right"
      title="Our Passion for Premium Quality"
      description="At Golden Deli & Groceries, we are dedicated to providing an unparalleled culinary experience. From hand-selected gourmet ingredients to freshly prepared dishes from our full-service kitchen, every item reflects our commitment to quality, freshness, and exceptional taste. We believe in sourcing the finest produce, meats, and artisan products to enrich your daily meals and special occasions."
      bulletPoints={[
        {
          title: "Gourmet Selection",
          description: "A curated array of imported cheeses, cured meats, and specialty items.",
        },
        {
          title: "Freshly Prepared",
          description: "Our kitchen crafts delicious meals, sandwiches, and salads daily.",
        },
        {
          title: "Exceptional Service",
          description: "Dedicated staff ready to assist you with recommendations and custom orders.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-are-making-tandir-traditional-bread-side-view_141793-4731.jpg?_wi=1"
      imageAlt="Chef preparing a gourmet dish in a modern kitchen"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Artisan Bakery",
          description: "Freshly baked breads, pastries, and delectable desserts made in-house daily.",
          bentoComponent: "reveal-icon",
          icon: Wheat,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-women-eating-healthy-food_23-2149151664.jpg",
          imageAlt: "cozy cafe interior coffee",
        },
        {
          title: "Premium Deli Counter",
          description: "Finest selection of sliced meats, international cheeses, and homemade salads.",
          bentoComponent: "reveal-icon",
          icon: Package,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E923ZfdGYDYWgnJm5LaLYhms8L/uploaded-1780343785242-airbfhiu.png",
          imageAlt: "cozy cafe interior coffee",
        },
        {
          title: "Gourmet Groceries",
          description: "A curated range of exotic spices, organic produce, and specialty pantry items.",
          bentoComponent: "reveal-icon",
          icon: Tag,
          imageSrc: "http://img.b2bpic.net/free-photo/chef-is-working-nicely-decorated-kitchen-preparing-pastry-pizza_613910-3408.jpg?_wi=2",
          imageAlt: "cozy cafe interior coffee",
        },
        {
          title: "Full-Service Kitchen",
          description: "Delicious hot and cold meals prepared by our expert chefs for dine-in or takeaway.",
          bentoComponent: "reveal-icon",
          icon: Award,
          imageSrc: "http://img.b2bpic.net/free-photo/man-are-making-tandir-traditional-bread-side-view_141793-4731.jpg?_wi=2",
          imageAlt: "cozy cafe interior coffee",
        },
      ]}
      title="A World of Culinary Delights"
      description="Discover what makes Golden Deli & Groceries your premier destination for gourmet food and fresh ingredients."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "sandwich-1",
          name: "Signature Deli Sandwich",
          price: "$14.99",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-club-sandwich-with-french-fries-wooden-serving-board_176474-3048.jpg",
          imageAlt: "Gourmet deli sandwich with fresh ingredients",
        },
        {
          id: "salad-1",
          name: "Mediterranean Quinoa Salad",
          price: "$12.50",
          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-feta-cheese-olives-fresh-vegetables_181624-18093.jpg",
          imageAlt: "Fresh Mediterranean quinoa salad",
        },
        {
          id: "platter-1",
          name: "Artisan Cheese & Charcuterie Platter",
          price: "$29.00",
          imageSrc: "http://img.b2bpic.net/free-photo/pieces-gorgonzola-cheese-black-stone-with-walnut-garlic-desk_23-2148101800.jpg",
          imageAlt: "Artisan cheese and charcuterie platter",
        },
        {
          id: "pastry-1",
          name: "French Croissant Basket",
          price: "$7.99",
          imageSrc: "http://img.b2bpic.net/free-photo/set-bakery-pastries-wooden-table_123827-31529.jpg",
          imageAlt: "Freshly baked French croissants",
        },
        {
          id: "soup-1",
          name: "Soup of the Day (Seasonal)",
          price: "$8.00",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-azerbaijani-erishte-bowl-woman-hand-beige-background_140725-132385.jpg",
          imageAlt: "Hearty bowl of seasonal soup",
        },
        {
          id: "coffee-1",
          name: "Gourmet Espresso Blend",
          price: "$4.50",
          imageSrc: "http://img.b2bpic.net/free-photo/iced-coffee-with-ice-cubes-sugar-dark-background_84443-94486.jpg",
          imageAlt: "A cup of gourmet espresso",
        },
      ]}
      title="Our Full Kitchen Menu"
      description="Indulge in our exquisite selection of gourmet dishes, crafted daily with the freshest ingredients."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Artisan Farms Co.",
        "Gourmet Dairy Inc.",
        "Premium Seafood Ltd.",
        "Organic Greens Hub",
        "Heritage Bakeries",
        "Global Spices Emporium",
        "Fine Wines & Spirits",
      ]}
      title="Our Trusted Suppliers & Partners"
      description="We proudly partner with the finest local and international producers to bring you exceptional quality."
      showCard={false}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "A True Culinary Gem!",
          quote: "Golden Deli & Groceries consistently delivers exceptional quality. Their sandwiches are a work of art, and the selection of gourmet items is unmatched. A must-visit!",
          name: "Sophia R.",
          role: "Food Critic",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-standing-front-toys-amusement-park_23-2147910668.jpg",
          imageAlt: "Sophia R.",
        },
        {
          id: "2",
          title: "My Go-To for Freshness",
          quote: "I'm always impressed by the freshness of their produce and the delicious ready-made meals. It's my favorite spot for quick, high-quality lunches.",
          name: "Liam K.",
          role: "Local Business Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-cooking-salad_23-2148471922.jpg",
          imageAlt: "Liam K.",
        },
        {
          id: "3",
          title: "Outstanding Selection",
          quote: "The variety of international cheeses and specialty items is incredible. Every visit feels like a treasure hunt for new gourmet finds. Highly recommend!",
          name: "Elena M.",
          role: "Home Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190960.jpg",
          imageAlt: "Elena M.",
        },
        {
          id: "4",
          title: "Perfect Catering Every Time",
          quote: "We've used Golden Deli for several corporate events, and they always exceed expectations. The food is exquisite, and the service is impeccable.",
          name: "David C.",
          role: "Event Planner",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-young-woman-eating-using-cell-phone-cafe_171337-19552.jpg",
          imageAlt: "David C.",
        },
        {
          id: "5",
          title: "Unmatched Quality and Service",
          quote: "From their artisan bread to their gourmet coffee, everything at Golden Deli is top-notch. The staff are always friendly and knowledgeable.",
          name: "Isabella H.",
          role: "Neighborhood Resident",
          imageSrc: "http://img.b2bpic.net/free-photo/cafe-restaurants-coffee-shop-owners-retail-concept-close-up-cheeky-handsome-waiter-black-apron-barista-guarantee-quality-drinks-showing-okay-sign-smiling-pleased_1258-59319.jpg",
          imageAlt: "Isabella H.",
        },
        {
          id: "6",
          title: "A Taste of Luxury",
          quote: "Golden Deli & Groceries has truly elevated my culinary experiences. Their selection is fantastic, and the staff are always helpful and welcoming. A real treat!",
          name: "Marcus L.",
          role: "Gourmet Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-eating-restaurant_23-2150491778.jpg",
          imageAlt: "Marcus L.",
        },
      ]}
      title="What Our Customers Say"
      description="Hear from our delighted customers about their Golden Deli & Groceries experience."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "hours",
          value: "7 AM - 9 PM",
          title: "Daily Hours",
          description: "Open seven days a week for your convenience.",
          icon: Clock,
        },
        {
          id: "location",
          value: "123 Gourmet Lane",
          title: "Our Address",
          description: "Find us in the heart of the city's culinary district.",
          icon: MapPin,
        },
        {
          id: "phone",
          value: "(123) 456-7890",
          title: "Contact Us",
          description: "Call us for orders or inquiries during business hours.",
          icon: Phone,
        },
      ]}
      title="Visit Us Today!"
      description="Find us at our convenient location and experience the Golden Deli difference."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Connect With Golden Deli"
      description="Have a question, catering request, or need assistance with your order? Reach out to us!"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message or Order Details",
        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/meat-vegetables-mediterranean-food_23-2147772042.jpg"
      imageAlt="Contact us image"
      mediaAnimation="none"
      mediaPosition="left"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E923ZfdGYDYWgnJm5LaLYhms8L/uploaded-1780343785242-airbfhiu.png"
      logoAlt="Golden Deli & Groceries Logo"
      logoText="Golden Deli & Groceries"
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Sandwiches",
              href: "#menu",
            },
            {
              label: "Salads",
              href: "#menu",
            },
            {
              label: "Platters",
              href: "#menu",
            },
            {
              label: "Bakery",
              href: "#menu",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Golden Deli & Groceries. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
