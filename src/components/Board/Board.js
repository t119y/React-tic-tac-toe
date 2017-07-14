import React, {Component} from 'react';
import Squre from '../Squre/Squre';
import './Board.scss';

class Board extends Component{
    
    render(){
        return(
            <div className="board">
                <div className = 'board_row'>
                    <Squre />
                    <Squre />
                    <Squre />
                </div>
                <div>
                    <Squre />
                    <Squre />
                    <Squre />
                </div>
                <div>
                    <Squre />
                    <Squre />
                    <Squre />
                </div>            
            </div>
        )
    }
}

export default Board;