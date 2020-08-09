import React from 'react'
import { SongTable } from './SongTable'

export default { title: 'Table' }

// enum Gender {
//   Male = 1,
//   Female = 2,
// }

// interface ObjectType {
//   name: string
//   age: number
//   dob: Date
//   street: string
//   gender: Gender
// }

// const person: ObjectType = {
//   name: 'Luke',
//   age: 25,
//   dob: new Date(),
//   street: 'Straat',
//   gender: Gender.Male,
// }

// // export function createGenericDataContext<T>() {
// //   return React.createContext<T[] | undefined>(undefined)
// // }

// const people = [person]

// const Context = React.createContext<ObjectType[] | undefined>(undefined)

// export const Default: React.FC = () => {
//   const [data, setData] = useState<ObjectType[]>(people)

//   function sortData(dataKey: keyof ObjectType) {
//     setData([...data].sort((a, b) => (a[dataKey] > b[dataKey] ? 1 : -1)))
//   }

//   return (
//     <Context.Provider value={data}>
//       <GenericTable>
//         <Header>
//           <HeaderColumn<ObjectType>
//             dataKey="name"
//             title="Name"
//             sortData={sortData}
//           />
//           <HeaderColumn<ObjectType>
//             dataKey="name"
//             title="Name"
//             sortData={sortData}
//           />
//           <HeaderColumn<ObjectType>
//             dataKey="name"
//             title="Name"
//             sortData={sortData}
//           />
//         </Header>
//         <Body>
//             <Column>
//             </Column>
//         </Body>
//       </GenericTable>
//     </Context.Provider>
//   )
// }
