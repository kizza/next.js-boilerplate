import Block from "@/components/layout/Block";
import Map from "@/components/Map";
import classnames from "classnames";
import { Ephesis } from "next/font/google";

const font = Ephesis({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    // ${["motion-translate-y-in-50", "motion-opacity-in-0"].map(c => `intersect:${c}`).join(" ")}
  // const enterMotion = `no-intersect:hidden intersect:visible translate-y-[10%] intersect:translate-y-0 intersect:motion-translate-y-in-[10%] intersect:motion-opacity-in-0`
  const animation = `delay-200 duration-500 transition ease-out`
  const enterMotion = `${animation} opacity-0 translate-y-[10%] intersect:opacity-100 intersect:translate-y-0`
  // const enterMotion = `-translate-y-1/4 intersect:translate-y-0 transition ease-out delay-200 duration-500`
  const columnMotion = `basis-1/3 ${enterMotion}`

  return (
    <main className="text-[#ded7e3] text-center md:text-left leading-relaxed">
      <div className="overflow-x-clip">
        <Block className="!p-0 motion-opacity-in_0 motion-blur-in-m_d motion-duration-[2s] motion-delay-700">
          <h2 className={classnames(font.className, "text-center md:text-left")}>Crafting voices that <em>resonate!</em></h2>
        </Block>
      </div>

      <div className="space-y-16">
        <Block className="text-xl leading-8 text-white text-center bg-black bg-opacity-80 rounded-md p-8 bg-gradient-to-br from-[#24162b]">
          <p>Tucked away in the serene greenery of Kenmore, a one-of-a-kind vocal studio awaits, ready to elevate your singing journey to new heights.</p>
        </Block>

        <Block className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-4 items-start">
          <div no-intersect="" className={`${columnMotion} !delay-[10ms]`}>
            <h3>Vocal excellence</h3>
            <p>Unlock the true potential of your voice with Susanna’s expert guidance. With decades of performance experience and a research masters in world music styles, Susanna will help you build solid vocal technique and achieve professional-level control, strength, and precision.</p>
          </div>

          <div no-intersect="" className={`${columnMotion} !delay-[120ms]`}>
            <h3>Connected expression</h3>
            <p>Delve into the art of connection and storytelling. Susanna’s coaching goes beyond technique, focusing on emotional expression and stage presence, empowering singers to captivate their audiences and bring their performances to life.</p>
          </div>

          <div no-intersect="" className={`${columnMotion} !delay-[300ms]`}>
            <h3>Tailored lessons</h3>
            <p>Learn in an eclectic home studio designed for creativity and focus. For your debut performace, new album or upcoming exam — each lesson is tailored to your unique voice, goals, and style.</p>
          </div>
        </Block>

        <div className="sl-ash" />
      </div>

      <div className="space-y-2">
        <div id="about" className="py-16 bg-gradient-to-br from-[#0d2226]">
          <Block>
            <h3 className={`${enterMotion} motion-delay-[200ms] text-2xl text-black z-0 alt`}>Meet Susanna</h3>
            <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row-reverse">
              <div className="md:w-1/3 h-full md:ml-10 space-y-4">
                <img src="/images/susanna.jpg" alt="Susanna O'Leary" className="intersect:opacity-100 opacity-10 transition duration-700 border-solid border-2 border-[#2a2a2a]" />
                <p className="text-sm text-center text-[#8b9691]">
                  Bachelor of Music (B.Mus.)<br />
                  Graduate diploma in vocal pedagogy (GradDip vocal pedagogy)<br />
                  Research Masters in Music (M.Mus)
                </p>
              </div>
              <div className="space-y-8 md:w-2/3">
                <p>Susanna O’Leary is a passionate and eclectic world musician with a particular dedication to the art of contemporary voice. With years of experience teaching at the Queensland Conservatorium of Music, Griffith University, under the esteemed Irene Bartlett and a Masters in world music styles, Susanna has honed her craft to perfection.</p>

                <p>Her career spans decades of performing with Brisbane’s finest artists, taking the stage internationally at the Edinburgh Festival Fringe, and presenting at APME international popular music conference at Napier University in Edinburgh. Susanna’s teaching is rooted in technical excellence, but her true strength lies in helping singers connect with the heart of their performance, transforming their voice into an instrument of emotional expression.</p>

                <p>Whether you’re preparing for auditions, refining your technique, or looking to reconnect with the joy of singing, Susanna’s vibrant, personalised approach will guide you every step of the way.</p>
              </div>
            </div>
          </Block>
        </div>

        <div id="studio" className="py-16 bg-gradient-to-bl from-[#24162b]">
          <Block>
            <h3 className={`${enterMotion} motion-delay-[200ms] text-2xl text-black z-0 alt`}>The space</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap">
                <img src="/images/studio.jpg" alt="Kenmore vocal studio space" className="md:w-1/2 opacity-10 intersect:opacity-100 transition duration-700 border-solid border-2 border-[#2a2a2a]" />
                <img src="/images/studio-wide.jpg" alt="Kenmore vocal studio space wide angle" className="md:w-1/2 opacity-10 intersect:opacity-100 transition duration-700 border-solid border-2 border-[#2a2a2a]" />
              </div>
              <div className="space-y-8 md:w-3/4">
                <p>Nestled in leafy Kenmore, this purpose-built home studio offers a welcoming space for vocalists to develop their talent, build confidence, and shape a voice that resonates.</p>
                <p>With a history of hosting rehearsals and studio sessions across a wide range of artists, it&apos;s a well-seasoned space ready to support you on your own musical journey.</p>
              </div>
            </div>
          </Block>
        </div>

        <div id="contact" className="py-10">
          <Block>
            <h3 className={`${enterMotion} motion-delay-[200ms] text-2xl`}>Get in touch</h3>
            <div className="space-y-6">
              <div className="space-y-8 md:w-3/4">
                Why not contact Susanna to take the next step in your vocal journey?
                <br />Email <a href="mailto:susanna.oleary@gmail.com">susanna.oleary@gmail.com</a> or call 0418 226 712 to start the conversation.
              </div>

              <Map />
            </div>
          </Block>
        </div>
      </div>
    </main>
  )
}
