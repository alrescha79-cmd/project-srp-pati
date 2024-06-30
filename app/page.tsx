'use client';

import Banner from "@/website-components/Banner";
import PelatihanDetail from "@/website-components/PelatihanDetail";
import LatarBelakang from "@/website-components/LatarBelakang";
import Pelatihan from "@/website-components/Pelatihan";
import Kegiatan from "@/website-components/Kegiatan";
import ContactForm from "@/website-components/ContactForm";
import ContactInfo from "@/website-components/ContactInfo";
import WebsiteMainLayout from "@/website-components/layout/WebsiteMainLayout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default async function Index() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 60, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    });
  }, [])
  return (
    <WebsiteMainLayout>
      <Banner />
      <PelatihanDetail />
      <LatarBelakang />
      <Pelatihan />
      <Kegiatan />
      <ContactForm />
      <ContactInfo />
      <hr className="mt-12 mb-12 block"/>
    </WebsiteMainLayout>
  );
}
