import Separator from '../components/Separator/Separator';
import TrilhasSuggest from '../components/TrilhasSuggest/TrilhasSuggest';

const CertificadosList = () => {
  return (
    <section data-testid='certificados-list'>
      <div>Aqui vem a lista de certificados</div>
      <Separator />
      <TrilhasSuggest />
    </section>
  );
};

export default CertificadosList;