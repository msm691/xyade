import React from 'react';
import { motion } from 'motion/react';
import { VideoBackground } from './VideoBackground';
import { AudioPlayer } from './AudioPlayer';
import { ProfileCard } from './ProfileCard';
import { SocialButton } from './SocialButton';
import { MessageCircle, Send, Twitter, MapPin } from 'lucide-react';

interface MainPageProps {
  startAudio?: boolean;
}

export function MainPage({ startAudio = false }: MainPageProps) {
  // 🎬 AJOUTEZ VOS MÉDIAS PERSONNALISÉS ICI :
  // ==========================================
  
  // 1. Pour ajouter une VIDÉO de fond :
  //    - Décommentez la ligne ci-dessous
  //    - Remplacez l'URL par le lien de votre vidéo (format .mp4, .webm, etc.)
  //    - Exemple : const videoUrl = 'https://votresite.com/video.mp4';
  const videoUrl = 'https://r2.guns.lol/681fde3d-d280-40ef-80e0-60698f46bc1e.mp4';
  
  // 2. Pour ajouter une MUSIQUE de fond :
  //    - Décommentez la ligne ci-dessous
  //    - Remplacez l'URL par le lien de votre musique (format .mp3, .ogg, etc.)
  //    - Exemple : const audioUrl = 'https://votresite.com/musique.mp3';
  const audioUrl = 'https://r2.guns.lol/681fde3d-d280-40ef-80e0-60698f46bc1e.mp4';
  
  // 3. 👤 Pour changer votre PHOTO DE PROFIL :
  //    - Ajoutez l'URL de votre photo ci-dessous
  //    - Formats supportés : .jpg, .png, .gif, .webp
  //    - Exemple : const avatarUrl = 'https://votresite.com/avatar.jpg';
  const avatarUrl = 'https://i.ibb.co/hJqPhc8M/swift.png';
  
  // 4. 📝 Pour changer vos INFORMATIONS DE PROFIL :
  const username = 'Xyade';           // Votre pseudo
  const tag = '#madebykts';            // Votre tag/identifiant
  const description = 'UUID : 2';  // Votre description
  
  // 5. 🏆 Pour ajouter des BADGES/ICÔNES sous votre pseudo :
  //    - Ajoutez les URLs de vos icônes dans le tableau ci-dessous
  //    - Elles s'afficheront en dessous du pseudo
  //    - Exemple : const badges = ['url1', 'url2', 'url3'];
  const badges = [
    'https://i.ibb.co/k28w3Whx/early.png'
  ];
  
  // ⚠️ IMPORTANT :
  // - Les fichiers doivent être hébergés en ligne (pas de fichiers locaux)
  // - Utilisez des services comme : Cloudinary, Imgur, votre propre serveur, etc.
  // - Les URL doivent être accessibles publiquement
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Video background - passez votre videoUrl ici */}
      <VideoBackground videoUrl={videoUrl} />
      
      {/* Audio player - décommentez la ligne ci-dessous pour activer la musique */}
      <AudioPlayer audioUrl={audioUrl} autoPlay={startAudio} />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Passez vos props personnalisées au ProfileCard */}
          <ProfileCard 
            avatarUrl={avatarUrl}
            username={username}
            tag={tag}
            description={description}
            badges={badges}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-3 mt-12"
          >
            {/* 🔗 PERSONNALISEZ VOS BOUTONS ICI : */}
            {/* ==================================== */}
            
            {/* Discord  Guild */}
            <SocialButton
              icon={<MessageCircle className="w-5 h-5" />}
              label="Discord"
              href="https://discord.gg/pole-emploi"
            />
            
            {/* Telegram */}
            <SocialButton
              icon={<Send className="w-5 h-5" />}
              label="Developper"
              href="https://t.me/faussaire1337"
            />
          

            {/* 💡 GUIDE RAPIDE :
                1. Changez le "label" pour modifier le texte du bouton
                2. Changez le "href" pour modifier la destination du lien
                3. Pour ajouter plus de boutons, copiez/collez un <SocialButton>
                4. Pour supprimer un bouton, effacez le bloc <SocialButton>
            */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center gap-2 text-white/60 text-sm mt-12"
          >
            <MapPin className="w-4 h-4" />
            <span>Mérignac, France</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Grain effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-[5] opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>
    </motion.div>
  );
}
