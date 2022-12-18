fetch(
  "https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json"

  // method: "POST",
  // body: JSON.stringify({
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  // }),
)
  .then((res) => res.json())
  .then((data) => {
    const Employees = data.Employees;
    let x;
    const tble = document.querySelector("#tble");
    const names = document.querySelector(".nabv");
    const dec = document.querySelector("#dec");

    console.log(Employees);
    const tbl = document.createElement("table");
    const tdata = document.createElement("tr");
    tdata.innerHTML = `<tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th>Date of joining</th>
                       </tr>`;
    tbl.appendChild(tdata);
    tble.appendChild(tbl);
    for (i of Employees) {
      const name = i.Name;
      const address = i.Address;
      const salary = i.Salary;
      const doj = i.DateOfJoining;
      const ind = document.createElement("tr");
      ind.innerHTML = `<td>${name}</td><td>${address}</td><td>${salary}</td><td>${doj}</td>`;

      const nameabov = document.createElement("p");
      if (salary > 50000) {
        nameabov.innerHTML = `${name}`;
      }
      names.appendChild(nameabov);
      tbl.appendChild(ind);
      tble.appendChild(tbl);

      const x = document.createElement("p");
      if (doj.slice(3, 5) == "12") {
        x.innerHTML = `${name}`;
        dec.appendChild(x);
      }
    }
  });
