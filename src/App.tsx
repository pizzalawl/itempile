import './App.css'

interface TitleProps {
  name: string;
}

interface ButtonProps {
  label: string;
}

function Title(props: TitleProps) {
  return (
    <h1 className="text-7xl font-bold text-center relative top-5">{props.name}</h1>
  );
}

function Button(props: ButtonProps) {
  return (
    <button className='text-2xl bg-emerald-300 hover:bg-emerald-400 px-2 py-2 rounded'>{props.label}</button>
  );
}

function App() {

  return (
    <>
      <Title name="itempile"/>
      <div className='relative top-5'>
        <div className='text-center relative top-10'><Button label="Games🎮"/></div>
        <div className='text-center relative top-14'><Button label="Shop🪙"/></div>
        <div className='text-center relative top-20'><Button label="Leaderboard🏆"/></div>
      </div>
    </>
  )
}

export default App
