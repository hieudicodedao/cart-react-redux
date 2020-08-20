import React, { Component } from 'react'
import MessageContainer from './container/MessageContainer'
import  TableCheckOut from './container/TableCheckOutContainer'
import ListProductsContainer from './container/ListProductsContainer'
import Header from './components/Header'
import Footer from './components/Footer'
class App extends Component {
    render() {
        return (
            <div>  
                <Header/>   
                <main id="mainContainer">
                    <div className="container">
                        <ListProductsContainer />
                        <h3>
                            <MessageContainer />
                        </h3>
                        <TableCheckOut />
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;