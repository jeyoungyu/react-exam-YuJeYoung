import { useState } from "react";

const LiveInput = () => {

    const [input , setInput] = useState("");

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    return(
        <div>
            <h3>입력값 변경</h3>
            <div>
                <input
                    type="text"
                    placeholder="텍스트를 입력하세요"
                    value={input}
                    onChange={handleInputChange}
                />
            </div>
            <p>입력값 : {input}</p>
        </div>
    )
}

export default LiveInput;