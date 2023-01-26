import React, { useState } from 'react'
import styled from "styled-components";
import { ReactComponent as Delete } from "../assets/delete.svg";
import { ReactComponent as Revert } from "../assets/revert.svg";
import { ReactComponent as Tick } from "../assets/tick-green.svg";

function ToDo() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Buy 1 kg Tomato",
        },
        {
            id: 2,
            title: "Buy 2 kg Oninon",
        },
        {
            id: 3,
            title: "Visit friend",
        },
        {
            id: 4,
            title: "Clean House",
        },
    ]);
    
    const [itemsCompleted, setItemsCompleted] = useState([
        {
            id: 5,
            title: "Washing Clothes",
        },
        {
            id: 6,
            title: "Play Cricket",
        },
        {
            id: 7,
            title: "1 km Walking",
        },
        {
            id: 8,
            title: "Do Homework",
        },
    ]);

    const [input,  setInput] = useState("");

    const addItem = () => {
        let new_item = {
            id: items.length + 1,
            title: input,
        };
        setItems([...items, new_item]);
        setInput("");
    };

    let marked = (id) => {
        setItemsCompleted([...itemsCompleted,items.find((item) => item.id === id)]);
        setItems(items.filter((item) => item.id !== id));
    };

    let deleteItem = (id) => {
        let delete_item = items.filter((item) => item.id !== id);
        setItems(delete_item);
    };

    let deleteCompletedItem = (id) => {
        let delete_itemCompleted = itemsCompleted.filter((item) => item.id !== id);
        setItemsCompleted(delete_itemCompleted);
    };

    let revert = (id) => {
        setItems([...items,itemsCompleted.find((item) => item.id === id)]);
        setItemsCompleted(itemsCompleted.filter((item) => item.id !== id));
    };

    const renderItems = () => {
        return items.map((item) => (
            <Li>
                <Left>
                    <Span onClick={() => marked(item.id)}></Span>
                    <P>{item.id}, {item.title}</P>
                </Left>
                <Right>
                    <DeleteImg  onClick={() => deleteItem(item.id)}>
                        <Delete />
                    </DeleteImg>
                </Right>
            </Li>
        ));
    };

    const renderItemsCompleted = () => {
        return itemsCompleted.map((item) => (
            <Li>
                <Left>
                    <SpanCompleted>
                        <TickImg>
                            <Tick />
                        </TickImg>
                    </SpanCompleted>
                    <PGreen>{item.id}, {item.title}</PGreen>
                </Left>
                <Right>
                    <RevertImg onClick={() =>revert(item.id)}>
                        <Revert />
                    </RevertImg>
                    <DeleteImg onClick={() => deleteCompletedItem(item.id)}>
                        <Delete />
                    </DeleteImg>
                </Right>
            </Li>
        ));
    };

  return (
    <>
    <ToDoList>
        <Wrapper>
            <Head>
                <H1>ToDo List</H1>
            </Head>
            <Done>
                <H3>Things to be done</H3>
                <Ul>
                    {renderItems()}
                </Ul>
            </Done>
            <Form>
                <Input placeholder="+ Type new Task..." value={input} onChange={(e)=> setInput(e.target.value)}/>
                <Button onClick={() => addItem()}>Add New</Button>
            </Form>
            <Completed>
                <H3>Completed</H3>
                <Ul>
                    {renderItemsCompleted()}
                </Ul>
            </Completed>
        </Wrapper>
    </ToDoList>
    </>
  );
};

export default ToDo;

const ToDoList = styled.section`
    width: 60%;
    margin: 0 auto;
    height: 100vh;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
`;
const Wrapper = styled.section`
    width: 70%;
    margin: 0 auto;
`;
const Head = styled.div`
    text-align: center;
    padding-top: 50px;
`;
const H1 = styled.h1`
    font-size: 50px;
`;
const Done = styled.div`
    padding: 25px 0;
`;
const H3 = styled.h3`
    font-size: 25px;
    color: #050241;
`;
const Ul = styled.ul`
    padding: 25px 0px 0px 25px;
`;
const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
`;
const Span = styled.span`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #000;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
`;
const P = styled.p`
    font-size: 18px;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
`;
const DeleteImg = styled.div`
    cursor: pointer;
`;
const Form = styled.div`
    padding-left: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Input = styled.input`
    border:1px solid #000;
    border-right: none;
    outline: none;
    width: 85%;
    height: 50px; 
    font-size: 16px;
    padding-left: 10px;
`;
const Button = styled.button`
    background: #050241;
    border:1px solid #000;
    color: #fff;
    width: 15%;
    height: 50px;
    font-size: 16px;
    cursor: pointer;
`;
const Completed = styled.div`
    padding: 25px 0;
`;
const SpanCompleted = styled.span`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #000;
    display: inline-block;
    margin-right: 10px;
    border-color: #06C592;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const PGreen = styled.p`
    font-size: 18px;
    color: #06C592;
`;
const TickImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const RevertImg = styled.div`
    margin-right: 20px;
    cursor: pointer;
`;