
import React from 'react';

const MapSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29386.07574919822!2d58.54042244348924!3d23.588689377106304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f423565f1661%3A0xae93694e5b497646!2sMuscat%2C%20Oman!5e0!3m2!1sen!2sus!4v1655932350411!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
