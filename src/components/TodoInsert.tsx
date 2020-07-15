import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
    onInsert: (text: string) => void;
}

function TodoInsert({ onInsert }: TodoInsertProps) {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button type="submit">추가</button>
        </form>
    );
}

export default TodoInsert;