import './App.css';
import Sidebar from './component/Sidebar/Sidebar.jsx'
import Feed from './component/Feed/Feed.jsx'

function App() {
  return (
    <div className="app">
<Sidebar/>

{/* Feed */}
<Feed/>
{/* Widgets */}
    </div>
  );
}

export default App;
