import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/lib/theme';

export const SponsorDonate = () => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  });

  // Style classes based on theme
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-white';
  const sectionBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-cream';
  const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  // Common card style
  const cardStyle = `${cardBgClass} rounded-xl shadow-lg p-6 border ${borderClass} h-full flex flex-col`;
  
  // Sponsorship options
  const sponsorshipOptions = [
    {
      title: "Bronze Sponsor",
      amount: "P5,000",
      benefits: [
        "Logo on website",
        "Mention in event program",
        "1 free ticket to Grand Orate",
        "Certificate of Appreciation"
      ]
    },
    {
      title: "Silver Sponsor",
      amount: "P15,000",
      benefits: [
        "All Bronze benefits",
        "Logo on event banners",
        "Social media mentions",
        "3 free tickets to Grand Orate",
        "Exhibition space at events"
      ],
      highlighted: true
    },
    {
      title: "Gold Sponsor",
      amount: "P30,000",
      benefits: [
        "All Silver benefits",
        "Speaking opportunity",
        "Featured sponsor status",
        "5 free tickets to Grand Orate",
        "Exclusive networking opportunities"
      ]
    }
  ];
  
  // Donation options
  const donationOptions = [
    {
      title: "Individual Donation",
      description: "Support our mission with a one-time or recurring donation to help develop oratory skills in young people.",
      icon: "fa-solid fa-heart"
    },
    {
      title: "Equipment Donation",
      description: "Donate audio/visual equipment, books, or other resources to help our debaters and speakers.",
      icon: "fa-solid fa-microphone"
    },
    {
      title: "Volunteer Time",
      description: "Share your expertise by volunteering as a judge, mentor, or event organizer.",
      icon: "fa-solid fa-hands-helping"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`${sectionBgClass} py-20`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-header mb-4">
            <span className="text-gold">Support</span> Our Mission
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${textClass}`}>
            Help us empower the next generation of speakers, debaters, and thought leaders
          </p>
        </motion.div>
        
        {/* Sponsorship Packages */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-header text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Sponsorship <span className="text-gold">Packages</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sponsorshipOptions.map((option, index) => (
              <motion.div
                key={index}
                className={`${cardStyle} ${option.highlighted ? 'border-gold' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                {option.highlighted && (
                  <div className="absolute top-0 right-0 bg-gold text-dark py-1 px-3 text-sm font-medium rounded-bl-xl rounded-tr-xl">
                    Most Popular
                  </div>
                )}
                <div className={`text-center mb-6 ${option.highlighted ? 'mt-4' : ''}`}>
                  <h4 className={`text-xl font-bold mb-2 ${textClass}`}>{option.title}</h4>
                  <p className="text-3xl font-bold text-gold">{option.amount}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>per year</p>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {option.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fa-solid fa-check text-gold mr-2 mt-1"></i>
                      <span className={textClass}>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-auto w-full py-3 rounded-lg font-medium transition-colors ${option.highlighted ? 'bg-gold text-dark hover:bg-goldLight' : 'border-2 border-gold text-gold hover:bg-gold hover:text-dark'}`}>
                  Become a Sponsor
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Donation Options */}
        <div>
          <motion.h3
            className="text-3xl font-header text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Other Ways to <span className="text-gold">Contribute</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {donationOptions.map((option, index) => (
              <motion.div
                key={index}
                className={cardStyle}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-4">
                    <i className={`${option.icon} text-xl text-dark`}></i>
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${textClass}`}>{option.title}</h4>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {option.description}
                  </p>
                </div>
                
                <button className="mt-auto w-full py-3 border-2 border-gold text-gold hover:bg-gold hover:text-dark rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a 
              href="/contact-us" 
              className="inline-block bg-gold text-dark px-8 py-4 rounded-lg font-medium hover:bg-goldLight transition-colors"
            >
              Contact Us About Sponsorships & Donations
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SponsorDonate;