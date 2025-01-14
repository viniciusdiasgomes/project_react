import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
    <h1>Secret world</h1>
    <p>Clique no botão abaixo para começar a jogar</p>
    <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;

//2:22