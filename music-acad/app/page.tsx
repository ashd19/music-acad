import HeroSection from "@/components/HeroSection"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

export default function Page(){
    const musicContent =[
        {
    title: "Beginner Guitar Lessons",
    description: "Start your guitar journey with easy-to-learn chords and strumming patterns. Play your first songs in a few weeks. Fun, interactive, and perfect for beginners."
  },
  {
    title: "Advanced Piano Mastery",
    description: "Take your piano skills to the next level with advanced techniques and expressive playing. Learn complex pieces and improve your music theory knowledge. Ideal for serious learners."
  },
  {
    title: "Vocal Training for Beginners",
    description: "Develop a strong, confident voice through proper breathing, pitch control, and vocal exercises. Learn techniques to sing different genres. Build your singing foundation from scratch."
  },
  {
    title: "Music Production with Ableton",
    description: "Learn to create, mix, and produce your own tracks using Ableton Live. Understand digital effects, sampling, and sound design. Perfect for aspiring music producers."
  },
  {
    title: "Jazz Drumming Essentials",
    description: "Master the fundamentals of jazz drumming and improve your rhythm and timing. Explore grooves, fills, and improvisation. A great class for budding drummers."
  },
  {
    title: "Classical Violin Techniques",
    description: "Learn classical violin techniques, scales, and expressive playing. Develop proper posture, bowing, and fingering skills. Perfect for students aiming to excel in classical music."
  },
  {
    title: "Songwriting Basics",
    description: "Discover the art of writing songs with melody, lyrics, and chord progressions. Learn how to structure songs and express your creativity. Ideal for beginners and hobbyists."
  },
  {
    title: "Electronic Music Composition",
    description: "Produce electronic tracks using synthesizers, samples, and digital effects. Learn composition, arrangement, and mixing techniques. Perfect for EDM and electronic music enthusiasts."
  },
  {
    title: "Ukulele for Beginners",
    description: "Learn to play simple chords and songs on the ukulele. Explore strumming patterns and fingerpicking techniques. Fun and easy for all ages."
  },
  {
    title: "Music Theory Essentials",
    description: "Understand scales, chords, harmony, and rhythm fundamentals. Learn to read sheet music and apply theory to your instrument. A must for all aspiring musicians."
  }
    ]
    return(
        <div className="Hero-section ">
            <br />

            <HeroSection/>
            
        </div>
    )
}