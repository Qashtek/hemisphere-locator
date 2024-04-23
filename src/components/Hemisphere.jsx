import NorthPic from '../images/north.gif';
import SouthPic from '../images/south.jpg';


const hemisphereConfig = {
    Northern: {
        textContent: 'you are in the nothern hemisphere',
        picture: NorthPic
    },
    Southern: {
        textContent: 'You are in the southern hemisphere',
        picture: SouthPic
    }
}


function Hemisphere({ lat }){

    const hemisphere = lat > 0 ? 'Northern' : 'Southern' ;
    
    const { textContent, picture } = hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className="image">
                    <img src={picture} alt="" /> <br />
                </div>
                <div className="ui teal bottom attached label">
                   <h1>{ textContent }</h1> 
                </div>
            </div>
            
        </div>
    )
}


export default Hemisphere;