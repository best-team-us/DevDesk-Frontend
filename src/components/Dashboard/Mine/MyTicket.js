import React from "react";
import { Link } from 'react-router-dom';
import * as timeago from 'timeago.js';


export default function MyTicket(props) {
    return (
        <>
            <td className='boldrows'>{props.status}</td>
            <td>{props.title}</td>
            <td className='boldrows'>{props.category}</td>
            <td>{timeago.format(props.created_at)}</td>
            <td><Link to={`/Dashboard/Tickets/${props.id}`}>View</Link></td>
            
        </>
    
    )
}

