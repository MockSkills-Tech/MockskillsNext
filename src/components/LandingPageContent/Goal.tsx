import React from 'react';
import a1 from '../../components/assets/about1.svg';
import a2 from '../../components/assets/about2.svg';
import a3 from '../../components/assets/about3.svg';
import ValueCard from '@/components/LandingPageContent/ValueCard'; // Adjust the import path as necessary

const Goal = () => {
  const missionStatement='We are dedicated to making tech careers accessible and empowering individuals to excel. Guided by our core values, we create a supportive environment that encourages growth and innovation.'
  return (
    <div className="p-8 md:p-12 space-y-12">
    {/* Our Mission and Values Section */}
    <section className="text-center rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-500">Our Mission & Values</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">{missionStatement}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
                imageSrc={a1}
                title="Empowerment"
                description="Helping individuals unlock their potential through skill-building and mentorship."
            />
            <ValueCard
                imageSrc={a2}
                title="Innovation"
                description="Implementing cutting-edge tools and techniques to provide the best in tech education."
            />
            <ValueCard
                imageSrc={a3}
                title="Community"
                description="Creating a connected network where people can learn, share, and grow together."
            />
        </div>
    </section>
</div>
  );
};

export default Goal;
