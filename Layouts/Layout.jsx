import ChoiceCopnent from "@/Components/ChoiceCopnent";
 import Footer from "@/Components/Footer";
import Properties from "@/Components/Properties";
import PropertiesCard from "@/Components/PropertiesCard";
import Slider from "@/Components/Slider";
import TobNavBar from "@/Components/TobNavBar";

function Layout({ children }) {
    return (
      <div>
        <TobNavBar/>

   <main>
   {children}
   </main>
<Footer></Footer>
      </div>
    );
  }
  
  export default Layout;