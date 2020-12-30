import React, { Component } from 'react'
import Style from './Homepage.module.css'
import Dashboardmenu from '../../Staticdata/Dashboardmenu/Dashboardmenu';
import AccuracyUp from '../Pagecontent/AccuracyUp/AccuracyUp'
import Typography from '@material-ui/core/Typography';
export default class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            displayContent:5,
            
        }
    }
    changeContent=(e)=>{
        this.setState({
            displayContent:e
        })
    }
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.header}>
                    <div className={Style.tools}>
                        <img src="./tools-logo.jpg" className={Style.tools_logo}/>
                        <Typography className={Style.tools_text}>Tools</Typography>
                    </div>
                    <div className={Style.bitcoin_arrng}>
                        <img src="./bitcoin 1.png" className={Style.bitcoin_baselogo}/>
                        <Typography className={Style.bitcoin_text}>Real-time bitcoin graph</Typography>
                    </div>
                    <div className={Style.comodity_one}>
                        <select className={Style.comodity_one_select}>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                        </select>
                    </div>
                    <div className={Style.comodity_two}>
                        <select className={Style.comodity_two_select}>
                            <option>commodity 2</option>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                            <option>commodity 1</option>
                        </select>
                    </div>
                </div>
                <div className={Style.pagecontent}>
                    <div className={Style.menu_aarng}>
                        {
                             Dashboardmenu.map((e)=>{
                                return(
                                    <div  className={this.state.displayContent==e.id? Style.menu_size_display: Style.menu_size}>
                                        <img src={e.img} className={Style.menu_icon}></img>
                                        <p className={Style.menu_text}>{e.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={Style.main_content}>
                        <AccuracyUp/>
                    </div>
                </div>
            </div>
        )
    }
}
