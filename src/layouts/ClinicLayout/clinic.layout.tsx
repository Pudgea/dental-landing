import ReversedTxtImg from '../../components/common/reversedTxtImg/reversed-txt-img';
import { imgSrc } from '../../constants/devConstants';
import './index.css'

const ClinicLayout = () => {
    return ( 
    <div className="main-container">
        <main>
            <div className="cl-div">
                <p className="title">О НАС</p>
                <p className="txt">iDentist — премиальная стоматология в самом центре Астаны</p>
                <p className="txt">iDentist — это не просто клиника, это новый стандарт стоматологического сервиса в Казахстане. Мы собрали команду лучших специалистов, объединили передовые технологии и создали пространство, где пациент чувствует себя уверенно, спокойно и в заботливых руках.</p>
            </div>
            <div className="cl-div">
                <div className="title">Почему нас выбирают</div>
                <ReversedTxtImg 
                    name={"Полный спектр стоматологических услуг в одном месте"}     
                    reversed={true}
                />
                <ReversedTxtImg 
                    name={"Цифровая диагностика и лечение на современном оборудовании"}     
                    reversed={true}
                />
                <ReversedTxtImg 
                    name={"Индивидуальный комплексный подход к каждому пациенту"}     
                    reversed={true}
                />
                <ReversedTxtImg 
                    name={"Консилиум врачей при сложных случаях"}     
                    reversed={true}
                />
                <ReversedTxtImg 
                    name={"Прозрачность на всех этапах лечения"}     
                    reversed={true}
                />
            </div>
            <div className="cl-div" style={{alignItems: 'center'}}>
                <p className="title">Удобства для пациентов</p>
                <div className="cl-comforts">
                    <div className="cl-comfort">
                        <p className="head">Собственная парковка</p>
                        <p className="txt">Бесплатная парковка — для вашего комфорта и экономии времени.</p>
                    </div>
                    <div className="cl-comfort">
                        <p className="head">Удобное расположение</p>
                        <p className="txt">Мы находимся в центре города, чтобы вам было удобно добираться из любого района.</p>
                    </div>
                    <div className="cl-comfort">
                        <p className="head">Комфортное ожидание</p>
                        <p className="txt">Вы можете расслабиться за чашечкой кофе в просторном зале с приятной атмосферой и дружелюбным персоналом.</p>
                    </div>
                </div>
            </div>
            <div className="cl-div">
                <p className="title">О Клинике</p>
                <div className="cl-clinic">
                    <div className="cl-clinic-faxs">
                        <div className="cl-clinic-fax">
                            <p className="head">since 2005</p>
                        </div>
                        <div className="cl-clinic-fax">
                            <p className="head">самая технологичная и просторная стоматология</p>
                        </div>
                    </div>
                    <div className="cl-clinic-info">
                        <p className="txt">Окружающая среда играет важную роль в нашем настроении и общем самочувствии. Особенно это ощущается в медицинских учреждениях, где обстановка может как усилить тревожность, так и, напротив, помочь почувствовать спокойствие и уверенность.</p>
                        <p className="txt">Именно поэтому мы уделили особое внимание созданию комфортной и располагающей атмосферы в нашей клинике — как для гостей, так и для сотрудников.</p>
                        <p className="txt">Мы искренне ценим ваше доверие и заботимся о вашем благополучии.</p>
                    </div>
                </div>
            </div>
            <img src={imgSrc+'clinic.jpg'} style={{borderRadius: 'var(--br10)'}} alt="" />
        </main> 
    </div>);
}
 
export default ClinicLayout;