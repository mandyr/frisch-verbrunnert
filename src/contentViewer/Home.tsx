import { Marquee } from "./Marquee"
import welcome from "../popUps/welcome.gif";

export function Home(props: any) {
  return (
    <div className="home">
      <h1>Willkommen bei frisch-verbrunnert</h1>
      <img style={{ maxWidth: "-moz-available"}}src={welcome} alt="welcome to my crib"></img>
      <p>In unserer kleinen Ecke im WWW gibt es viel zu entdecken!</p>
      <Marquee text={'Wir wünschen alles, alles Gute zur Hochzeit!!!'} />
    </div>
  );
}
