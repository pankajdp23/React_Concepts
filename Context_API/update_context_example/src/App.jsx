import { createContext, useState, useContext, useMemo } from "react";

const UserContext = createContext({
  userName: "",
  setUserName: () => {}
});

export default  function App() {
  const [userName, setUserName] = useState("John Smith");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase {count}</button>
      <UserContext.Provider value={value}>
        {useMemo(
          () => (
            <>
              <UserNameInput />
              <UserInfo />
            </>
          ),
          []
        )}
      </UserContext.Provider>
    </>
  );
}

function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);

  return <input type="text" value={userName} onChange={changeHandler} />;
}

function UserInfo() {
  const { userName } = useContext(UserContext);
  console.log("Render");
  return <span>{userName}</span>;
}
