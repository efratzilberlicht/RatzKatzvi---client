import React, { Component, useState } from 'react'
import Filter from '../../components/global/Filter/Filter';
import Search from './Search';
import './AdvancedSearch.css';

export default function AdvancedSearch(props) {


  return (<div>
    <Filter props={"חיפוש מתקדם"}/>
    <div id="backgroundSearch">
    <h2>חפש נושא בכל השיעורים שבאתר</h2>
    <Search/>
    </div>
    <div dir="rtl">
    <h2 className="h2">תוצאות החיפוש</h2>
    <img alt="kavyaeli" src="/images/kavyaeli.png" className="kav" />
    <div id="resultSearch"></div>
    </div>
  </div>
  );
}