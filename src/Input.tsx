interface InputProps{
    input: string;
    handleToDoInput: (toDoInput: string) => void;
    handleEnter: () => Promise<void>;
}

export function Input({input, handleEnter, handleToDoInput}: InputProps): JSX.Element {
    return (
<div className="input-div">
          <textarea
            className="inputBox"
            placeholder="Write your task here"
            value={input}
            onChange={(event) => {
              handleToDoInput(event.target.value);
            }}
          ></textarea>
          <span>
            <button
              className="add-button"
              onClick={handleEnter}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEnter();
                  console.log("key working");
                }
              }}
            >
              <span className="plus-sign">+</span>
            </button>
          </span>
        </div>
    )

}