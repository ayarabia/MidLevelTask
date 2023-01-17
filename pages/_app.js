
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/scss/global.scss'
import { useEffect } from "react";
import Layout from '../Layouts/Layout';
function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <Layout>
 <main>
<Component {...pageProps} />
 </main>
    </Layout>
   
  )
}

export default App