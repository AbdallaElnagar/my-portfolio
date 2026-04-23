import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: personalInfo.social.github },
    {
      name: 'LinkedIn',
      icon: '<image src="/chrome/static/images/fallback/icon-linkedin.jpg" xlink:href="" alt="LinkedIn" width="24" height="24" class="svg-fallback"></image>',
      url: personalInfo.social.linkedin,
    },
    // { name: 'Twitter', icon: '🐦', url: personalInfo.social.twitter },
  ];

  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className='bg-dark-900/50 border-t border-dark-700 relative overflow-hidden'>
      {/* Background Decoration */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div>
            <div className='flex items-center space-x-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>AE</span>
              </div>
              <span className='text-white font-bold text-xl'>
                Abdalla Elnagar
              </span>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-primary transition-colors text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Connect With Me</h3>
            <div className='flex gap-3 mb-4'>
              {socialLinks.map(social => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-10 h-10 bg-dark-800/50 border border-dark-700 rounded-lg flex items-center justify-center text-xl hover:border-primary/50 hover:bg-primary/10 transition-all'
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className='text-gray-400 text-sm'>
              <a
                href={`mailto:${personalInfo.email}`}
                className='hover:text-primary transition-colors'
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm text-center md:text-left'>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className='text-gray-400 text-sm text-center md:text-right'>
            Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
