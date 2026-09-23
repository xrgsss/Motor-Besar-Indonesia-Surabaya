import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ValuesSection } from './components/ValuesSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { NewsSection } from './components/NewsSection';
import { ExternalNewsSection } from './components/ExternalNewsSection';
import { EventSection } from './components/EventSection';
import { GallerySection } from './components/GallerySection';
import { CommunityCTA } from './components/CommunityCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { JoinModal } from './components/JoinModal';
import { ActivityDetailModal } from './components/ActivityDetailModal';
import { EventDetailModal } from './components/EventDetailModal';
import { NewsDetailModal } from './components/NewsDetailModal';
import { LightboxModal } from './components/LightboxModal';

// Types
import type { Activity } from './data/activitiesData';
import type { EventItem } from './data/eventsData';
import type { NewsArticle } from './data/newsData';
import type { GalleryImage } from './data/galleryData';

export function App() {
  // Modal state
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<GalleryImage | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans antialiased selection:bg-[#D60000] selection:text-white relative">
      {/* Navbar */}
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Our Values Section */}
        <ValuesSection />

        {/* 4. Our Activities Section */}
        <ActivitiesSection onSelectActivity={(act) => setSelectedActivity(act)} />

        {/* 5. Latest Internal News Section */}
        <NewsSection onSelectArticle={(art) => setSelectedArticle(art)} />

        {/* 6. External Automotive News Section */}
        <ExternalNewsSection />

        {/* 7. Upcoming Events Section */}
        <EventSection onSelectEvent={(ev) => setSelectedEvent(ev)} />

        {/* 8. Gallery Section */}
        <GallerySection onOpenLightbox={(img) => setSelectedGalleryImage(img)} />

        {/* 9. Community Call to Action */}
        <CommunityCTA onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Popups */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <ActivityDetailModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      <NewsDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <LightboxModal
        image={selectedGalleryImage}
        onClose={() => setSelectedGalleryImage(null)}
      />
    </div>
  );
}

export default App;
