// Menu typically located at the left of the app
import resources from "../../resources/Resources"
import config from "../../config/Config"
import './Menu.css'
export default function Menu(){
    return (
        <div className='menu'>
          <img src={resources.Logo} alt='spotify logo' className='menu__logo'></img>
          {
            config.menuOptions.map((option)=>{
              return <div className='menu__option'>
                {option.name}
              </div>
            })
          }
        </div>
    )
}