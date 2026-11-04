export default function StudentList() {
    const students = ["Irfan", "Waheed", "Zia", "sheezan"]

    return (
        <div>
            {students.map((name) => (
                <p>Hello, {name}</p>
                
            ) )}
        </div>
    )

}