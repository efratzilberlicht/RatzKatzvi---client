import React from 'react'
import './Filter.css';

export default function Filter(props) {
 return (<>
 <img id="filter" alt="fiiterbooks" src="/images/fiiterbooks.png"/>
 <h1 id="h1">{props.props}</h1>
 </>);
}