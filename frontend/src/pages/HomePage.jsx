
import { useEffect, useState } from "react";
import { getHomepage } from "../services/api";
import HomeHero from "../components/homepage/HomeHero";
import WhyAlmoe from "../components/homepage/WhyAlmoe";
import BusinessSolutions from "../components/homepage/BusinessSolutions";
import HomeBrands from "../components/homepage/HomeBrands";
import TechnologyPartner from "../components/homepage/TechnologyPartner";
import ContactSection from "../components/homepage/ContactSection";

function HomePage() {
  const [homepage, setHomepage] = useState(null);

  useEffect(() => {
    const loadHomepage = async () => {
      try {
        const data = await getHomepage();
        setHomepage(data);
      } catch (error) {
        console.error("Failed to load homepage:", error);
      }
    };

    loadHomepage();
  }, []);

  if (!homepage) {
    return <div>Loading...</div>;
  }

return (
  <div>
    <HomeHero data={homepage.Hero} />
    <WhyAlmoe data={homepage.WhyAlmoe} />
    <BusinessSolutions data={homepage.BusinessSolutions} />
     <HomeBrands data={homepage.Brands} />
     <TechnologyPartner data={homepage.TechnologyPartner} />
     <ContactSection data={homepage.ContactSection} />
  </div>
)
}

export default HomePage;