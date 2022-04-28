import './App.css';
import Sidebar from './component/Sidebar/Sidebar.jsx'
import Feed from './component/Feed/Feed.jsx'
import Widgets from './component/Widgets/Widgets';

function App() {
  return (
    <div className="app">
<Sidebar/>
<Feed/>
<Widgets/>
    </div>
  );
}

export default App;
