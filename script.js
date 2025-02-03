  // --- opgave 3 ---  
  let students = [
      {name: "Sofie", age: 25, course: "Webudvikler"},
      {name: "Lukas", age: 22, course: "Mediegrafiker"},
      {name: "Emil", age: 28, course: "Teknisk designer"},
    ];
    
    let studentListDiv = document.querySelector(".body__div");
    
    students.forEach(function(student) { 
        const studentDiv = document.createElement("div");
        studentDiv.textContent = `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
        studentListDiv.append(studentDiv);
    });

    
    // --- opgave ekstra1 ---
    
  
    // --- opgave ekstra2 ---
