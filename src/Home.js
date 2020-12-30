import './App.css';
import LeftNav from "./LeftNav";
import StMary from "./images/St.Mary.jpg"
import English from "./images/English.jpg"
function Home(){
    return(
        <div className = "row">
            <div className= "col-2">
                <LeftNav/>
            </div>
            <div className = "row" >
                <div className= "col">
                    <a href="https://docs.google.com/gview?url=https://s3-us-west-2.amazonaws.com/truewaytoheavenfiles/SMJK_TMU.pdf&embedded=true">
                        <img src={StMary} className= "rounded-circle App-logo" alt="img-responsive" >
                        </img>
                        <h3>True Way To Heaven Book (Tamil)</h3> 
                    </a>
                </div>
                <div className= "col" >
                    <a href="https://docs.google.com/gview?url=https://s3-us-west-2.amazonaws.com/truewaytoheavenfiles/RedemingTruthEnglish.pdf&embedded=true">
                        <img src={English} className="rounded-circle App-logo" alt="img-responsive" >
                        </img>
                        <h3>True Way To Heaven Book (English)</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Home;