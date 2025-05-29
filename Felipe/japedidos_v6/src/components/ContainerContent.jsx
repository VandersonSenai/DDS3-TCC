import '../style/style.css';

const ContainerContent = ({ section }) => {
  return (
    <div className="container">
      <h2>Menu : {section}</h2>
      <p>Conteúdo dinâmico para: {section}</p>
    </div>
  );
};

export default ContainerContent;
