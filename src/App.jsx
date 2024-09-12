import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Auth from "./pages/Auth"
import Posts from "./pages/posts/posts"
import Messages from "./pages/messaging/messages"
import SingleChat from "./pages/messaging/singlechat"
import Post from "./pages/posts/post"
import Account from "./pages/account/account"
import SendGift from "./pages/account/sendgift"
import DepositGift from "./pages/account/deposit_gift"

function App() {
  return (
    <main className="font-poppins">
    <Navbar/>
  
    </main>
  )
}

export default App