import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import "./type.css";

export default function Type() {
    return (
        <>
            <div>
                <span className='type-name'>
                    <Typewriter
                        words={['Web Developer', 'Web Designer']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={70}

                    />
                </span>

            </div>
        </>
    )
}
