import React from 'react'
import edit from '../../styles/img/icons/packs/crystal/48x48/apps/kedit.png'
import penguin from '../../styles/img/icons/packs/crystal/48x48/apps/penguin.png'
import wifi from '../../styles/img/icons/packs/crystal/48x48/apps/wifi.png'
import mail from '../../styles/img/icons/packs/crystal/48x48/apps/mailreminder.png'
import stats from '../../styles/img/icons/packs/crystal/48x48/apps/Volume-Manager.png'

const DashboardMenu = () => {
  return (
    <div class="grid_12"> 
                <div class="block-border"> 
                    <div class="block-content"> 
                        <ul class="shortcut-list"> 
                            <li> 
                                <a href="\create"> 
                                    <img src={edit} alt='pic'/> Create a Celeb 
                                </a>
                            </li> 
                            <li> 
                                <a href="\#"> 
                                    <img alt="pic" src={penguin}/> Celeb Manager 
                                </a> 
                            </li> 
                            <li> 
                                <a href="\#"> 
                                    <img alt="pic" src={wifi}/> Stats 
                                </a> 
                            </li> 
                            <li> 
                                <a href="\#"> 
                                    <img alt="pic" src={mail}/> Send Email 
                                </a> 
                            </li> 
                            <li> 
                                <a href="\#"> 
                                    <img alt="pic" src={stats}/> Statistics 
                                </a> 
                            </li> 
                        </ul> 
                        <div class="clear"></div> 
                    </div> 
                </div> 
            </div> 
  )
}

export default DashboardMenu