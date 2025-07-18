import Hero from '../components/Hero';
import ArtisticDivider from '../components/ArtisticDivider';
import { motion } from 'framer-motion';
import CalligraphyText from '../components/CalligraphyText';
import NewsletterForm from '../components/NewsletterForm';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Hero
        imageUrl="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752329180307-WhatsApp%20Image%202025-07-09%20at%2019.20.55_b8c9d390.jpg"
        title="L'atelier du temps"
        subtitle="Une passerelle entre les époques"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center"
        >
          <div className="text-right mb-4 italic text-sm text-gray-400">
            Signed and Dated by Christo
          </div>
          <CalligraphyText
            text="Le Pont Neuf était une prouesse technique inaugurée en 1602, le premier pont pour traverser la Seine et relier les rives droite et gauche. Aujourd'hui c'est la passerelle de l'Atelier du Temps qui unit les technologies des 19e, 20e et 21e siècle."
          />
        </motion.div>
      </div>

      <ArtisticDivider />
      <CountdownTimer />
      <ArtisticDivider />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Art Specialist Sixtine Crutchfield opens L'Atelier du Temps, an art gallery in the heart of Geneva.
            </h2>
            <p className="text-gray-300 mb-6">
              To continue building bridges between old and new tech, a very special venue was launched last night in the heart of Geneva, a stone throw away from the lake. Nestled in a cosy environment of a mix of 19th and 20th Century furniture and art, you will see digital art on large screens and QR codes leading you to the latest NFT trend.
            </p>
            <p className="text-gray-300 mb-6">
              We will host conferences and welcome the media for more information. Collectors will be invited to try out and a personalised curation will accompany them in their adventure of collecting NFTs.
            </p>
            <p className="text-gray-300">
              Event and venues are yet to be announced, stay tuned by subscribing to the newsletter!
            </p>
          </div>
          <div className="relative">
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752328963543-IMG-20250523-WA0002.jpg"
              alt="Exhibition preview"
              className="rounded-lg grayscale"
            />
          </div>
        </motion.div>
      </section>

      <ArtisticDivider />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <NewsletterForm />
      </section>
    </div>
  );
};

export default Home;