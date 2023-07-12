export function Students() {
  return (
    <StudentWithRenderProps>
      {({ students }) => {
        console.log({ students })
        return (
          <div>
            <h3>Students with grades</h3>
            {students.map((student, key) => (
              <p key={key}>
                {student.name} - {student.score}
              </p>
            ))}
          </div>
        )
      }}
    </StudentWithRenderProps>
  )
}
const StudentWithRenderProps = ({ children }) => {
  const students = [
    { name: "John", score: "A-" },
    { name: "Samuel", score: "B-" },
    { name: "Smith", score: "A+" },
    { name: "Mark", score: "A-" },
    { name: "Mike", score: "B-" },
    { name: "John", score: "B+" },
  ]
  return children({
    students,
  })
}
