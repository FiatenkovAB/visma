import Column_1 from './Column1/Column1';
import Column_2 from './Column2/Column2';
import Column_3 from './Column3/Column3';
import Column_4 from './Column4/Column4';
import './index.css'
const News = () =>{
    return(
        <div className="news_page">
         <div className="title">
            <h1>НОВОСТИ</h1>
        </div>
        <div className='columns'>
        <div className='news_column1'>
            <Column_1/>
            </div>
        <div className="news_column2">
            <Column_2/>
        </div>
        <div className="news_column3">
            <Column_3/>
        </div>
        <div className="news_column4">
            <Column_4/>
        </div>
</div>
        </div>
    )
}
export default News;