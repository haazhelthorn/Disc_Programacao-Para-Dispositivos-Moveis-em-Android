import { useState } from 'react';
import Button from './Button';
import HelperButton from './HelperButton';

export default function Calculator() {
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');


  const handleCalculate = () => {
    const etanolValor = parseFloat(etanol.replace(',', '.'));
    const gasolinaValor = parseFloat(gasolina.replace(',', '.'));

    if (isNaN(etanolValor) || isNaN(gasolinaValor)) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const razao = etanolValor / gasolinaValor;

    if (razao < 0.7) {
      setResultado(`A recomendação é abastecer com álcool. Resultado: ${razao.toFixed(2).toString().replace(".", ",")}`);
    } else {
      setResultado(`A recomendação é escolher a gasolina. Resultado: ${razao.toFixed(2).toString().replace(".", ",")}`);
    }
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>

      <img src="/src/assets/react.svg" alt="ImgBombaCombustível" />

      <h1>Qual a melhor opção?</h1>
      <div>
        <input
          type="text"
          placeholder="Etanol (preço por litro)"
          value={etanol}
          onChange={(e) => setEtanol(e.target.value)}
          style={{ margin: '10px', padding: '10px', width: '300px' }}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Gasolina (preço por litro)"
          value={gasolina}
          onChange={(e) => setGasolina(e.target.value)}
          style={{ margin: '10px', padding: '10px', width: '300px' }}
        />
      </div>

      <Button onClick={handleCalculate}>Calcular</Button>

      <h2>{resultado}</h2>
      
      <HelperButton>
        * O cálculo é feito dividindo o preço do etanol pelo preço da gasolina. 
        Se o resultado for menor que 0,7, é mais vantajoso abastecer com etanol.
      </HelperButton>

    </div>
  );
};

