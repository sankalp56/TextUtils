// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
     <Navbar title="TextUtils_1" aboutText="About Section"> </Navbar>
      <div className="container">     
                            {/* (container is class of bootstrap which give middle look) Here we have  used div with class container
                             to ensure  that text box must be having equal margin and padding from both sides */}
      <TextForm heading="Enter your Text to Analyze"></TextForm>
      </div>
     
    </>
  );
}

export default App;

