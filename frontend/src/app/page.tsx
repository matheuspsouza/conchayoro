import { blackFridayFlag } from './flag';

export default async function Home() {
  const black_friday = await blackFridayFlag();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-monotext-sm lg:flex">
        <h1> Welcome to the ConchaYOro App - deploy v3 - Matheus Patrocínio Souza</h1>
          { black_friday ? <button> Promo </button> : <button> Normal </button> }
      </div>
    </main>
  )
}