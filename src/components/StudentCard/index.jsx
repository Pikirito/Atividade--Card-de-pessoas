export const StudentCard = ({ name, age, country }) => {
  return (
    <li>
      <h1>Aluno:{name}</h1>
      <p>Idade: {age}</p>
      <p>Pais : {country} </p>
    </li>
  );
};
