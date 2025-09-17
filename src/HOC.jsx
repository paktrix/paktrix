import Header from "./Component/Header";
import Footer from "./Footer";
import LetsChat from "./LetsChat";
import { BsWhatsapp } from "react-icons/bs";

function HOC(Component) {

    function NewComponent() {
        return (
            <>
                <Header />
                <Component />
                <Footer />

                <div>
                    <a href="https://wa.me/919099924140" target="_blank" rel="noreferrer" className="whatsapp-float">
                        <BsWhatsapp className="whatsapp-icon" />
                    </a>
                </div>

                <LetsChat />
            </>
        );
    }
    return NewComponent
}

export default HOC