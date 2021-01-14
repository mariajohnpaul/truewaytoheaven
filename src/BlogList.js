import { useState } from "react";
import BlogContent from "./BlogContent"
const BlogList = ({questions})=>{
    const [showResults, setShowResults] = useState(false)
    const onClick = () => {
        if(!showResults){
        setShowResults(true)
        }else{
            setShowResults(false)
        }
    }
    return (
        <div className = "blog-list">
            {                
                questions.map(qs=>(
                    <div className= "blog-preview" key={questions.id} onClick={()=>{<h1>God is great</h1>}}>
                        <h2>{qs.question}</h2>  
                        <div> 
                            <input type="submit" value="Expand" onClick={onClick} />                  
                            { showResults ? <BlogContent content={qs.value}/> : null }
                        </div>
                                          
                    </div>
                ))
            }
        </div>
    );
}
export default BlogList;