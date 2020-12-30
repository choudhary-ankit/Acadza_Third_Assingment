import React, { Component } from 'react'
import Style from './NavBar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';


export default class NavBar extends Component {
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.logo}>
                    <img src='./mainlogo.jpg' className={Style.mainlogo}></img>
                    <img src='./ACADZA.jpg' className={Style.pagelogo}></img>
                </div>
                <div className={Style.option_arrng}>
                    <div className={Style.option}>
                        <select className={Style.select_one}>
                            <option>Activity</option>
                        </select>
                        <select className={Style.select_two}>
                            <option>Tool Guide</option>
                        </select>
                    </div>
                </div>
                <div className={Style.search}>
                        <SearchIcon className={Style.search_icon}/>
                        <input placeholder="Search" className={Style.input_box}/>   
                </div>
                <div className={Style.notification}>
                    <div className={Style.notification_arrng}>
                        <img src='./Path.jpg' className={Style.notification_icon}/>
                        <div className={Style.img_select}>
                            <Avatar alt="Remy Sharp" src="./men.jpg" className={Style.avtar_icon}/>
                            <select className={Style.avtar_select}>
                                <em>hl</em>    
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
