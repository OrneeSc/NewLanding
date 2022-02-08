import './Index.scss';
import emoji2 from '../Assets/emoji2.png';

const Index = ({changeColor,setChangeColor}) => {

    let title= 'Frontend Developer';

    const handleChangeColor = () =>{
        if(changeColor) {
            setChangeColor(false)
        }else {
            setChangeColor(true)
        }
    }

    return (
        <div className='index'>
            <div className='index-content'>
                <img src={emoji2} alt='Perfil' className='index-logo'></img>
                <h2 style={changeColor ? {color:'#10BAB9'} : null }>{title}</h2>
            </div>
            <div className='button-slider'>
                {
                    changeColor ? 
                    <span style={{color:'#10BAB9'}}>Modo claro</span>
                    :
                    <span>Modo oscuro</span>
                }
                
                <input type='checkbox' id='toggle' className="DarkToggle" onClick={handleChangeColor}/>
                    <label className='toggle-track' for='toggle'>
                        <div className='toggle-track__indicator'></div>
                    </label>
            </div>

        </div>

    )
}

export default Index;