import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo",
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resaltA = 1;
    let resaltB = 1;

    resaltA = useMemo(() => {
        let tempResult = 1;

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i;
        }

        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resaltB = resaltB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Resalt for a:{resaltA}
        </div>
        <div>
            Resalt for b:{resaltB}
        </div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS-SECRET")
    return (
        <div>
            {props.users.map((u, i) => {
                    return (
                        <div key={i}>{u}</div>
                    )
                }
            )}
        </div>
    )
}

const Users = React.memo(UsersSecret)


export const HelpToReactMemo = () => {

    console.log("HelpToReactMemo")

    const [counter, setCounter] = useState(0)

    const [users, setUsers] = useState(["Dimach", "Valera", "Arthem", "Katya"])

    const newArray = useMemo(() => {
        const newAr = users.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newAr
    }, [users])


    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()
        ]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() =>
            setCounter(counter + 1)
        }>+
        </button>
        <button onClick={() =>
            addUser()
        }>add user
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {

    console.log("LikeUseCallback")

    const [counter, setCounter] = useState(0)

    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])


    // const addBook = () => {
    //     const newUsers = [...books, "Angular" + new Date().getTime()
    //     ]
    //     setBooks(newUsers)
    // }
//запомни функцию пока у тебя не изменятся books и передадим ее в отрисовку где JSX
//     const memoizedAddBook = useMemo(()=>{
//         return addBook
//     }, [books])
//
    //перепишем
    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, "Angular" + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])


//!!!!перепишеи на useCallback


    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, "Angular" + new Date().getTime()]
        setBooks(newUsers)
    }, [books])


    return <>
        <button onClick={() =>
            setCounter(counter + 1)
        }>+
        </button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}


type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {

    console.log("BooksSecret")
    return <div>
        <button onClick={() =>
            props.addBook()
        }>add book
        </button>
    </div>
}

//это контейнерная компанента, которая следит за пропсами, нужно ли перерисовывать

const Book = React.memo(BooksSecret)


