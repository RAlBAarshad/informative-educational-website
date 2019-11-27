import React from 'react';
import Content from "./Content"
import TypingSentence from './TypingSentence';
import './MainSection.css'

function MainSection() {
    return (
        <div className='MainSection'>
            <TypingSentence />
            <Content />
        </div>
    )
}
export default MainSection;