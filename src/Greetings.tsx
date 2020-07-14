import React from 'react';

type GreetingProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
}

function Greetings({ name, mark, optional, onClick }: GreetingProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            {name} {mark}
            {optional && <p>{optional}</p>}
            <div onClick={handleClick}>Click Me</div>
        </div>
    );
}

export default Greetings;