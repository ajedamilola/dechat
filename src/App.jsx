import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Auth from "./pages/Auth";
import Posts from "./pages/posts/posts";
import Messages from "./pages/messaging/messages";
import SingleChat from "./pages/messaging/singlechat";
import Post from "./pages/posts/post";
import Account from "./pages/account/account";
import SendGift from "./pages/account/sendgift";
import DepositGift from "./pages/account/deposit_gift";

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route path="/app" element={<Auth />}>
            <Route path="" element={<Posts />} />
            <Route path="chats" element={<Messages />} />
            <Route path="chat/:id" element={<SingleChat />} />
            <Route path="post" element={<Posts />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="account" element={<Account />} />
            <Route path="send-gift" element={<SendGift />} />
            <Route path="deposit-gift" element={<DepositGift />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
