import styled from "styled-components"

const SectionContainer = styled.div`
    text-align: center;
    background-color: #ECE7D5;
    padding: 20px; 
`
const MainTitle = styled.h1`
    text-align: center;
    margin: 30px 0;
`

function BloodBankTexts(){
   return (
      <SectionContainer>
        <MainTitle>Banco de Sangue</MainTitle>
         <p>
         Os bancos de sangue são essenciais para salvar vidas, pois garantem a disponibilidade de sangue para uma ampla gama de necessidades médicas, como cirurgias de emergência, transplantes, tratamentos de câncer, e apoio a pacientes com doenças crônicas, como a anemia falciforme. Cada doação de sangue pode salvar até quatro vidas, já que o sangue coletado é separado em diferentes componentes sanguíneos como hemácias, plaquetas e plasma sanguíneo, cada um podendo ser utilizado de maneira específica para atender necessidades distintas.
         </p>
         <p>
         A quantidade de sangue nos bancos é uma preocupação constante, especialmente em grandes regiões, como o estado de São Paulo, onde há uma demanda muito alta. Por questões de saúde pública, é vital manter os estoques abastecidos, mas os bancos de sangue frequentemente enfrentam períodos críticos em que os estoques caem para níveis alarmantes. Isso ocorre, principalmente, em períodos de férias, feriados prolongados e no inverno, quando o número de doadores diminui significativamente. Esse problema é ainda mais grave, pois o sangue tem prazo de validade: as plaquetas, por exemplo, duram cerca de cinco dias, enquanto as hemácias podem ser armazenadas por até 42 dias.
         </p>
         <p>
         A preocupação com a quantidade suficiente de sangue nos bancos é constante, pois a falta de estoque pode resultar em atrasos nos tratamentos ou em situações de risco para os pacientes. Por isso, campanhas de conscientização e programas de doação são fundamentais para estimular a população a doar regularmente. A colaboração da sociedade, ao se tornar doadora ativa, é um compromisso que faz a diferença e contribui diretamente para que os hospitais estejam prontos para salvar vidas em momentos críticos.
         </p>
      </SectionContainer>
   )
}
export default BloodBankTexts