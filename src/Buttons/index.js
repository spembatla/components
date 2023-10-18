import './index.css';

function Buttons() {
    return(
        <div>
           <div class="form">
        <button type="button" class="btn">Primary</button>
        <button type="button" class="btn-s">Secondary</button>
        <button type="button" class="btn-sc">Success</button>
        <button type="button" class="btn-d">Danger</button>
        <button type="button" class="btn-w">Warning</button>
        <button type="button" class="btn-i">Info</button>
        <button type="button" class="btn-l">Light</button>
        <button type="button" class="btn-da">Dark</button>
      </div>
      <div class="form">
        <button type="button" class="btn-p">Primary</button>
        <button type="button" class="btn-se">Secondary</button>
        <button type="button" class="btn-su">Success</button>
        <button type="button" class="btn-dn">Danger</button>
        <button type="button" class="btn-wa">Warning</button>
        <button type="button" class="btn-in">Info</button>
        <button type="button" class="btn-li">Light</button>
        <button type="button" class="btn-dk">Dark</button>
      </div> 
        </div>
    )
}

export default Buttons;