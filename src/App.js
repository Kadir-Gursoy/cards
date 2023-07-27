import "../node_modules/bulma/css/bulma.css";
import Budizm from "./assets/budizm.jpg";
import tuz_hasadi from "./assets/tuz_hasadı.jpg"
import pazar_isiklari from "./assets/pazar_ısıkları.jpg"
import work from "./assets/work.jpg"
import Counter from "./Counter";


function App() {
  return ( 
  <div className="column">
   <div>
    
      <img src={Budizm} alt="" />
   <Counter  title="Vietnam Budizm" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis explicabo ducimus deserunt ipsam voluptates?"/>
   <img src={tuz_hasadi} alt="" />
   </div>

   <div>
      <Counter title="Vietnam Tuz Hasadı" description
      ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis explicabo ducimus deserunt ipsam voluptates?"/>
      <img src={pazar_isiklari} alt="" />
      </div>

      <div>
      <Counter title="Vietnam-Pazar" description
      ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis explicabo ducimus deserunt ipsam voluptates?"/>
      <img src={work} alt="" />
      </div>

      <div>
      <Counter title="Vietnam-Work-Woman" description
      ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis explicabo ducimus deserunt ipsam voluptates?"/>

      </div>   
    </div>
  );
}

export default App;
