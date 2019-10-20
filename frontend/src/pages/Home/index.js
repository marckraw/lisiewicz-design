import React from 'react';

import Section from '../../components/Section';

import { dummyText } from './dummyText';
import Dots from '../../components/Dots';

export const Home = () => {
    return (
        <div>
            <Dots />
            <Section title="Section 0" subtitle={dummyText} dark={true} id="section0" />
            <Section title="Section 1" subtitle={dummyText} dark={false} id="section1" />
            <Section title="Section 2" subtitle={dummyText} dark={true} id="section2" />
            <Section title="Section 3" subtitle={dummyText} dark={false} id="section3" />
            <Section title="Section 4" subtitle={dummyText} dark={true} id="section4" />
            <Section title="Section 5" subtitle={dummyText} dark={false} id="section5" />
            <Section title="Section 6" subtitle={dummyText} dark={true} id="section6" />
        </div>
    );
};

export default Home;
