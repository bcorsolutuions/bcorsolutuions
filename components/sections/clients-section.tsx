'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import Image from 'next/image';
import Link from 'next/link';

export function ClientsSection() {
  const { language, isRTL } = useLanguage();

  const clients = [
    {
      name: 'Real Taste Group',
      logo: '/RT.jpg', // Replace with actual logo
      description: {
        en: 'Real Taste Group is a leading bakery and confectionery brand known for its premium handmade Arabic sweets, pastries, and snacks. With multiple production outlets across the country, the company is committed to delivering high-quality products through a strong distribution network and a passion for traditional flavors.',
        ar: 'شركة رائدة في مجال الأغذية والمشروبات في البحرين'
      },
      website: 'https://realtastegroupbh.com/'
    },
    {
      name: 'Fazco',
      logo: '/Faieq.png', // Replace with actual logo
      description: {
        en: ' Faieq Alzayani Co. W.L.L. (FAZCO) has evolved into a prominent player in the import and distribution of luxury and consumer goods in Bahrain',
        ar: 'مزود حلول مبتكرة في الشرق الأوسط'
      },
      website: 'https://www.fazco.me/'
    },
    {
      name: 'Valcoa Group',
      logo: '/Valcoa.png',
      description: {
        en: 'Valcoa Group is a diversified conglomerate with operations spanning trading, contracting, and services across the Gulf region, delivering quality solutions to industries and communities.',
        ar: 'مجموعة فالكوا مجموعة متنوعة تعمل في مجالات التجارة والمقاولات والخدمات في منطقة الخليج'
      },
      website: 'https://valcoagroup.com/'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white",
            isRTL && "font-cairo"
          )}>
            {isRTL ? 'عملاؤنا' : 'Our Clients'}
          </h2>
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300",
            isRTL && "font-cairo"
          )}>
            {isRTL 
              ? 'نفخر بالعمل مع شركات رائدة في المنطقة'
              : 'Proud to work with leading companies in the region'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link 
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={80}
                  className="mx-auto mb-6"
                />
              </Link>
              <h3 className={cn(
                "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                isRTL && "font-cairo"
              )}>
                {client.name}
              </h3>
              <p className={cn(
                "text-gray-600 dark:text-gray-300",
                isRTL && "font-cairo"
              )}>
                {client.description[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}