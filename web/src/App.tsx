interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button 
  className="bg-red-400 rounded px-4 h-10 hover:bg-red-600 transition-colors ">
  {props.text ?? 'Default'}
  </button>
}

function App() {
  return (
    <div className="flex gap-3">
      <Button text="Registrar"/>
      <Button text="Entrar"/>
    <Button />
    </div>
  )
}

export default App
