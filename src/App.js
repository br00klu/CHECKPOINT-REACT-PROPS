import './App.css';
import Profile from './profile/profile';
import img from './assets/John-Doe.jpg';


function App() {
  
  const handleName=(name)=> alert('hello '+name+'!');


  return (
    <div className="App">
      <Profile fullName='John Doe' bio='I make horrible websites.' profession='Web Developer' handleName={handleName}>
        <img style={{borderRadius:'50%'}} src={img} alt="avatar"/>
      </Profile>
    </div>
  );
}

export default App;
