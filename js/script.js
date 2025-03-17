window.addEventListener("load", () => { 
    const $ = id => document.getElementById(id);
    $("empForm").addEventListener("submit", (e) => {
        e.preventDefault();
        let id = $("id").value;
        let name = $("name").value;
        let email = $("email").value;
        let extension = $("ext").value;
        let department = $("department").value;
        console.log(`ID: ${id}\nName: ${name}\nEmail: ${email}\nExtension: ${extension}\nDepartment: ${department}`);
        $("empForm").reset();
    });
});
