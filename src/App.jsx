import './App.css'
import Button from './components/Button'
import Nav from './components/Nav'
import ArrowIcon from './components/ArrowIcon'
import CardCount from './components/CardCount'
import DownloadIcon from './components/DownloadIcon'
import UserIcon from './components/UserIcon'
import CompanyList from './components/CompanyList'
import CardFeature from './components/CardFeature'
import ReasonCard from './components/ReasonCard'

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

      <section className="w-screen h-auto bg-transparent">
        <div className="min-h-screen max-w-5xl mx-auto py-[100px] flex gap-[30px] flex-col-reverse lg:flex-row px-[20px] lg:px-0">
          <img src="./section-3.svg" className="w-[498px]" />
          <div>
            <h3 className="text-dark font-semibold text-sm mb-[15px]">TEKNOLOGI YANG DIGUNAKAN</h3>
            <h2 className="text-3xl text-dark mb-[10px]">Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun! 😱</h2>
            <p className="text-darklight mb-[40px]">Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:</p>
            <div className="flex flex-col gap-[30px]">
              <ReasonCard icon="😠" title="Kamu Adalah Beban Kami" body="Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!" />
               <ReasonCard icon="🐨" title="Males Buat Ngembangin" body="Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin." />
               <ReasonCard icon="😴" title="Pokoknya Males Aja Lah" body="Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah." />
            </div>
            
          </div>
        </div>
      </section>

      <section className="w-screen h-auto bg-transparent px-[20px]">
        <div className="max-w-5xl mx-auto my-[100px] bg-primary rounded-3xl flex">
          <div className="py-[100px] px-[80px] flex-1">
            <h3 className="text-sm font-semibold text-white mb-[15px]">DOWNLOAD APLIKASINYA</h3>
            <h2 className="text-3xl text-white mb-[10px]">Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau Symbian Store</h2>
            <ul className="list-disc text-white/60 mb-[40px]">
              <li>Android Version: Mojave+ </li>
              <li>iOS Version: Lolipop+</li>
              <li>Symbian: 20.04+</li>
            </ul>
            <div className="flex gap-[15px]">
              <a href="#"><img src="./apple-download.svg" /></a>
              <a href="#"><img src="./android-download.svg" /></a>
            </div>
          </div>
          <div className="flex-1 justify-center lg:block hidden">
            <img src="./download-section.svg" />
          </div>
        </div>
      </section>
    </main>
  )
}
