import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import FilterBar from "./components/FilterBar";
import CardWrapper from "./components/CardWrapper";
import TeamCard from "./components/TeamCard";
import teamArray from "./team.json";



function App() {
  const [team, setTeam] = useState(teamArray);
  const [search, setSearch] = useState('');
  const [warning, setWarning] = useState(false);
  const [nameSort, setNameSort] = useState("AZ");


  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {

    if (!search) {
      return setTeam(teamArray);
    }


    if (!/^[a-zA-Z]*$/g.test(search)) {
      setSearch("");
      setTeam(teamArray);
      setWarning(true);
      return;

    }

    const results = team.filter(person =>
      person.name.includes(search.toLowerCase())
    );
    setTeam(results);
    setWarning(false);


  }, [search])



  const sortNames = () => {
    switch (nameSort) {
      case 'AZ':
        setTeam([...team].sort((a, b) => (a.name > b.name) ? 1 : -1));
        setNameSort("ZA")
        break;
      case 'ZA':
        setTeam([...team].sort((a, b) => (a.name < b.name) ? 1 : -1))
        setNameSort("AZ")
        break;
      default:
        return;
    }
  }


  const handleSelectDropdown = (eventKey) => {

    switch (eventKey) {
      case "Manager":
        setTeam([...teamArray].filter(person =>
          person.title.includes("Manager")
        ));
        break;
      case "Designer":
        setTeam([...teamArray].filter(person =>
          person.title.includes("Designer")
        ));
        break;
      case "Developer":
        setTeam([...teamArray].filter(person =>
          person.title.includes("Developer")
        ));
        break;
      case "Raleigh":
        setTeam([...teamArray].filter(person =>
          person.location.includes("Raleigh")
        ));
        break;
      case "Jacksonville":
        setTeam([...teamArray].filter(person =>
          person.location.includes("Jacksonville")
        ));
        break;
      case "Greensboro":
        setTeam([...teamArray].filter(person =>
          person.location.includes("Greensboro")
        ));
        break;
      case "Cary":
        setTeam([...teamArray].filter(person =>
          person.location.includes("Cary")
        ));
        break;
      default:
        resetTeam();
        return;

    }
  }


  const resetTeam = () => {
    setTeam(teamArray);
    setSearch("");
  }



  return (
    <>
      <Header />
      <Main>
        <FilterBar
          inputValue={search}
          handleInputChange={handleInputChange}
          resetBtn={resetTeam}
          sortBtn={sortNames}
          children={nameSort === "AZ" ? "Sort A–Z" : "Sort Z–A"}
          handleSelectDropdown={handleSelectDropdown} />

        {/* Validation */}
        {warning === false ? null : <h4>Please use letters only. Numbers or special characters won't display results.</h4>}
        {team.length === 0 ? <h4>Team member not found. Please try a different name or hit "Reset".</h4> : null}
        
          <CardWrapper>
            {team.map(person => (
              <TeamCard
                key={person.id}
                img={person.img}
                name={person.name}
                title={person.title}
                location={person.location}
                phone={person.phone}
                email={person.email}
              />
            ))}
          </CardWrapper>
        
      </Main>
    </>
  );
}

export default App;




const sort = arr => arr.sort((a, b) => a - b);
sort([1, 5, 2, 4, 3]);      // [1, 2, 3, 4, 5]