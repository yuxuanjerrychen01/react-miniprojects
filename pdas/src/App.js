import "bulma/css/bulma.css"

import ProfileCard  from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div  className="hero-body">
                    <p className="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@1234alexa" 
                                image={AlexaImage}
                                description="alexa was created by amazon, good good."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana1234" 
                                image={CortanaImage} 
                                description="Cortana was created by microsoft, hey hey."
                            /> 
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title="Siri" 
                                handle="@12siri34" 
                                image={SiriImage} 
                                description="Siri was created by apple, good? good?"
                            /> 
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;