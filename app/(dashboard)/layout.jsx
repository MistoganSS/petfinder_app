import Header from "../components/Header"
import Footer from "../components/Footer"

const layout = ({ children }) => {
    return (
        <main>
            <Header />
            <main>{children}</main>
            <Footer />
        </main>
    )
}

export default layout