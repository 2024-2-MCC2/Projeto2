import React, { useState } from "react"
import WhereDonateCard from "../ComplementPages/WhereDonateCard"
import image from "../../Assets/BancodeSangue.jpg"
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 9vh;
    align-items: center;
    justify-content: center; /* Centraliza os botões */
    gap: 20px; /* Espaço entre os botões */
`
const Button = styled.button`
    border: solid 2px #8b0000;
    background-color: #fff;
    color: #8b0000;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.2s ease 0s;
    border-radius: 10px;
    padding: 10px;
    &:hover {
        cursor: pointer;
        background-color: #8b0000;
        color: #fff;
    }
`

function WhereDonate() {
    const capital = [
        { id: '1', src: 'https://abcdoabc.com.br/wp-content/uploads/2024/01/hospital-do-servidor-sp-525x350.jpg.webp', alt: '1', title: "Hospital do Servidor Público Municipal" },
        { id: '2', src: 'https://media.glassdoor.com/l/55/28/8a/1f/portaria-2.jpg?signature=7886caa31dedfd325ce6911aab0d38d6e8b559d72e9119ae8fa64047e4b5657a', alt: '2', title: " A Beneficência Portuguesa " },
        { id: '3', src: 'https://redesantacatarina.org.br/hospital/santacatarina-paulista/Imagens/Galeria%20de%20Fotos/imagens%20HSC_Galeria%20Foto_galeria_9.png', alt: '3', title: "Hospital Santa Catarina" },
        { id: '4', src: 'https://media.graphassets.com/WEDu8YxARH6k1OrDaIOA', alt: '4', title: "Hospital Sírio Libanês" },
        { id: '5', src: 'https://medicinasa.com.br/wp-content/uploads/2023/03/IGESP-Litoral-2.jpg', alt: '5', title: "Hospital IGESP" },
        { id: '6', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc7BjKfi_yTWeB47uzPl90jWEcRQNxoSlBQ&s', alt: '6', title: "Hospital Municipal Dr. Fernando Mauro P. da Rocha" },
        { id: '7', src: 'https://portalmedicinaesaude.com/wp-content/uploads/2021/06/Hemocentro_31_05_OK.jpg', alt: '7', title: "Hemocentro da Santa Casa de São Paulo" },
        { id: '8', src: 'https://portalhospitaisbrasil.com.br/wp-content/uploads/Concep%C3%A7%C3%A3o-da-fachada-do-novo-Hospital-P%C3%A9rola-Byington.jpg', alt: '8', title: "Hospital Pérola Byington" },
        { id: '9', src: 'https://www.convenioafpesp.com.br/wp-content/uploads/2020/07/sirio-libanes.jpg', alt: '9', title: "Hospital Sírio Libanês" },
        { id: '10', src: 'https://www.planodesaudepopulares.com.br/wp-content/uploads/2020/12/hospital-9-de-julho.jpg', alt: '10', title: "Hospital 9 de Julho" },
        { id: '11', src: 'https://www.saopaulo.sp.gov.br/wp-content/uploads/2024/04/O-complexo-hospitalar-que-hoje-conta-com-oito-institutos-recebera-mais-um-%E2%80%93-Foto-Marcos-Santos.jpeg', alt: '11', title: "Hospital das Clínicas" },
        { id: '12', src: 'https://www.semanariozonanorte.com.br/uploads/images/2020/11/hospital-municipal-prof-dr-alipio-correa-netto-e-revitalizado-e-amplia-estrutura-e-leitos.jpg', alt: '12', title: "Hospital Municipal Alípio Correa Neto " },
        { id: '13', src: 'https://ses.sp.bvs.br/wp-content/uploads/2018/09/img-2.jpg', alt: '13', title: "Hospital Dante Pazzanese" },
        { id: '14', src: 'https://santamarcelina.org/wp-content/uploads/2024/08/Design-sem-nome-2024-08-05T163750.894.png', alt: '14', title: "Hospital Santa Marcelina-Itaquera" },
        { id: '15', src: 'https://santacasasp.org.br/wp-content/uploads/2022/05/74010042-8955-47D5-A931-078798D0F650-1024x768.jpeg', alt: '15', title: "Hospital Municipal São Luiz Gonzaga" },
        { id: '16', src: 'https://accamargo.org.br/sites/default/files/styles/imagem_redonda_home/public/location/2021-10/fachada-tamandare.jpg?h=cfadbf3b&itok=aFmh8Rte', alt: '16', title: "Hospital A C Camargo" },
        { id: '17', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-GqRwcOQ4xE4jJBVIGeyzcz3d7UmNxJo0Q&s', alt: '17', title: "Hospital Bandeirantes" },
        { id: '18', src: 'https://fuabc.org.br/wp-content/uploads/2022/04/mandaqui.jpg', alt: '18', title: "Hospital Mandaqui" },
        { id: '19', src: 'https://movimentoeconomico.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-20-at-09.51.24.jpeg', alt: '19', title: "Hospital Israelita Albert Einstein" },
        { id: '20', src: 'https://www2.gndi.com.br/documents/124399976/160447626/Hospital+do+Cora%C3%A7%C3%A3o+Paes+Leme+2.jpg/7d502a81-3f8c-21d4-2f50-907d64e77128?t=1632150394436', alt: '20', title: "Hospital do Coração" },
        { id: '21', src: 'https://lh5.googleusercontent.com/proxy/SUjuWuqR74dDmChtRLv3ICqKmW_7nl0nIH3YMPlY85_S53uZPauqfhkMnaLLl_YWeK5NWmzkPLZS1kauyvarzYt4eerM3KsrBQP0j068h0tQ', alt: '21', title: "Biotec Processamento do Sangue Ltda" },
        { id: '22', src: 'https://nuria.com.br/wp-content/uploads/2017/02/sssss.jpg', alt: '22', title: "Hospital Samaritano" },
        { id: '23', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MrXBlCf724gSa73nUqlI1joQA9CnGsJ1_Q&s', alt: '23', title: "São Camilo Santana" },
        { id: '24', src: 'https://www.doesanguedoevida.com.br/imagens/unidades/fachada-bssp-unidade-paraiso-2.jpg', alt: '24', title: "Banco de Sangue Paulista – Santo Amaro" },
        { id: '25', src: 'https://www.gazetavirtual.com.br/wp-content/uploads/2024/01/Criticas_atendimento_Hospital_Tatuape-arquivo-900x570.jpg', alt: '25', title: "Hospital Municipal Dr. Carmino Caricchi" },
        { id: '26', src: 'https://jornalzonasul.com.br/wp-content/uploads/2012/10/Hemocentro_pr%C3%A9dio-e1349449506452.jpg', alt: '26', title: "Hemocentro Regional da UNIFESP" },
        { id: '27', src: 'https://portalhospitaisbrasil.com.br/wp-content/uploads/2021/02/Edmundo-800x600-1.jpg', alt: '27', title: "Hospital Professor Edmundo Vasconcelos" },
        { id: '28', src: 'https://www.al.sp.gov.br/repositorio/noticia/N-05-2021/fg266241.jpg', alt: '28', title: "IAMSPE" },
        { id: '29', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcj_r2CtY1WDt3oyNwt_JDub6y2hmhEtmKmg&s', alt: '29', title: "Hospital Israelita Albert Einstein" },
        { id: '30', src: 'https://lh3.googleusercontent.com/p/AF1QipPcDTR3SlAXU5GHCgpbUhMQBe8OB7qLcU7nAUEE=s1360-w1360-h1020', alt: '30', title: "Banco de Sangue Paulista - Ed Visionaire" },
        { id: '31', src: 'https://assets-sitesdigitais.dasa.com.br/strapi/santa_paula_fachada_e9dba6070e/santa_paula_fachada_e9dba6070e.png', alt: '31', title: "Hospital Santa Paula" },
    ]
    const metropole = [
        { id: '1', src: 'https://i0.wp.com/spdm.org.br/wp-content/uploads/2022/03/a522a6005d1cb428ea34ef1769cd7452.jpg?resize=750%2C500&ssl=1', alt: '1', title: "Hospital Municipal Dr. Francisco Moran" },
        { id: '2', src: 'https://i0.wp.com/spdm.org.br/wp-content/uploads/2023/07/Design-sem-nome-30.png?fit=1920%2C1080&ssl=1', alt: '2', title: "Hospital Estadual de Diadema" },
        { id: '3', src: 'https://cms-carloschagas.amilcuidadocerto.com.br/uploads/04_Pagina_Home_Foto_Grafismo_Grafismo_1_O_Hospital_Carlos_Chagas_615078de1b.png', alt: '3', title: "Hospital Carlos Chagas" },
        { id: '4', src: 'https://www.precosplanosdesaude.com.br/wp-content/uploads/2019/04/Hospital-Stella-Maris-corpo-1.jpg', alt: '4', title: "Hospital Stella Maris" },
        { id: '5', src: 'https://www.simedicos.pt/fotos/noticias/hospital_castelo_branco_878391717617c202c8d789.jpg', alt: '5', title: "Hospital Castelo Branco" },
        { id: '6', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UtkWWTbrB_yNOKF0obmxN68QeElMChsVkQ&s', alt: '6', title: "Hospital Estadual Mário Covas " },
        { id: '7', src: 'https://d31hw7dq38n1ek.cloudfront.net/Imagens/Noticias/Sistema/hospital%20ABC/hospitais_em_santo_andre_CHM.jpg', alt: '7', title: "Centro Hospitalar Santo André" },
        { id: '8', src: 'https://adm.diarioinduscom.com.br/ged///2024_21_08_19_37_514b771ade36a5a0f2cdce07b3a78a037b.jpg', alt: '8', title: "Hemocentro Regional São Bernardo do Campo" },
        { id: '9', src: 'https://santacasadesantos.org.br/portal/images/banco_sangue/4.jpg', alt: '9', title: "Núcleo Regional de Hemoterapia Dr. Aguinaldo Quaresma" },
        { id: '10', src: 'https://s2.glbimg.com/8w7MXUcqDOlUckvXDKdpiWyN5Q0=/620x465/s2.glbimg.com/5DZAE6fEZU15StcdhDX_hEqyZHM=/620x465/s.glbimg.com/jo/g1/f/original/2017/01/25/santa_casa_de_suzano.jpg', alt: '10', title: "Santa Casa Suzano" },
    ]
    const interior = [
        { id: '1', src: 'https://www.sigamais.com/arquivo/noticia/thumb600x0/whatsapp-image-20210623-at-153433-4jpeg162447523760d386659fd80.jpeg', alt: '1', title: "Banco de Sangue e Adamantina" },
        { id: '2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntOae54dtZnm1j61SxJQH4ZC1lS-8n2CIpQ&s', alt: '2', title: "Hospital Municipal de Americana" },
        { id: '3', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4H-kn4TWg7cJv4xnJP4LtthSVkHWNLukCg&s', alt: '3', title: "Irmandade de Misericórdia Hospital São Francisco" },
        { id: '4', src: 'https://www.doesanguedoevida.com.br/imagens/unidades/banco-de-sangue-aracatuba.jpg', alt: '4', title: "Hemonúcleo de Araçatuba" },
        { id: '5', src: 'https://www2.fcfar.unesp.br/Home/hemonucleo/dsc_0343_edit.jpg', alt: '5', title: "Hemonúcleo de Araraquara" },
        { id: '6', src: 'https://www.abordagemnoticias.com/uploads/noticias/2024/01/678075-663851-04012024144309.jpg', alt: '6', title: "Hemonúcleo de Assis" },
        { id: '7', src: 'https://hospitaldeamor.com.br/site/wp-content/uploads/2020/04/leucemia-ha_fachada.jpg', alt: '7', title: "Hemonúcleo de Barretos" },
        { id: '8', src: 'https://santacasabatatais.com.br/uploads/noticias/santa-casa-batatais-fachada%20(5).png', alt: '8', title: "Santa Casa de Batatais" },
        { id: '9', src: 'https://www.famesp.org.br/assets/img/gallery/heb/img-heb-1001.jpg', alt: '9', title: "Hospital Estadual Bauru" },
        { id: '10', src: 'https://adm.famesp.org.br/view/lib/tinymce/jscripts/tiny_mce/plugins/imagemanager/files/WhatsApp%20Image%202021-09-13%20at%2011-50-52%20(2).jpg', alt: '10', title: "Hemonúcleo de Bauru" },
        { id: '11', src: 'https://www.bebedouro.sp.gov.br/portal/media/k2/items/cache/238ad27cb805995cf113698310c1d1fd_M.jpg', alt: '11', title: "Hospital Municipal Bebedouro" },
        { id: '12', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GIxrV-7e769X9nz7X4q-3H2LBHS1ALNJiQ&s', alt: '12', title: "Hemocentro de Botucatu UNESP" },
        { id: '13', src: 'https://www.hemocentro.unicamp.br/wp-content/uploads/2024/04/DSC03039-1.jpg', alt: '13', title: "Centro de Hemoterapia Celular em Medicina de Campinas" },
        { id: '14', src: 'https://www.hemocentro.unicamp.br/wp-content/uploads/2024/04/01-1-1024x768-1.jpg', alt: '14', title: "Hemocamp Clínica de Hemoterapia" },
        { id: '15', src: 'https://www.hemocentro.unicamp.br/wp-content/uploads/2024/04/mario-gatti-300x169.jpg', alt: '15', title: "Hemocentro Campinas / Unicamp" },
        { id: '16', src: 'https://www.acidadeon.com/campinas/wp-content/uploads/sites/5/2023/08/749da809a9b89d4f4cea696a19e9e1fb.jpg', alt: '16', title: "Posto de Coleta Mário Gatti" },
        { id: '17', src: 'https://www.boldrini.org.br/assets/uploads/fachada-215.jpg', alt: '17', title: "Posto de Coleta Boldrin" },
        { id: '18', src: 'https://oregional.com.br/media/noticias/7326b2a142927504b2a2cd71872cc620.jpg', alt: '18', title: "Hemonúcleo de Catanduva" },
        { id: '19', src: 'https://www.cubatao.sp.gov.br/wp-content/uploads/2023/02/FEEDC25E-ECC4-4D0D-9249-9F9ADC80365C.png', alt: '19', title: "Hospital Municipal de Cubatão" },
        { id: '20', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRymWHW0XJtjPIVFKSUhRXhAiEc15-RA8dCg&s', alt: '20', title: "Hemonúcleo de Fernandópolis" },
        { id: '21', src: 'https://s2-g1.glbimg.com/zeTpIIeRyBVKe6IHcwRBsu-W16E=/0x0:929x576/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2013/09/18/capturar2.jpg', alt: '21', title: "Hemonúcleo de Franca" },
        { id: '22', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9RvQZ47UOONFxS6KbaOhcUCXan5SsWzVSg&s', alt: '22', title: "Hemonúcleo Regional de Jaú" },
        { id: '23', src: 'https://resizedimgs.zapimoveis.com.br/crop/614x297/vr.images.sp/4ad3ade160e82c7d5099cdddd0fe0352.webp', alt: '23', title: "Bioclinica Jundiaí" },
        { id: '24', src: 'https://sampi.net.br/dir-arquivo-imagem/2024/08/b517b5aa4989b3214eee1fbe0f7d6004.jpg', alt: '24', title: "Colsan Jundiaí" },
        { id: '25', src: 'https://cdn.medblog.estrategiaeducacional.com.br/wp-content/uploads/2021/10/santa-casa-de-limeira.jpg', alt: '25', title: "Santa Casa de Limeira" },
        { id: '26', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXcjuj-kBuBuKfS6PnoRmTLqUJRTnhdvMvQ&s', alt: '26', title: "Santa Casa de Lins" },
        { id: '27', src: 'https://marilianoticia.com.br/wp-content/uploads/2024/03/Hemocentro-2.jpg', alt: '27', title: "Hemocentro de Marília" },
        { id: '28', src: 'https://dmp5lmf6xm59p.cloudfront.net/100575/0I5cNdjCqYNQVES2bGNkheqd2mC5Pm-metaOGhiSWxlcUQycmtlRVR2NU9zSU42T3BjbHFWeWg2LW1ldGFjMkZ1ZEdFZ1kyRnpZU0J0YjJkcExtcHdadz09LS5qcGc=-.jpg', alt: '28', title: "Santa Casa de Mogi das Cruzes" },
        { id: '29', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRqaUzBc_af3muXMziaR-2uOTBUVQE6qP5g&s', alt: '29', title: "Santa Casa de Olímpia" }, 
        { id: '30', src: 'https://www.bsoh.com.br/assets/images/quem_somos_new_01.png', alt: '30', title: "Banco de Sangue de Ourinhos SS Ltda" },
        { id: '31', src: 'https://www.hemocentro.unicamp.br/wp-content/uploads/2022/08/Hemonucleo.png', alt: '31', title: "Hemonúcleo de Piracicaba" },
        { id: '32', src: 'https://www.hrpresidenteprudente.org.br/images/pagina/114/1_HRPP_01_fachada.jpg', alt: '32', title: "Hospital Regional de Presidente Prudente" },
        { id: '33', src: 'https://lh3.googleusercontent.com/p/AF1QipPDUhLreDyF1PnIrRk08ttsvzkFCCMz3r4UqfEP=s1360-w1360-h1020', alt: '33', title: "Hospital Regional de Presidente Prudente" },
        { id: '34', src: 'https://www.grupogsh.com/wp-content/uploads/2023/05/BS-RIBEIRAO.png', alt: '34', title: "Banco de Sangue Ribeirão Preto" },
        { id: '35', src: 'https://portalatualidade.com.br/images/noticias/13244/24013124_8111be36-e.jpeg', alt: '35', title: "São Francisco Hemoterapia" },
        { id: '36', src: 'https://media.revide.com.br/cache/be/fe/befe7a12423c127df0edc92cf6a08bf1.jpg', alt: '36', title: "Hemocentro Ribeirão Preto" },
        { id: '37', src: 'https://www.fmrp.usp.br/wp-content/uploads/sites/356/2021/10/800x420-38.png', alt: '37', title: "Hemocentro Ribeirão Preto" },
        { id: '38', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOefxR8RTYshFKS3d6RoXwXNeP_p1hfs-1g&s', alt: '38', title: "Hospital Ana Costa" },
        { id: '39', src: 'https://s2-g1.glbimg.com/M480bx4yVErwqcouZ_wCvPmnYFY=/0x0:1299x974/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/r/c/5gLaAZTTOdaTta2xhSCw/foto-1-especial-santa-casa.jpg', alt: '39', title: "Irmandade da Santa Casa de Misericórdia de Santos" },
        { id: '40', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVznf0SceJ4qizfBvkM2OOTnBXRkKzD9Kig&s', alt: '40', title: "Núcleo de Hematologia e Hemoterapia de Santos" },
        { id: '41', src: 'https://www.santacasasaocarlos.com.br/Imagens/Noticias/WhatsApp%20Image%202023-05-17%20at%2016.37.04%20(1).jpeg', alt: '41', title: "Santa Casa de São Carlos" },
        { id: '42', src: 'https://beneriopreto.com.br/wp-content/uploads/2023/01/GUI_5312-1-scaled.jpg', alt: '42', title: "Beneficencia Portuguesa SJRP" },
        { id: '43', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeC6KkmyEv8cJY01LHRBLiD2NXQcJgVMS70g&s', alt: '43', title: "Hemocentro de São José do Rio Preto" },
        { id: '44', src: 'https://www.sp.senac.br/documents/283316/283318/Taubate%C2%BF_-Area-de-Convive%C2%BFncia-Alta-SEM-FILTRO-%2819%29.jpg/d9d3304f-1535-f6bc-9e5b-7da1d995880e?version=1.0&t=1616540069922&imagePreview=1', alt: '44', title: "Hemovalle" },
        { id: '45', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMm4wZzs9YdiXoCd_zE8rZ9fx2Ky1jlU7mBw&s', alt: '45', title: "Serviço de Hemoteraia de São José dos Campos " },
        { id: '46', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiISGyrUnXWM9we_Sy-EIJ-76tsHtkqCA_w&s', alt: '46', title: "Hospital São José - Santa Casa de São Vicente" },
        { id: '47', src: 'https://www.hemocentro.fmrp.usp.br/wp-content/uploads/2021/09/fotofrente.jpg', alt: '47', title: "Unidade do HemocentroRP Cidade Serrana" },
        { id: '48', src: 'https://smetal.org.br/wp-content/uploads/2021/06/H123547-F00000-O461.jpeg', alt: '48', title: "Hemonúcleo SorocabaColsan" },
        { id: '59', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVMwGLoBtYueYcijruSMQm15Zr6UjMGnh3g&s', alt: '59', title: "Posto de Coleta Sumaré" },
        { id: '50', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2EdyDEjuoDmR-FEkgEUm192T_pTALd3lIw&s', alt: '50', title: "Banco de Sangue Tatuí" },
        { id: '51', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TTTZdvIlTRIHnYaEZdxOa5okFMvrdwNJjA&s', alt: '51', title: "Núcleo de Hemoterapia de Taubaté" },
        { id: '52', src: 'https://tupacity.com/uploads/noticias/2022/19/476069-832348-28032023153026.png', alt: '52', title: "Santa Casa de Tupã" },
    ]

    const [arraySelecionado, setArraySelecionado] = useState(capital)

    function Capital() {
        setArraySelecionado(capital)
    }
    function Metropole() {
        setArraySelecionado(metropole)
    }
    function Interior() {
        setArraySelecionado(interior)
    }

    return (
        <>
            <Div>
                <Button onClick={Capital}>Capital</Button>
                <Button onClick={Metropole}>Metrópole</Button>
                <Button onClick={Interior}>Interior</Button>
            </Div>
            <WhereDonateCard arraySelecionado={arraySelecionado} />
        </>
    )
}
export default WhereDonate
