import './App.css'
import Button from './components/Button'
import Nav from './components/Nav'
import ArrowIcon from './components/ArrowIcon'
import CardCount from './components/CardCount'
import DownloadIcon from './components/DownloadIcon'
import UserIcon from './components/UserIcon'
import CompanyList from './components/CompanyList'
import CardFeature from './components/CardFeature'

export default function App() {
  return (
    <main>
      <section className="section-1 w-screen h-auto">
        <div className="max-w-5xl mx-auto pt-[52px] min-h-screen flex flex-col gap-[75px] px-[20px] lg:px-0 ">
          <Nav />
          
          <div className="flex justify-between gap-[30px] flex-col items-center lg:flex-row">
            <div className="flex-1 max-w-[497px]">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-primary mb-4">CHAT N' RECHAT</h3>
                <h1 className="text-4xl text-dark mb-4">Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!</h1>
                <p className="text-lg text-darklight mb-[30px]">Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
                <div className="flex gap-4 mb-[70px] flex-wrap justify-center sm:justify-start">
                  <Button color="primary" size="large">
                    Register 
                    <ArrowIcon />
                  </Button>
                  <Button color="secondary" size="large">Learn More</Button>
                </div>
                <div className="flex gap-[42px] flex-wrap justify-center sm:justify-start">
                  <CardCount title="TOTAL DON'TLOUD" count="1,501,234"  icon={<DownloadIcon />}/>
                  <CardCount title="TOTAL USERS" count="1,318,829"  icon={<UserIcon />}/>
                </div>
              </div>
            </div>
            <img src="./hero.svg" className="flex-1 w-[483px] h-[535px]" />
          </div>
          
          <div className="p-[60px] flex justify-center gap-[40px] flex-wrap">
            <CompanyList />
          </div>
        </div>
      </section>

      <section className="section-2 w-screen h-auto">
        <div className="max-w-5xl mx-auto py-[100px] min-h-screen px-[20px] lg:px-0">
          <h3 className="text-center text-sm font-semibold tracking-wider text-dark mb-4">NGGAK HARUS SIH SEBENERNYA</h3>
          <h2 className="text-center text-3xl text-dark mb-2.5">Kenapa Harus Pakai Chat N’ Rechat?</h2>
          <p className="text-center mx-auto text-darklight max-w-[493px] mb-[100px]">Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.</p>
          <div className="flex justify-center flex-wrap gap-[20px]">
            <CardFeature img="./features/feature-1.svg" title="Groups to keep in touch" body="Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos." />
            <CardFeature img="./features/feature-2.svg" title="Groups to keep in touch" body="Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees." />
            <CardFeature img="./features/feature-3.svg" title="Groups to keep in touch" body="With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations." />
          </div>
        </div>

      </section>
    </main>
  )
}
