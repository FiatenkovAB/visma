import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import ServicesPages from "./Services/SevicesPages";
import Company from "./CompanyPage/PageCompany";
import News from "./News/NewsPage";
import Header from "./Home/Header/Header";
import Client from "./Clients/Client";


function App() {
  return (

    <div className="App">
        <BrowserRouter>
         <Header/>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/SevicesPages' element={<ServicesPages/>}/>
        <Route path="/PageCompany" element={<Company/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/Client" element={<Client/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
