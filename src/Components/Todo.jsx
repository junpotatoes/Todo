import styled from 'styled-components';

const SearchDiv = styled.li`
  display: flex;
`;
const ResultDiv = styled.div`
  margin-left: auto;
`;

export default function Todo({ todo, fetchData }) {
  function del() {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: 'DELETE',
      }).then(() => {
        fetchData();
      });
    }
  }
  function edit() {
    const editContent = window.prompt('수정할 내용적어라');
    if (editContent) {
      fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: todo.id,
          content: editContent,
        }),
      });

      fetchData();
    }
  }
  return (
    <SearchDiv>
      <span>{todo.content}</span>
      <ResultDiv>
        <button onClick={edit}>수정</button> <button onClick={del}>삭제</button>
      </ResultDiv>
    </SearchDiv>
  );
}
// import styled from "styled-components";

// const List = styled.li`
//   width: 360px;
//   height: 40px;
//   display: flex;
//   align-items: center;

//   font-size: 20px;

//   border-bottom: 0.5px solid #000000;
// `;

// const CheckBox = styled.input`
//   width: 36px;
//   transform: scale(2);
// `;

// const EditButton = styled.button`
//   margin-left: auto;
// `;

// const DeleteButton = styled.button`
//   margin-left: 5px;
//   margin-right: 10px;
// `;

// function Todo({ todo }) {
//   const handleDeleteButton = () => {};

//   return (
//     <List>
//       <CheckBox type="checkbox"></CheckBox>
//       <span>{todo.content}</span>
//       <EditButton>수정</EditButton>
//       <DeleteButton onclick={handleDeleteButton}>삭제</DeleteButton>
//     </List>
//   );
// }

// export default Todo;
