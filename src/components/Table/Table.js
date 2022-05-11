import { useEffect, useState } from "react";

const Table = ({ className, students, headers, onClickTable, studentId, type }) => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const handleClick = () => {
      const student = students.find(student => student._id === studentId)

      setNotes(student?.note)
    }
  
    handleClick()
  }, [studentId, students])

  return (
    <section className={className}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {
              headers.map((header, i) => <th key={i} scope="col">{header}</th>)
            }
          </tr>
        </thead>
        <tbody className="mb-5">
          {
            (!studentId && type === 'students') && (
              students?.map((student, i) => (
                <tr key={student._id}>
                  <th scope="row">{i + 1}</th>
                  <td onClick={() => onClickTable(student._id)}>{student?.nameStudent}</td>
                  <td>{student?.age}</td>
                </tr>
              ))
            )
          }

          {
            (studentId && type === "notes") && (
              notes?.map((note, i) => (
                <tr key={note._id}>
                  <th className={note?.value > 3 ? 'text-success' : 'text-danger'} scope="row">{i + 1}</th>
                  <td className={note?.value > 3 ? 'text-success' : 'text-danger'}>{note?.courseName}</td>
                  <td className={note?.value > 3 ? 'text-success' : 'text-danger'}>{note?.value}</td>
                  <td className={note?.value > 3 ? 'text-success' : 'text-danger'}>{note?.value > 3 ? 'Promocionado' : 'No promociono'}</td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </section>
  );
}
 
export default Table;