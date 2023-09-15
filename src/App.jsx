import './App.css'
import Button from './components/Button'
import Nav from './components/Nav'
import ArrowIcon from './components/ArrowIcon'
import CardCount from './components/CardCount'
import DownloadIcon from './components/DownloadIcon'
import UserIcon from './components/UserIcon'

export default function App() {
  return (
    <main>
      <section className="max-w-5xl mx-auto mt-[52px] min-h-screen flex flex-col gap-[75px]">
        <Nav />
        <div className="flex justify-between gap-[30px]">
          <div className="flex-1 w-[497px]">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-primary mb-4">CHAT N' RECHAT</h3>
              <h1 className="uppercase text-4xl text-dark mb-4">Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!</h1>
              <p className="text-lg text-darklight mb-[30px]">Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
              <div className="flex gap-x-4 mb-[70px]">
                <Button color="primary" size="large">
                  Register 
                  <ArrowIcon />
                </Button>
                <Button color="secondary" size="large">Learn More</Button>
              </div>
              <div className="flex gap-x-[42px]">
                <CardCount title="TOTAL DON'TLOUD" count="1,501,234"  icon={<DownloadIcon />}/>
                <CardCount title="TOTAL USERS" count="1,318,829"  icon={<UserIcon />}/>
              </div>
            </div>
          </div>
          <img src="./hero.svg" className="flex-1 w-[483px] h-[535px]" />
        </div>
      </section>
    </main>
  )
}
