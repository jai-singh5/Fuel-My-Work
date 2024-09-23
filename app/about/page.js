import React from 'react'

// Icon paths
const ICON_PATHS = {
  customization: "/customization.svg",
  performance: "/performance.svg",
  features: "/features.svg",
};

const About = () => {
  return (
    <>
      <div className='text-white min-h-screen relative'>

        <section id='features' className='relative block px-6 py-10 md:py-10 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30'>
          <div className='mx-[-10px] md:px-10 my-5 '>
            <div className='flex pt-2 mb-10 justify-center text-4xl font-extrabold font-sans items-center'>
              About Fuel My Work!
            </div>
            <br />
            <div className='text-center font-bold text-white'>
              "Fueling Creativity, One Cup at a Time"
            </div>
            <p className='p-4 text-gray-200 text-md text-center font-sans'>
              At Fuel My Work!, we are committed to fostering a vibrant community where developers, creators, and influencers can thrive. Our crowdfunding platform is designed to connect talented individuals with supporters who believe in their vision and want to help bring their projects to life. We understand that financial support is crucial for creativity and innovation, and we strive to make the process seamless and rewarding for both creators and backers.
            </p>
            <p className='p-4 text-gray-200 text-md text-center font-sans'>
              Our mission is to empower developers, content creators, artists, and influencers by providing them with the resources they need to succeed. Whether you're a developer working on the next groundbreaking app, a content creator producing engaging and informative videos, an artist creating stunning visual works, or an influencer sharing your unique perspective with the world, Fuel My Work! is here to support you every step of the way.
            </p>
            <p className='p-4 text-gray-200 text-md text-center font-sans'>
              We believe in the transformative power of community support and the magic that happens when people come together to champion a common cause. Our platform is more than just a crowdfunding site; it's a space where dreams can become reality, and innovative ideas can flourish. By providing a straightforward and user-friendly way for patrons to contribute, we aim to create a supportive ecosystem that nurtures creativity and drives progress.
            </p>
            <p className='p-4 text-gray-200 text-md text-center font-sans'>
              At Fuel My Work!, we take pride in helping creators reach their full potential. We are passionate about leveraging the power of technology to build a community that values and invests in creative endeavors. Join us on this exciting journey and be part of a movement that celebrates and sustains the talents of developers, creators, and influencers. Together, let's fuel creativity, one cup at a time.
            </p>
          </div>
          <div className='bg-white h-1 opacity-10 my-20'>
          </div>
          <div className='relative mx-auto max-w-5xl text-center'>
            <span className='text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider'>
              Why Choose Us
            </span>
            <h2 className='block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl'>
              Support Creativity and Innovation
            </h2>
            <p className='mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400'>
              At Fuel My Work!, we empower developers, creators, and influencers by connecting them with supporters to fund their projects. No technical skills required – our intuitive platform makes it easy to receive support and bring your visions to life.
            </p>
          </div>
          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={ICON_PATHS.customization}
              title="Easy Customization"
              description="Personalize your campaign page's look and feel, from color schemes to fonts, to match your unique style."
            />
            <FeatureCard
              icon={ICON_PATHS.performance}
              title="High Performance"
              description="Our platform is optimized for fast performance, ensuring your supporters can access your campaign quickly and easily."
            />
            <FeatureCard
              icon={ICON_PATHS.features}
              title="Comprehensive Features"
              description="Our platform offers everything you need to run a successful campaign, from analytics to support tools."
            />
          </div>

          <div className='bg-white h-1 opacity-10 my-20'>
          </div>

          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              How It Works
            </h3>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
              <div className="flex items-center">
                <img
                  src="/group.gif"
                  alt="Fans Want to Collaborate"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">Fans Want to Collaborate</h4>
                  <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/dollar.gif"
                  alt="Support Through Fuel"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">Support Through Fueling</h4>
                  <p>Receive support from your fans in the form of fuel purchases, directly contributing to your project funding.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 pt-12 text-center">Benefits for Creators</h3>
            <ul className="list-disc list-inside mb-12 text-center">
              <li>Direct financial support from your fanbase</li>
              <li>Engage with your fans on a more personal level</li>
              <li>Access to a platform tailored for creative projects</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-6 text-center">Benefits for Fans</h3>
            <ul className="list-disc list-inside mb-12 text-center">
              <li>Directly contribute to the success of your favorite creators</li>
              <li>Exclusive rewards and perks for supporting creators</li>
              <li>Be part of the creative process and connect with creators</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-6 text-center">Benefits of Collaboration</h3>
            <ul className="list-disc list-inside mb-12 text-center">
              <li>Unlock new opportunities through collaboration with fellow creators</li>
              <li>Expand your network and reach a wider audience</li>
              <li>Combine skills and resources to create innovative projects</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-6 text-center">Community Engagement</h3>
            <ul className="list-disc list-inside text-center">
              <li>Connect with a supportive community of like-minded individuals</li>
              <li>Receive valuable feedback and encouragement from peers</li>
            </ul>
          </div>
          <div
            className="absolute top-0 left-0 z-0 h-1/3 w-full "
            style={{
              backgroundImage:
                "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
              borderColor: "rgba(92, 79, 240, 0.2)",
            }}
          ></div>
          <div
            className="absolute top-0 right-0 z-0 h-1/3 w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
              borderColor: "rgba(92, 79, 240, 0.2)",
            }}
          ></div>
        </section>



      </div>
    </>
  )
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
      <div className='border-2'
        style={{
          backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
          borderColor: 'rgb(132, 127, 178)',
          padding: '10px',
          display: 'inline-block',
          borderRadius: '15%', // Optional: creates a circular frame
        }}
      >

        <img src={icon} alt={`${title} icon`} className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md "
          style={{
            width: '48px', // Set the width
            height: '48px', // Set the height
            display: 'block', // Block display for centering
          }} />
      </div>
      <h3 className="mt-6 text-gray-400">{title}</h3>
      <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>{description}</p>
    </div>
  );
};

export default About


export const metadata = {
  title: "About - Fuel My Work!",
}