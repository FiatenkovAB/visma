import './index.css'
const ServicesPages = () => {
    return(
        <div className="servicesPages">
            <div className="servicestext">
                <h1>Услуги</h1>
                <p>Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год</p>
                <p>Условия определения цены договора и тарифы на работы</p>
                <p>Договор перевалки (типовая форма)</p>
            </div>
            <div className="servicesBtn">
            <div className='btn1'>
                <button><p>услуги</p><h3>Хранение грузов</h3></button>
                <button><p>услуги</p><h3>Складские операции</h3></button>
                <button><p>услуги</p><h3>Буксировка / сопровождение судов</h3></button>
            </div>
                <div className='btn2'>
                <button><p>услуги</p><h3>Швартовые операции</h3></button>
                <button><p>услуги</p><h3>Агентское обслуживание судов</h3></button>
                <button><p>услуги</p><h3>Погрузочно-разгрузочная деятельность</h3></button>
                </div>
            </div>
        </div>
    )
}
export default ServicesPages;