import { Link } from 'react-router-dom';
import './index.css';

const Main =() =>{

    return(
        <div className="conteiner_main">
            <div className='main_text'>
                <div className='heading_main'>
                    <h1>Тавимский морской порт VISMA</h1>
                </div>
                    <div className='text_main'>
                        <p>Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</p>
                    </div>
                    <div className='btn_Info'>
                    <Link to='/PageCompany'>
                    <button>
                    о компании
                    </button>
                    </Link>
                    </div>
            </div>
            <div className='btn_activity'>
            <Link to='/SevicesPages'>
                <button><p>услуги</p>
                <h4>Погрузочно-разгрузочная деятельность</h4>
                </button>
                </Link>
                <Link to='/SevicesPages'>
                    <button><p>услуги</p>
                    <h4>Хранение грузов</h4>
                    </button>
                    </Link>
                    <Link to='/SevicesPages'>
                    <button ><p>услуги</p>
                    <h4>Швартовые операции</h4>
                    </button>
</Link>
<Link to='/SevicesPages'>
                    <button ><p>услуги</p>
                    <h4>Буксировка / сопровождение судов</h4>
                    </button>
                    </Link>
              </div>
        </div>
    )
}
export default Main ;