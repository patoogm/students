import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Table from "./components/Table"


const App = () => {
  const [students, setStudents] = useState([])
  const [id, setId] = useState('')

  const getDataStudent = async() => {
    const data = await fetch('http://localhost:8000/students')
    const resp = await data.json()

    setStudents(resp)
  }

  const onClickTable = (id) => {
    setId(id)
  }

  useEffect(() => {
    getDataStudent()
  }, [])

  return (
    <div>
      <Navbar />
      <main className="container mt-5">
        <section className="row">
          <Table className="col-12 col-md-6" type="students" students={students} headers={['Nombre y apellido', 'Edad']} onClickTable={onClickTable}/>
          <Table className="col-12 col-md-6" type="notes" headers={['Materia', 'Nota', 'Estado']} students={students} studentId={id}/>
        </section>
      </main>
    </div>
  );
}

export default App
