import React from 'react';
import HeroBanner from '@/components/event/HeroBanner';
import HistoryTimeline from '@/components/event/HistoryTimeline';
import StatsCounter from '@/components/event/StatsCounter';
import ProgramHighlights from '@/components/event/ProgramHighlights';
import InternationalPartners from '@/components/event/InternationalPartners';
import EventsSchedule from '@/components/event/EventsSchedule';
import GallerySection from '@/components/event/GallerySection';
import RegistrationForm from '@/components/event/RegistrationForm';
import './70-nam.css';

export const metadata = {
  title: 'Kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam (1956-2026)',
  description: 'Trang landing page chính thức cho sự kiện kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam. Khám phá lịch sử, thành tựu và đăng ký tham dự sự kiện.',
  keywords: 'VMU, Đại học Hàng hải Việt Nam, 70 năm, kỷ niệm, Hải Phòng, đào tạo hàng hải',
  openGraph: {
    title: 'Kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam',
    description: 'Trang landing page chính thức cho sự kiện kỷ niệm 70 năm thành lập Trường Đại học Hàng hải Việt Nam',
    images: ['/events/vmu-70-years-hero.jpg'],
  },
};

export default function VMU70YearsPage() {
  return (
    <main className="vmu-70-years-page">
      {/* Hero Section với countdown */}
      <HeroBanner />
      
      {/* Timeline lịch sử */}
      <HistoryTimeline />
      
      {/* Thống kê & thành tựu */}
      <StatsCounter />
      
      {/* Ngành đào tạo & khoa viện */}
      <ProgramHighlights />
      
      {/* Hợp tác quốc tế & cơ sở vật chất */}
      <InternationalPartners />
      
      {/* Gallery & testimonials */}
      <GallerySection />
      
      {/* Lịch trình sự kiện & đăng ký */}
      <EventsSchedule />
      
      {/* Form đăng ký */}
      <RegistrationForm />
    </main>
  );
}
