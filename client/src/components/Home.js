import About from './About'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Home = () => {
    const [url,setUrl] = useState(null);
    const [checked, setChecked] = useState(false);
    let navigate = useNavigate();

    const handleChange = (e) =>{
        e.preventDefault();
        if(checked){
            if(validateUrl(url)){
                navigate('/tldr',
                {
                    state: {
                        url: url,
                    }
                });
            }else{
                alert("Invalid Url");
            }
        }
        else{
            if(validateUrl(url)){
                navigate('/summarize',
                {
                    state: {
                        url: url,
                    }
                });
            }else{
                alert("Invalid Url");
            }
        }
        
    }
    const toggleChecked = () => {
        setChecked(value => !value);
        console.log(checked);
    }

    function validateUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }

    return ( 
    <>
        <div className="w-full h-screen py-10" id="home">
            <div id="content" className="mb:mx-16">
                <div className="container mx-auto my-12">
                    <div className="content-center py-5">
                        <h1 className="text-5xl font- leading-tight text-gray-800 text-center tracking-widest font-chill">Summation</h1>
                    </div>
                    <div className="my-4">
                        <p className="font-satoshi tracking-wide text-2xl leading-relaxed">This helps you summarize any piece of text into concise,<br/> easy to digest content so you can free yourself from information <br/> overload.</p>
                    </div>
                </div>
            </div>
           
            <div id="input" className="mx-16">
                <form className="w-auto font-satoshi" onSubmit={handleChange}>
                    <div class="mb-6 ">
                        <div className="grid grid-cols-3 mx-16">
                         <label className="mb-2 text-xl font-medium text-gray-900" >Enter Url:</label>
                        </div>
                        <input onChange={event =>setUrl(event.target.value)} className="bg-white text-gray-900 text-xl rounded-xl block p-2.5 px-7 mx-auto w-2/3 h-20 outline-none font-medium shadow-md shadow-gray-500/10 focus:ring-1 focus:ring-blue-300" placeholder="https://....." type="search"></input>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer mb-7">
                        <input type="checkbox" value="" id="default-toggle" className="sr-only peer" checked={checked} onChange={toggleChecked}/>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 ">Tldrthis</span>
                    </label>
                    <br/>
                    <button type="submit" className="w-56 h-16 rounded-xl text-2xl text-white font-semibold cursor-pointer tracking-wide shadow-lg shadow-blue-500/30" style={{"backgroundColor":"#30A0DF"}}>
                        <span className="">Summarize</span>
                    </button>        
                </form>
            </div>
        </div>
        <About/>
        </> 
    );
}
 
export default Home;